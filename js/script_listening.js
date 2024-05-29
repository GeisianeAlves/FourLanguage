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
        this.palavras6 = ['exhibition', 'distance', 'convinient', 'demand', 'increase', 'thousand', 'engineer', 'assistant', 'suplly', 'mobile'];

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
        speechSynthesis.speak(voice);
        
        this.updateProgressBar();
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
        const userInput = inputElement.value.trim();
        let palavra = '';

        switch(inputId) {
            case 'input': palavra = this.palavra; break;
            case 'input2': palavra = this.palavra2; break;
            case 'input3': palavra = this.palavra3; break;
            case 'input4': palavra = this.palavra4; break;
            case 'input5': palavra = this.palavra5; break;
            case 'input6': palavra = this.palavra6; break;
        }

        if (userInput === palavra) {
            this[correctProp]++;
            document.querySelector(`#${pontosId} span`).textContent = 'Score: ' + this[correctProp];
        } else {
            this[`incorrect${capitalize(inputId)}`]++;
            document.querySelector(`#${errosId} span`).textContent = `Correct spelling: '${palavra}'`;
            const tempoDesaparecer = 3000;
            setTimeout(() => {
                document.querySelector(`#${errosId} span`).textContent = '';
            }, tempoDesaparecer);
        }

        inputElement.value = '';
        this.updateProgressBar();
    }

    updateProgressBar() {
        if (this.currentArray) {
            let totalWords;
            switch (this.currentArray) {
                case this.palavras: totalWords = 10; break;
                case this.palavras2: totalWords = 10; break;
                case this.palavras3: totalWords = 11; break;
                case this.palavras4: totalWords = 11; break;
                case this.palavras5: totalWords = 11; break;
                case this.palavras6: totalWords = 11; break;
                default: totalWords = 10; // Default to 10 words
            }
            const wordsUsed = totalWords - this.currentArray.length;
            const progressPercent = (wordsUsed / totalWords) * 100;
            document.getElementById('progressBar').style.width = `${progressPercent}%`;
            document.getElementById('progressBar').style.width = `${progressPercent}%`;
        }
    }
    // endGame() {
    //     // Esconder todos os elementos relacionados ao jogo
    //     document.getElementById('primeiro').style.display = 'none';
    // }
}

const game = new WordGame();

// function closeModal()

// Função para esconder elementos ao fim do jogo
// function hideElements() {
//     game.endGame();
// }

// // Chamando a função hideElements ao final do jogo
// hideElements();