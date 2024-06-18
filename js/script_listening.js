function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

class WordGame {
    constructor() {
        this.palavra = '';
        this.palavra2 = '';
        this.palavra3 = '';
        this.palavra4 = '';
        this.palavra5 = '';
        this.palavra6 = '';
        this.correctPalavra = 0;
        this.correctPalavra2 = 0;
        this.correctPalavra3 = 0;
        this.correctPalavra4 = 0;
        this.correctPalavra5 = 0;
        this.correctPalavra6 = 0;
        this.incorrectPalavra = 0;
        this.incorrectPalavra2 = 0;
        this.incorrectPalavra3 = 0;
        this.incorrectPalavra4 = 0;
        this.incorrectPalavra5 = 0;
        this.incorrectPalavra6 = 0;

        this.palavras = ['pink', 'pig', 'mug', 'horse','apple', 'banana', 'cherry', 'blueberry', 'orange', 'syrup'];        
        this.palavras2 = ['knife', 'pineapple', 'watermelon', 'headphone', 'town', 'backpack', 'suitcase', 'cabinet', 'strong', 'strawberry'];
        this.palavras3 = ['course', 'skirt', 'dress', 't-shirt', 'blouse', 'jacket', 'coat', 'denim', 'belt', 'socks'];
        this.palavras4 = ['swin', 'bath', 'Poland', 'sales', 'sometimes', 'newspaper', 'photocopy', 'weight', 'train', 'socket'];
        this.palavras4 = ['chess', 'windy', 'comfortable', 'expensive', 'figure', 'project', 'delay', 'flight', 'passenger', 'departure'];
        this.palavras5 = ['expect', 'briefcase', 'security', 'luggage', 'prefer', 'message', 'discuss', 'deliver', 'vacation', 'discount'];
        this.palavras6 = ['exhibition', 'distance', 'convinient', 'demand', 'increase', 'thousand', 'engineer', 'assistant', 'supply', 'mobile'];

        this.currentArray = null;

        document.getElementById('gerarPalavra1').addEventListener('click', this.generateAndSpeakWord1.bind(this));
        document.getElementById('gerarPalavra2').addEventListener('click', this.generateAndSpeakWord2.bind(this));
        document.getElementById('gerarPalavra3').addEventListener('click', this.generateAndSpeakWord3.bind(this));
        document.getElementById('gerarPalavra4').addEventListener('click', this.generateAndSpeakWord4.bind(this));
        document.getElementById('gerarPalavra5').addEventListener('click', this.generateAndSpeakWord5.bind(this));
        document.getElementById('gerarPalavra6').addEventListener('click', this.generateAndSpeakWord6.bind(this));
        
        document.getElementById('enviar').addEventListener('click', () => this.checkAndDisplayScore('input', 'correctPalavra', 'pontos', 'erros'));
        document.getElementById('enviar2').addEventListener('click', () => this.checkAndDisplayScore('input2', 'correctPalavra2', 'pontos2', 'erros2'));
        document.getElementById('enviar3').addEventListener('click', () => this.checkAndDisplayScore('input3', 'correctPalavra3', 'pontos3', 'erros3'));
        document.getElementById('enviar4').addEventListener('click', () => this.checkAndDisplayScore('input4', 'correctPalavra4', 'pontos4', 'erros4'));
        document.getElementById('enviar5').addEventListener('click', () => this.checkAndDisplayScore('input5', 'correctPalavra5', 'pontos5', 'erros5'));
        document.getElementById('enviar6').addEventListener('click', () => this.checkAndDisplayScore('input6', 'correctPalavra6', 'pontos6', 'erros6'));
    }

    generateAndSpeakWord(palavrasArray, palavraProp) {
        if (palavrasArray.length === 0) {
            console.log("Todas as palavras foram usadas.");
            return; 
        }
    
        const num = Math.floor(Math.random() * palavrasArray.length);
        this[palavraProp] = palavrasArray[num];
    
        palavrasArray.splice(num, 1);
    
        this.currentArray = palavrasArray;
    
        let voice = new SpeechSynthesisUtterance();
        voice.lang = "en-US";
        voice.text = this[palavraProp];
        this.speaking = true;
        voice.onend = () => {
            this.speaking = false;
            this.updateProgressBar();
        };

        speechSynthesis.speak(voice);
    
    }
    
    generateAndSpeakWord1() {
        this.generateAndSpeakWord(this.palavras, 'palavra');
    }
    
    generateAndSpeakWord2() {
        this.generateAndSpeakWord(this.palavras2, 'palavra2');
    }
    
    generateAndSpeakWord3() {
        this.generateAndSpeakWord(this.palavras3, 'palavra3');
    }
    
    generateAndSpeakWord4() {
        this.generateAndSpeakWord(this.palavras4, 'palavra4');
    }
    
    generateAndSpeakWord5() {
        this.generateAndSpeakWord(this.palavras5, 'palavra5');
    }
    
    generateAndSpeakWord6() {
        this.generateAndSpeakWord(this.palavras6, 'palavra6');
    }
    
