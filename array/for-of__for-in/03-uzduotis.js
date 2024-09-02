// 19.Susikurkite masyvą studento pažymiams saugoti. Užpildykite šį masyvą
// duomenimis. Raskite pažymių vidurkį. Išveskite visus šiuos pažymius ir
// gautą vidurkį.

const pazymiai = [10, 5, 9, 2, 6, 10, 7];
let suma = 0;
for (const balas of pazymiai) {
  suma += balas;
}
console.log(
  "Studento pazymiai:",
  pazymiai,
  "pazymiu vidurkis:",
  suma / pazymiai.length
);

console.log(`
  =================
  `);
let result =
  pazymiai.reduce((res, number) => (res += number), 0) / pazymiai.length;
console.log(pazymiai, "pazymiu vidurkis:", result);
