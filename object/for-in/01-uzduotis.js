const knygynas = {
  pavadinimas: "Pegasas",
  adresas: "Vilnius",
  plotas: 200,
  knyguKiekis: 50000,
  darboValandos: "nuo 8:00 iki 22:00",
  atidaryta: true,
};
for (const key in knygynas) {
  console.log(key, knygynas[key]);
}
console.log("============");

for (const key in knygynas) {
  if (typeof knygynas[key] === "string") {
    continue;
  } else {
    console.log(knygynas[key]);
  }
}
