function suma(){
const elemento1 = document.getElementById("suma1");
const elemento2 = document.getElementById("suma2");
const resultado = document.getElementById("resultadoSuma");

resultado.innerHTML = parseFloat(elemento1.value) + parseFloat(elemento2.value);


}