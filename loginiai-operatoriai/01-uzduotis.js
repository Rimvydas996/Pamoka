let numberA = 10;
let numberB = 10;
let numberC = 30;

if (numberA > numberB && numberA > numberC) {
  console.log("pirmas skaicius didziausias");
} else if (numberB > numberA && numberB > numberC) {
  console.log("antras skaicius yra didziausias");
} else if (numberC > numberA && numberC > numberB) {
  console.log("trecias skaicius yra didziausias");
} else {
  console.log("visi skaiciai yra lygus");
}
