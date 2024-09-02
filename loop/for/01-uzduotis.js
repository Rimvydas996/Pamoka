for (let i = 0; i <= 10; i++) {
  console.log("pirmas", i);
}
for (let i = 0; i <= 15; i += 2) {
  console.log("antras", i);
}
for (let i = 1; i <= 20; i += 3) {
  console.log(`trecias, [${i}]`, typeof i);
}
for (let i = 1; i <= 20; i++) {
  if (0 === i % 4) {
    console.log(i);
  }
}
