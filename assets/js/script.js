
let listaNombresGastos = [];
let listaValoresGastos = [];

let nombreGasto = document.getElementById('nombreGasto');
let valorGasto = document.getElementById('valorGasto');
let botonGuardar = document.getElementById('botonGuardar');
let formulario = document.getElementById('botonFormulario');

let actualizando = null;


//This function will be work 
function clickBoton(){
    if(Number(valorGasto.value) >= 150){
        if(confirm("Esta seguro de agregar este valor?")){
            listaNombresGastos.push(nombreGasto.value);
            listaValoresGastos.push(valorGasto.value);
        }
    }else{
        listaNombresGastos.push(nombreGasto.value);
            listaValoresGastos.push(valorGasto.value);
    }


    actualizarListaGastos();
}

function actualizarListaGastos(){
    const listaElementos = document.getElementById('listaDeGastos');
    const totalElementos = document.getElementById('totalGastos');
    let htmlLista = '';
    let totalGastos = 0;

    listaNombresGastos.forEach((elemento, posicion)=>{
        const valorGasto = Number(listaValoresGastos[posicion]);

        htmlLista +=`<li>${elemento} - USD ${valorGasto}
                    <button onclick = "eliminarGasto(${posicion});">Eliminar</button>
                    <button onclick = "modificarGasto(${posicion});">Modificar</button>
                    </li>`;

        totalGastos += Number(valorGasto);
    });


    listaElementos.innerHTML = htmlLista;
    totalElementos.innerHTML = totalGastos.toFixed(2);
    limpiar();
}

function limpiar(){
    document.getElementById('nombreGasto').value = "";
    document.getElementById('valorGasto').value= "";

}

function eliminarGasto(posicion){
    listaNombresGastos.splice(posicion,1);
    listaValoresGastos.splice(posicion,1);
    actualizarListaGastos();

}

function modificarGasto(posicion){
    formulario.style.display = 'none';
    botonGuardar.style.display ='block';

    actualizando = posicion;

    nombreGasto.value = listaNombresGastos[posicion];
    valorGasto.value= Number(listaValoresGastos[posicion]);
}

function guardar(){
    formulario.style.display = 'block';
    botonGuardar.style.display ='none';

    // listaNombresGastos[actualizando] = nombreGasto.value;
    // listaValoresGastos[actualizando] = Number(valorGasto.value);

    limpiar();

    actualizarListaGastos();

}