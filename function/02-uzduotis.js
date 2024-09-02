function kita() {
  console.log(`
    ================kita============
    `);
}
function randomSum() {
  let x = Math.floor(Math.random() * 200);
  let y = Math.floor(Math.random() * 200);
  return console.log(`${x} + ${y} = ${x + y}`);
}
randomSum();
randomSum();
randomSum();

// kita
kita();

function policininkasInfo() {
  policininkas = {
    vardas: "Jonas",
    pavarde: "Jonaitis",
    amzius: 23,
    alga: 1000,
    etatas: 1,
    specializacija: "tyrejas",
  };
  return console.log(
    `policinikas ${policininkas.vardas} ${policininkas.pavarde} yra ${policininkas.amzius} metu amziaus. Dirba ${policininkas.etatas}etatu ir uzdirba: ${policininkas.alga}euru`
  );
}
policininkasInfo();
