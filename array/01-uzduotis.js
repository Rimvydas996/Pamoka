const masyvas = [12, 10, 20, 2, 10, 16];
console.log(
  masyvas[0],
  masyvas[masyvas.length - 1],
  "betkokie skaiciai",
  masyvas[3],
  "masyvo ilgis",
  masyvas.length
);

console.log(`
=====================
antras
=====================
    `);

const masyvas_antras = [12, 16, 17, 18, 1, 2, 3, 4, 5];
console.log("visas masyvas", masyvas_antras);
masyvas_antras[1] = 20;
masyvas_antras[2] = 20;
masyvas_antras[3] = 20;

console.log("pakeista masyvo info", masyvas_antras);

console.log(`
=====================
antras
=====================
        `);

const masyvas_trecias = [];
masyvas_trecias.push(2, 5, 6, 7);
console.log(masyvas_trecias);
