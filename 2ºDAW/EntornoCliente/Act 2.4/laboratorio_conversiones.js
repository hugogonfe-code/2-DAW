
"use strict";

// HITO 1: Captura de los elementos del DOM
const btnAnalizar = document.getElementById("btnAnalizar");
const txtEntrada = document.getElementById("txtEntrada");
const pantallaSalida = document.getElementById("pantallaSalida");

// Función auxiliar para mostrar los valores correctamente
function mostrarValor(valor) {
    if (valor === undefined) return "undefined";
    if (typeof valor === "number" && Number.isNaN(valor)) return "NaN";
    if (valor === null) return "null";

    if (typeof valor === "string") {
        return JSON.stringify(valor);
    }

    if (typeof valor === "object") {
        return JSON.stringify(valor);
    }

    return String(valor);
}

// Función principal de análisis
function analizarCoercion() {
    const textoEntrada = txtEntrada.value.trim();
    let valorReal;

    // HITO 1: Normalización mediante JSON.parse()
    try {
        valorReal = JSON.parse(textoEntrada);
    } catch (error) {
        if (textoEntrada === "undefined") {
            valorReal = undefined;
        } else if (textoEntrada === "NaN") {
            valorReal = NaN;
        } else {
            valorReal = textoEntrada;
        }
    }

    // HITO 2: Conversiones explícitas
    const comoNumero = Number(valorReal);
    const comoCadena = String(valorReal);
    const comoBooleano = Boolean(valorReal);
    const tipoOriginal = typeof valorReal;

    // HITO 4: Operadores + y -
    const resultadoSuma = valorReal + 10;
    const resultadoResta = valorReal - 10;

    // Construcción del informe
    let informe = `
        <strong>=== INSPECTOR DE CONVERSIONES ===</strong><br><br>

        <strong>Entrada original:</strong>
        <span class="valor-resaltado">${escaparHTML(textoEntrada)}</span><br>

        <strong>Valor interpretado:</strong>
        <span class="valor-resaltado">${escaparHTML(mostrarValor(valorReal))}</span><br>

        <strong>Tipo original (typeof):</strong>
        <span class="valor-resaltado">${tipoOriginal}</span><br><br>

        <strong>=== CONVERSIONES EXPLÍCITAS ===</strong><br>

        <strong>Como Número [Number(x)]:</strong>
        <span class="valor-resaltado">${escaparHTML(mostrarValor(comoNumero))}</span>
        (typeof: ${typeof comoNumero})<br>

        <strong>Como Cadena [String(x)]:</strong>
        <span class="valor-resaltado">${escaparHTML(mostrarValor(comoCadena))}</span>
        (typeof: ${typeof comoCadena})<br>

        <strong>Como Booleano [Boolean(x)]:</strong>
        <span class="valor-resaltado">${comoBooleano}</span>
        (typeof: ${typeof comoBooleano})<br><br>

        <strong>=== SUMA Y RESTA ===</strong><br>

        <strong>valorReal + 10:</strong>
        <span class="valor-resaltado">${escaparHTML(mostrarValor(resultadoSuma))}</span>
        (typeof: ${typeof resultadoSuma})<br>

        <strong>valorReal - 10:</strong>
        <span class="valor-resaltado">${escaparHTML(mostrarValor(resultadoResta))}</span>
        (typeof: ${typeof resultadoResta})<br><br>
    `;

    // HITO 3: Detección de anomalías de coerción
    if (textoEntrada === '"0"' && comoBooleano === true) {
        informe += `
            <span class="alerta">
                <strong>Advertencia:</strong> La cadena "0" es truthy
                porque no está vacía, aunque Number("0") sea 0.
            </span><br><br>
        `;
    }

    if (textoEntrada === "[]" && comoNumero === 0) {
        informe += `
            <span class="alerta">
                <strong>Advertencia:</strong> Una matriz vacía se convierte
                al número cero mediante Number([]).
            </span><br><br>
        `;
    }

    // HITO 5: Control estricto con Number.isNaN()
    if (Number.isNaN(comoNumero)) {
        informe += `
            <span class="alerta">
                <strong>Conversión numérica fallida: No es un número válido</strong>
            </span><br><br>
        `;
    }

    informe += "<strong>=== FIN DEL ANÁLISIS ===</strong>";

    // HITO 6: Mostrar los resultados en el DOM
    pantallaSalida.innerHTML = informe;
}

// Evita interpretar como HTML el texto literal introducido
function escaparHTML(texto) {
    return String(texto).replace(/[&<>"']/g, caracter => {
        const entidades = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;"
        };

        return entidades[caracter];
    });
}

// Escuchador del botón
btnAnalizar.addEventListener("click", analizarCoercion);
