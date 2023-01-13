const   hamburger   = document.querySelector('.hamburger'),
        menu        = document.querySelector('.menu'),
        container       = document.querySelector('.container'),
        close       = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
    container.classList.add('active');
});

close.addEventListener('click', () => {
    menu.classList.remove('active');
    container.classList.remove('active');
});

// script для изменения %

const percent = document.querySelectorAll('.skills__grid-block-skills_procent'),
    lines = document.querySelectorAll('.skills__grid-block-skills_line-orange');

percent.forEach((item, i) => {
    lines[i].style.width = item.innerHTML;
});