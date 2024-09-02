// 22.Susikurkite masyvą automobilių markėms saugoti ir užpildykite jį
// duomenimis. Išveskite kiekvieną automobilį atskiroje eilutėje, nurodant
// kiek raidžių sudaro jo pavadinimą.

const cars = ["BWM", "VW", "AUDi"];
for (const brand of cars) {
  console.log(brand, brand.length);
}
console.log(`
  ==================
  `);

cars.forEach((car) => console.log(car, car.length));
console.log();

// 23.Susikurkite masyvą įvykusių klaidų kodams saugoti ir užpildykite šį masyvą
// duomenimis. Tuomet išveskite visas sukauptas klaidas administratoriui,
// taip, kad jis suprastų kas per klaidos įvyko. Pavyzdžiui, jeigu yra kodas
// "ui87", tai kad išvestų "Grafinės sąsajos klaida navigacijoje", arba jeigu
// kodas "sys12", tuomet "Trūksta operatyviosios atminties sistemoje" ir pan.

const klaidos = ["ui87", "sys12"];
// for (const klaida of klaidos) {
//   if (klaida === "ui87") {
//     console.log("Grafines sasajos klaida navigacijoje");
//     continue;
//   }
//   if (klaida === "sys12") {
//     console.log("Truksta operatyviosios atminties sistemoje");
//     continue;
//   }
// }
klaidos.forEach((klaida) => {
  klaida == "ui87"
    ? console.log("Grafines sasajos klaida navigacijoje")
    : console.log("klaidos nera");

  klaida == "ss12" && console.log("Truksta operatyviosios atminties sistemoje");
  console.log(
    klaida == "ui87" ? "Grafines sasajos klaida navigacijoje" : "klaidos nera"
  );
});
