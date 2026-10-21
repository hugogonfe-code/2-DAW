function procesarEvaluacion() {
    const txtA = document.getElementById("campoValor1").value.trim();
    const txtB = document.getElementById("campoValor2").value.trim();
    const visor = document.getElementById("pantallaSalida");

    // Conversión de cadenas a valores reales mediante JSON.parse
    let valA, valB;

    try {
        valA = JSON.parse(txtA);
    } catch (e) {
        valA = txtA;
    }

    try {
        valB = JSON.parse(txtB);
    } catch (e) {
        valB = txtB;
    }

    // Evaluaciones de tipos y operaciones
    const tipoA = typeof valA;
    const tipoB = typeof valB;

    const igualdadAbstracta = valA == valB;
    const igualdadEstricta = valA === valB;

    const operacionOr = valA || valB;
    const operacionNullish = valA ?? valB;

    
    const operacionAnd = valA && valB;
    const negacionBooleana = !!valA;

    
    let avisoPrecision = "";

    if (
        typeof valA === "number" &&
        Number.isInteger(valA) &&
        Math.abs(valA) > Number.MAX_SAFE_INTEGER
    ) {
        avisoPrecision = `
            <p style="color: red; font-weight: bold;">
                Aviso: Precisión comprometida. Utiliza BigInt (sufijo n)
                para operar en este rango
            </p>
        `;
    }

    // Mostrar los resultados en pantalla
    visor.innerHTML = `
        <strong>Operando A:</strong>
        <span class="resaltado">${String(valA)}</span>
        (typeof: ${tipoA})<br>

        <strong>Operando B:</strong>
        <span class="resaltado">${String(valB)}</span>
        (typeof: ${tipoB})<br>

        --------------------------------------------------<br>

        <strong>Igualdad abstracta (A == B):</strong>
        ${igualdadAbstracta}<br>

        <strong>Igualdad estricta (A === B):</strong>
        ${igualdadEstricta}<br>

        <strong>Cortocircuito OR (A || B):</strong>
        ${String(operacionOr)}<br>

        <strong>Coalescencia nula (A ?? B):</strong>
        ${String(operacionNullish)}<br>

        <strong>Operador AND (A && B):</strong>
        ${String(operacionAnd)}<br>

        <strong>Negación booleana (!!A):</strong>
        ${negacionBooleana}<br>

        ${avisoPrecision}
    `;
    
}

// Asociar el evento al botón
document.getElementById("btnEvaluar")
    .addEventListener("click", procesarEvaluacion);

