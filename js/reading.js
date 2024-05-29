 
        document.getElementsByClassName('container')[0].style.display = "block";
        document.getElementsByClassName('semestre2 container')[0].style.display = "block";
        document.getElementsByClassName('semestre3 container')[0].style.display = "block";
        document.getElementsByClassName('semestre4 container')[0].style.display = "block";
        document.getElementsByClassName('semestre5 container')[0].style.display = "block";
        document.getElementsByClassName('semestre6 container')[0].style.display = "block";
        function next(id) {
            document.getElementsByClassName('container')[id-1].style.display = "none";        
            document.getElementsByClassName('container')[id].style.display = "block";

        }
        function proximo(id) {

            document.getElementsByClassName('invisible')[id-1].style.display = "none";
            document.getElementsByClassName('invisible')[id].style.display = "block";
        }
        var score = 0;
        
        function checarResposta(btn) {
            // Obtém o elemento pai (container) do botão clicado
            var container = btn.closest(".container");
            // Obtém todos os botões de resposta dentro do container
            var botoes = container.querySelectorAll(".btn-resposta");

            // Verifica se a resposta está correta e adiciona classes nos botões
            botoes.forEach(function(button) {
                if (button.getAttribute("correct-answer") === "true") {
                    button.classList.add("resposta-correta");
                    // Incrementa os pontos se o botão clicado for a resposta correta
                    if (btn === button) {
                        score++;
                    }
                } else {
                    button.classList.add("resposta-errada");
                }
            });
        }
    
        function result() {
            var modal = document.getElementById("resultModal");
            var resultado = document.getElementById("questions-qty");
            resultado.innerHTML =  score;
            modal.style.display = "block";
        }

        function closeModal() {
            var modal = document.getElementById("resultModal");
            modal.style.display = "none";
        }

        window.onclick = function(event) {
            var modal = document.getElementById("resultModal");
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
        function reiniciarJogo() {
    //  Redireciona o navegador de volta para o início do jogo -> exemplo 'reading1.html?sem=primeiro';
        var urlPartes = window.location.href.split("/");
        var ultimaParteUrl = urlPartes[urlPartes.length - 1];

        // Redireciona o navegador para uma página com base na parte final da URL
        window.location.href = ultimaParteUrl;
    }