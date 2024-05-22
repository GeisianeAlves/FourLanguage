function switchContent(direction) {
  // Get the currently displayed section
  let currentSection = document.querySelector('.slide-content.active');

  // Get the target section (next or previous)
  let targetSection = direction === 'next' ? currentSection.nextElementSibling : currentSection.previousElementSibling;

  // Check if target section exists and handle edge cases (optional)
  if (!targetSection) {
    console.warn("Reached the end of the slides.");
    return; // Exit the function if no target section found
  }

  // Calculate the offset for the transition
  let offset = targetSection.getBoundingClientRect().left - currentSection.getBoundingClientRect().left;

  // Apply the transition to the container
  document.querySelector('.slide-container').style.transform = `translateX(${offset}px)`;

  // Remove the 'active' class from the current section
  currentSection.classList.remove('active');

  // Add the 'active' class to the target section
  targetSection.classList.add('active');

  // Update navigation button visibility
  if (targetSection === document.querySelector('.slide-content:first-child')) {
    document.getElementById('prev').style.display = 'none';
  } else {
    document.getElementById('prev').style.display = 'block';
  }

  if (targetSection === document.querySelector('.slide-content:last-child')) {
    document.getElementById('next').style.display = 'none';
  } else {
    document.getElementById('next').style.display = 'block';
  }
}



// Call 'next' function periodically to create a slideshow effect (optional)
setInterval(switchContent, 3000); // Change slides every 3 seconds (adjust as needed)




// NOVO


let slides = document.querySelectorAll(".slide");
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

// document.getElementById("btnRedirect").addEventListener("click", function () {
//   window.location.href = "login.html";
// });

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
