// Seleciona os elementos necessários
const menuToggle = document.querySelector('.menu-toggle');
const sidebar = document.querySelector('.sidebar');
const closeMenu = document.querySelector('.close-menu');

// Adiciona um ouvinte de evento ao botão de menu
menuToggle.addEventListener('click', () => {
  // Adiciona a classe .menu-open ao elemento .sidebar
  sidebar.classList.add('menu-open');
});

// Adiciona um ouvinte de evento ao botão de fechar menu
closeMenu.addEventListener('click', () => {
  // Remove a classe .menu-open do elemento .sidebar
  sidebar.classList.remove('menu-open');
});


let slides = document.querySelectorAll('.slide-container');
let index = 0;

function next() {
    slides[index].classList.remove('active');
    index=(index + 1) % slides.length;
    slides[index].classList.add('active');
}
function prev() {
    slides[index].classList.remove('active');
    index=(index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');
}
setInterval(next, 15000);

document.getElementById("btnRedirect").addEventListener("click", function() {
  window.location.href = "login.html";
});
