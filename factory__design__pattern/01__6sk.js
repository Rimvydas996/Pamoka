// const darbuotojas = {
//     vardas: "Jonas",
//     pavarde: "Jonaitis",
//     alga: 1000,
//     etatas: 1,
//     algosKelimas: function (procentas) {
//       return this.alga + (this.alga / 100) * procentas;
//     },
//     etatoKeitimas: function (etatas) {
//       return this.alga * etatas;
//     },
//   };
//   console.log(darbuotojas.alga);
//   console.log(darbuotojas.algosKelimas(10));
//   console.log(darbuotojas.etatoKeitimas(0.5));

// Užduotis
// 1. Praeitame skyriuje sukurtą darbuotojo objektą pasikopijuokite į naują
// gamyklos (factory) funkciją, kuri galėtų sukurti daugiau tokių objektų.
// Pritaikykite objektą, kad duomenis prisiskirtų iš funkcijos argumentų. Už
// funkcijos ribų sukurkite ir sudėkite keletą tokių darbuotojų į masyvą.
// Tuomet mėginkite prasukti ciklą pro sukurtą darbuotojų masyvą ir
// išsiveskite darbuotojų duomenis, taip pat, pakvieskite skaičiavimų
// funkcijas ir pasižiūrėkite gaunamus rezultatus.

function gamyklosFactory(vardas, pavarde, alga, etatas) {
  return {
    vardas,
    pavarde,
    alga,
    etatas,
    isvestiInformacija: function () {
      console.log("darbuotojo info");
      console.log("Vardas: ", this.vardas);
      console.log("Pavarde: ", this.pavarde);
      console.log("Alga: ", this.alga);
      console.log("Etatas: ", this.etatas);
      console.log("=========================================");
    },
    algosKelimas: function (procentas) {
      return this.alga + (this.alga / 100) * procentas;
    },
    etatoKeitimas: function (etatas) {
      return this.alga * etatas;
    },
  };
}

const darbuotojas = gamyklosFactory("Jonas", "Jonaitis", 1000, 1);
const darbuotojas2 = gamyklosFactory("Petras", "Petraitis", 1000, 1);
const darbuotojai = [];
darbuotojai.push(darbuotojas, darbuotojas2);
darbuotojai.forEach((darbuotojas) => {
  darbuotojas.isvestiInformacija();
  darbuotojas.algosKelimas(10);
  darbuotojas.etatoKeitimas(0.5);
});
