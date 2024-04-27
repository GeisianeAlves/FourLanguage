
// Função para ocultar todos os elementos com a classe 'container-question'
function esconderContainers(className) {
    document.querySelectorAll('.' + className).forEach(container => {
        container.style.display = "none";
    });
}

// Função para exibir o elemento com o índice especificado e ocultar o anterior
function mostrarContainer(className, index) {
    const containers = document.getElementsByClassName(className);
    for (let i = 0; i < containers.length; i++) {
        containers[i].style.display = (i === index) ? "block" : "none";
    }
}

// Oculta todos os elementos iniciais
esconderContainers('container-question');
esconderContainers('container-question2');
esconderContainers('container-question3');
esconderContainers('container-question4');
esconderContainers('container-question5');
esconderContainers('container-question6');

// Exibe o primeiro elemento
mostrarContainer('container-question', 0);
mostrarContainer('container-question2', 0);
mostrarContainer('container-question3', 0);
mostrarContainer('container-question4', 0);
mostrarContainer('container-question5', 0);
mostrarContainer('container-question6', 0);

// Função para avançar para o próximo elemento
function next(id) {
    mostrarContainer('container-question', id);
    mostrarContainer('container-question2', id);
    mostrarContainer('container-question3', id);
    mostrarContainer('container-question4', id);
    mostrarContainer('container-question5', id);
    mostrarContainer('container-question6', id);
}

//Array que contém todas as respostas corretas para completar as frases/diálogos
const phrases = ["receive", "mean", "again", "card", "stand", "one more time", "could", "can", "book",
                "works", "lives", "get", "have", "does", "is making", "is working", "are drinking", "is sending", "are speaking",
                "leave", "seat", "return", "reservation", "rented", "was", "went", "stayed", "left",
                "most", "faster", "cheaper", "longer", "best"];


    const resultMessage = document.querySelectorAll('result');


    // pegar frases aleatórias
    let randomPhrase = phrases[Math.floor(Math.random() * 33)];

    window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    let recog = new window.SpeechRecognition();

    
    recog.addEventListener('result', captarAudio);
    recog.addEventListener('end', () => recog.start());
    recog.lang = 'en-US';

    //começando reconhecimento
    recog.start();

    // Pegando o áudio do usuário através do microfone
    function captarAudio(e) {
        let mensagem = e.results[0][0].transcript;
        mostrarMensagem(mensagem);
    }


    function  mostrarMensagem(mensagem) {
        checarFrase(mensagem);
    }

    //vaiável para somar acertos
    let correctGuesses = 0;
  
    function checarFrase(mensagem) {          
        //verificar se o que p usuário falou está dentro do array de respostas corretas
        let palpiteCorreto = false;
        phrases.forEach(phrase => {
            if (mensagem.toLowerCase().includes(phrase.toLowerCase())) {
                palpiteCorreto = true;
            }
        });
        

        if (palpiteCorreto) {
            //computar acertos
            correctGuesses+=100;
            console.log('acertos: ' + correctGuesses);

            function mostrarRespostaCorreta(mensagem) {
                const messageElements = document.querySelectorAll('.result'); // Seleciona todos os elementos com a classe 'result'
                messageElements.forEach(element => {
                    element.innerHTML =  `<span style="color: #007700;"> ${mensagem} </span> <br> `;
                });
            }
            mostrarRespostaCorreta(mensagem);

            //atualizar o score do usuário
            function updateScore(score) {
                const scoreElements = document.querySelectorAll('.score-div, .pontos-div'); // Seleciona todos os elementos com as classes 'score-div' e 'pontos-div'
                scoreElements.forEach(element => {
                    element.innerText = ` Score: ${score} `;
                });
            }
            
            updateScore(correctGuesses);
            

        } else {
            function mostrarRespostaErrada(mensagem) {
                const messageElements = document.querySelectorAll('.result'); // Seleciona todos os elementos com a classe 'result'
                messageElements.forEach(element => {
                    element.innerHTML =  `<span style="color: #F54A19;"> ${mensagem} </span> <br> `;
                });
            }
            mostrarRespostaErrada(mensagem);
        }

    }


    document.querySelectorAll('.botao-proximo').forEach(button => {
        button.addEventListener('click', () => {

        const messageText = document.querySelectorAll('.result');
        messageText.forEach(texto => {
            texto.innerHTML =  '';
        });

    });
});             