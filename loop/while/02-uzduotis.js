console.log(`
=============   PIRMAS
    `);
// pirmas

let skaicius = 1;

while (skaicius < 5) {
  console.log(skaicius, skaicius ** 2);
  skaicius++;
}

console.log(`
=============   ANTRAS
        `);
// antras

let randomNumber = 0;
let a = 0;
while (a < Math.random() * 1000) {
  randomNumber = Math.floor(Math.random() * 100);
  console.log(randomNumber);
  a += randomNumber;
}

console.log(`
=============   TRECIAS
        `);
// trecias
a = 0;
randomNumber = 0;
let sum = 0;
while (a < Math.random() * 1000) {
  randomNumber = Math.floor(Math.random() * 50);
  console.log(randomNumber);
  a += randomNumber;
}
console.log(a);
