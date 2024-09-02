const studentas1 = {
  vardas: "Jonas",
  pavarde: "Jonaitis",
  studijuPavadinimas: "studijos1",
  pazymiai: [10, 8, 6],
};
const studentas2 = {
  vardas: "Petras",
  pavarde: "Petraitis",
  studijuPavadinimas: "studijos1",
  pazymiai: [10, 10, 10],
};
let suma1 = 0;
let suma2 = 0;
for (const pazymys of studentas1.pazymiai) {
  suma1 += pazymys;
}
for (const pazymys of studentas2.pazymiai) {
  suma2 += pazymys;
}
const vidurkis1 = suma1 / studentas1.pazymiai.length;
const vidurkis2 = suma2 / studentas2.pazymiai.length;
console.log(
  "Primo studento informacija:",
  studentas1,
  "Jo pazymiu vidurkis:",
  vidurkis1,
  "Antro studento informacija:",
  studentas2,
  "Jo pazymiu vidurkis:",
  vidurkis2
);
if (vidurkis1 > vidurkis2) {
  console.log(studentas1.vardas, studentas1.pavarde);
} else if (vidurkis2 > vidurkis1) {
  console.log(studentas2.vardas, studentas2.pavarde);
} else {
  console.log("vidurkiai vienodi");
}
