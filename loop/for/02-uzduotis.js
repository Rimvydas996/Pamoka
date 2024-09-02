let pradzia = 1;
let pabaiga = 10;

if (pradzia < pabaiga) {
  for (let i = pradzia; i < pabaiga; i++) {
    console.log(i, i ** 2);
  }
}
console.log(`
--------------
    `);

if (pradzia < pabaiga) {
  for (let i = pradzia; i < pabaiga; i++) {
    if (i % 2 !== 0) {
      console.log(i, "nelyginis");
    } else if (i % 8 === 0) {
      console.log(i, "dalinasi is 8");
    }
  }
}

console.log(`
-------------
    `);
let numberA = 110;
let numberB = 0;
let sum = 0;

for (let i = 0; i < numberB; i++) {
  sum += numberA;
  console.log(i);
}
console.log(sum);
