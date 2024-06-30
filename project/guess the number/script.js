let randomnum = parseInt(Math.random() * 100 + 1);
// console.log(randomnum)

const submit = document.querySelector("#subt");
const userinput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowhi = document.querySelector(".lowOrHi");
const startover = document.querySelector(".resultParas");

const para = document.createElement("p");

let prevGuess = [];
let numGuess = 1;
let playGame = true;

if (playGame) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = parseInt(userinput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert("please enter a valid number");
  } else if (guess < 1) {
    alert("enter a number greater than 1");
  } else if (guess > 100) {
    alert("enter a number less than or equal to 100");
  } else {
    prevGuess.push(guess);
    if (numGuess >= 5) {
      guessdisplay(guess);
      displayMsg(`Game Over 😒 The random number was ${randomnum}`);
      endGame();
    } else {
      guessdisplay(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomnum) {
    displayMsg(`you guessed it right`);
    endGame();
  } else if (guess < randomnum) {
    displayMsg("Number is TOOO Low");
  } else if (guess > randomnum) {
    displayMsg("Number is TOOO High");
  }
}
function guessdisplay(guess) {
  userinput.value = " ";
  guessSlot.innerHTML += `${guess} , `;
  numGuess++;
  remaining.innerHTML = `${5 - numGuess}`;
}
function displayMsg(message) {
  lowhi.innerHTML = `<h2> ${message} </h2>`;
}
function endGame() {
  userinput.value = " ";
  userinput.setAttribute("disabled", " ");
  para.classList.add("button");
  para.innerHTML = `<h2 id ="newGame"> Start New Game </h2>`;
  startover.appendChild(para);
  playGame = false;
  newGame();
}
function newGame() {
  const newGameButton =document.querySelector('#newGame')
  newGameButton.addEventListener("click",function(e)
{
  randomnum = parseInt(Math.random() * 100 + 1);
  prevGuess=[]
  numGuess =1 
  guessSlot.innerHTML =" "
  remaining.innerHTML = `${5 -numGuess}`
  userinput.removeAttribute('disabled')
  startover.removeChild(para)
  playGame= true
})

}
