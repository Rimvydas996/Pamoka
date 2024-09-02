const arrayPirmas = [];
arrayPirmas.push(Math.floor(Math.random() * 100));
arrayPirmas.push(Math.floor(Math.random() * 100));
arrayPirmas.push(Math.floor(Math.random() * 100));
arrayPirmas.push(Math.floor(Math.random() * 100));
arrayPirmas.push(Math.floor(Math.random() * 100));
arrayPirmas.push(Math.floor(Math.random() * 100));

console.log(arrayPirmas);

console.log(`
=============
antras
=============
    `);

const arrayStudentasPirmas = [];
arrayStudentasPirmas.push(Math.floor(Math.random() * 10));
arrayStudentasPirmas.push(Math.floor(Math.random() * 10));
arrayStudentasPirmas.push(Math.floor(Math.random() * 10));

const arrayStudentasAntras = [];
arrayStudentasAntras.push(Math.floor(Math.random() * 10));
arrayStudentasAntras.push(Math.floor(Math.random() * 10));
arrayStudentasAntras.push(Math.floor(Math.random() * 10));

let vidurkisPirmas =
  (arrayStudentasPirmas[0] +
    arrayStudentasPirmas[1] +
    arrayStudentasPirmas[2]) /
  arrayStudentasPirmas.length;
let vidurkisAntras =
  (arrayStudentasAntras[0] +
    arrayStudentasAntras[1] +
    arrayStudentasAntras[2]) /
  arrayStudentasAntras.length;
if (vidurkisPirmas > vidurkisAntras) {
  console.log("Pirmo studento vidurkis didesnis");
} else if (vidurkisAntras > vidurkisPirmas) {
  console.log("Antro studento vidurkis didesnis");
} else {
  console.log("vidurkiai vienodi");
}
console.log("Pirmo vidurkis:", vidurkisPirmas);
console.log("Antro vidurkis:", vidurkisAntras);
