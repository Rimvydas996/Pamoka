function randomNumbers() {
  const tuscias = [];
  for (let i = 0; i < 10; i++) {
    tuscias.push(Math.round(Math.random() * 10));
  }
  console.log(tuscias.join(" "));
}

for (let i = 0; i < 5; i++) {
  randomNumbers();
}

function kita() {
  console.log(`
      ================kita============
      `);
}
kita();
// kita

function randomNumber() {
  return Math.floor(Math.random() * 100);
}
for (let i = 0; i < 10; i++) {
  console.log(randomNumber());
}
