 if (datos !== null && typeof datos === "object") {
        if (typeof datos.precioBase === "number" && datos.precioBase > 0) {
            if (["general", "desempleado", "socio"].includes(datos.tipoEstudiante)) {
                let descuentoPorcentaje = 0;
                
                if (datos.tipoEstudiante === "desempleado") {
                    descuentoPorcentaje = 0.30;
                } else {
                    if (datos.tipoEstudiante === "socio") {
                        descuentoPorcentaje = 0.15;
                    }
                }

                let total = datos.precioBase * (1 - descuentoPorcentaje);

                if (datos.codigoDescuento === "WEB2026") {
                    total = total - 10;
                }

                if (total < 0) {
                    total = 0;
                }

                resultado = { valido: true, total: total };
            } else {
                resultado = { valido: false, error: "Tipo de estudiante no reconocido." };
            }
        } else {
            resultado = { valido: false, error: "El precio base debe ser un número positivo." };
        }
    } else {
        resultado = { valido: false, error: "Parámetros de matrícula inválidos." };
    }

    return resultado;

