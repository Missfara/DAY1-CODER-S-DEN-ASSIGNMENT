let check = (str) => {
  return str.toUpperCase().slice(3, 6);
};
console.log(check("adeola"));

//QUESTION 2
let arr = [];
const result = (n) => {
  for (let a = 1; a < n; a++) {
    arr.push(Math.floor(Math.random() * n));
  }
  return arr;
};
console.log(result(4));

const names = ["Asabeneh", "Brook", "David", "John"];
console.table(names);

const user = {
  name: "Asabeneh",
  title: "Programmer",
  country: "Finland",
  city: "Helsinki",
  age: 250,
};
console.table(user);

//
const countries = [
  ["Finland", "Helsinki"],
  ["Sweden", "Stockholm"],
  ["Norway", "Oslo"],
];
console.table(countries);

//
const users = [
  {
    name: "Asabeneh",
    title: "Programmer",
    country: "Finland",
    city: "Helsinki",
    age: 250,
  },
  {
    name: "Eyob",
    title: "Teacher",
    country: "Sweden",
    city: "London",
    age: 25,
  },
  {
    name: "Asab",
    title: "Instructor",
    country: "Norway",
    city: "Oslo",
    age: 22,
  },
  {
    name: "Matias",
    title: "Developer",
    country: "Denmark",
    city: "Copenhagen",
    age: 28,
  },
];
console.log((users[3].name = "david"));
console.table(users);
//
console.info("30 Days Of JavaScript challenge is trending on Github");
console.info("30 Days Of fullStack challenge might be released");
console.info("30 Days Of HTML and CSS challenge might be released");
//
console.assert(3 > 4, "its not possible");
console.assert(10 > 2 * 10);
//
console.error("this is not a javascript syntax");
console.warn("this is undefined");
//
console.group("Names");
console.log(names);
console.groupEnd();

console.group("Countries");
console.log(countries);
console.groupEnd();

console.group("Users");
console.log(user);
console.log(users);
console.groupEnd();

//
let a = 5;
(b = c = 8), (d = 2);

console.log(b > a + d);

//NEW
const usersText = `{
  "users":[
    {
      "firstName":"Asabeneh",
      "lastName":"Yetayeh",
      "age":250,
      "email":"asab@asb.com"
    },
    {
      "firstName":"Alex",
      "lastName":"James",
      "age":25,
      "email":"alex@alex.com"
    },
    {
    "firstName":"Lidiya",
    "lastName":"Tekle",
    "age":28,
    "email":"lidiya@lidiya.com"
    }
  ]
  }`;

const usersObj = JSON.parse(usersText);
console.log(usersObj);

//
const skills = ["HTML", "CSS", "JS", "React", "Node", "Python"];
let obj1 = Object.assign({}, skills);
console.log(obj1);
let old = JSON.stringify(obj1);
console.log(old);

//
let mystr = JSON.stringify(skills);
console.log(mystr);
//
let age = 250;
//
let isMarried = true;
//
const student = {
  firstName: "Asabeneh",
  lastName: "Yetayehe",
  age: 250,
  isMarried: true,
  skills: ["HTML", "CSS", "JS", "React", "Node", "Python"],
};

let str = JSON.stringify(age);
console.log(str);
//
let stri = JSON.stringify(isMarried);
console.log(stri);

let string = JSON.stringify(student);
console.log(string);
let string1 = JSON.stringify(student, ["firstName", "lastName", "skills"]);
console.log(string1);
//

const txt = `{
  "Alex": {
      "email": "alex@alex.com",
      "skills": [
          "HTML",
          "CSS",
          "JavaScript"
      ],
      "age": 20,
      "isLoggedIn": false,
      "points": 30
  },
  "Asab": {
      "email": "asab@asab.com",
      "skills": [
          "HTML",
          "CSS",
          "JavaScript",
          "Redux",
          "MongoDB",
          "Express",
          "React",
          "Node"
      ],
      "age": 25,
      "isLoggedIn": false,
      "points": 50
  },
  "Brook": {
      "email": "daniel@daniel.com",
      "skills": [
          "HTML",
          "CSS",
          "JavaScript",
          "React",
          "Redux"
      ],
      "age": 30,
      "isLoggedIn": true,
      "points": 50
  },
  "Daniel": {
      "email": "daniel@alex.com",
      "skills": [
          "HTML",
          "CSS",
          "JavaScript",
          "Python"
      ],
      "age": 20,
      "isLoggedIn": false,
      "points": 40
  },
  "John": {
      "email": "john@john.com",
      "skills": [
          "HTML",
          "CSS",
          "JavaScript",
          "React",
          "Redux",
          "Node.js"
      ],
      "age": 20,
      "isLoggedIn": true,
      "points": 50
  },
  "Thomas": {
      "email": "thomas@thomas.com",
      "skills": [
          "HTML",
          "CSS",
          "JavaScript",
          "React"
      ],
      "age": 20,
      "isLoggedIn": false,
      "points": 40
  },
  "Paul": {
      "email": "paul@paul.com",
      "skills": [
          "HTML",
          "CSS",
          "JavaScript",
          "MongoDB",
          "Express",
          "React",
          "Node"
      ],
      "age": 20,
      "isLoggedIn": false,
      "points": 40
  }
}
`;

//LEVEL 3 QUESTION 1
//let obj2 = JSON.parse(txt);
//console.log(obj2);

//LEVEL 3 QUESTION 2

//console.log(obj2.Asab.skills);

//CHAPTER 17
//QUESTION 1

//localStorage.setItem("firstName", "Faramoluwa");
//localStorage.setItem("age", 26);
//localStorage.setItem("country", "Nigeria");
//localStorage.setItem("city", "Lagos");

//console.log(localStorage);

//QUESTION 2
// let theStudent = {
//   firstName: "ifeoluwa",
//   lastName: "faluyi",
//   age: 30,
//   country: "kenya",
//   skills: ["CSS", "HTML", "DJANGO", "JAVASCRIPT", "PYTHON"],
// };
// let newObj = JSON.stringify(theStudent);
// localStorage.setItem("theStudent", newObj);
// console.log(localStorage);
// //

// let dam = localStorage.getItem("country");
// console.log(dam);

// localStorage.clear("country");
// console.log(localStorage);

let number = 0;
console.log(number++);
console.log(++number);
console.log(number);

console.log(typeof typeof 1);

console.log(3 + "4" + "5");
//
class Person {
  constructor(firstName, lastName, age, country, city) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.country = country;
    this.city = city;
  }
  letFullName() {
    const fullName = this.firstName + " " + this.lastName;
    return fullName;
  }
}

const person1 = new Person("Asabeneh", "Yetayeh", 250, "Finland", "Helsinki");
const person2 = new Person("Lidiya", "Tekle", 28, "Finland", "Espoo");

console.log(person1.letFullName());
console.log(person2.letFullName());

const one = false || {} || null;
const two = null || false || " ";
const three = [] || 0 || true;
console.log(one, two, three);
