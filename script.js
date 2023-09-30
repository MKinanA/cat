let menubtn = document.querySelector('.bx-menu');
let nav = document.querySelector('nav');
let body = document.querySelector('body');
menubtn.addEventListener('click', function() {
    nav.classList.toggle('active');
    menubtn.classList.toggle("bx-x");
    body.classList.toggle('inactive');
});
nav.addEventListener('click', function() {
    nav.classList.remove('active');
    menubtn.classList.remove("bx-x");
    body.classList.remove('inactive');
});