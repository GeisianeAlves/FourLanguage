function renderUnit() {
  const params = new URLSearchParams(window.location.search);
  if (!window.location.pathname.includes("/saibamais", "/saibamais_2ano", "/saibamais_3ano")) return;
  const sem = params.get("sem");

  document.addEventListener("DOMContentLoaded", () => {
    if (!sem) {
      const reviewItens = document.getElementsByClassName("revisao-item");
      for (let i = 0; i < reviewItens.length; i++) {
        reviewItens[i].classList.add("show-review-div");
      }
    }

    // const unitElement = document.getElementById(sem)
    const unitElement = document.querySelector(`#${sem}-unit`);
    unitElement.style.removeProperty("display");
  });
}

window.renderUnit = renderUnit;
