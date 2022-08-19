

function AngulosTriangulo() {

let Cateto = { 
    Alpha:prompt("Cateto A: "), 
    Beta:prompt("Cateto B: ") 
};

let Hipotenusa = Math.sqrt(Cateto.Alpha ** 2 + Cateto.Beta ** 2);
alert("Cateto A = " + Cateto.Alpha + ", Cateto B = " + Cateto.Beta + ", Hipotenusa = " + Hipotenusa);
let Angulo = {
    Alpha: Math.asin(Cateto.Beta / Hipotenusa) * 180 / Math.PI,
}

Angulo.Beta = 90 - Angulo.Alpha
alert("El angulo alpha es: " + Math.round(Angulo.Alpha) + ", y el angulo beta es: " + Math.round(Angulo.Beta) + ".");
}