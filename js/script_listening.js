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
        this.palavras3 = ['lemon', 'skirt', 'dress', 't-shirt', 'blouse', 'jacket', 'coat', 'denim', 'hat', 'belt', 'socks']

        this.palavras4 = ['lemon', 'skirt', 'dress', 't-shirt', 'blouse', 'jacket', 'coat', 'denim', 'hat', 'belt', 'socks']
        this.palavras5 = ['lemon', 'skirt', 'dress', 't-shirt', 'blouse', 'jacket', 'coat', 'denim', 'hat', 'belt', 'socks']
        this.palavras6 = ['lemon', 'skirt', 'dress', 't-shirt', 'blouse', 'jacket', 'coat', 'denim', 'hat', 'belt', 'socks']

        document.getElementById('gerarPalavra1').addEventListener('click', this.generateAndSpeakWord1.bind(this));
        document.getElementById('gerarPalavra2').addEventListener('click', this.generateAndSpeakWord2.bind(this));
        document.getElementById('gerarPalavra3').addEventListener('click', this.generateAndSpeakWord3.bind(this));
        document.getElementById('gerarPalavra4').addEventListener('click', this.generateAndSpeakWord4.bind(this));
        document.getElementById('gerarPalavra5').addEventListener('click', this.generateAndSpeakWord5.bind(this));
        document.getElementById('gerarPalavra6').addEventListener('click', this.generateAndSpeakWord6.bind(this));
        
        document.getElementById('enviar').addEventListener('click', () => this.checkAndDisplayScore('input', this.palavra, this.correctPalavra, this.incorrectPalavra, 'pontos', 'erros'));
        document.getElementById('enviar2').addEventListener('click', () => this.checkAndDisplayScore('input2', this.palavra2, this.correctPalavra2, this.incorrectPalavra2, 'pontos2', 'erros2'));
        document.getElementById('enviar3').addEventListener('click', () => this.checkAndDisplayScore('input3', this.palavra3, this.correctPalavra3, this.incorrectPalavra3, 'pontos3', 'erros3'));
        document.getElementById('enviar4').addEventListener('click', () => this.checkAndDisplayScore('input4', this.palavra4, this.correctPalavra4, this.incorrectPalavra4, 'pontos4', 'erros4'));
        document.getElementById('enviar5').addEventListener('click', () => this.checkAndDisplayScore('input5', this.palavra5, this.correctPalavra5, this.incorrectPalavra5, 'pontos5', 'erros5'));
        document.getElementById('enviar6').addEventListener('click', () => this.checkAndDisplayScore('input6', this.palavra6, this.correctPalavra6, this.incorrectPalavra6, 'pontos6', 'erros6'));

          

    }

    generateAndSpeakWord(palavrasArray, palavraProp) {
        if (palavrasArray.length === 0) {
            console.log("Todas as palavras foram usadas.");
            return; 
        }
    
        const num = Math.floor(Math.random() * palavrasArray.length);
        this[palavraProp] = palavrasArray[num];
    
        palavrasArray.splice(num, 1);
    
        let voice = new SpeechSynthesisUtterance();
        voice.lang = "en-US";
        voice.text = this[palavraProp];
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
    

     checkAndDisplayScore(inputId, palavra, correctPalavra, incorrectPalavra, pontosId, errosId) {
        const userInput = document.getElementById(inputId).value.trim();

        if (userInput === palavra) {
            correctPalavra++;
            document.querySelector(`#${pontosId} span`).textContent = 'Score: ' + correctPalavra;
        } else {
            incorrectPalavra++;
            document.querySelector(`#${errosId} span`).textContent = `Correct spelling: '${palavra}'`;
            const tempoDesaparecer = 3000;
            setTimeout(() => {
                document.querySelector(`#${errosId} span`).textContent = '';
            }, tempoDesaparecer);
        }
                
        document.getElementById(inputId).value = '';
    }
}

const game = new WordGame();
