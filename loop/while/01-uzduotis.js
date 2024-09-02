// pirmas
let a = 0;
while (a < 20) {
  a++;
  console.log(a);
}
console.log(`
=============
  `);
// antras

let b = 0;
while (b < 50) {
  b++;
  if (b % 2 === 0) {
    console.log(b, "lyginis");
  } else {
    console.log(b, "nelyginis");
  }
}
console.log(`
=============
    `);
// trecias

let c = 25;
while (c <= 50) {
  if (c % 3 === 0) {
    console.log("skaicius", c, "dalinasi is", 3);
  } else {
    console.log(c);
  }
  c++;
}

console.log(`
  =============
  `);
// ketvirtas

let d = 0;
while (true) {
  d++;
  if (d % 3 === 0 && d % 5 === 0) {
    break;
  }
  console.log(d);
}

console.log(`
=============
      `);
// penktas

let e = 0;
let sumE = 0;

while (e < 100) {
  e++;
  if (e % 2 === 0) {
    sumE += e;
    console.log(sumE);
  }
}
