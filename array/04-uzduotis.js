const arrayPirmas = [];
for (i = 0; i < 10; i++) {
  arrayPirmas.push(Math.round(Math.random(1) * 10));
}
for (i = 0; i < arrayPirmas.length; i++) {
  if (arrayPirmas[i] > 5)
    console.log(`skaicius didesnis uz 5: ${arrayPirmas[i]}`);
}
console.log(`masyvas ${arrayPirmas}`);

console.log(`
===================== antras ================
    `);

const arrayAntras = [];
let antrasSum = 0;
for (i = 0; i < 100; i++) {
  arrayAntras.push(Math.round(Math.random(1) * 10));
}
for (i = 0; i < arrayAntras.length; i++) {
  if (arrayAntras[i] % 4 === 0) {
    antrasSum += arrayAntras[i];
    console.log(arrayAntras[i]);
  }
}
console.log(`
visas masyvas: ${arrayAntras}
suma: ${antrasSum}
`);

console.log(`
===================== trecias ================
        `);

const arrayTrecias = [];
let pazymiuSuma = 0;
for (i = 0; i < 5; i++) {
  arrayTrecias.push(Math.floor(Math.random(1) * 10));
}
for (const balas of arrayTrecias) {
  pazymiuSuma += balas;
  console.log(`pazymis: ${balas}`);
}
let vidurkis = pazymiuSuma / arrayTrecias.length;
console.log(`vidurkis: ${vidurkis}`);

console.log(`
===================== ketvirtas ================
            `);

for (const balas of arrayTrecias) {
  if (vidurkis < balas) {
    console.log(`pazymis didesnis uz vidurki: ${balas}`);
  }
}
