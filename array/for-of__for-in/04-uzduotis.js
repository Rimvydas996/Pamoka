// 20.Susikurkite masyvą kelionės nuovažiuotiems kilometrams saugoti ir
// užpildykite jį duomenimis (pvz 120, 145, 90 ir pan., kur kiekvienas skaičius
// reiškia kiek km kurią dieną buvo nuvažiuota). Išveskite visus nuvažiuotus
// per dieną kilometrus, kurie yra didesni nei 150.

const kelione = [120, 300, 145, 90, 200];
for (const km of kelione) {
  if (km > 150) {
    console.log(km);
  }
}
console.log(`
===================
  `);

const more150 = kelione.filter((km) => km > 150);
console.log(more150);

console.log(`
===================
  `);
// 21.Susikurkite masyvą failų pavadinimams saugoti, užpildykite jį duomenimis.
// Jums reikės nuskaityti šiuos failus, todėl pirma norėsite patikrinti su kuriais
// galite dirbti. Išveskite į ekraną tik tuos failus, kurių galūnė yra .txt
// arba .json tipo.

const fileNames = ["safgdsd.txt", "arbata.jpg", "indas.json", "sada.mp3"];
for (const file of fileNames) {
  if (file.endsWith(".txt") || file.endsWith(".json")) {
    console.log(file);
  }
}

console.log(`
  =============
  `);
const filterFiles = fileNames.filter(
  (filename) => filename.endsWith(".txt") || filename.endsWith(".json")
);
console.log(filterFiles);
