// pirma dalis
let number = 0;
for (i = 1; i <= 100; i++) {
  number += i;
}
console.log(number);

console.log(`
=============
    `);
// antra dalis
let lyginis = 0;
for (i = 20; i <= 50; i++) {
  if (i % 2 === 0) {
    lyginis += i;
    console.log(i, "lyginis", lyginis);
  }
}
console.log("Lyginiu skiaciu suma:", lyginis);

console.log(`
=============
        `);

// trecia dalis
let nelyginis = 0;
for (i = 30; i <= 60; i++) {
  if (i % 2 !== 0) {
    nelyginis += i;
    console.log(i, "nelyginis", nelyginis);
  }
}
console.log("Nelyginiu skiaciu suma:", nelyginis);

console.log(`
=============
            `);

// ketvirta dalis
let sumaTukstancio = 0;
for (i = 0; i < 1000; i++) {
  if (i % 3 === 0 || i % 5 === 0) {
    sumaTukstancio += i;
  }
}
console.log(sumaTukstancio);
