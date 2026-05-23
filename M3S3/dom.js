const inputNota = document.getElementById("inputNota");
const btnAgregar = document.querySelector("#btnAgregar");
const listaNotas = document.getElementById("listaNotas");

let notas = [];

console.log("Input:", inputNota);
console.log("Boton:", btnAgregar);
console.log("Lista:", listaNotas);

// Guarda el arreglo actual de notas en el navegador.
const guardarNotas = () => {
    localStorage.setItem("notas", JSON.stringify(notas));
    console.log("Notas guardadas:", notas);
};

const crearNotaEnDOM = (textoNota, indice) => {
    const li = document.createElement("li");
    li.dataset.index = indice;

    const span = document.createElement("span");
    span.textContent = textoNota;

    const btnEliminar = document.createElement("button");
    btnEliminar.textContent = "Eliminar";

    btnEliminar.addEventListener("click", () => {
        const indiceNota = Number(li.dataset.index);

        notas.splice(indiceNota, 1);
        listaNotas.removeChild(li);
        guardarNotas();
        renderizarNotas();

        console.log("Se elimino la nota:", textoNota);
    });

    li.appendChild(span);
    li.appendChild(btnEliminar);
    listaNotas.appendChild(li);
};

const renderizarNotas = () => {
    listaNotas.textContent = "";

    notas.forEach((nota, indice) => {
        crearNotaEnDOM(nota, indice);
    });
};

const cargarNotas = () => {
    const notasGuardadas = localStorage.getItem("notas");

    if (notasGuardadas) {
        notas = JSON.parse(notasGuardadas);
        renderizarNotas();
    }

    console.log(`Se cargaron ${notas.length} notas.`);
};

const agregarNota = () => {
    const textoNota = inputNota.value.trim();

    if (textoNota === "") {
        alert("Escribe una nota antes de agregarla.");
        console.warn("No se agrego la nota porque el input esta vacio.");
        inputNota.focus();
        return;
    }

    notas.push(textoNota);
    crearNotaEnDOM(textoNota, notas.length - 1);
    guardarNotas();

    inputNota.value = "";
    inputNota.focus();

    console.log("Se agrego la nota:", textoNota);
};

btnAgregar.addEventListener("click", agregarNota);

cargarNotas();
