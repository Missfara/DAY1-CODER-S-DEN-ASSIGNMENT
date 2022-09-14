// //LEVEL 1
// //QUESTION 1
// let constants = [2.72, 3.14, 9.81, 37, 100];

// let [e, pi, gravity, humanBodyTemp, waterBoilingTemp] = constants;
// console.log([e, pi, gravity, humanBodyTemp, waterBoilingTemp]);

// //QUESTION 2
// const countries = ["Finland", "Estonia", "Sweden", "Denmark", "Norway"];
// let [fin, est, sw, den, nor] = countries;
// console.log([fin, est, sw, den, nor]);

// //QUESTION 3
// const rectangle = {
//   width: 20,
//   height: 10,
//   area: 200,
//   perimeter: 60,
// };
// let { width: wd, height: ht, area: ar, perimeter: pr } = rectangle;
// console.log({ wd, ht, ar, pr });

// //LEVEL 2
// //QUESTION 1
// const users = [
//   {
//     name: "Brook",
//     scores: 75,
//     skills: ["HTM", "CSS", "JS"],
//     age: 16,
//   },
//   {
//     name: "Alex",
//     scores: 80,
//     skills: ["HTM", "CSS", "JS"],
//     age: 18,
//   },
//   {
//     name: "David",
//     scores: 75,
//     skills: ["HTM", "CSS"],
//     age: 22,
//   },
//   {
//     name: "John",
//     scores: 85,
//     skills: ["HTML"],
//     age: 25,
//   },
//   {
//     name: "Sara",
//     scores: 95,
//     skills: ["HTM", "CSS", "JS"],
//     age: 26,
//   },
//   {
//     name: "Martha",
//     scores: 80,
//     skills: ["HTM", "CSS", "JS"],
//     age: 18,
//   },
//   {
//     name: "Thomas",
//     scores: 90,
//     skills: ["HTM", "CSS", "JS"],
//     age: 20,
//   },
// ];

// //QUESTION 1
// for (const { name, scores, skills, age } of users) {
//   console.log({ name, scores, skills, age });
// }

// //QUESTION 2
// for (const { name, skills } of users) {
//   if (skills.length < 2) {
//     console.log(name, skills);
//   }
//

var animals = ["Cat", "Fish", "Lemur", "Komodo Dragon"];

for (let a = 0; a <= 3; a++) {
  console.log("awesome" + " " + animals[a]);
}

// //LEVEL 3
// //QUESTION 1

// //QUESTION 2
// const student = ["David", ["HTM", "CSS", "JS", "React"], [98, 85, 90, 95]];
// let [name, skills, scores] = student;
// let [a, b, jsScore, reactScore] = scores;
// console.log(name, skills, jsScore, reactScore);

// //QUESTION 3
const students = [
  ["David", ["HTM", "CSS", "JS", "React"], [98, 85, 90, 95]],
  ["John", ["HTM", "CSS", "JS", "React"], [85, 80, 85, 80]],
];

const convertArrayToObject = () => {
  for (const [name, skills, scores] of students) {
    console.log({ name, skills, scores });
  }
};
convertArrayToObject(students);

//QUESTION 4
// const student2 = {
//   name: "David",
//   age: 25,
//   skills: {
//     frontEnd: [
//       { skill: "HTML", level: 10 },
//       { skill: "CSS", level: 8 },
//       { skill: "JS", level: 8 },
//       { skill: "React", level: 9 },
//     ],
//     backEnd: [
//       { skill: "Node", level: 7 },
//       { skill: "GraphQL", level: 8 },
//     ],
//     dataBase: [{ skill: "MongoDB", level: 7.5 }],
//     dataScience: ["Python", "R", "D3.js"],
//   },
// };

// let newStudent = {
//   ...student2,
//   ...student2.skills.frontEnd.push({ skill: "Bootstrap", level: 9 }),
//   ...student2.skills.backEnd.push({ skill: "Express", level: 9 }),
//   ...student2.skills.dataBase.push({ skill: "SQL", level: 8 }),
//   ...student2.skills.dataScience.push({ skill: "SQL" }),
// };
// console.log(newStudent);
