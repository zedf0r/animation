export function feedbackWidget() {
    const feedbackBtn = document.querySelector('.feedback-button');
    const feedback = document.querySelector('.feedback');
    const feedbackClose = document.querySelector('.button-close');
    
    feedbackBtn.addEventListener('click', () => {
        feedbackBtn.classList.add('feedback-button-hidden');
        feedback.classList.add('feedback-active');
    })

    feedbackClose.addEventListener('click', () => {
        feedbackBtn.classList.remove('feedback-button-hidden');
        feedback.classList.remove('feedback-active');
    })
}