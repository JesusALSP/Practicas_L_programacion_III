

const formulario = document.querySelector('form');


/*Funcion para extraer todos los datos del formulario y convertirlos en formato JSON */

const procesaTodo = (event) => {
   
    event.preventDefault();
   
    const datos = new FormData(event.target);

 
    const datosCompletos = Object.fromEntries(datos.entries());
    console.log(JSON.stringify(datosCompletos));

}


formulario.addEventListener('submit', procesaTodo);
