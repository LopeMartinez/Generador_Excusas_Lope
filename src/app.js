import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //Declaración de arrays
  let who =['El perro', 'Mi abuela ', 'El cartero', 'Mi pajaro', 'Mi hamster'];
  let action =['Se comió', 'Rompió','Estrelló','Se meó']
  let object =['Mi movil','Mis deberes','Mi coche']
  let when =['Antes de clase','Mientras dormia','Mientras hacia ejercicio','Durante mi almuerzo','Mientras rezaba']
  


  function getRandom(array){
  return array[Math.floor(Math random() * array.length)]
  }

  let randomExcuse = getRandom(who) + " " + getRandom(action) + " " + getRandom(object) + " " + getRandom(when) + . +

    let excuseDiv = document.getElementById("excuse")
  
  console.log(excuse.Div);
};
