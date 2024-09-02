const persons = [
  {
    vardas: "Tomas",
    metai: 20,
    pareigos: "auto mechanikas",
  },
  {
    vardas: "Jonas",
    metai: 50,
    pareigos: "mokytojas",
  },
  {
    vardas: "Antanas",
    metai: 60,
    pareigos: "auto mechanikas",
  },
  {
    vardas: "Martynas",
    metai: 20,
    pareigos: "auto mechanikas",
  },
  {
    vardas: "Juozas",
    metai: 5,
    pareigos: false,
  },
];

// persons.push(person1);
// persons.push(person2);
// persons.push(person3);
// persons.push(person4);
// persons.push(person5);

console.log(persons);
let oldestPerson;
for (let person of persons) {
  if (!oldestPerson || oldestPerson.metai < person.metai) {
    oldestPerson = person;
  }
}
console.log(oldestPerson);
