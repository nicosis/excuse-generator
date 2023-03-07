/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  document.querySelector("#excuse").innerHTML = excuseGenerator();

  function excuseGenerator() {
    let who = ["Mi perro", "Una foca", "Un gato", "Una ardilla"];
    let what = ["ha comido", "ha escondido", "ha roto", "ha tirado"];
    let noun = ["mi tarea", "mis llaves", "mi ordenador"];
    let when = [
      "justo antes de la clase",
      "cuando estaba por salir al trabajo",
      "cuando estaba rezando",
      "mientras estaba cenando"
    ];
    let emoji = ["🫣", "🥵", "😕", "😩", "😲"];

    let excuseWho = who[Math.floor(Math.random() * who.length)];
    let excuseWhat = what[Math.floor(Math.random() * what.length)];
    let excuseWhen = when[Math.floor(Math.random() * when.length)];
    let excuseNoun = noun[Math.floor(Math.random() * noun.length)];
    let excuseEmoji = emoji[Math.floor(Math.random() * emoji.length)];

    return `${excuseWho} ${excuseWhat} ${excuseNoun} ${excuseWhen} ${excuseEmoji}.`;
  }
  // console.log("Hello Rigo from the console!");
  // document.querySelector("#excuse").innerHTML = excuseGenerator();
};
