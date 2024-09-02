const prekesInfo1 = {
  name: "pjuklas",
  kaina: 5,
  savikaina: 2,
  kodas: 113234,
  likutis: 200,
  dezesMatmenys: [12, 10, 5],
};
const prekesInfo2 = {
  name: "graztas",
  kaina: 100,
  savikaina: 40,
  kodas: 112233,
  likutis: 20,
  dezesMatmenys: [22, 10, 5],
};
const prekesInfo3 = {
  name: "atsuktuvas",
  kaina: 3,
  savikaina: 1,
  kodas: 113311,
  likutis: 300,
  dezesMatmenys: [42, 10, 15],
};
let dezesTuris1 = 0;
let dezesTuris2 = 0;
let dezesTuris3 = 0;
let pelningumas1 =
  (prekesInfo1.kaina - prekesInfo1.savikaina) * prekesInfo1.likutis;
let pelningumas2 =
  (prekesInfo2.kaina - prekesInfo2.savikaina) * prekesInfo2.likutis;
let pelningumas3 =
  (prekesInfo3.kaina - prekesInfo3.savikaina) * prekesInfo3.likutis;

for (let rez of prekesInfo1.dezesMatmenys) {
  if (dezesTuris1) {
    dezesTuris1 *= rez;
  } else {
    dezesTuris1 = rez;
  }
}
for (let rez of prekesInfo2.dezesMatmenys) {
  if (dezesTuris2) {
    dezesTuris2 = dezesTuris2 * rez;
  } else {
    dezesTuris2 = rez;
  }
}
for (let rez of prekesInfo3.dezesMatmenys) {
  if (dezesTuris3) {
    dezesTuris3 *= rez;
  } else {
    dezesTuris3 = rez;
  }
}

console.log(prekesInfo1, prekesInfo2, prekesInfo3);
console.log(
  `pirmos prekes kaina: ${prekesInfo1.kaina}, antros prekes kaina: ${prekesInfo2.kaina}, trecios prekes kaina: ${prekesInfo3.kaina}`
);
if (
  prekesInfo1.kaina > prekesInfo2.kaina &&
  prekesInfo1.kaina > prekesInfo3.kaina
) {
  console.log(prekesInfo1);
} else if (
  prekesInfo2.kaina > prekesInfo1.kaina &&
  prekesInfo2.kaina > prekesInfo3.kaina
) {
  console.log(prekesInfo2);
} else {
  console.log(prekesInfo3);
}
console.log("dezes turis:");
console.log(dezesTuris1);
console.log(dezesTuris2);
console.log(dezesTuris3);
console.log("pelningumas:");
console.log(pelningumas1);
console.log(pelningumas2);
console.log(pelningumas3);
