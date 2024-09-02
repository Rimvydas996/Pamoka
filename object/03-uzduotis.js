const knygos1skyriai = ["drakonai1", "drakonai2"];
const knygos2skyriai = ["slibinai1", "slibinai2", "slibinai3"];
const knyga1 = {
  pavadinimas: "drakonai",
  autorius: "Jonas",
  zanras: "fantastine",
  kaina: 30,
  puslapiai: 300,
  skyriuPavadinimai: knygos1skyriai,
  isleidimoMetai: 2000,
  galimaIsigyti: true,
};
let skyriu1Suma = 0;
let skyriu2Suma = 0;

for (let key in knyga1) {
  console.log(key, knyga1[key]);
}
for (let i of knygos1skyriai) {
  skyriu1Suma++;
}
console.log("========================");

const knyga2 = {
  pavadinimas: "Slibinai",
  autorius: "Petras",
  zanras: "fantastine",
  kaina: 40,
  puslapiai: 400,
  skyriuPavadinimai: knygos2skyriai,
  isleidimoMetai: 2005,
  galimaIsigyti: false,
};

for (let key in knyga2) {
  console.log(key, knyga2[key]);
}
for (let i of knygos1skyriai) {
  skyriu1Suma++;
}
for (let i of knygos2skyriai) {
  skyriu2Suma++;
}

// kuri knyga turi daugiau puslapiu
if (knyga1.puslapiai > knyga2.puslapiai) {
  console.log("pirma knyga turi daugiau puslapiu:", knyga1.puslapiai);
} else if (knyga2.puslapiai > knyga1.puslapiai) {
  console.log("antra knyga turi daugiau puslapiu:", knyga2.puslapiai);
} else {
  console.log("knygos turi vienoda skaiciu puslapiu");
}

// kuri knyga turi daugiau skyriu
if (skyriu1Suma > skyriu2Suma) {
  console.log("pirma knyga turi daugiau skyriu");
} else if (skyriu2Suma > skyriu1Suma) {
  console.log("antra knyga turi daugiau skyriu");
} else {
  console.log("knygos turi vienoda skyriu skaiciu");
}

// skaiciuoju ar pigensne kyga padvigubinus jos kaina yra daugiau uz brangesne
if (knyga1.kaina > knyga2.kaina) {
  if (knyga2.kaina * 2 > knyga1.kaina) {
    console.log("padvigubinus antros knygos kaina ji yra didesne");
  } else if (knyga2.kaina * 2 < knyga1.kaina) {
    console.log("padvigubinus antros knygos kaina ji yra mazesne");
  }
} else if (knyga2.kaina > knyga1.kaina) {
  if (knyga1.kaina * 2 > knyga2.kaina) {
    console.log("padvigubinus pirmos knygos kaina ji yra didesne");
  } else if (knyga1.kaina * 2 < knyga2.kaina) {
    console.log("padvigubinus pirmos knygos kaina ji yra mazesne");
  }
}
