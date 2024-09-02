// 20.Susikurkite funkciją, kuri per argumentus gautų skaičių. Ji turėtų surasti
// duoto skaičiaus mažiausią daliklį (skaičių iš kurio dalinasi be liekanos). Už
// funkcijos ribų sukite ciklą nuo 10 iki 30 ir kiekvienoje ciklo iteracijoje
// iškvieskite šią funkciją, perduodant ciklo kintamąjį.
function maziausiasDaliklis(number) {
  daliklis = 2;
  rezultatas = 1;
  let dal = 0;
  while (rezultatas !== 0) {
    rezultatas = number % daliklis;
    dal = daliklis;
    daliklis++;
  }
  console.log(number, dal);
}
// skaicius bus i
for (i = 10; i <= 30; i++) {
  maziausiasDaliklis(i);
}

console.log("========================");

// 21.Susikurkite funkciją, kuri per argumentus gautų skaičių. Ji turėtų patikrinti
// ar šis skaičius yra pirminis (grąžina true jei pirminis, ir false jei ne pirminis).
// Už funkcijos ribų sukite ciklą nuo 2 iki 15, kiekvienoje ciklo iteracijoje
// išveskite tikrinamą skaičių ir šalia jo iškviestos funkcijos atsakymą (pvz 10
function arPirminis(number) {
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}
for (let i = 2; i <= 15; i++) {
  console.log(i, arPirminis(i));
}
