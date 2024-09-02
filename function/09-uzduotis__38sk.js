// 17.Susikurkite funkciją, kuri grąžintų bet kokį jūsų norimą sakinį. Iškvieskite
// šią funkciją ir išspausdinkite gautus rezultatus.
function pasirinktinisSakinys(sakinys) {
  console.log(sakinys);
}
pasirinktinisSakinys("vardas");

console.log("==========================");
// 18.Susikurkite funkciją, kuri grąžintų atsitiktinai sugeneruotą skaičių.
// Iškvieskite šią funkciją kelis kartus ir gautus atsakymus išveskite kokiu
// norite būdu.

function randomNumber() {
  console.log(Math.floor(Math.random() * 10));
}
for (i = 0; i < 10; i++) {
  randomNumber();
}

console.log("==========================");
// 19.Susikurkite funkciją, kuri per argumentus priimtų studento vardą ir vidurkį.
// Ši funkcija turėtų sugeneruoti iš to sakinį (pvz Studentas Tomas turi vidurkį
// 8.7) ir tai grąžinti kaip atsakymą. Iškvieskite šią funkciją bent porą kartų,
// perduodant vis skirtingus duomenis. Gautus atsakymus išveskite.

function studentoInfo(vardas, vidurkis) {
  console.log(`${vardas} turi ${vidurkis} balu vidurki`);
}
studentoInfo("Jonas", 8);
studentoInfo("Tomas", 6);
studentoInfo("Antanas", 9);
