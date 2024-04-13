
let score = 0;
const scoreDisplay = document.getElementById('score');
const scoreDisplay2 = document.getElementById('score2');
const scoreDisplay3 = document.getElementById('score3');
const scoreDisplay4 = document.getElementById('score4');
const scoreDisplay5 = document.getElementById('score5');
const scoreDisplay6 = document.getElementById('score6');

function handleOptionClick(option) {
    if (option.classList.contains('correct')) {
        score += 100;
        scoreDisplay.textContent = `Score: ${score}`;
        scoreDisplay2.textContent = `Score: ${score}`;
        scoreDisplay3.textContent = `Score: ${score}`;
        scoreDisplay4.textContent = `Score: ${score}`;
        scoreDisplay5.textContent = `Score: ${score}`;
        scoreDisplay6.textContent = `Score: ${score}`;
        option.style.color = 'green';
        // esconde a resposta certa
        setTimeout(() => {
            option.style.display = 'none';
        }, 1500); 
    } else {
        option.style.color = 'red';
        // esconde a resposta errada
        setTimeout(() => {
            option.style.display = 'none';
        }, 1500); 
    }
   
}
// todas as partes
const parts = document.querySelectorAll('[id^="part-"]');

parts.forEach(part => {
    part.querySelectorAll('p').forEach(option => {
        option.addEventListener('click', function() {
            handleOptionClick(option);
        });
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
            endGame()
        }
    }, 1000); 
           
}

// cronômetro com uma duração de 1 minuto (60 segundos)
startTimer(60);

function endGame() {
    const options = document.querySelectorAll('.palavras p');
    // const tema = document.querySelectorAll('#tema');

    // tema.style.display = 'none';
    options.forEach(option => {
        option.style.display = 'none';
    });
}
