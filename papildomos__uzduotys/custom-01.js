function space() {
  console.log(`
        ===================
        `);
}
/*
Uždavinių sprendimui nenaudoti, masyvų, ciklų ir savo parašytų funkcijų.
 JavaScript funkcijas žinoma naudokite (pageidautina).
Visi random generuojami skaičiai turi būti sveikieji.
*/

/* 01.
Sukurkite 4 kintamuosius, kurie saugotų jūsų vardą, pavardę, gimimo metus ir šiuos metus (nebūtinai tikrus).
Parašykite kodą, kuris pagal gimimo metus paskaičiuotų jūsų amžių ir naudodamas vardo ir pavardės 
kintamuosius atspausdintų tokį sakinį :
"Aš esu Vardenis Pavardenis. Man yra XX metai(-ų)".
*/
const vardas = "Vardenis";
const pavarde = "Pavardenis";
const gimimoMetai = 1999;
const dabartiniaiMetai = 2010;

const metai = dabartiniaiMetai - gimimoMetai;

console.log(`"As esu ${vardas} ${pavarde}. Man yra ${metai} metu".`);

space();
/* 02.
Naudokite funkciją Math.random(). Sukurkite du kintamuosius ir naudodamiesi funkcija Math.random() 
jiems priskirkite atsitiktines reikšmes nuo 0 iki 4. Didesnę reikšmę padalinkite iš mažesnės. 
Atspausdinkite rezultatą jį suapvalinę iki 2 skaičių po kablelio.
*/
const number1 = Math.floor(Math.random() * 5);
const number2 = Math.floor(Math.random() * 5);
console.log("a", number1, number2);

if (number1 > number2) {
  console.log("b", Math.floor((number1 / number2) * 100) / 100);
} else if (number2 > number1) {
  console.log("c", Math.floor((number2 / number1) * 100) / 100);
}

space();
/* 03.
Naudokite funkciją Math.random(). Sukurkite tris kintamuosius ir naudodamiesi funkcija Math.random() 
jiems priskirkite atsitiktines reikšmes nuo 0 iki 25. Raskite ir 
atspausdinkite kintąmąjį turintį vidurinę reikšmę.
*/
kintA = Math.floor(Math.random() * 26);
kintB = Math.floor(Math.random() * 26);
kintC = Math.floor(Math.random() * 26);

console.log(`kitamasis a: ${kintA};
kintamasis b: ${kintB};
kintamasis c: ${kintC};
`);

if ((kintA < kintB && kintA > kintC) || (kintA < kintC && kintA > kintB)) {
  console.log(`kintamasis A turi vidurine reiksme: ${kintA}.`);
} else if (
  (kintB < kintC && kintB > kintC) ||
  (kintB < kintC && kintB > kintA)
) {
  console.log(`kintamasis B turi vidurine reiksme: ${kintB}.`);
} else if (
  (kintC > kintA && kintC < kintB) ||
  (kintC > kintB && kintC < kintA)
) {
  console.log(`kintamasis C turi vidurine reiksme: ${kintC}`);
} else {
  console.log("Yra kintamuju su vienoda reiksme");
}

space();
/* 04.
Įvedami skaičiai - kr1, kr2, kr3 – kraštinių ilgiai, trys kintamieji 
(naudokite ​Math.random()​ funkcija nuo 1 iki 10). Parašykite JavaScript programą, kuri nustatytų, 
ar galima sudaryti trikampį ir atsakymą atspausdintų. 
*/
const kr1 = Math.ceil(Math.random() * 10);
const kr2 = Math.ceil(Math.random() * 10);
const kr3 = Math.ceil(Math.random() * 10);

console.log(`krastine pirma: ${kr1};
krastine antra: ${kr2};
krastine trecia: ${kr3};
`);

if (kr1 < kr2 + kr3 && kr1 >= kr2 && kr1 >= kr2) {
  console.log("trikampi sudaryti galima");
} else if (kr2 < kr1 + kr3 && kr2 >= kr1 && kr2 >= kr3) {
  console.log("trikampi sudaryti galima");
} else if (kr3 < kr1 + kr2 && kr3 >= kr1 && kr3 >= kr2) {
  console.log("trikampi sudaryti galima");
} else if (kr1 === kr2 && kr2 === kr3) {
  console.log("trikampi sudaryti galima");
} else {
  console.log("trikampio sudaryti negalima");
}

