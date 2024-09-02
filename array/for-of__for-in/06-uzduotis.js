// 24.Susikurkite masyvą sandėlio likučiams saugoti (kiekvienas atskiras narys masyve
//   yra atskiros prekės likutis). Su kiekvienu likučiu paskaičiuokite per kiek dienų bus
//   išpirktas, jei per dieną vidutiniškai yra nuperkami 5 vnt. Išveskite atsakymus
//   atskirose eilutėse, nurodant kiek yra dabar ir kiek dienų užteks jo. Pavyzdžiui, jeigu
//   yra likučiai 74, 54 ir 32, tai 74 vnt. prekės užteks maždaug 15 dienų, 54 vnt. prekės
//   užteks maždaug 11 dienų ir t.t.

const sandelioLikuciai = [123, 456, 7234, 20, 5];
for (const preke in sandelioLikuciai) {
  console.log(
    `${+preke + 1}-os prekes uzteks mazdaug: ${
      sandelioLikuciai[preke] / 5
    } dienom`
  );
}

console.log(`
  ========================
  `);

sandelioLikuciai.forEach((preke, i) =>
  console.log(+i + 1, "-os prekes uzteks mazdaug:", preke / 5)
);
console.log(`
  ===================
  `);

// 25.Susikurkite masyvą studento pažymiams saugoti. Užpildykite šį masyvą atsitiktinai
// sugeneruotais pažymiais. Raskite vidurkį. Raskite kiek neigiamų pažymių studentas
// gavo (mažesnių nei 5). Išveskite visus teigiamus pažymius, gautą vidurkį ir neigiamų
// pažymių kiekį.

const pazymiai = [];
for (let index = 0; index < 10; index++) {
  let atsitiktinis = Math.floor(Math.random() * 10);
  pazymiai.push(atsitiktinis);
}
console.log(pazymiai);

let suma = 0;
let neigiamuKikeis = 0;
for (const pazymys of pazymiai) {
  suma += pazymys;
  if (pazymys < 5) {
    neigiamuKikeis++;
    continue;
  }
  if (pazymys >= 5) {
    console.log("teigiamas pazymys: ", pazymys);
  }
}
console.log(suma, "vidurkis:", suma / pazymiai.length);
console.log(`neigiamu kiekis: ${neigiamuKikeis}`);
console.log(`
  
=============
`);

let pazSuma = 0;
let neigiamuKiek = 0;
pazymiai.forEach((pazymys, i) => {
  if (pazymys >= 5) {
    console.log("pazymis teigiamas:", pazymys);
  } else {
    neigiamuKiek++;
    console.log("pazymys NEIGIAMAS!!!!:", pazymys);
  }
  pazSuma += pazymys;
  // pazymys >= 5
  //   ? console.log("pazymis teigiamas:", pazymys)
  //   : console.log("pazymys NEIGIAMAS!!!!:", pazymys);
  // pazSuma += pazymys;
});
console.log(`neigiamu pazymiu: ${neigiamuKiek}
vidurkis: ${pazSuma / pazymiai.length}`);

// console.log(pazSuma / pazymiai.length);
