let arrNumbers = [2, 4, 3, 68, 8, 5, 7, 13, 1, 8, 10];
let arrStrings = ["Zas", "arte", "klgjk", "lorem"];

// arrNumbers.forEach(function (element, indice, my_array) {
//   console.log(element);
//   //   console.log(indice);
//   //   console.log(my_array);
// });
let cumple;
// cumple = arrNumbers.some(function (element) {
//   return element == 9;
// });

// cumple = arrNumbers.some((e) => e == 9);

// cumple = arrNumbers.every(function (element) {
//   return element % 2 == 0;
// });

console.log(cumple);

// FUNCIONES SORT
const AscendantNumbers = (n1, n2) => n1 - n2;
const descendantNumbers = (n1, n2) => n2 - n1;
const AscendantStrings = (str1, str2) => str1.localeCompare(str2);
const descendantStrings = (str1, str2) => str2.localeCompare(str1);

/* ELEMENTS */
// let inputName = document.getElementById("firstName");
let unDiv = document.querySelector("div");
// let inputName = document.querySelector("#firstName");
// console.log(inputName);
// no es Array
// let TodosLosDivs = document.querySelectorAll("div");
// es Array
// let TodosLosDivs = Array.from(document.querySelectorAll("div"));

// arrNumbers.reduce(function_reduce)

// function function_reduce(acumulador, elemento){
//     return acumulador + elemento;
// }

// function sumarNumerosArray(arrNumeros) {
//   let acumulador = 0;
//   for (let i = 0; i < arrNumeros.length; i++) {
//     acumulador = acumulador + arrNumeros[i];
//   }
//   return acumulador;
// }

// sectionFormulario
/* EVENTOS */
// let botton = document.querySelector("#btn-1");
// botton.addEventListener("click", functionClick);
// let contador = 0;
// function functionClick(evento) {
//   let btn = evento.target;
//   contador++;
//   btn.innerText = `contador ${contador}`;
//   //   console.log(evento.target);
// }

const input = document.querySelector("#email");

input.addEventListener("invalid", (evento) => {
  let input = evento.target;
  let textHelp = input.nextElementSibling;
  textHelp.innerText = input.validationMessage;
  //   console.log(evento.target.validationMessage);
});

input.addEventListener("input", (ev) => {
  let input = ev.target;
  input.classList.remove("is-valid", "is-invalid");
  //   input.classList.add(input.checkValidity() ? "is-valid" : "is-invalid");
  if (input.checkValidity()) {
    input.classList.add("is-valid");
  } else {
    input.classList.add("is-invalid");
  }
});

// seleccionar el boton
// seleccionar al padre form
// form input[required]
// todos pasaron la validacion
// activar o no el boton

// const numeroRandom = Math.ceil(Math.random() * 100);
// // desuso
// let myElement = document.getElementById("id");
// let myElement2 = document.getElementsByClassName("clase");

// let element1 = document.querySelector("#id");
// let element2 = document.querySelector(".class");
// let element3 = document.querySelector("element");
// let element4 = document.querySelector("[name]");

/* MODIFICAR ELEMENTOS */

// let element = document.querySelector("p");
// //agrega o quita una clase
// element.classList.toggle("clase1");
// //agrega o quita una clase segun la condicion
// element.classList.toggle("clase1", condicion);
// //pregunta si tiene la clase
// element.classList.contains("clase1");

// element.classList.add("clase1", "clase2");
// element.classList.remove("clase3");
// //reemplaza una clase por otra
// element.classList.replace("oldClass", "newClass");

// element.style.display = "flex";
// element.style.margin = "20px";
// element.style.backgroundColor = "red";
// element.style.gridTemplate = "1fr / 1fr";

// element.innerText = `string`;
// element.innerHTML = `<span>string</span>`;
