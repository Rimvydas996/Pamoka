// 15.Susikurkite funkciją, kuri per argumentus priimtų pažymių masyvą, bei
// studento vardą su pavarde. Funkcija turėtų išvesti studento vardą ir
// pavardę, jo pažymius. Taip pat, suskaičiuoti vidurkį, bei jį išvesti. Už
// funkcijos ribų susikurkite reikiamus kintamuosius ir masyvus, arba
// objektus studentų pažymiams saugoti ir užpildykite juos duomenimis.
// Iškvieskite šią funkciją perduodant visus reikalingus duomenis.
function studentoInfo(pazymiai, vardas, pavarde) {
  let pazymiuSuma = 0;
  for (let i = 0; i < pazymiai.length; i++) {
    pazymiuSuma += pazymiai[i];
  }
  console.log(
    `studento vardas: ${vardas} studento pavarde: ${pavarde} jo pazymiai:${pazymiai} vidurkis: ${
      pazymiuSuma / pazymiai.length
    }`
  );
}
const vardas = "Jonas";
const pavarde = "Jonaitis";
const pazymiai = [10, 9.5, 8, 8];

studentoInfo(pazymiai, vardas, pavarde);
