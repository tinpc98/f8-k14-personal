export function renderQuestion(data) {
    const { questions, a, b, c, d } = data;
    const refs = window.refs;

    refs.question.textContent = questions;
    refs.answers[0].textContent = `A: ${a}`;
    refs.answers[1].textContent = `B: ${b}`;
    refs.answers[2].textContent = `C: ${c}`;
    refs.answers[3].textContent = `D: ${d}`;
}

export function highlight(index, isCorrect) {
    const refs = window.refs;
    refs.answers[index].style.backgroundColor = isCorrect ? 'green' : 'red';
}

export function resetHighlights() {
    const refs = window.refs;
    refs.answers.forEach(a => a.style.backgroundColor = '');
}

export function enableAnswers() {
    window.refs.answers.forEach(a => a.classList.remove('disabled'));
}
export function disableAnswers() {
    window.refs.answers.forEach(a => a.classList.add('disabled'));
}

export function use5050(correctIndex) {
    const refs = window.refs;
    const wrongIndexes = [0,1,2,3].filter(i => i !== correctIndex);
    const toHide = wrongIndexes.sort(() => Math.random()-0.5).slice(0,2);
    toHide.forEach(i => {
        refs.answers[i].textContent = "";
    });
}

export function useAudience(correctIndex) {
    const percentages = [0,0,0,0];
    percentages[correctIndex] = Math.floor(40 + Math.random() * 30);
    let rest = 100 - percentages[correctIndex];
    for (let i = 0; i < percentages.length; i++) {
        if (i !== correctIndex) {
            percentages[i] = Math.floor(Math.random() * rest);
            rest -= percentages[i];
        }
    }
    return percentages;
}

export function usePhone(correctIndex) {
    // Gợi ý xác suất cao (80%) đúng
    return Math.random() < 0.8 ? correctIndex : Math.floor(Math.random() * 4);
}

export function useExpert(correctIndex) {
    // Gợi ý xác suất thấp (60%) đúng
    return Math.random() < 0.6 ? correctIndex : Math.floor(Math.random() * 4);
}
