function Positivo() {
    const num = document.getElementById('numero');
    const numeroint = parseInt(num.value);
    if (numeroint > 0 && numeroint % 2 == 0) {
        alert("El numero es positivo y par");
    } else if (numeroint < 0 && numeroint % 2 === 0) {
        alert("El numero es negativo y par");
    } else if (numeroint > 0 && numeroint % 2 !== 0) {
        alert("El numero es positivo e impar");
    } else if (numeroint < 0 && numeroint % 2 !== 0) {
        alert("El numero es negativo e impar");
    }
}

