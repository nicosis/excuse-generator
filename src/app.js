/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  document.querySelector("#excuse").innerHTML = excuseGenerator();

  function excuseGenerator() {
    let who = ["mi perro", "una foca", "un gato", "una cotorra"];
    let what = ["ha comido", "ha escondido", "ha roto", "ha botado"];
    let noun = ["mi tarea", "mis llaves", "mi ordenador"];
    let when = [
      "justo antes de la clase",
      "justo antes de salir al trabajo",
      "cuando estaba rezando",
      "mientras estaba cenando"
    ];
    let emoji = ["🫣", "🥵", "😕", "😩", "😲"];

    function getRandomElementFromArray(array) {
      let newArr = array[Math.floor(Math.random() * array.length)];
      return newArr;
    }

    return `${getRandomElementFromArray(who)} ${getRandomElementFromArray(
      what
    )} ${getRandomElementFromArray(noun)} ${getRandomElementFromArray(
      when
    )}. ${getRandomElementFromArray(emoji)}`;
  }
  // console.log("Hello Rigo from the console!");
  // document.querySelector("#excuse").innerHTML = excuseGenerator();
};
