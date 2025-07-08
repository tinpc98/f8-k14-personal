const API_URL = 'https://665d7a4ee88051d6040372d3.mockapi.io/todos';

export async function getTodos() {
    const res = await fetch(API_URL); // Không dùng _limit
    if (!res.ok) throw new Error("Lỗi khi gọi GET");
    return res.json();
}

export async function addTodo(title) {
    const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, completed: false })
    });
    return res.json();
}

export async function updateTodo(id, completed) {
    const res = await fetch(`${API_URL}/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ completed })
    });
    return res.json();
}

export async function deleteTodo(id) {
    await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
}
