

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
setInterval(next, 50000);

document.getElementById("btnRedirect").addEventListener("click", function () {
  window.location.href = "login.html";
});





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
