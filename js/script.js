// Seleciona os elementos necessários
const menuToggle = document.querySelector(".menu-toggle");
const sidebar = document.querySelector(".sidebar");
const closeMenu = document.querySelector(".close-menu");

// Adiciona um ouvinte de evento ao botão de menu
if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    // Adiciona a classe .menu-open ao elemento .sidebar
    sidebar.classList.add("menu-open");
  });
}

if (closeMenu) {
  // Adiciona um ouvinte de evento ao botão de fechar menu
  closeMenu.addEventListener("click", () => {
    // Remove a classe .menu-open do elemento .sidebar
    sidebar.classList.remove("menu-open");
  });
}

let slides = document.querySelectorAll(".slide-container");
let index = 0;

function next() {
  slides[index].classList.remove("active");
  index = (index + 1) % slides.length;
  slides[index].classList.add("active");
}
function prev() {
  slides[index].classList.remove("active");
  index = (index - 1 + slides.length) % slides.length;
  slides[index].classList.add("active");
}
setInterval(next, 60000);

document.getElementById("btnRedirect").addEventListener("click", function () {
  window.location.href = "login.html";
});

// config banner saiba mais - semestre revisao
const banners = document.querySelectorAll(".banner");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
let currentBannerIndex = 0;

function showBanner(index) {
  banners[currentBannerIndex].classList.remove("active");
  currentBannerIndex = (index + banners.length) % banners.length;
  banners[currentBannerIndex].classList.add("active");
}

prevBtn.addEventListener("click", () => showBanner(currentBannerIndex - 1));
nextBtn.addEventListener("click", () => showBanner(currentBannerIndex + 1));

showBanner(currentBannerIndex); // Inicializa o carrossel



// BOTAO DE VOLTAR AO TOPO DO HEADER NAS UNITS
window.addEventListener('scroll', function() {
  if (window.pageYOffset > 200) {
    document.querySelector('.back-to-top-button').style.display = 'block';
  } else {
    document.querySelector('.back-to-top-button').style.display = 'none';
  }
});

document.querySelector('.back-to-top-button a').addEventListener('click', function(e) {
  e.preventDefault(); // Prevent default anchor link behavior
  window.scrollTo({
    top: 0, // Scroll to top of page
    behavior: 'smooth' // Smooth scrolling
  });
});
