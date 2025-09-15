/*
# Ejercicio 03.

La función `showRandomDigit` está asociada al click en el display. Al ejecutarse
debe definir un valor aleatorio entre 0 y 9 y mostrar el dígito correspondiente.
*/
let displayLED = document.getElementById("displayLED");

let segA = document.getElementById("seg-a");
let segB = document.getElementById("seg-b");
let segC = document.getElementById("seg-c");
let segD = document.getElementById("seg-d");
let segE = document.getElementById("seg-e");
let segF = document.getElementById("seg-f");
let segG = document.getElementById("seg-g");

function showRandomDigit() {
  let numero = Math.floor(Math.random()*10);
  console.log(numero);
  switch(numero){
    case 0:
      segA.style.display= "block";
      segB.style.display= "block";
      segC.style.display= "block";
      segD.style.display= "block";
      segE.style.display= "block";
      segF.style.display= "block";
      segG.style.display= "none";
      break;

    case 1:
      segA.style.display= "none";
      segB.style.display= "block";
      segC.style.display= "block";
      segD.style.display= "none";
      segE.style.display= "none";
      segF.style.display= "none";
      segG.style.display= "none";
      break;

    case 2:
      segA.style.display= "block";
      segB.style.display= "block";
      segC.style.display= "none";
      segD.style.display= "block";
      segE.style.display= "block";
      segF.style.display= "none";
      segG.style.display= "block";
      break;
    
    case 3:
      segA.style.display= "block";
      segB.style.display= "block";
      segC.style.display= "block";
      segD.style.display= "block";
      segE.style.display= "none";
      segF.style.display= "none";
      segG.style.display= "block";
      break;

    case 4:
      segA.style.display= "none";
      segB.style.display= "block";
      segC.style.display= "block";
      segD.style.display= "none";
      segE.style.display= "none";
      segF.style.display= "block";
      segG.style.display= "block";
      break;

    case 5:
      segA.style.display= "block";
      segB.style.display= "none";
      segC.style.display= "block";
      segD.style.display= "block";
      segE.style.display= "none";
      segF.style.display= "block";
      segG.style.display= "block";
      break;

    case 6:
      segA.style.display= "block";
      segB.style.display= "none";
      segC.style.display= "block";
      segD.style.display= "block";
      segE.style.display= "block";
      segF.style.display= "block";
      segG.style.display= "block";
      break;

    case 7:
      segA.style.display= "block";
      segB.style.display= "block";
      segC.style.display= "block";
      segD.style.display= "none";
      segE.style.display= "none";
      segF.style.display= "none";
      segG.style.display= "none";
      break;

    case 8:
      segA.style.display= "block";
      segB.style.display= "block";
      segC.style.display= "block";
      segD.style.display= "block";
      segE.style.display= "block";
      segF.style.display= "block";
      segG.style.display= "block";
      break;

    case 9:
      segA.style.display= "block";
      segB.style.display= "block";
      segC.style.display= "block";
      segD.style.display= "block";
      segE.style.display= "none";
      segF.style.display= "block";
      segG.style.display= "block";
      break;
  }
}