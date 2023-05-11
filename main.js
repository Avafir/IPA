"use strict";

let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
//Kreis für die Animation vorbereiten
let kreisueberlauf = document.getElementById("kreisueberlauf");
kreisueberlauf.setAttribute("style","opacity: 0");

//Array erstellen mit den Kreisen
let kreise = []
let kreisID;
let kreis;
for(let i = 0; i<12; i++){
  kreis = document.getElementById(`kreis${i+1}`);
  kreis.setAttribute("style","opacity: 0");
  kreise.push(kreis);
}

let interval;
let zaehler = 0;
let Impulsstaerke = 0;
let timer;
let Ring0 = true;
let Ring1 = false;
let Ring2 = false;
let Ring3 = false;
let Ring4 = false;
let prozent;

let ringbox = document.querySelector('#ring');
let height = ringbox.offsetHeight;
let styleVariable = `width:${height}px`;
document.getElementById('ring').setAttribute("style",styleVariable);

function check_slider(text_id,range_id) {
  let rangeZahl=document.getElementById(range_id).value;
  document.getElementById(text_id).innerHTML = rangeZahl;
}

function Impuls(){
  clearTimeout(timer);
  let btnID = this.id;
  let NumberOfInput = btnID.slice(-1);
  let reglerValue = `regler${NumberOfInput}`;
  if(NumberOfInput == 1 || NumberOfInput == 2){
    Impulsstaerke += Number(document.getElementById(reglerValue).value);
  }
  if(NumberOfInput == 3 || NumberOfInput == 4){
    Impulsstaerke -= Number(document.getElementById(reglerValue).value);
    if(Impulsstaerke < 0){
      Impulsstaerke = 0;
    }
  }
  checkRinge();
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
    for(let i = 0; i<12;i++){
      kreise[i].setAttribute("style","opacity: 0");
    }
  }
  if(Ring1 == true){
    for(let i = 0; i<4;i++){
      kreise[i].setAttribute("style","opacity: 1");
    }
  }
  if(Ring1 != true){
    for(let i = 0; i<4;i++){
      kreise[i].setAttribute("style","opacity: 0");
    }
  }
  if(Ring2 == true){
    for(let i = 4; i<7;i++){
      kreise[i].setAttribute("style","opacity: 1");
    }
  }
  if(Ring2 != true){
    for(let i = 4; i<7;i++){
      kreise[i].setAttribute("style","opacity: 0");
    }
  }
  if(Ring3 == true){
    for(let i = 7; i<10;i++){
      kreise[i].setAttribute("style","opacity: 1");
    }
  }
  if(Ring3 != true){
    for(let i = 7; i<10;i++){
      kreise[i].setAttribute("style","opacity: 0");
    }
  }
  if(Ring4 == true){
    for(let i = 10; i<12;i++){
      kreise[i].setAttribute("style","opacity: 1");
    }
  }
  if(Ring4 != true){
    for(let i = 10; i<12;i++){
      kreise[i].setAttribute("style","opacity: 0");
    }
  }
}

function resetAfter3(){
  if(Impulsstaerke >= 4){
    if(document.getElementById('checkbox').checked){
      console.log("Störung!!");
    } else {
      kreisueberlauf.setAttribute("style","opacity: 1");
      prozent = 35;
      interval = setInterval(ueberlaufAnimation, 50);
    }
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
