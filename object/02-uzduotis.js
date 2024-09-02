const aktoriai = [
  "pirmasVardas",
  "antrasVardas",
  "treciasVardas",
  "ketvirtasVardas",
];
let visi = 0;
const filmas = {
  pavadinimas: "Furiosa: A Mad Max Saga",
  rezisierius: "Vardenis Pavardenis",
  biudzetas: 30,
  uzdarbis: 300,
  zanras: "veiksmo",
  trukme: 1.5,
  metai: 2014,
  visiAktoriai: aktoriai,
};
for (let key in filmas) {
  console.log(key, ":", filmas[key]);
}
for (let a of aktoriai) {
  visi++;
}
let pelnas = filmas.uzdarbis - filmas.biudzetas;
let metuFilmui = new Date(Date.now()).getFullYear() - filmas.metai;
console.log(`
    Sio filmo pelnas: ${pelnas}
    dalivavo aktoriu: ${visi}
    filmas ${metuFilmui} metu senumo
    `);