    checkAndDisplayScore(inputId, correctProp, pontosId, errosId) {
        const inputElement = document.getElementById(inputId);
        const userInput = inputElement.value.trim().toLowerCase();
        let palavra = '';

        switch(inputId) {
            case 'input': palavra = this.palavra.toLowerCase(); break;  
            case 'input2': palavra = this.palavra2.toLowerCase(); break;  
            case 'input3': palavra = this.palavra3.toLowerCase(); break;  
            case 'input4': palavra = this.palavra4.toLowerCase(); break; 
            case 'input5': palavra = this.palavra5.toLowerCase(); break;  
            case 'input6': palavra = this.palavra6.toLowerCase(); break;  
        }
        const tempoDesaparecer = 3000;

        if (userInput === palavra) {
            this[correctProp]+=100;
            
            // document.querySelector(`#${pontosId} span`).textContent = 'Score: ' + this[correctProp];
            document.querySelector(`#${pontosId} span`).textContent = palavra;
            const correctIcon = document.getElementById('correct-icon');
            const correctIcon2 = document.getElementById('correct-icon2');
            const correctIcon3= document.getElementById('correct-icon3');
            const correctIcon4 = document.getElementById('correct-icon4');
            const correctIcon5 = document.getElementById('correct-icon5');
            const correctIcon6 = document.getElementById('correct-icon6');
            correctIcon.style.display = 'block';
            correctIcon2.style.display = 'block';
            correctIcon3.style.display = 'block';
            correctIcon4.style.display = 'block';
            correctIcon5.style.display = 'block';
            correctIcon6.style.display = 'block';

            setTimeout(() => {
                document.querySelector(`#${pontosId} span`).textContent = '';
                correctIcon.style.display = 'none';
                correctIcon2.style.display = 'none';
                correctIcon3.style.display = 'none';
                correctIcon4.style.display = 'none';
                correctIcon5.style.display = 'none';
                correctIcon6.style.display = 'none';
            }, tempoDesaparecer);
        } else {
           
            this[`incorrect${capitalize(inputId)}`]++;

            const wrongIcon = document.getElementById('wrong-icon');
            const wrongIcon2 = document.getElementById('wrong-icon2');
            const wrongIcon3 = document.getElementById('wrong-icon3');
            const wrongIcon4 = document.getElementById('wrong-icon4');
            const wrongIcon5 = document.getElementById('wrong-icon5');
            const wrongIcon6 = document.getElementById('wrong-icon6');
            wrongIcon.style.display = 'block';
            wrongIcon2.style.display = 'block';
            wrongIcon3.style.display = 'block';
            wrongIcon4.style.display = 'block';
            wrongIcon5.style.display = 'block';
            wrongIcon6.style.display = 'block';

            document.querySelector(`#${errosId} span`).textContent = `Correct spelling: '${palavra}'`;
            
            setTimeout(() => {
                document.querySelector(`#${errosId} span`).textContent = '';
                wrongIcon.style.display = 'none';
                wrongIcon2.style.display = 'none';
                wrongIcon3.style.display = 'none';
                wrongIcon4.style.display = 'none';
                wrongIcon5.style.display = 'none';
                wrongIcon6.style.display = 'none';
            }, tempoDesaparecer);
        }

        inputElement.value = '';
        this.updateProgressBar();
    }

    updateProgressBar() {
        if (this.currentArray) {
            let totalWords;
            switch (this.currentArray) {
                case this.palavras:
                case this.palavras2:
                case this.palavras7:
                    totalWords = 10;
                    break;
                case this.palavras3:
                case this.palavras4:
                case this.palavras5:
                case this.palavras6:
                    totalWords = 11;
                    break;
                default:
                    totalWords = 10; // Default to 10 words
            }
            const wordsUsed = totalWords - this.currentArray.length;
            const progressPercent = (wordsUsed / totalWords) * 100;
            const progressBar = document.getElementById('progressBar');
            const progressPercentage = document.getElementById('progressPercentage');
    
            progressBar.style.width = `${progressPercent}%`;
            progressPercentage.textContent = `${Math.round(progressPercent)}%`;
    
            if (progressPercent === 100) {
                this.endGame();
            }
        }
    }
    

    showModal(correctPalavra) {
        const modal = document.getElementById('resultModal-listening');
        const scoreMessage = document.getElementById('questions-qty');
        scoreMessage.textContent = correctPalavra;
        modal.style.display = 'block';

    }

    endGame() {
        const totalCorrect = this.correctPalavra + this.correctPalavra2 + this.correctPalavra3 + this.correctPalavra4 + this.correctPalavra5 + this.correctPalavra6;
        const totalWords = this.palavras.length + this.palavras2.length + this.palavras3.length + this.palavras4.length + this.palavras5.length + this.palavras6.length;
        const correctPercentage = (totalCorrect / (totalWords * 100)) * 100; // Calcular a porcentagem de acertos
    
        const delay = 1000; 
        let endAudio;
    
        if (correctPercentage <= 50) {
            endAudio = document.getElementById('victoryAudio');
            endAudio.play().catch(error => {
                console.error('Erro ao reproduzir o áudio incorreto:', error);
            });
           
        } else {
           endAudio = document.getElementById('game-over');
            endAudio.play().catch(error => {
                console.error('Erro ao reproduzir o áudio incorreto:', error);
            });
        }
    
        endAudio.play();
        endAudio.onended = () => {
            this.showModal(totalCorrect); // Passar a pontuação final para showModal
            
            // Esconder elementos
            const divDicas = document.querySelector('.dicas');
            divDicas.style.display = 'none';
            const divDireita = document.querySelector('.container-direita');
            divDireita.style.display = 'none';
            const divProgressBar = document.getElementById('container-com-barra');
            divProgressBar.style.display = 'none';
        };
    }
    
}

const game = new WordGame();


function restartGame() {

    var urlPartes = window.location.href.split("/");
    var ultimaParteUrl = urlPartes[urlPartes.length - 1];

    window.location.href = ultimaParteUrl;
}

