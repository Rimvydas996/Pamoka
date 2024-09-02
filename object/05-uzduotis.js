const car = {};
car.brand = "Subaru";
car.model = "Outback";
car.mileage = 300;
car.year = 2022;
car.color = "green";
car.turis = 120;
car.dauzta = true;
car.parduodama = true;
let howOld = new Date(Date.now()).getFullYear() - car.year;
let mileagePerYear = car.mileage / howOld;
console.log(car);
console.log("automobiliui", howOld, "metai");
console.log(
  `automobilis per metus visdutiniskai nuvaziuoja ${mileagePerYear} km.`
);
