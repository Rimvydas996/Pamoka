// 18.Susikurkite masyvą pirkinių sąrašui saugoti ir užpildykite jį duomenimis.
// Išveskite kiek pirkinių yra šiame sąraše. Taip pat, išveskite kiekvieną įrašą
// atskiroje eilutėje, prieš kiekvieną parašant brūkšniuką ar kokį kitą skirtuką.

const sarasas = ["pasta", "makaronai", "druksa", "cukrus"];
console.log("sarasa sudaro:", sarasas.length, "pirkiniai");
for (const preke of sarasas) {
  console.log("-", preke);
}

console.log(`
  ==================
  `);
const pirkiniai = [];
pirkiniai.push("pasta", "makaronai", "druksa", "cukrus");

pirkiniai.forEach((pirkinys) => {
  console.log(pirkinys, "-", pirkinys.length);
});
