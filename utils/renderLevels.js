function renderLevel() {
    const params = new URLSearchParams(window.location.search)
    if (!window.location.pathname.includes("/tela_niveis.html")) return
    const skill = params.get("skill")


    document.addEventListener("DOMContentLoaded", () => {
        if (!skill) {
            const reviewItens = document.getElementsByClassName('skill')
            for (let i = 0; i < reviewItens.length; i++) {
                reviewItens[i].classList.add('show-review-div');
            }
        }

        const unitElement = document.getElementById(skill)
        unitElement.style.display = 'flex'
    });



}

window.renderLevel = renderLevel