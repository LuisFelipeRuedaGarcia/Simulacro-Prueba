import {getVet} from "../apiConnection/APIs.js"

(function (){
    document.addEventListener('DOMContentLoaded' , showPets)

    async function showPets() {
        const miniVet = await getVet();
        console.log(miniVet);
        const cuerpo = document.querySelector('tbody')
        miniVet.forEach( veterinarias => {
            const {mascota , nombrePropietario , numeroPropietario} = veterinarias
            const row = document.createElement('tr')
            row.innerHTML =  `
            
            <td>
                ${mascota[0].id}
            </td>
            <td>
                <img src="${mascota[0].imagen}" alt="..." class="cuenta">
            </td>
            <td>
                ${mascota[0].nombre}
            </td>
            <td>
                ${mascota[0].tipo}
            </td>
            <td>
                ${mascota[0].años}
            </td>
            <td>
                ${nombrePropietario}
            </td>
            <td>
                ${numeroPropietario}
            </td>
            <td>
                <button type="button" class="btn btn-warning">Borrar</button>
            </td>
            `
            cuerpo.appendChild(row);
        });
    }
})()