function renderUnit() {
    const params = new URLSearchParams(window.location.search)
    if (!window.location.pathname.includes("/saibamais.html")) return
    const sem = params.get("sem")


    document.addEventListener("DOMContentLoaded", () => {
        if (!sem) {
            const reviewItens = document.getElementsByClassName('revisao-item')
            for (let i = 0; i < reviewItens.length; i++) {
                reviewItens[i].classList.add('show-review-div');
            }
        }

        const unitElement = document.getElementById(sem)
        unitElement.style.display = 'flex'
    });



}

window.renderUnit = renderUnit