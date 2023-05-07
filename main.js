"use strict";

var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");
var btn4 = document.getElementById("btn4");

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var Impulsstaerke = 0;
var timer;
var Ring0 = true;
var Ring1 = false;
var Ring2 = false;
var Ring3 = false;
var Ring4 = false;

/*
ctx.beginPath();
ctx.arc(75, 50, 5, 0, 2 * Math.PI);
ctx.fillStyle = "red";
ctx.fill();
ctx.strokeStyle = "white";
ctx.stroke();
*/

//alle console logs wegmachen
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
  }
  console.log(Impulsstaerke);
  drawRinge()
  timer = setTimeout(resetAfter3, 3000);
}

function drawRinge(){
  if(Impulsstaerke == 1){
    ctx.beginPath();
    ctx.arc(100, 75, 5, 0, 2 * Math.PI);
    ctx.fillStyle = "red";
    ctx.fill();
  }
}

function resetAfter3(){
  Impulsstaerke = 0;
  resetRinge();
  console.log(Impulsstaerke);
}

function resetRinge(){
Ring0 = true;
Ring1 = false;
Ring2 = false;
Ring3 = false;
Ring4 = false;
}

btn1.addEventListener("click", Impuls);
btn2.addEventListener("click", Impuls);
btn3.addEventListener("click", Impuls);
btn4.addEventListener("click", Impuls);
