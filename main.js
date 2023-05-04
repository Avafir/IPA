"use strict";

var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");
var btn4 = document.getElementById("btn4");
var Impulsstaerke = 0;

function check_slider(text_id,range_id) {
  let rangeZahl=document.getElementById(range_id).value;
  document.getElementById(text_id).innerHTML = rangeZahl; 
}

function Impuls(){
  //eigene Funktion für die valueID einbauen
  var btnID = this.id;
  var NumberOfInput = btnID.slice(-1);
  var reglerValue = `regler${NumberOfInput}`;
  //+= stimmt noch nicht
  Impulsstaerke += document.getElementById(reglerValue).value;
  console.log(Impulsstaerke);
}

btn1.addEventListener("click", Impuls);
btn2.addEventListener("click", Impuls);
btn3.addEventListener("click", Impuls);
btn4.addEventListener("click", Impuls);
