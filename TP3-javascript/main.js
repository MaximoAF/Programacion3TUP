let a = 5;
let b = 7;
let c = a+b;
console.log("la suma de a (",a,") + b (",b,") es ",c); 
//ejercicio 3
let nombre = prompt("como es tu nombre?");
console.log("hola ",nombre);
//operadores númericos
//ejercicio 1
let numa = prompt("ingresa un valor a: ");
let numb = prompt("ingresa un valor b: ");
let numc = prompt("ingresa un valor c: ");
if(numa>numb && numa>numc){
    console.log(numa," es mayor que ",numb," y mayor que ",numc)
}else if(numb>numa && numb>numc){
    console.log(numb," es mayor que ",numa," y mayor que ",numc)
}else if(numc>numa && numc>numb){
    console.log(numc," es mayor que ",numb," y mayor que ",numa)
}else if(numa==numb!=numc || numb==numc!=numa ||numc==numa!=numb){
    console.log("hay dos numeros iguales: ",numa," ",numb," ",numc)
}else if(numa==numb==numc){
    console.log("los tres numeros ingresados son iguales: ",numa," ",numb," ",numc)
}
//ejercicio 2
let numparimpar = prompt("ingrese un numero: ");
if (numparimpar % 2 == 0){
    console.log("el numero ingresado es par")
}else{console.log("el numero ingresado es impar")}
//operadores de asignación y bucles
//ejercicio 1
let contador = 10;
while(contador > 0){
    console.log(contador)
    contador-=1
    if(contador=0){
        console.log(contador)
    }
}
//ejercicio 2
let numcien 
do {
    numcien= prompt("ingrese un numero mayor a 100: ")
    if(numcien<100){console.log("el numero ingresado es menor a 100")}
}while(numcien<100);
//funciones
//ejercicio 1
function esPar(){
    let num = prompt("ingrese un numero: ")
    if(num%2==0){
        return true;
    }else{
        return false
    }
}
esPar();
console.log("el numero ingresado es par: ",esPar);
//ejercicio 2
function convertirCelsiusAFarenheit(){
let c = prompt("Ingrese la temperatura en Celsius que quiere convertir a Farenheit: ")
f = c * 1.8 + 32
console.log("la temperatura ingresada en Farenheit es: ",f)
}
convertirCelsiusAFarenheit();
//objetos
//ejercicio 1
let persona = {
    nombre: "Juan",
    edad: 30,
    ciudad: "Madrid",
    cambiarCiudad: function(nuevaCiudad) {
      this.ciudad = nuevaCiudad;
    }
  };
  console.log("Antes de cambiar la ciudad:", persona);
  persona.cambiarCiudad("Barcelona");
  console.log("Después de cambiar la ciudad:", persona);
//ejercicio 2
// Define el objeto libro
let libro = {
    titulo: "la larga marcha",
    autor: "Stephen King",
    año: 1979,
    esAntiguo: function() {
      let añoActual = new Date().getFullYear();
      let edadLibro = añoActual - this.año;
      
      if (edadLibro > 10) {
        console.log(`${this.titulo} es un libro antiguo.`);
      } else {
        console.log(`${this.titulo} es un libro reciente.`);
      }
    }
  };
  libro.esAntiguo();
//Arrays
//ejercicio 1
let numeros=[1,2,3,4,5,6,7,8,9,10];
let numerosMultiplicados=[];
for(let i=0;i<numeros.length;i++){
  numerosMultiplicados.push(numeros[i]*2);
}
console.log("Array original:",numeros);
console.log("Array con números multiplicados por 2:",numerosMultiplicados);
//ejercicio 2
let pares=[];
for(let i=1;pares.length<10;i++){
  if(i%2===0){
    pares.push(i);
  }
}
console.log(pares);
//introduccion al DOM
//ejercicio 1
function cambiarColor() {
    let elementosP = document.querySelectorAll('p');
    elementosP.forEach(p => p.style.color = 'blue');
}
//ejercicio 2
function mostrarAlerta() {
    let valor = document.getElementById('campoTexto').value;
    alert(valor);
}
//eventos en DOM
//ejercicio 1
let listaItems = document.querySelectorAll('#miLista li');
listaItems.forEach(item => {
    item.addEventListener('click', () => {
        console.log(item.textContent);
    });
});
//ejercicio 2 
function deshabilitarCampo() {
    document.getElementById('campoTexto').disabled = true;
}

function habilitarCampo() {
    document.getElementById('campoTexto').disabled = false;
}
//localStorage
//ejercicio 1
document.addEventListener('DOMContentLoaded', () => {
    mostrarCorreoGuardado();
    document.getElementById('miFormulario').addEventListener('submit', function(event) {
        event.preventDefault();
        let correo = document.getElementById('correo').value;
        localStorage.setItem('correo', correo);
        mostrarCorreoGuardado();
    });
    document.getElementById('eliminarCorreo').addEventListener('click', () => {
        localStorage.removeItem('correo');
        mostrarCorreoGuardado();
    });
});
function mostrarCorreoGuardado() {
    let correo = localStorage.getItem('correo');
    let divCorreo = document.getElementById('correoGuardado');
    let botonEliminar = document.getElementById('eliminarCorreo');
    if (correo) {
        divCorreo.textContent = `Correo guardado: ${correo}`;
        botonEliminar.style.display = 'inline';
    } else {
        divCorreo.textContent = '';
        botonEliminar.style.display = 'none';
    }
}
  