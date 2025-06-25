import { questions, prizeMap } from './const.js';
import { refs } from './references.js';
import {
  renderQuestion, highlight, resetHighlights,
  enableAnswers, disableAnswers,
  use5050, useAudience, usePhone, useExpert
} from './render.js';

window.refs = refs;

let current = 0;
let selected = -1;
let used = { fifty: false, call: false, audience: false, expert: false };
let intervalId;

function nextQuestion() {
  if (current >= questions.length) {
    endGame(true);
    return;
  }
  resetHighlights();
  renderQuestion(questions[current]);
  enableAnswers();
  selected = -1;

  refs.answers.forEach((btn, i) => {
    btn.onclick = () => {
      selected = i;

      // Xóa highlight cũ
      refs.answers.forEach(b => {
        b.classList.remove('selected');
        b.style.backgroundColor = ""; // reset
      });
      // Highlight vàng
      btn.classList.add('selected');
      btn.style.backgroundColor = "yellow";
    };
  });
  startTimer();
}

function startTimer() {
  let timeLeft = 30;
  refs.question.textContent = `${questions[current].questions} (Còn ${timeLeft}s)`;

  intervalId = setInterval(() => {
    timeLeft--;
    refs.question.textContent = `${questions[current].questions} (Còn ${timeLeft}s)`;
    if (timeLeft <= 0) {
      clearInterval(intervalId);
      endGame(false);
    }
  }, 1000);
}

function check() {
  if (selected === -1) return;

  clearInterval(intervalId);
  disableAnswers();

  const correct = ["a","b","c","d"].indexOf(questions[current].correctAns);
  if (selected === correct) {
    highlight(selected, true);
    current++;
    setTimeout(nextQuestion, 1000);
  } else {
    highlight(selected, false);
    highlight(correct, true);
    endGame(false);
  }
}

function endGame(won) {
  let prize = 0;
  if (won) {
    prize = prizeMap[15];
  } else if (current >= 10) {
    prize = prizeMap[10];
  } else if (current >= 5) {
    prize = prizeMap[5];
  } else {
    prize = 0;
  }
  alert(won ? `Bạn thắng ${prize.toLocaleString()} VND!` : `Sai rồi! Bạn nhận ${prize.toLocaleString()} VND!`);
  location.reload();
}

// Event handlers
refs.helps.fifty.onclick = () => {
  if (!used.fifty && current >= 5) {
    use5050(["a","b","c","d"].indexOf(questions[current].correctAns));
    used.fifty = true;
  }
};
refs.helps.audience.onclick = () => {
  if (!used.audience && current >= 5) {
    const percent = useAudience(["a","b","c","d"].indexOf(questions[current].correctAns));
    alert('Ý kiến khán giả:\n' + percent.map((p, i) => `Đáp án ${String.fromCharCode(65 + i)}: ${p}%`).join('\n'));
    used.audience = true;
  }
};
refs.helps.call.onclick = () => {
  if (!used.call && current >= 5) {
    const suggest = usePhone(["a","b","c","d"].indexOf(questions[current].correctAns));
    alert(`Gợi ý: Tôi nghĩ đáp án ${String.fromCharCode(65 + suggest)}`);
    used.call = true;
  }
};
refs.helps.expert.onclick = () => {
  if (!used.expert && current >= 5) {
    const suggest = useExpert(["a","b","c","d"].indexOf(questions[current].correctAns));
    alert(`Chuyên gia gợi ý: ${String.fromCharCode(65 + suggest)}`);
    used.expert = true;
  }
};
refs.resultButton.onclick = check;

nextQuestion();
