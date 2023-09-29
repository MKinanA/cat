let menubtn = document.querySelector('.bx-menu');
let nav = document.querySelector('nav');
menubtn.addEventListener('click', function() {
    nav.classList.toggle('active');
    menubtn.classList.toggle("bx-x");
});
nav.addEventListener('click', function() {
    nav.classList.remove('active');
    menubtn.classList.remove("bx-x");
});