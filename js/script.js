// #botao de pesquisa + barra
const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");

searchButton.addEventListener("click", (event) => {
  event.preventDefault();
  const searchTerm = searchInput.value.toLowerCase();

  // Filtra o texto visível no body
  const content = getVisibleText(document.body).toLowerCase();

  if (content.includes(searchTerm)) {
    // Destaca todas as instâncias do termo de busca
    highlightText(searchTerm);

    // Opcionalmente, rola para a primeira instância destacada:
    scrollToFirstMatch(searchTerm);
  } else {
    alert("Termo de busca não encontrado.");
  }
});

function getVisibleText(element) {
  if (
    window.getComputedStyle(element).display === "none" ||
    window.getComputedStyle(element).visibility === "hidden"
  ) {
    return "";
  }

  let visibleText = "";
  for (let child of element.childNodes) {
    if (child.nodeType === Node.TEXT_NODE) {
      visibleText += child.textContent;
    } else if (child.nodeType === Node.ELEMENT_NODE) {
      visibleText += getVisibleText(child);
    }
  }
  return visibleText;
}

function highlightText(searchTerm) {
  // Use uma expressão regular para encontrar e substituir todas as instâncias:
  const regex = new RegExp(searchTerm, "gi"); // 'g' para global, 'i' para case-insensitive

  // Substituir apenas no conteúdo visível
  replaceVisibleText(document.body, regex);
  addHighlightStyle();
}

function addHighlightStyle() {
  const style = document.createElement("style");
  style.innerHTML = `
    .highlight {
      background-color: yellow;
      color: black;
    }
  `;
  document.head.appendChild(style);
}

function replaceVisibleText(element, regex) {
  if (
    window.getComputedStyle(element).display === "none" ||
    window.getComputedStyle(element).visibility === "hidden"
  ) {
    return;
  }

  for (let child of element.childNodes) {
    if (child.nodeType === Node.TEXT_NODE) {
      if (regex.test(child.textContent)) {
        const span = document.createElement("span");
        span.innerHTML = child.textContent.replace(
          regex,
          '<span class="highlight">$&</span>'
        );
        child.replaceWith(span);
      }
    } else if (child.nodeType === Node.ELEMENT_NODE) {
      replaceVisibleText(child, regex);
    }
  }
}

function scrollToFirstMatch(searchTerm) {
  const highlights = document.querySelectorAll(".highlight");
  for (let highlight of highlights) {
    if (highlight.textContent.toLowerCase() === searchTerm) {
      highlight.scrollIntoView({ behavior: "smooth", block: "center" });
      break;
    }
  }
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
setInterval(next, 50000);

document.getElementById("btnRedirect").addEventListener("click", function () {
  window.location.href = "login.html";
});

// BOTAO DE VOLTAR AO TOPO DO HEADER NAS UNITS
window.addEventListener("scroll", function () {
  if (window.pageYOffset > 200) {
    document.querySelector(".back-to-top-button").style.display = "block";
  } else {
    document.querySelector(".back-to-top-button").style.display = "none";
  }
});

document
  .querySelector(".back-to-top-button a")
  .addEventListener("click", function (e) {
    e.preventDefault(); // Prevent default anchor link behavior
    window.scrollTo({
      top: 0, // Scroll to top of page
      behavior: "smooth", // Smooth scrolling
    });
  });
