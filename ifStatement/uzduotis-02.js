let yourAge = 19;
let scoreA = 8;
let scoreB = 1;
let scoreAverage = (scoreA + scoreB) / 2;
let numberX = 4;

if (yourAge >= 18) {
  console.log("jus galite balsuoti");
}

if (scoreAverage >= 5) {
  console.log("vidurkis teigiamas");
}

if (numberX % 5 === 0) {
  console.log(`1 * ${numberX} = ${numberX}`);
  console.log(`2 * ${numberX} = ` + numberX * 2);
  console.log(`3 * ${numberX} = ` + numberX * 3);
  console.log(`4 * ${numberX} = ` + numberX * 4);
  console.log(`5 * ${numberX} = ` + numberX * 5);
}
if (numberX % 2 === 0) {
  console.log(numberX, numberX ** 2, numberX ** 2 / 2);
}
if (numberX % 7 !== 0) {
  let numberY = 8;
  console.log(
    numberX + numberY,
    numberX - numberY,
    numberX * numberY,
    numberX / numberY
  );
}
