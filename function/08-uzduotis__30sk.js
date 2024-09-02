// 16.Susikurkite funkciją, kuri per argumentus priimtų skaičių masyvą. Funkcija
// turėtų rasti didžiausią skaičių iš masyvo bei išvesti gautą atsakymus. Taip pat,
// susikurkite funkciją, kuri per argumentus priimtų masyvą ir į jį sugeneruotų
// pasirinktą kiekį atsitiktinių skaičių. Susikurkite tris tuščius masyvus.
// Iškvieskite atsitiktinių skaičių generavimo funkciją tris kartus, kiekvieną kartą
// perduodant funkcijai vis kitą masyvą. Kai duomenys bus užpildyti,
// masyvuose esančią informaciją išsiveskite norimu būdu (per console.log arba
// per dar atskirą funkciją). Tuomet kvieskite didžiausio skaičiaus paieškos
// funkciją tris kartus, kiekvieną kartą perduodant skirtingą masyvą į ją.
const arrayNumbers1 = [];
const arrayNumbers2 = [];
const arrayNumbers3 = [];

function bigestNumber(arrayNumbers) {
  let bigerNumber = 0;
  for (let number of arrayNumbers) {
    if (number > bigerNumber) {
      bigerNumber = number;
    }
  }
  console.log(arrayNumbers);

  console.log(bigerNumber);
}

function fillArray(masyvas, kiek) {
  for (let i = 0; i < kiek; i++) {
    masyvas.push(Math.floor(Math.random() * 100));
  }
}
fillArray(arrayNumbers1, 3);
fillArray(arrayNumbers2, 6);
fillArray(arrayNumbers3, 7);
bigestNumber(arrayNumbers1);
bigestNumber(arrayNumbers2);
bigestNumber(arrayNumbers3);
