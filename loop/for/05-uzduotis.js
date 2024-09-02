let numberA = 1;
let numberB = 1;
for (i = 2; i <= 100; i++) {
  let numberC = numberA + numberB;
  numberA = numberB;
  numberB = numberC;
  console.log(numberC);
}
