import calculadora from "./calculadora.js";

const cadena = document.querySelector("#cadena");
const form = document.querySelector("#sumar-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const valor = cadena.value;
  const resultado = calculadora(valor);

  div.innerHTML = "<p>" + resultado + "</p>";
});
