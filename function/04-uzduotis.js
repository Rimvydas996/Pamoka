const vardas = "Jonas";
function hello(vardas) {
  console.log("labas", vardas);
}
function viso(vardas) {
  console.log("visogero", vardas);
}
hello(vardas);
viso(vardas);

function kita() {
  console.log(`
        ================kita============
        `);
}
kita();
// kita
const numberA = 10;
const numberB = 20;
function bigerNumber(numberA, numberB) {
  if (numberA > numberB) {
    console.log(numberA, "yra didesnis");
  } else if (numberB > numberA) {
    console.log(numberB, "yra didesnis");
  } else {
    console.log("skaiciai lygus");
  }
}
for (let index = 0; index < 10; index++) {
  bigerNumber(numberA, numberB);
}
