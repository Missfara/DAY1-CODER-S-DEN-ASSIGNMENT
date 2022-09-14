//LEVEL 1
//QUESTION 1
let ifeoluwa = new Set();
console.log(ifeoluwa);

//QUESTION 2
let numbers = new Set();
for (let a = 0; a <= 10; a++) {
  numbers.add(a);
}
console.log(numbers);

//QUESTION 3
numbers.delete(8);
console.log(numbers);

//QUESTIONB 4
numbers.clear();
console.log(numbers);

//QUESTION 5

const languages = [
  "English",
  "Finnish",
  "English",
  "French",
  "Spanish",
  "English",
  "French",
  "Polish",
];
const newLang = new Set(languages);
console.log(newLang);

//QUESTION 6
// let countries = ["Finland", "Sweden", "Norway"];
// let newCountries = new Map((countries) => countries);
// console.log(newCountries);
// console.log(countries.size);

//LEVEL 2
//QUESTION 1
// const a = [4, 5, 8, 9];
// const b = [3, 4, 5, 7];
// const c = [...a, ...b];
// let C = new Set(c);
// console.log(C);
//OR
//console.log(new Set(c));

//QUESTION 2
// const a = [4, 5, 8, 9];
// const b = [3, 4, 5, 7];
// let A = new Set(a);
// let B = new Set(b);
// let c = a.filter((num) => B.has(num));
// let C = new Set(c);
// console.log(C);

//QUESTION 3
const a = [4, 5, 8, 9];
const b = [3, 4, 5, 7];
let A = new Set(a);
let B = new Set(b);
let c = b.filter((num) => !A.has(num));
let C = new Set(c);
console.log(C);

//LEVEL 3
//QUESTION 1
languages = [
  { English: 91 },
  { French: 45 },
  { Arabic: 25 },
  { Spanish: 24 },
  { Russian: 9 },
  { Portuguese: 9 },
  { Dutch: 8 },
  { German: 7 },
  { Chinese: 5 },
  { Swahili: 4 },
  { Serbian: 4 },
];

let lang = new Set(languages);
console.log(lang);
