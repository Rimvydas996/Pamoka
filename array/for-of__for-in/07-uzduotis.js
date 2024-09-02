// 26.Susikurkite du pažymių masyvus, kur vienas masyvas reikš vieno studento
// pažymius, kitas masyvas kito studento pažymius. Raskite kiekvieno
// studento pažymių vidurkį. Išveskite abiejų studentų pažymius, vidurkius ir
// nurodykite kuris studentas turi didesnį vidurkį.

const studentas1 = [];
const studentas2 = [];
for (i = 0; i <= 10; i++) {
  let random = Math.floor(Math.random() * 10);
  studentas1.push(random);
}
for (i = 0; i <= 10; i++) {
  let random = Math.floor(Math.random() * 10);
  studentas2.push(random);
}

let suma1 = 0;
let suma2 = 0;

for (const balas of studentas1) {
  suma1 += balas;
}
for (const balas of studentas2) {
  suma2 += balas;
}

let vidurkis1 = suma1 / studentas1.length;
let vidurkis2 = suma2 / studentas2.length;
console.log(studentas1, studentas2);
console.log("==========================");
console.log(vidurkis1, vidurkis2);
console.log(suma1, suma2);
if (vidurkis1 > vidurkis2) {
  console.log("studento pirmo vidukis didesnis");
}
if (vidurkis2 > vidurkis1) {
  console.log("antro studento vidurkis didesnis");
}

console.log(`
  =====================
  `);
//=======================
let sum1 = 0;
let sum2 = 0;
studentas1.forEach((pazymys) => (sum1 += pazymys));
studentas2.forEach((pazymys) => (sum2 += pazymys));

function vidurkis(suma, kiekis) {
  return Math.round((suma / kiekis.length) * 10) / 10;
}

const avg1 = vidurkis(sum1, studentas1);
const avg2 = vidurkis(sum2, studentas2);

console.log(`
Studento pirmo pazymiai: ${studentas1}
Studento pirmo vidurkis: ${avg1}
Studento antro pazymiai: ${studentas2}
Studento antro vidurkis: ${avg2}`);

if (avg1 > avg2) {
  console.log("Studento pirmo vidurkis didesnis");
} else if (avg1 < avg2) {
  console.log("studento antro vidurkis didesnis");
} else {
  console.log("vidurkiai vienodi");
}

console.log(`
  =====================
    `);
// 27.Susikurkite masyvą norimiems žodžiams saugoti. Užpildykite šį masyvą
//
// duomenimis. Į kitą masyvą atrinkite tuos žodžius, kurie yra trumpi (sudaro
// mažiau nei 5 raidės). Išveskite pradinius duomenis ir atrinktus.
const array1 = ["sadasdasd", "dsa", "sadasdasd", "saddas", "aa", "asdasdasd"];
const array2 = [];
for (const word of array1) {
  if (word.length < 5) {
    array2.push(word);
  }
}
console.log(array2);

console.log(`
  =====================
    `);
//===========================

const array3 = [];
array1.forEach((wordLen, i) => wordLen.length < 5 && array3.push(wordLen));
console.log(array3);
