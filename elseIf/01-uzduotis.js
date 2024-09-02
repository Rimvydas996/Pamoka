let numberA = 0;
let numberB = -20;
let numberC = 20;

if (numberA > numberB) {
  console.log("pirmas skaicius didesnis uz antra");
} else if (numberA === numberB) {
  console.log("pirmi du skaiciai lygus");
}
if (numberB > numberC) {
  console.log("antras skaicius didesnis uz trecia");
} else if (numberB === numberC) {
  console.log("antras ir trecias skaiciai yra lygus");
}
if (numberC > numberA) {
  console.log("trecias skaicius didesnis uz pirma");
}
if (numberA === 0) {
  console.log("pirmas skaicius lygus 0");
}
if (numberB < 0) {
  console.log("antras skaicius neigiamas");
} else {
  console.log("antras skaicius yra teigiamas");
}
if (numberC < 0) {
  console.log("trecias skaicius neigiamas");
} else {
  console.log("trecias skaicius yra teigiamas");
}
