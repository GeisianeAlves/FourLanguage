let word;

const words = ["south", "north", "east", "west","country", "airport", "flight", "departure", "currency", "factory"]
document.getElementById('btn').addEventListener('click', function() {
    num=Math.floor(Math.random()*(10));
    word=words[num]

    let voice = new SpeechSynthesisUtterance()
    voice.lang = "en-US";
    voice.text=word
    speechSynthesis.speak(voice)
})

let correctWord=0;
let incorrectWord=0;
  
const displayScore = document.querySelector("#score span");  


document.getElementById('submit').addEventListener('click', function() {
    if(document.getElementById('input').value == word) {
    correctWord++;
    //alert('Correct!')
    displayScore.textContent = 'Score: ' + correctWord;      
 
} else {
    incorrectWord++;
    //alert(`Incorrect \n It was ${word}`)
}
document.getElementById('input').value=''

})



document.getElementById('speak').addEventListener('click', function() {     
    let voice = new SpeechSynthesisUtterance()
    voice.text=word
    voice.lang = "en-US";
    speechSynthesis.speak(voice)
})
