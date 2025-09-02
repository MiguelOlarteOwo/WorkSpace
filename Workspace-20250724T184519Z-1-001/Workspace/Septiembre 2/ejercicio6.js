const nombres = ["Juan", "Miguel", "Santiago", "Maikol"];
function mostrar() {
for (i = 0; i < 4; i++) {
    const nodohijo = document.createElement("h1");
            nodohijo.innerHTML = nombres[i];
            lista.appendChild(nodohijo);
            const hrimprimir = document.createElement("hr");
            lista.appendChild(hrimprimir);
}

}