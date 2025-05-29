// KHỞI BẨM HOÀNG THƯỢNG, import danh sách câu hỏi
import { questions } from './const.js';

// Lấy phần tử câu hỏi và các nút đáp án
const questionElement = document.querySelector('.question');
const answerButtons = document.querySelectorAll('.answer-btn');

let currentQuestionIndex = 0;

// Hiển thị câu hỏi
function showQuestion(index) {
    const q = questions[index];
    questionElement.textContent = q.questions;
    answerButtons[0].textContent = `A: ${q.a}`;
    answerButtons[1].textContent = `B: ${q.b}`;
    answerButtons[2].textContent = `C: ${q.c}`;
    answerButtons[3].textContent = `D: ${q.d}`;
}

// GỌI SAU KHI ĐỊNH NGHĨA HÀM (không được đặt trong showQuestion!)
showQuestion(currentQuestionIndex);

// Gán sự kiện cho từng nút
answerButtons.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        const userAns = ['a', 'b', 'c', 'd'][index];
        const correct = questions[currentQuestionIndex].correctAns;

        if (userAns === correct) {
            alert('🎉 Chúc mừng! Bạn đã trả lời đúng!');
            currentQuestionIndex++;
            if (currentQuestionIndex < questions.length) {
                showQuestion(currentQuestionIndex);
            } else {
                alert('🏆 Bạn đã chiến thắng tất cả các câu hỏi!');
            }
        } else {
            alert('❌ Bạn đã trả lời sai!');
        }
    });
});
