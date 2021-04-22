let englishLetters=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","W","X","Y","Z"];

let headerElement=document.querySelector("h1");

let buttonElement=document.querySelector(".izvrsi");

let container=document.querySelector(".container");

let inputElement=document.querySelector("#input");

document.body.addEventListener("click",stisniGumb);

function stisniGumb(e){
  if(e.target.classList.contains('izvrsi')){
    usporedi();
  }
  e.preventDefault();
}


function generateRandomLetter(){
  let randomNumber=Math.floor(Math.random()*englishLetters.length);
  let randomLetter=englishLetters[randomNumber];
  return randomLetter;
}


function usporedi(randomLetter){
  let userInput=document.querySelector("#input").value;
  userInput.innerHTML=`${input}`;
  userInput=userInput.toUpperCase();

  let computerLetter=generateRandomLetter(); // Spremi ono slovo koje vrti racunalo u varijablu koju možeš uspoređivati

  if(userInput===""){
    alert("Please enter a letter.");
  }else if(userInput.length>1){
    alert("You cannot enter more than one letter at the time!");
  }else{
    if(userInput===computerLetter){
      stani();
      container.innerHTML="";
      headerElement.innerHTML=`Nice job.<br/> You guessed it!`
      container.appendChild(headerElement);
      let playAgain=document.createElement("button");
      playAgain.innerHTML="Play again";
      playAgain.setAttribute("class","play");
      container.appendChild(playAgain);


    }else{
      stani();
      container.innerHTML="";
      headerElement.innerHTML=`False. <br/> Maybe try again?`
      container.appendChild(headerElement);
      buttonElement.innerHTML="Try again";
      let tryAgain=document.createElement("button");
      tryAgain.innerHTML="Try again";
      tryAgain.setAttribute("class","try");
      container.appendChild(tryAgain);

    }
  }
}


//Funkcija za okretanje slova

let firstLetter=0;

function vrtiSlova(){
  firstLetter++;
  let index=englishLetters[firstLetter];
  headerElement.innerHTML=englishLetters[firstLetter];

  if(firstLetter===24){
    firstLetter=-1;
  }

}


let vrti=window.setInterval(vrtiSlova,100);

function stani(){

  clearInterval(vrti);

}


//Ponovno igraj
document.body.addEventListener("click",igrajOpet);

function igrajOpet(e){
  if(e.target.classList.contains('play')){
    container.innerHTML="";
    container.appendChild(headerElement);
    vrti=window.setInterval(vrtiSlova,100);
    container.appendChild(inputElement);
    container.appendChild(buttonElement);
    buttonElement.setAttribute("class","izvrsi")
  }
}

document.body.addEventListener("click",tryOpet);

function tryOpet(e){
  if(e.target.classList.contains('try')){
  container.innerHTML="";
  container.appendChild(headerElement);
  vrti=window.setInterval(vrtiSlova,100);
  container.appendChild(inputElement);
  container.appendChild(buttonElement);
  buttonElement.setAttribute("class","izvrsi")
  }
}
