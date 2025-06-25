export const refs = {
  question: document.querySelector('.question'),
  answers: Array.from(document.querySelectorAll('.answer-btn')),
  prizeList: document.querySelectorAll('.bonus > div'),
  helps: {
    fifty: document.querySelectorAll('.header span')[1],
    call: document.querySelectorAll('.header span')[2],
    audience: document.querySelectorAll('.header span')[3],
    expert: document.querySelectorAll('.header span')[4]
  },
  resultButton: document.querySelector('.header span:last-child'),
};
