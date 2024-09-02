let numberA = -14;
let numberB = 15;
let numberC = 16;

let secondBigerLast =
  numberB > numberC * 2
    ? "antras skaicius didesnis uz dviguba trecia"
    : "antras skaicius mazesnis uz dviguba trecia";
console.log(secondBigerLast);

if (numberA === numberB) {
  console.log("pirmas skaicius lygus antram");
}
if (numberB === numberC) {
  console.log("antras skaicius lygus treciam");
}
if (numberA > numberB) {
  console.log("pirmas skaicius didesnis uz antra");
}
if (numberA % 2 === 0) {
  console.log("taip, pirmas skaicius lyginis");
}
if (numberB % 2 !== 0) {
  console.log("taip, antras skaicius nelyginis");
}
if (numberC >= 0) {
  console.log("trecias skaicius yra teigiamas");
}
if (numberA < 0) {
  console.log("pirmas skaicius neigiamas");
}
if (numberB % 4 == 0) {
  console.log("antras skaicius dalinasi is keturiu");
}
if (numberC % 8 == 0) {
  console.log("trecias skaicius dalinas is 8");
}
