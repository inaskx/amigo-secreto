// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//Array donde guardaremos los nombres
let amigos = [];
let juegoFinalizado = false;

//Función para agregar amigos desde el input
function agregarAmigo() {
    if (juegoFinalizado) {
        alert("El juego ha terminado. No se pueden agregar más amigos.");
        return;
    }

    let input = document.getElementById("amigo");
    let nombre = input.value.trim();

    // Validar que solo tenga letras y espacios
    let soloLetras = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;
    if (!soloLetras.test(nombre)) {
        alert("Por favor escribe un nombre válido usando solo letras.");
        input.value = ""; //limpiar el input
        input.focus();
        return;
    }

    if (nombre === "") {
        
        alert("El nombre no puede estar vacío.");
        return;

    }

    if (amigos.includes(nombre)) {
        alert("Ese nombre ya fue agregado.");
        return;
    }

    amigos.push(nombre);
    mostrarLista();

    input.value = ""; //limpiar el input
    input.focus();
}

function mostrarLista() { //Función para mostrar la lista de amigos.
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; //Limpiar antes de renderizar.

    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

function sortearAmigo() { //Función para sortear amigos.
    if (amigos.length === 0) {
        alert("Por favor, inserte un nombre.");
        return;
    }

    if (juegoFinalizado) {
        // Solo aquí se muestra el alert si intentan sortear otra vez
        alert("El juego ha finalizado. No se pueden agregar más amigos.");
        return;
    }

    let indice = Math.floor(Math.random() * amigos.length);
    let amigoSecreto = amigos[indice];
    

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<h3>¡El amigo secreto es: ${amigoSecreto}!</h3>`;

    // Finalizar el juego
    juegoFinalizado = true;

    // Desactivar input y botones
    document.getElementById("amigo").disabled = true;
    let botonAgregar = document.querySelector(".button-add");
    let botonSortear = document.querySelector(".button-draw");

    if (botonAgregar) botonAgregar.disabled = true;
    
}


