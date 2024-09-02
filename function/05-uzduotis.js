function carInfo(marke, modelis, gamybosMetai, darbinisTuris) {
  console.log(`1:${marke} 2:${modelis} 3:${gamybosMetai} 4:${darbinisTuris}`);
}
carInfo("Subaru", "Forester", 2019, 2213123);
carInfo("Subaru", "Outback", 2020, 312321);

function kita() {
  console.log(`
          ================kita============
          `);
}
kita();
//   kita 23 skaidre

function suma(numberA, numberB) {
  console.log(numberA, "+", numberB, "=", numberA + numberB);
}
function skirtumas(numberA, numberB) {
  console.log(numberA, "-", numberB, "=", numberA - numberB);
}
function sandauga(numberA, numberB) {
  console.log(numberA, "*", numberB, "=", numberA * numberB);
}
function dalmuo(numberA, numberB) {
  console.log(numberA, "/", numberB, "=", numberA / numberB);
}
function randomArguments() {
  const numberA = Math.floor(Math.random() * 10);
  const numberB = Math.floor(Math.random() * 10);
  suma(numberA, numberB);
  skirtumas(numberA, numberB);
  sandauga(numberA, numberB);
  dalmuo(numberA, numberB);
}
for (let index = 0; index < 4; index++) {
  randomArguments();
}
