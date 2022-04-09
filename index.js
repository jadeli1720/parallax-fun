let header = document.querySelector('header');
let moon = document.getElementById('moon');
let stars = document.getElementById('stars');
let mountains_behind = document.getElementById('mountains-behind');
let mountains_front = document.getElementById('mountains-front');
let title = document.getElementById('title');
let btn = document.getElementById('btn');

window.addEventListener('scroll', () => {
    let value = window.scrollY;
    
    stars.style.left = value * 0.25 + 'px';
    moon.style.top = value * 1.05 + 'px';
    mountains_behind.style.top = value * 0.5 + 'px';
    mountains_front.style.top = value * 0 + 'px';
    title.style.marginRight = value * 4 + 'px';
    title.style.marginTop = value * 1.5 + 'px';
    btn.style.marginTop = value * 1.5 + 'px';
    header.style.top = value * 0.5 + 'px';
})