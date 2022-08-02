var button2 = document.querySelector('button2');
button2.onclick = function() {
    let ecuacion = {A:Number(prompt("Numero A:")), B:Number(prompt("Numero B:")), C:Number(prompt("Numero C:"))};
    let raiz = Math.sqrt(Math.pow(ecuacion.B,2) - 4 * ecuacion.A * ecuacion.C);
    let divisor = 2 * ecuacion.A
    alert("El valor de X1 es: " + Number((-ecuacion.B + raiz) / divisor) + "\nEl valor de X2 es: " + Number((-ecuacion.B - raiz) / divisor))
}
