// script.js

const carouselInner = document.querySelector('.carousel-inner');
const sections = document.querySelectorAll('.carousel-section');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let activeSection = 0; // Track the currently active section

// Function to move to a specific section
function goToSection(sectionIndex) {
    carouselInner.style.transform = `translateX(-${sectionIndex * 100}%`; // Calculate transform value
    activeSection = sectionIndex; // Update active section
}

// Initial setup
goToSection(activeSection); // Start at the first section

// Next button event listener
nextBtn.addEventListener('click', () => {
    activeSection = (activeSection + 1) % sections.length;
    goToSection(activeSection);
});

// Previous button event listener
prevBtn.addEventListener('click', () => {
    activeSection = (activeSection - 1 + sections.length) % sections.length;
    goToSection(activeSection);
});
