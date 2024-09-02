const array1 = [];
for (i = 0; i < 10; i++) {
  array1.push(Math.round(Math.random() * 10));
}
for (i = 0; i < array1.length; i++) {
  if (array1[i] % 2 === 0) {
    console.log(array1[i], "lyginis, jo kvadratas", array1[i] ** 2);
    continue;
  }
  console.log(array1[i], "nelyginis");
}

console.log(`
============= antras ============
    `);

const array2 = [];
let ikiTeigiamo = 0;

for (i = 0; i < 10; i++) {
  array2.push(Math.round(Math.random() * 10));
}

for (const balas of array2) {
  if (balas > 5) {
    console.log(balas, "teigiamas");
    continue;
  }
  ikiTeigiamo = 5 - balas;
  console.log(`${balas} pazymis neigiamas. Iki teigiamo truko ${ikiTeigiamo}`);
  ikiTeigiamo = 0;
}
