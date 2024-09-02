let numberA = 13;

if (numberA % 2 === 0) {
  console.log("skaicius yra lyginis");
} else if (numberA % 5 === 0) {
  console.log("skaicius dalinasi is 5");
} else if (numberA === 3) {
  console.log("skaicius yra lygus 3");
} else {
  console.log("klaida");
}

let numberX = 10;
let numberY = 20;
let numberZ = 0;

if (numberX === numberY) {
  console.log("pirmi du skaiciai yra lygus");
} else if (numberX === numberZ) {
  console.log("pirmas ir trecias skaiciai yra lygus");
} else if (numberZ > numberX) {
  console.log("trecias skaicius daugiau uz pirama");
} else if (numberY === numberZ * 2) {
  console.log("antras skaicius lygus dvigubai trecio skaiciaus reiksmei");
} else if (numberX % 3 === 0) {
  console.log("pirmas skaicius dalinasi is 3");
} else {
  console.log("klaida");
}
