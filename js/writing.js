
let score = 0;
const scoreDisplay = document.getElementById('score');
const scoreDisplay2 = document.getElementById('score2');
const scoreDisplay3 = document.getElementById('score3');
const scoreDisplay4 = document.getElementById('score4');
const scoreDisplay5 = document.getElementById('score5');
const scoreDisplay6 = document.getElementById('score6');


function handleOptionClick(event) {
    const option = event.target;
    const palavrasDiv = document.querySelector('.palavras');
    const displayPlusPoints = document.querySelectorAll('.plus-points-span, .plus-points-span2, .plus-points-span3, .plus-points-span4, .plus-points-span5, .plus-points-span6');
    const isCorrect = option.classList.contains('correct');
    const points = isCorrect ? 100 : -100;
    const textColor = isCorrect ? 'rgb(107, 138, 107)' : 'rgb(255,99,71)';
    const scoreText = isCorrect ? '+100' : '-100';

    if (isCorrect) {
        const correctAudio = new Audio('/img/correct-choice.mp3'); // Caminho para o arquivo de som correto
        correctAudio.play();
    } else {
        const incorrectAudio = new Audio('/img/buzzer-or-wrong-answer.mp3'); // Caminho para o arquivo de som incorreto
        incorrectAudio.play();
    }

    updateScore(points);
    displayPoints(displayPlusPoints, scoreText, textColor, option, palavrasDiv);
    hideOption(option, isCorrect);
}


function updateScore(points) {
    score += points;
}

function displayPoints(elements, text, color, option, palavrasDiv) {
    elements.forEach(displayPlusPoints => {
        displayPlusPoints.textContent = text;
        displayPlusPoints.style.color = color;

        const optionRect = option.getBoundingClientRect();
        const palavrasRect = palavrasDiv.getBoundingClientRect();

        // Calculate the position relative to the clicked word
        const offsetX = optionRect.left - palavrasRect.left;
        const offsetY = optionRect.top - palavrasRect.top;

        // Adjust the position slightly above the word
        const offsetYAdjusted = offsetY - 20;

        // Set the position of the displayPlusPoints
        displayPlusPoints.style.left = `${offsetX}px`;
        displayPlusPoints.style.top = `${offsetYAdjusted}px`;
        displayPlusPoints.style.display = 'inline';
    });
}




function hideOption(option, isCorrect) {
    setTimeout(() => {
        option.style.display = 'none';
    }, 1500);
    option.style.color = isCorrect ? 'green' : 'red';
}


// Attach the event listener to each word
const parts = document.querySelectorAll('[id^="part-"]');

parts.forEach(part => {
    part.querySelectorAll('p').forEach(option => {
        option.addEventListener('click', handleOptionClick);
    });
});



//função para o cronômetro
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secondsLeft = seconds % 60;
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(secondsLeft).padStart(2, '0');
    return `${formattedMinutes}:${formattedSeconds}`;
}

function updateTimerDisplay(timerElement, remainingTime) { 
    timerElement.textContent = ` ${formatTime(remainingTime)}`;
}

function startTimer(durationInSeconds) {
    let remainingTime = durationInSeconds;

    const timerElement = document.getElementById('timer');
    const timerElement2 = document.getElementById('timer2');
    const timerElement3 = document.getElementById('timer3');
    const timerElement4 = document.getElementById('timer4');
    const timerElement5 = document.getElementById('timer5');
    const timerElement6 = document.getElementById('timer6');

    updateTimerDisplay(timerElement, remainingTime);
    updateTimerDisplay(timerElement2, remainingTime);
    updateTimerDisplay(timerElement3, remainingTime);
    updateTimerDisplay(timerElement4, remainingTime);
    updateTimerDisplay(timerElement5, remainingTime);
    updateTimerDisplay(timerElement6, remainingTime);

    const interval = setInterval(() => {
        remainingTime--;
        updateTimerDisplay(timerElement, remainingTime);
        updateTimerDisplay(timerElement2, remainingTime);
        updateTimerDisplay(timerElement3, remainingTime);
        updateTimerDisplay(timerElement4, remainingTime);
        updateTimerDisplay(timerElement5, remainingTime);
        updateTimerDisplay(timerElement6, remainingTime);

        if (remainingTime <= 0) {
            clearInterval(interval); 
            timerElement.textContent = "Time out";
            timerElement2.textContent = "Time out";
            timerElement3.textContent = "Time out";
            timerElement4.textContent = "Time out";
            timerElement5.textContent = "Time out";
            timerElement6.textContent = "Time out";

            // Reproduzir som quando o tempo acabar
            const audio = new Audio('/img/game-over.mp3');
            audio.play();

            // Exibir o modal após o término do som
            audio.addEventListener('ended', () => {
                endGame();
            });
        }
    }, 1000); 
}


// cronômetro com uma duração em segundos
startTimer(30);



function showModal(score) {
    const modal = document.getElementById('resultModal');
    const scoreMessage = document.getElementById('questions-qty');
    scoreMessage.textContent = score;
    modal.style.display = 'block';

}

function endGame() {
    const options = document.querySelectorAll('.palavras p');
    options.forEach(option => {
        option.style.display = 'none';
    });

    const h1 = document.querySelectorAll('.jogo h1')
        h1.forEach(h1 => {
        h1.style.display = 'none';
    });

    const h2 = document.querySelectorAll('.jogo h2')
        h2.forEach(h2 => {
        h2.style.display = 'none';
    });
    
    const temas = document.querySelectorAll('#tema')
    temas.forEach(tema => {
        tema.style.display = 'none';
    });

    const botoes = document.querySelectorAll('.container-botton')
    botoes.forEach(botao => {
        botao.style.display = 'none';
    });

    showModal(score);
}

function reiniciarJogo() {
  
        var urlPartes = window.location.href.split("/");
        var ultimaParteUrl = urlPartes[urlPartes.length - 1];

        window.location.href = ultimaParteUrl;
    }
