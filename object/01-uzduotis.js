const student = {
  vardas: "Jonas",
  pavarde: "Petraitis",
  amzius: 22,
  ugis: 1.9,
  kursas: 3,
  mokykla: "aukstoji",
};
for (let key in student) {
  console.log(key, ":", student[key]);
}
console.log(student.amzius, student.pavarde, student.vardas);
