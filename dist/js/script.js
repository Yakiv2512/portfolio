const   hamburger   = document.querySelector('.hamburger'),
        menu        = document.querySelector('.menu'),
        container       = document.querySelector('.container'),
        close       = document.querySelector('.menu__close'),
        item1 = document.querySelector('.item1'),
        item2 = document.querySelector('.item2'),
        item3 = document.querySelector('.item3'),
        item4 = document.querySelector('.item4'),
        item5 = document.querySelector('.item5'),
        item6 = document.querySelector('.item6');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
    container.classList.add('active');
});

close.addEventListener('click', () => {
    menu.classList.remove('active');
    container.classList.remove('active');
});

item1.addEventListener('click', () => {
    menu.classList.remove('active');
    container.classList.remove('active');
});

item2.addEventListener('click', () => {
    menu.classList.remove('active');
    container.classList.remove('active');
});

item3.addEventListener('click', () => {
    menu.classList.remove('active');
    container.classList.remove('active');
});

item4.addEventListener('click', () => {
    menu.classList.remove('active');
    container.classList.remove('active');
});

item5.addEventListener('click', () => {
    menu.classList.remove('active');
    container.classList.remove('active');
});

item6.addEventListener('click', () => {
    menu.classList.remove('active');
    container.classList.remove('active');
});


// script для изменения %

const percent = document.querySelectorAll('.skills__grid-block-skills_procent'),
    lines = document.querySelectorAll('.skills__grid-block-skills_line-orange');

percent.forEach((item, i) => {
    lines[i].style.width = item.innerHTML;
});