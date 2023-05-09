"use strict";

var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");
var btn4 = document.getElementById("btn4");
let kreisueberlauf = document.getElementById("kreisueberlauf");
kreisueberlauf.setAttribute("style","opacity: 0");
let interval;
let zaehler = 0;

/*
var kreis1 = document.getElementById("kreis1");
kreis1.setAttribute("style","opacity: 0.1");
kreis.setAttribute("style","opacity: 0.1");
*/

/*
for(let i = 0; i<21;i++){
  kreis = kreise[i];
}
*/

let kreise = []
let kreisID;
let kreis;
for(let i = 0; i<21; i++){
  kreis = document.getElementById(`kreis${i+1}`);
  kreis.setAttribute("style","opacity: 0");
  kreise.push(kreis);
}
console.log(kreise)

var Impulsstaerke = 0;
var timer;
var Ring0 = true;
var Ring1 = false;
var Ring2 = false;
var Ring3 = false;
var Ring4 = false;
let prozent;

let ringbox = document.querySelector('#ring4');
let height = ringbox.offsetHeight;
let styleVariable = `width:${height}px`;
document.getElementById('ring4').setAttribute("style",styleVariable);

function check_slider(text_id,range_id) {
  let rangeZahl=document.getElementById(range_id).value;
  document.getElementById(text_id).innerHTML = rangeZahl;
}

function Impuls(){
  //eigene Funktion für die valueID einbauen
  clearTimeout(timer);
  var btnID = this.id;
  var NumberOfInput = btnID.slice(-1);
  var reglerValue = `regler${NumberOfInput}`;
  if(NumberOfInput == 1 || NumberOfInput == 2){
    Impulsstaerke += Number(document.getElementById(reglerValue).value);
  }
  if(NumberOfInput == 3 || NumberOfInput == 4){
    Impulsstaerke -= Number(document.getElementById(reglerValue).value);
    if(Impulsstaerke < 0){
      Impulsstaerke = 0;
    }
  }
  console.log(Impulsstaerke);
  checkRinge();
  console.log(Ring0, Ring1, Ring2, Ring3,Ring4);
  drawRinge();
  timer = setTimeout(resetAfter3, 3000);
}

function checkRinge(){
  if(Impulsstaerke == 0){
    Ring0 = true;
  } else {
    Ring0 = false;
  }
  if(Impulsstaerke >= 1){
    Ring1 = true;
  } else{
    Ring1 = false;
  }
  if(Impulsstaerke >= 2){
    Ring2 = true;
  } else {
    Ring2 = false;
  }
  if(Impulsstaerke >= 3){
    Ring3 = true;
  } else {
    Ring3 = false;
  }
  if(Impulsstaerke >= 4){
    Ring4 = true;
  } else {
    Ring4 = false;
  }
}

function drawRinge(){
  if(Ring0 == true){
    for(let i = 0; i<21;i++){
      kreise[i].setAttribute("style","opacity: 0");
    }
  }
  if(Ring1 == true){
    kreise[0].setAttribute("style","opacity: 1");
  }
  if(Ring1 != true){
    kreise[0].setAttribute("style","opacity: 0");
  }
  if(Ring2 == true){
    for(let i = 1; i<5;i++){
      kreise[i].setAttribute("style","opacity: 1");
    }
  }
  if(Ring2 != true){
    for(let i = 1; i<5;i++){
      kreise[i].setAttribute("style","opacity: 0");
    }
  }
  if(Ring3 == true){
    for(let i = 5; i<13;i++){
      kreise[i].setAttribute("style","opacity: 1");
    }
  }
  if(Ring3 != true){
    for(let i = 5; i<13;i++){
      kreise[i].setAttribute("style","opacity: 0");
    }
  }
  if(Ring4 == true){
    for(let i = 13; i<21;i++){
      kreise[i].setAttribute("style","opacity: 1");
    }
  }
  if(Ring4 != true){
    for(let i = 13; i<21;i++){
      kreise[i].setAttribute("style","opacity: 0");
    }
  }
}

function resetAfter3(){
  if(Impulsstaerke >= 4){
    kreisueberlauf.setAttribute("style","opacity: 1");
    prozent = 35;
    interval = setInterval(ueberlaufAnimation, 50);

  }
  
  Impulsstaerke = 0;
  checkRinge();
  drawRinge();
  zaehler = 0;
  console.log(Impulsstaerke);
}

function ueberlaufAnimation(){
  prozent += 5;
  kreisueberlauf.setAttribute("style",`left: ${prozent}%`);
  zaehler++;
  if(zaehler > 50){
    clearInterval(interval);
    kreisueberlauf.setAttribute("style","opacity: 0");
  }
  console.log(zaehler);
}

btn1.addEventListener("click", Impuls);
btn2.addEventListener("click", Impuls);
btn3.addEventListener("click", Impuls);
btn4.addEventListener("click", Impuls);
