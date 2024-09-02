// 17.Susikurkite bet kokių žodžių masyvą ir užpildykite jį duomenimis. Išveskite
// visus žodžius su indeksais į atskiras eilutes. Pvz: 0 - medis, 1 - tvora, ...
const zodziai = ["vinas", "medis", "obuolis", "namas"];

for (const zodis in zodziai) {
  console.log(zodis, "-", zodziai[zodis]);
}
console.log("=================");

zodziai.forEach((zodis, ind) => {
  console.log(ind, "-", zodis);
});
