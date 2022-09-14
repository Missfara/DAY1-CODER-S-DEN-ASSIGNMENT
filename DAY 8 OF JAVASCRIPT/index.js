//QUESTION 1
// let dog = {};

// //QUESTION 2
// console.log(dog);

//QUESTION 3
// dog.name = "bingo";
// dog.legs = 4;
// dog.color = "white";
// dog.bark = "woof woof";

//OR
let dog = {
  name: "bingo",
  legs: 4,
  color: "white",
  bark: "woof woof",
};

//QUESTION 4
console.log(dog);

//QUESTION 5
dog.breed = "german shephard";
dog.getDogInfo = function () {
  return `${dog.name}, ${dog.breed}`;
};
console.log(dog.getDogInfo());

//level 2
//QUESTION 1
const users = {
  Alex: {
    email: "alex@alex.com",
    skills: ["HTML", "CSS", "JavaScript"],
    age: 20,
    isLoggedIn: false,
    points: 30,
  },
  Asab: {
    email: "asab@asab.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Redux",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 25,
    isLoggedIn: false,
    points: 50,
  },
  Brook: {
    email: "daniel@daniel.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
    age: 30,
    isLoggedIn: true,
    points: 50,
  },
  Daniel: {
    email: "daniel@alex.com",
    skills: ["HTML", "CSS", "JavaScript", "Python"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  John: {
    email: "john@john.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
    age: 20,
    isLoggedIn: true,
    points: 50,
  },
  Thomas: {
    email: "thomas@thomas.com",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  Paul: {
    email: "paul@paul.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
};

console.log(users.Asab.skills);

//QUESTION 2
let {    } = users;
console.log(a);
