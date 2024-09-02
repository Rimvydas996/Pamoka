function kita() {
  console.log(`
    ==================kita uzduotis===========
    `);
}
function isvedimas(vardas, textas) {
  console.log(`vardas ${vardas} kodel: ${textas}`);
}
isvedimas("Rimvydas", "dsadasd");
isvedimas("Rimvydas", "dsadasd");
isvedimas("Rimvydas", "dsadasd");

// kita
kita();
function eilerastis() {
  console.log(`pirma
antra
trecia
ketvirta
penkta
`);
}
eilerastis();
eilerastis();
eilerastis();
eilerastis();

// kita
kita();
function pirma() {
  console.log("pirma funkcija");
}
function antra() {
  console.log("antra funkcija");
}
function trecia() {
  console.log("trecia funkcija");
}
pirma();
antra();
trecia();

// kita
kita();
function primaEilute() {
  console.log("pirma eilute");
}
function antraEilute() {
  console.log("antra eilute");
}
function treciaFunkcija() {
  primaEilute();
  antraEilute();
}

treciaFunkcija();
