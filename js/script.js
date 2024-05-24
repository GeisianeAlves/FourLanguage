const navMenu = document.querySelector('.nav-menu');
const menuToggle = document.querySelector('.menu-toggle');

// Add click event listener to the menu toggle button
menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

// Check for screen width on page load and set initial menu state
window.addEventListener('load', () => {
  if (window.innerWidth < 768) {
    navMenu.classList.add('active');
  }
});

// Check for screen width changes and adjust menu state accordingly
window.addEventListener('resize', () => {
  if (window.innerWidth < 768) {
    navMenu.classList.add('active');
  } else {
    navMenu.classList.remove('active');
  }
});


// #botao de pesquisa + barra
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');

searchButton.addEventListener('click', () => {
  const searchTerm = searchInput.value.toLowerCase(); // Make search case-insensitive
  const content = document.body.textContent.toLowerCase(); // Get all content

  if (content.includes(searchTerm)) {
    alert('Search term found!'); // Replace with desired action (highlight, scroll, etc.)
  } else {
    alert('Search term not found.');
  }

  
});



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
