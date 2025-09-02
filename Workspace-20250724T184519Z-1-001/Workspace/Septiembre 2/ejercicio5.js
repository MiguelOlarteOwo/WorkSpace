function imprimir() {
    const lista = document.getElementById("lista");
    for (i = 1; i <= 100; i++) {
        
            const nodohijo = document.createElement("h1");
            nodohijo.innerHTML = i;
            lista.appendChild(nodohijo);
            const hrimprimir = document.createElement("hr");
            lista.appendChild(hrimprimir);
            
} }