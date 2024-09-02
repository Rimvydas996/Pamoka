let numberA = 10;
let numberB = 10;
let numberC = 30;

if (numberA < numberB && numberA < numberC) {
  console.log("pirmas maziausias");
} else if (numberB < numberA && numberB < numberC) {
  console.log("antras maziausias");
} else if (numberC < numberA && numberC < numberB) {
  console.log("trecias maziausias");
} else {
  console.log("visi lygus");
}
