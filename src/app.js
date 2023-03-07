/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  // function excuseGenerator() {
  //   let who = ["the dog", "my granma", "his turtle", "my bird"];
  //   let what = ["eat", "pissed", "crushed", "broked"];
  //   let when = [
  //     "before the class",
  //     "right in time",
  //     "when I finished",
  //     "during my lunch",
  //     "while I was praying"
  //   ];

  //   let excuseWho = who[Math.floor(Math.random() * who.length)];
  //   let excuseWhat = what[Math.floor(Math.random() * what.length)];
  //   let excuseWhen = when[Math.floor(Math.random() * when.length)];

  //   let result = `${excuseWho} ${excuseWhat} ${excuseWhen}.`;

  //   return result;
  // };

  //sandra

  let generateExcuse = () => {
    let who = ["the dog", "my granma", "his turtle", "my bird"];
    let what = ["ate", "pissed", "crushed", "broked"];
    let when = [
      "before the class",
      "right in time",
      "when I finished",
      "during my lunch",
      "while I was praying"
    ];
    //Hacer que esa excusa muestre de forma aleatoria cada elemento del who, what, when
    let excuseWho = who[Math.floor(Math.random() * who.length)];
    let excuseWhat = what[Math.floor(Math.random() * what.length)];
    let excuseWhen = when[Math.floor(Math.random() * when.length)];

    let resultado = excuseWho + " " + excuseWhat + " " + excuseWho + ".";

    return resultado;
  };

  console.log("Hello Rigo from the console!");
  document.querySelector("#excuse").innerHTML = generateExcuse();
};
