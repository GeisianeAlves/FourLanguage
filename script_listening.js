
class WordGame {
    constructor() {
        this.palavra = '';
        this.correctPalavra = 0;
        this.incorrectPalavra = 0;
        //this.palavras = words.split(',').map(word => word.trim()); // Split the string into an array of words
        this.palavras = ['pink', 'pig', 'mug', 'horse','apple', 'banana', 'cherry', 'blueberry', 'orange', 'syrup', 'knife',
        'grape', 'pineapple', 'watermelon', 'progress', 'book', 'headphone', 'town', 'backpack', 'suitcase', 'cabinet', 'strong',
        'strawberry', 'lemon', 'skirt', 'dress', 't-shirt', 'blouse', 'jacket', 'coat', 'denim', 'hat', 'belt', 'socks'];
        
        document.getElementById('gerarPalavra1').addEventListener('click', this.generateAndSpeakWord.bind(this));
        document.getElementById('gerarPalavra2').addEventListener('click', this.generateAndSpeakWord.bind(this));
        document.getElementById('gerarPalavra3').addEventListener('click', this.generateAndSpeakWord.bind(this));
        document.getElementById('gerarPalavra4').addEventListener('click', this.generateAndSpeakWord.bind(this));
        document.getElementById('gerarPalavra5').addEventListener('click', this.generateAndSpeakWord.bind(this));
        document.getElementById('gerarPalavra6').addEventListener('click', this.generateAndSpeakWord.bind(this));
        
        document.getElementById('enviar').addEventListener('click', this.checkAndDisplayScore.bind(this));
        document.getElementById('enviar2').addEventListener('click', this.checkAndDisplayScore.bind(this));
        document.getElementById('enviar3').addEventListener('click', this.checkAndDisplayScore.bind(this));
        document.getElementById('enviar4').addEventListener('click', this.checkAndDisplayScore.bind(this));
        document.getElementById('enviar5').addEventListener('click', this.checkAndDisplayScore.bind(this));
        document.getElementById('enviar6').addEventListener('click', this.checkAndDisplayScore.bind(this));
        document.getElementById('repetir').addEventListener('click', this.generateAndSpeakWord.bind(this));
    }



    generateAndSpeakWord() {
        const num = Math.floor(Math.random() * this.palavras.length);
        this.palavra = this.palavras[num];

        let voice = new SpeechSynthesisUtterance();
        voice.lang = "en-US";
        voice.text = this.palavra;
        speechSynthesis.speak(voice);
        
    }

    checkAndDisplayScore() {
        const userInput = document.getElementById('input').value.trim();
        const userInput2 = document.getElementById('input2').value.trim();
        const userInput3 = document.getElementById('input3').value.trim();
        const userInput4 = document.getElementById('input4').value.trim();
        const userInput5 = document.getElementById('input5').value.trim();
        const userInput6 = document.getElementById('input6').value.trim();

        if (userInput === this.palavra || userInput2 == this.palavra || userInput3 == this.palavra || userInput4 == this.palavra || userInput5 == this.palavra || userInput6 == this.palavra) {
            this.correctPalavra++;
            document.querySelector("#pontos span").textContent = 'Score:  ' + this.correctPalavra;
            document.querySelector("#pontos2 span").textContent = 'Score:  ' + this.correctPalavra;
            document.querySelector("#pontos3 span").textContent = 'Score:  ' + this.correctPalavra;
            document.querySelector("#pontos4 span").textContent = 'Score:  ' + this.correctPalavra;
            document.querySelector("#pontos5 span").textContent = 'Score:  ' + this.correctPalavra;
            document.querySelector("#pontos6 span").textContent = 'Score:  ' + this.correctPalavra;
        } else {
            this.incorrectPalavra++;
            document.querySelector("#erros span").textContent = `Correct spelling:  '${this.palavra}'`;
            document.querySelector("#erros2 span").textContent = `Correct spelling:  '${this.palavra}'`;
            document.querySelector("#erros3 span").textContent = `Correct spelling:  '${this.palavra}'`;
            document.querySelector("#erros4 span").textContent = `Correct spelling:  '${this.palavra}'`;
            document.querySelector("#erros5 span").textContent = `Correct spelling:  '${this.palavra}'`;
            document.querySelector("#erros6 span").textContent = `Correct spelling:  '${this.palavra}'`;
        }

        document.getElementById('input').value = '';
        document.getElementById('input2').value = '';
        document.getElementById('input3').value = '';
        document.getElementById('input4').value = '';
        document.getElementById('input5').value = '';
        document.getElementById('input6').value = '';
    }
}

const game = new WordGame();
