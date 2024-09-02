let numberA = 2;
let numberB = 1;
let abc = 0;
for (let i = 1; i <= 50; i++) {
  console.log(`${numberA} * ${i} = ${numberA * i}`);
  abc++;
  console.log(abc);
}
console.log(`
    ${numberA} * ${numberB} = ${numberA * numberB++}
    ${numberA} * ${numberB} = ${numberA * numberB++}
    ${numberA} * ${numberB} = ${numberA * numberB++}
    ${numberA} * ${numberB} = ${numberA * numberB++}
    ${numberA} * ${numberB} = ${numberA * numberB++}
    ${numberA} * ${numberB} = ${numberA * numberB++}
    ${numberA} * ${numberB} = ${numberA * numberB++}
    ${numberA} * ${numberB} = ${numberA * numberB++}
    ${numberA} * ${numberB} = ${numberA * numberB++}
     `);

let number = 58;
let firstNumber = Math.floor(number / 10);
let lastNumber = number % 10;

console.log(firstNumber + lastNumber);
