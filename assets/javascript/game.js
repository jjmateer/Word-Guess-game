//Create array 
const words = ['chicken nugget', 'dog', 'ferrari'];
//Get random word 
let randomNumber = Math.floor(Math.random() * words.length);
let chosenWord = words[randomNumber];
let rightWord = [];
let wrongWord = [];
let underScore = [];
//dom manipulation
let docUnderScore = document.getElementsByClassName('underScore');
let docRightGuess = document.getElementsByClassName('rightGuess');
let docWrongGuess = document.getElementsByClassName('wrongGuess')

//main
//-
//Create underscores based on how many letters word has
console.log(chosenWord);
let generateUnderscore = () => {
    for (let i = 0; i < chosenWord.length; i++) {
        underScore.push('_');
    }
    return underScore;
}
//get user guess
document.addEventListener('keypress', (event) => {
    let keyword = String.fromCharCode(event.keyCode);
    //if user guess is correct
    if (chosenWord.indexOf(keyword) > -1) {
        //add to rightWord
        rightWord.push(keyword);
        docRightGuess[0].innerHTML = rightWord.join('');
        //replace underscore with right letter
        underScore[chosenWord.indexOf(keyword)] = keyword;
        docUnderScore[0].innerHTML = underScore.join('');
       
        //checks if user word matches guesses
        if (underScore.join('') == chosenWord) {
            alert('You win');
        }
    } else{
            wrongWord.push(keyword);
            docWrongGuess[0].innerHTML = wrongWord.join('');
    }

        docUnderScore[0].innerHTML = generateUnderscore().join('');
    
});


