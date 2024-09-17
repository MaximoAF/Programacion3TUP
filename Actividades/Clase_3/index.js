"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
//ejercicio 1
class Coche {
    constructor(marca, modelo, velocidad) {
        this.marca = marca;
        this.modelo = modelo;
        this.velocidad = velocidad;
    }
    acelerar() {
        this.velocidad += 10;
        console.log(`El veiculo acelero a ${this.velocidad}km/h `);
    }
    frenar() {
        if (this.velocidad >= 10) {
            this.velocidad -= 10;
            console.log(`El veiculo freno a ${this.velocidad}km/h `);
        }
        else {
            console.log(`El ya esta frenado`);
        }
    }
    mostrar() {
        console.log(`El coche ${this.marca} ${this.modelo} está a ${this.velocidad}km/h`);
    }
}
const FFiesta = new Coche(`ford`, `fiesta`, 0);
FFiesta.acelerar();
FFiesta.acelerar();
FFiesta.frenar();
FFiesta.mostrar();
function obtenerTodos() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const responser = yield fetch("https://jsonplaceholder.typicode.com/todos");
            if (!responser.ok) {
                throw new Error(`Error: ${responser.status}`);
            }
            const tareas = yield responser.json();
            console.log(`Tareas completadas`);
            tareas.forEach(tarea => {
                if (tarea.completed == true) {
                    console.log(`userId: ${tarea.userId};\nid: ${tarea.id};\ntitle: ${tarea.title};\ncompleted: ${tarea.completed}\n`);
                }
            });
        }
        catch (error) {
            console.error("Hubo un problema con la solicitud:", error);
        }
    });
}
//obtenerTodos();
//Ejercicio 3
//obtenemos el valor top respecto al contenedor
let boxALeft = 0;
let boxATop = 0;
function moveD() {
    const boxA = document.getElementById('absolute-box');
    if (boxALeft >= 90) {
        console.log('sobrepasa las dimenciones(left ${boxALeft}%)');
    }
    else {
        boxALeft += 10;
        boxA.style.left = `${boxALeft}%`;
        console.log(`left ${boxALeft}%`);
    }
}
function moveA() {
    const boxA = document.getElementById('absolute-box');
    if (boxALeft <= 0) {
        console.log('sobrepasa las dimenciones(left ${boxALeft}%)');
    }
    else {
        boxALeft -= 10;
        boxA.style.left = `${boxALeft}%`;
        console.log(`left ${boxALeft}%`);
    }
}
function moveS() {
    const boxA = document.getElementById('absolute-box');
    if (boxATop >= 90) {
        console.log('sobrepasa las dimenciones(left ${boxALeft}%)');
    }
    else {
        boxATop += 10;
        boxA.style.top = `${boxATop}%`;
        console.log(`left ${boxATop}%`);
    }
}
function moveW() {
    const boxA = document.getElementById('absolute-box');
    if (boxATop <= 0) {
        console.log('sobrepasa las dimenciones(Top ${boxALeft}%)');
    }
    else {
        boxATop -= 10;
        boxA.style.top = `${boxATop}%`;
        console.log(`Top ${boxATop}%`);
    }
}
function handleKeyDown(event) {
    if (event.key === 'd' || event.key === 'D' || event.key === 'ArrowRight') {
        moveD();
    }
    if (event.key === 'a' || event.key === 'A' || event.key === 'ArrowLeft') {
        moveA();
    }
    if (event.key === 's' || event.key === 'S' || event.key === 'ArrowDown') {
        moveS();
    }
    if (event.key === 'w' || event.key === 'W' || event.key === 'ArrowUp') {
        moveW();
    }
}
document.addEventListener('keydown', handleKeyDown);
