function renderGrammar() {
  const params = new URLSearchParams(window.location.search);
  if (!window.location.pathname.includes("/grammar")) return;
  const grammarTarget = params.get("render");
  if (!grammarTarget) {
    window.location.href = window.location.href + "?render=verbs";
  }

  document.addEventListener("DOMContentLoaded", () => {
    const grammarElement = document.querySelector(`#${grammarTarget}`);
    grammarElement.style.removeProperty("display");
  });
}

window.renderGrammar = renderGrammar;
