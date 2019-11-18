const button = document.querySelector('.menu-toggle');

button.addEventListener('click', () => {
    document.body.classList.toggle('menu-opened');
});