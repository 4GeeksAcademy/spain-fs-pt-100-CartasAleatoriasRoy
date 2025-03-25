import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let NumeroCartas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
let Palos = ["♦", "♥", "♠", "♣"];
let counter = 0;

let simbolo = document.querySelector("#simbolo");
let NumeroCarta = document.getElementById("NumeroCarta");
let reset = document.getElementById("reset");
let simbolo2 = document.getElementById("simbolo2");
let contador = document.getElementById("texto");


const randomnize = (arr) => {
  return Math.floor(Math.random() * arr.length)
}
console.log(randomnize(NumeroCartas));
console.log(randomnize(Palos));

const resultadoCarta = arr => {
  return arr[randomnize(arr)]

}
console.log(resultadoCarta(NumeroCartas))
console.log(resultadoCarta(Palos))

const createCard = ()=> {
  NumeroCarta.innerHTML = resultadoCarta(NumeroCartas);
  simbolo.innerHTML = resultadoCarta(Palos);

  simbolo2.innerHTML = simbolo.innerHTML
  simbolo.innerHTML == '♦' || simbolo.innerHTML == '♥' ? simbolo.style.color = "red" : simbolo.style.color = "black"
  simbolo2.style.color = simbolo.style.color
  NumeroCarta.style.color = simbolo.style.color

  
}



window.onload = createCard(); 
  



reset.addEventListener('click', (e) => {
  counter++;

  createCard();
  contador.innerHTML = "Numero de cartas generadas " + counter;

  clearInterval(Tiempofuera);


})

const Tiempofuera = setInterval( createCard, 2000);

