const $form = document.querySelector('#carta-a-santa');

const nombre = $form.nombre.value;
//nombre = document.querySelector('[name=nombre]').value;
//nombre = document.querySelector('#nombre').value;

const ciudad = $form.ciudad.value;
const comportamiento = $form.comportamiento.value;
const descripcionRegalo = $form['descripcion-regalo'].value;

//console.log(nombre);
console.log(ciudad);
//console.log(comportamiento);
//console.log(descripcionRegalo);

function validarNombre(nombre){
    if(nombre.length === 0){
        return "Este campo debe tener al menos 1 caracter";
    }
    if(nombre.length >= 50){
        return "Este campo debe tener menos de 50 caracteres";
    }
    //si no, devuelvo string vacio (sin error)
    return "";
}

function validarCiudad(ciudad){
    if(ciudad.length === 0){ // ciudad === ''
        return 'El campo ciudad no puede estar vacio';
    }
    return '';
}

function validarDescripcionRegalo(descripcionRegalo){
    if(descripcionRegalo.length >= 100){
        return 'El campo descripcion es muy largo';
    }
    if(descripcionRegalo.length === 0){
        return 'El campo descripcion no puede estar vacio';
    }

    return '';
}