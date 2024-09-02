const readline = require("node:readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const darboValandos = 8;
let kepPerValanda;
let darbuotojuSkaicius;
let kepaloSavikaina;
let pardavimoKaina;
let uzsakymuSkaicius;
let paruostaProdukcija;

rl.question(
  `Kiek vienas darbuotojas gali iskepti kepalu per valanda? `,
  (input) => {
    kepPerValanda = +input;
    rl.question(`Kiek darbuotoju dirba? `, (input) => {
      darbuotojuSkaicius = +input;
      rl.question(`Kokia kepalo savikaina? `, (input) => {
        kepaloSavikaina = +input;
        rl.question(`Kokia pardavimo kaina? `, (input) => {
          pardavimoKaina = +input;
          rl.question(`Kiek yra uzsakymu? `, (input) => {
            uzsakymuSkaicius = +input;

            let maxProdukcija =
              kepPerValanda * darbuotojuSkaicius * darboValandos; //pirmas punktas
            console.log(
              `
Darbuotojai per diena gali iskepti iki ${maxProdukcija} kepalu.`
            );

            if (maxProdukcija >= uzsakymuSkaicius) {
              produkcija = uzsakymuSkaicius;
              let visuSavikaina = produkcija * kepaloSavikaina;
              let pajamos = produkcija * pardavimoKaina;
              let pelnas = pajamos - visuSavikaina;
              console.log(`
Kepykla speja atlikti uzsakyma.
Visu kepalu savikaina: ${visuSavikaina} euru;
Gautos pajamos: ${pajamos} euru;
Gautas pelnas: ${pelnas} euru;
                                `);
            } else {
              produkcija = uzsakymuSkaicius - maxProdukcija;
              console.log(`Kepykla nespes iskepti ${produkcija}. Pelno nebus.
                `);
            }
            rl.close();
          });
        });
      });
    });
  }
);