space();
/* 05.
Sukurkite keturis kintamuosius ir ​Math.random()​ funkcija sugeneruokite jiems reikšmes nuo 0 iki 2. 
Suskaičiuokite kiek yra nulių, vienetų ir dvejetų.
*/

const kintA__05 = Math.floor(Math.random() * 3);
const kintB__05 = Math.floor(Math.random() * 3);
const kintC__05 = Math.floor(Math.random() * 3);
const kintD__05 = Math.floor(Math.random() * 3);

let sumaNuliu = 0;
let sumaVienetu = 0;
let sumaDvejetu = 0;

if (kintA__05 === 0) {
  sumaNuliu++;
} else if (kintA__05 === 1) {
  sumaVienetu++;
} else if (kintA__05 === 2) {
  sumaDvejetu++;
}

if (kintB__05 === 0) {
  sumaNuliu++;
} else if (kintB__05 === 1) {
  sumaVienetu++;
} else if (kintB__05 === 2) {
  sumaDvejetu++;
}

if (kintC__05 === 0) {
  sumaNuliu++;
} else if (kintC__05 === 1) {
  sumaVienetu++;
} else if (kintC__05 === 2) {
  sumaDvejetu++;
}

if (kintD__05 === 0) {
  sumaNuliu++;
} else if (kintD__05 === 1) {
  sumaVienetu++;
} else if (kintD__05 === 2) {
  sumaDvejetu++;
}

console.log("0 yra:", sumaNuliu);
console.log("1 yra:", sumaVienetu);
console.log("2 yra:", sumaDvejetu);

space();
/* 06.
Naudokite funkcija Math.random(). Atspausdinkite 3 skaičius nuo -10 iki 10. 
Skaičiai mažesni už 0 turi būti  laužtiniuose skliaustuose [], 0 -  (), didesni už 0 {}.
*/
const x__06 = Math.floor(Math.random() * 20) - 10;
const y__06 = Math.floor(Math.random() * 20) - 10;
const z__06 = Math.floor(Math.random() * 20) - 10;

console.log(`skaicius x: ${x__06}
skaicius y: ${y__06}
skaicius z: ${z__06}`);

if (x__06 < 0) {
  console.log(`[${x__06}]`);
} else if (x__06 === 0) {
  console.log(`(${x__06})`);
} else {
  console.log(`{${x__06}}`);
}

if (y__06 < 0) {
  console.log(`[${y__06}]`);
} else if (y__06 === 0) {
  console.log(`(${y__06})`);
} else {
  console.log(`{${y__06}}`);
}

if (z__06 < 0) {
  console.log(`[${z__06}]`);
} else if (z__06 === 0) {
  console.log(`(${z__06})`);
} else {
  console.log(`{${z__06})}`);
}

space();
/* 07.
Įmonė parduoda žvakes po 1 EUR. Perkant daugiau kaip už 1000 EUR taikoma 3 % nuolaida, daugiau kaip už 2000 EUR - 4 % nuolaida.
 Parašykite programą, kuri skaičiuos žvakių kainą ir atspausdintų atsakymą kiek žvakių ir kokia kaina perkama. 
 Žvakių kiekį generuokite ​Math.random()​ funkcija nuo 5 iki 3000.
*/

/* 08.
Naudokite funkciją Math.random(). Sukurkite tris kintamuosius su atsitiktinėm reikšmėm nuo 0 iki 100. Paskaičiuokite jų aritmetinį vidurkį. 
Tada aritmetinį vidurkį atmetus tas reikšmes, kurios yra mažesnės nei 10 arba didesnės nei 90. 
Abu vidurkius atspausdinkite. Rezultatus apvalinkite iki sveiko skaičiaus.
*/

/* 09.
Padarykite skaitmeninį laikrodį, rodantį valandas, minutes ir sekundes. Valandom, minutėm ir sekundėm sugeneruoti panaudokite funkciją Math.random(). 
Sugeneruokite skaičių nuo 0 iki 300. Tai papildomos sekundės. Skaičių pridėkite prie jau sugeneruoto laiko. 
Atspausdinkite laikrodį prieš ir po sekundžių pridėjimo ir pridedamų sekundžių skaičių.
*/

/* 10.
Naudokite funkciją Math.random(). Sugeneruokite 6 kintamuosius su atsitiktinėm reikšmėm nuo 1000 iki 9999. 
Atspausdinkite reikšmes viename string'e, išrūšiuotas nuo didžiausios iki mažiausios, atskirtas tarpais. 
Naudoti ciklų ir masyvų NEGALIMA.
*/
