import { agregarVet } from "../apiConnection/APIs.js";

const formulario = document.querySelector('#formulario')
formulario.addEventListener('submit' , (e)=>{
    agregarPropietario(e);
})


function agregarPropietario(e) {
    e.preventDefault();
    const nombre = document.querySelector('#nombreMascota').value;
    const tipo = document.querySelector('#tipoMascota').value;
    const edad = document.querySelector('#edadMascota').value;
    const propietario = document.querySelector('#propietarioMascota').value;
    const numero = document.querySelector('#numeroMascota').value;

    const dueno = {
        nombre,
        tipo,
        edad,
        propietario,
        numero
    }

    if (validate(dueno)) {
        alert ("Todos los campos son obligatorios");
        return;
    }
    agregarVet(dueno);

    
}

function validate(prop) {
        return !Object.values(prop).every(dueno => dueno !== '');
}