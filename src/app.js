import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  simbolo.innerHTML == '♦'|| simbolo.innerHTML == '♥'? simbolo.style.color ="red": simbolo.style.color ="black"   
    simbolo2.style.color = simbolo.style.color
    NumeroCarta.style.color = simbolo.style.color

    NumeroCarta.innerHTML = resultadoCarta(NumeroCartas);
    simbolo.innerHTML = resultadoCarta(Palos);
    
   simbolo2.innerHTML = simbolo.innerHTML
};

let NumeroCartas = [1,2,3,4,5,6,7,8,9,10,11,12];
let Palos = ["♦", "♥", "♠", "♣"];
let counter = 0;


const Randomnize =(arr)=>{
    return Math.floor(Math.random()* arr.length)
}
console.log(Randomnize(NumeroCartas));
console.log(Randomnize(Palos));

const resultadoCarta = arr => {
    return arr[Randomnize(arr)]
    
      }
      console.log(resultadoCarta(NumeroCartas))
      console.log(resultadoCarta(Palos))

let simbolo = document.querySelector("#simbolo");
let NumeroCarta = document.getElementById("NumeroCarta");
let reset = document.getElementById("reset");
let simbolo2 = document.getElementById("simbolo2");
let contador = document.getElementById("texto");


reset.addEventListener('click', (e)=>{
counter ++;
    
     simbolo.innerHTML == '♦'|| simbolo.innerHTML == '♥'? simbolo.style.color ="red": simbolo.style.color ="black"   
    simbolo2.style.color = simbolo.style.color
    NumeroCarta.style.color = simbolo.style.color

    NumeroCarta.innerHTML = resultadoCarta(NumeroCartas);
    simbolo.innerHTML = resultadoCarta(Palos);
    
   simbolo2.innerHTML = simbolo.innerHTML
   contador.innerHTML = "Numero de cartas generadas "+counter;


    
})

setInterval(function(){
 
  simbolo.innerHTML == '♦'|| simbolo.innerHTML == '♥'? simbolo.style.color ="red": simbolo.style.color ="black"   
  simbolo2.style.color = simbolo.style.color
  NumeroCarta.style.color = simbolo.style.color

  NumeroCarta.innerHTML = resultadoCarta(NumeroCartas);
  simbolo.innerHTML = resultadoCarta(Palos);
  
 simbolo2.innerHTML = simbolo.innerHTML
}, 2000);

