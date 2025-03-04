export function collapseWidget() {
    const collapseBtn = document.querySelector('.collapse-button');
    const collapseBox = document.querySelector('.collapse-text');

    collapseBtn.addEventListener('click', () => {
        collapseBox.classList.toggle('active-collapse-text')
    })
}