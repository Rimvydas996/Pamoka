// 13.Susikurkite funkciją, kuri per argumentus priimtų žodžių masyvą. Funkcijoje
// išveskite visus žodžius iš masyvo atskirose eilutėse, nurodant žodžio ilgį
// (simbolių kiekį). Už funkcijos ribų susikurkite žodžių masyvą ir užpildykite jį
// duomenimis. Iškvieskite sukurtą funkciją perduodant turimą masyvą.

function array1(masyvas) {
  for (let i = 0; i < masyvas.length; i++) {
    console.log(masyvas[i], masyvas[i].length);
  }
  console.log();
}
let array2 = ["vardas", "pavarde", "miestas"];
array1(array2);

console.log("====================================");
// 14.Susikurkite funkciją, kuri per argumentus priimtų skaičių masyvą. Funkcija
// turėtų atspausdinti visus skaičius, šalia jų išvedant to skaičiaus kvadratą ir jį
// padalintą iš dviejų. Už funkcijos ribų susikurkite du skaičių masyvus ir
// užpildykite jį duomenimis. Iškvieskite funkciją du kartus, kiekvieną kartą
// perduodant skirtingą turimą masyvą.
function array3(masyvas) {
  for (const number of masyvas) {
    console.log(number, number ** 2, number / 2);
  }
}
const array1Skaiciu = [1, 2, 3];
const array2Skaiciu = [4, 5, 6];
array3(array1Skaiciu);
array3(array2Skaiciu);
