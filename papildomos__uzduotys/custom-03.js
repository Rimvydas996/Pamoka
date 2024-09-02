/* LENGVESNI */

/* 01.
Sukurkite ciklą kuris atspausdintų 10 kartų žodį “labas”.
*/

/* 02.
Sukurkite ciklą kuris atspausdintų skaičius nuo 0 iki 9.
*/

/* 03.
Atspausdinkite kas antrą skaičių nuo 10 iki 50 (porinius);
*/

/* 04.
Atspausdinkite kas antrą skaičių nuo 10 iki 50. (porinius) Jei skaičius dalinasi iš 10 be liekanos jo nespausdinkite. ( naudokite continue.) (atspausdinti visus porinius skaičius, išskyrus tuos kurie dalinasi iš 10 be liekanos)
*/

/* 05.
Sukurkite ciklą kuris suktųsi nuo 0 iki 20. Suskaičiuokite, kiek kartų kintamasis i turėjo porinę reikšmę;
*/

/* SUNKESNI */

/* 01.
Sugeneruokite 300 atsitiktinių skaičių nuo 0 iki 300,
atspausdinkite juos atskirtus tarpais ir suskaičiuokite kiek tarp jų yra didesnių už 150.
Skaičiai didesni nei 275 turi būti atspausdinti skliausteliuose” [ ] “.
*/
const randomNumbers = [];
let sumBigger = 0;
const genSkaiciai = 300;
for (let index = 0; index < genSkaiciai; index++) {
  let x = Math.floor(Math.random() * 301);
  if (x > 150) {
    sumBigger++;
  }
  if (x <= 275) {
    randomNumbers.push(`${x}`);
    continue;
  }
  if (x > 275) {
    randomNumbers.push(`[${x}]`);
  }
}
console.log(randomNumbers.join(" "));
console.log("didesniu nei 150:", sumBigger);

/* 02.
Vienoje eilutėje atspausdinkite visus skaičius nuo 1 iki 3000, kurie dalijasi iš 77 be liekanos.
 Skaičius atskirkite kableliais. Po paskutinio skaičiaus kablelio neturi būti.
*/

/* 03.
Nupieškite kvadratą iš “*”, kurio kraštines sudaro 10 “*”.
* * * * * * * * * * *
* * * * * * * * * * *
* * * * * * * * * * *
* * * * * * * * * * *
* * * * * * * * * * *
* * * * * * * * * * *
* * * * * * * * * * *
*/
