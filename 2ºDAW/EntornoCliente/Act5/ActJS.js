//Ejercicio 1
function cambiarh1() {
    document.getElementById('h1').innerHTML = 'Contenido cambiado'
    document.getElementById('prueba').innerHTML = 'Contenido cambiado'
}

//Ejercicio 2
function consolelog() {
    console.log('Evento trazado')
}


//Ejercicio 3
function alerta() {
    window.alert('Mensaje de alerta')
}

//Ejercicio 4
function ruso() {
    document.getElementById('idioma').innerHTML = 'Privyet';
}

function ingles() {
    document.getElementById('idioma').innerHTML = 'Hello'
}
function español() {
    document.getElementById('idioma').innerHTML = 'Hola'
}
//Ejercicio 5
function españolconsola() {
    console.log('Hola')
}

function inglesconsola() {
    console.log('Hello')
}

function rusoconsola() {
    console.log('Privyet')
}

//Ejercicio 6 
function ingleswrite() {

    document.write('<h3>Hello</h3> ')
}

function españolwrite() {

    document.write('<h3>Hola</h3>')
}

function rusowrite() {

    document.write('<h3>Priviyet</h3>')
}

//Ejercicio 7
function boton1() {
    console.log(new Date().toLocaleTimeString())
}

function boton2() {

    document.getElementById('estado').innerHTML = 'Sistema activo';
    document.getElementById('estado').style.backgroundColor = 'green';
}

function boton3() {

    alert('El proceso ha concluido')
}

//Ejercicio 8 
function verdadero() {

    document.getElementById('V').style.color = 'green'
}
function falso() {

    document.getElementById('V').style.color = 'red'
}

//Ejercicio 9 
function cambiarImagen() {

    var img = document.getElementById('imagen');


    if (img.src.includes('ANd9GcTX5ndbHAemdtqv1aNNn58EZ-spnMkWSVuz0pd5nzgVBA')) {
        img.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa9AyEB-MyxRfhn7amM15GFqjhFPVXHFZbThH4LOcCWA&s=10';
    }
    else if (img.src.includes('ANd9GcSa9AyEB-MyxRfhn7amM15GFqjhFPVXHFZbThH4LOcCWA')) {
        img.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvI-q_mNwwJW24fMKbh5QG-lSDtdNPQSit85xZjt5Z_A&s=10';
    }
    else if (img.src.includes('ANd9GcRvI-q_mNwwJW24fMKbh5QG-lSDtdNPQSit85xZjt5Z_A')) {
        img.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9I9gawgLUYATHUojgpstEa6NFQetSGmu8SomZ_G439A&s=10';
    }
    else {

        img.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX5ndbHAemdtqv1aNNn58EZ-spnMkWSVuz0pd5nzgVBA&s=10';
    }
}