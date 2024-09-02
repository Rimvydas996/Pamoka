// 1. Susikurkite darbuotojo objektą, kuriame turėtumėte šias savybes: vardas,
// pavardė, dabartinis atlyginimas, etatas. Šiame objekte sukurkite funkciją, kuri
// per argumentus priimtų procentus ir paskaičiuotų koks būtų darbuotojo
// atlyginimas, jei jo atlyginimas būtų pakeltas per nurodytą kiekį procentų. Taip
// pat, susikurkite funkciją, kuri per argumentus priimtų atnaujintą etato skaičių,
// ji turėtų paskaičiuoti kiek pasikeistų darbuotojo atlyginimas, jei jis pradėtų
// dirbti nurodytu etatu (tarkim jei dirba pilnu etatu ir atlyginimas 1000 eurų, tai
// per pusę sumažinus etatą (argumentuose būtų 0.5) jo atlyginimas kristų iki
// 500). Iškvieskite šias objekto funkcijas ir išsiveskite gautus atsakymus.
const darbuotojas = {
  vardas: "Jonas",
  pavarde: "Jonaitis",
  alga: 1000,
  etatas: 1,
  algosKelimas: function (procentas) {
    return this.alga + (this.alga / 100) * procentas;
  },
  etatoKeitimas: function (etatas) {
    return this.alga * etatas;
  },
};
console.log(darbuotojas.alga);
console.log(darbuotojas.algosKelimas(10));
console.log(darbuotojas.etatoKeitimas(0.5));
