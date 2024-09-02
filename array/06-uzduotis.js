const array1 = ["Jonas", "Tomas", "Evaldas"];
let visoRaidziu = 0;
for (i = 0; i < array1.length; i++) {
  console.log(array1[i], "is raidziu", array1[i].length);
  visoRaidziu += array1[i].length;
}
console.log(`viso raidziu: ${visoRaidziu}`);

console.log(`
============= antras ==============
    `);

const array2 = [];
let suma = 0;
kiekis = 0;

for (i = 0; i < 10; i++) {
  array2.push(Math.ceil(Math.random() * 10));
}
for (const number of array2) {
  if (number % 3 === 0) {
    console.log(`${number} dalinasi is 3`);
    suma += number;
    kiekis++;
  }
}
let vidurkis = suma / kiekis;
console.log(`vidurkis: ${vidurkis}`);
