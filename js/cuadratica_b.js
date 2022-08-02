var button1 = document.querySelector('button1');
button1.onclick = function() {
    let ecuacion = {A:Number(prompt("Numero A:")), C:Number(prompt("Numero C:"))};
    let raiz = Math.sqrt(- 4 * ecuacion.A * ecuacion.C);
    let divisor = 2 * ecuacion.A
    alert("El valor de X1 es: " + Number((0 + raiz) / divisor) + "\nEl valor de X2 es: " + Number((0 - raiz) / divisor))
}