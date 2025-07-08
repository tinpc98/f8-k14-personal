import { getTodos, addTodo, updateTodo, deleteTodo } from './api.js';

const form = document.querySelector('.todo-form');
const input = document.querySelector('.todo-input');
const todoList = document.querySelector('.todo-list');

function createTodoElement(todo) {
    const div = document.createElement('div');
    div.className = 'todo-item';

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = todo.completed;
    checkbox.addEventListener('change', async () => {
        await updateTodo(todo.id, checkbox.checked);
        content.classList.toggle('completed', checkbox.checked);
    });

    const content = document.createElement('div');
    content.className = 'todo-content';
    content.textContent = todo.title;
    if (todo.completed) content.classList.add('completed');

    const delBtn = document.createElement('button');
    delBtn.className = 'del-btn fa-solid fa-trash';
    delBtn.addEventListener('click', async () => {
        await deleteTodo(todo.id);
        div.remove();
    });

    div.appendChild(checkbox);
    div.appendChild(content);
    div.appendChild(delBtn);
    todoList.appendChild(div);
}

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const title = input.value.trim();
    if (!title) return alert('Please enter a task');

    const newTodo = await addTodo(title);
    createTodoElement(newTodo);
    input.value = '';
    input.focus();
});

async function renderTodos() {
    todoList.innerHTML = '';
    const todos = await getTodos();
    todos.forEach(createTodoElement);
}

renderTodos();
