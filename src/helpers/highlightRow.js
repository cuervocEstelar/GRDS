const highlightRow = (elementId) => {
    const foundElement = document.getElementById(elementId);

    if (foundElement) {
        console.log(`Elemento con ID "${elementId}" encontrado.`);

        // Obtener la fila (tr) del elemento encontrado
        const row = foundElement.closest("tr");

        if (row) {
            // Obtener la tabla a la que pertenece la fila
            const table = row.closest("table");

            if (table) {
                // Eliminar todas las filas excepto la seleccionada
                table.querySelectorAll("tr").forEach(tr => {
                    if (tr !== row) {
                        tr.remove();
                    }
                });
            }

            // Resaltar la fila seleccionada
            row.classList.add("highlight");
        }
    } else {
        console.log(`Elemento con ID "${elementId}" no encontrado.`);
    }
};

export default highlightRow;
