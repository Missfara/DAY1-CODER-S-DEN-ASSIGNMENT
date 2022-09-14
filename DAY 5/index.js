let arr1 = [];
let arr = ["school", 12, true, "baby", "precious", false, 33];
console.log(arr.length);
console.log(arr[0]);
console.log(arr[3]);
console.log(arr[6]);

let mixedDataTypes = ["toby", "folashade", 67, 54, 89, { school: "amazon" }];
console.log(mixedDataTypes.length);

let itCompanies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];

console.log(itCompanies);
console.log(itCompanies[2].toUpperCase());
// console.log(itCompanies.length);
// console.log(itCompanies[0]);
// console.log(itCompanies[3]);
// console.log(itCompanies[6]);
// console.log(itCompanies[0]);
// console.log(itCompanies[1]);
// console.log(itCompanies[2]);
// console.log(itCompanies[3]);
// console.log(itCompanies[4]);
// console.log(itCompanies[5]);
// console.log(itCompanies[6]);
// console.log(itCompanies[0].toUpperCase());
// console.log(itCompanies[1].toUpperCase());
// console.log(itCompanies[2].toUpperCase());
// console.log(itCompanies[3].toUpperCase());
// console.log(itCompanies[4].toUpperCase());
// console.log(itCompanies[5].toUpperCase());
// console.log(itCompanies[6].toUpperCase());
// console.log(itCompanies + " " + "are big IT Companies");

// if (itCompanies.includes("IBM")) {
//   console.log("IBM");
// } else {
//   console.log("company is not found");
// }
// console.log(itCompanies.sort());
// console.log(itCompanies.reverse());
// console.log(itCompanies.slice(0, 3));
// console.log(itCompanies.slice(4, 7));
// console.log(itCompanies.slice(3, 4));
// console.log(itCompanies.shift());
// console.log(itCompanies.pop());
// console.log(itCompanies.splice(0, 7));
// console.log(itCompanies);

//EXERCISE LEVEL 2
import { countries } from "./countries.js";
import { webTechs } from "./web_techs.js";
console.log(countries);
console.log(webTechs);

//QUESTION 2
let text =
  "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";
let word = text.split(" ");
console.log(word);
console.log(word.length);

//QUESTION 3
const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];
shoppingCart.unshift("meat");
shoppingCart.pop();
shoppingCart.push("sugar");
shoppingCart[2] = "Green Tea";
console.log(shoppingCart);

//QUESTION 4
if (countries.includes("Ethiopia")) {
  console.log("ETHIOPIA");
}

//QUESTION 5
if (webTechs.includes("Sass")) {
  console.log("Sass is a CSS Processor");
} else {
  console.log("Not included");
}

webTechs.push("Sass");
console.log(webTechs);

//QUESTION 6
const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"];
const backEnd = ["Node", "Express", "MongoDB"];

const fullStack = frontEnd.concat(backEnd);
console.log(fullStack);

//LEVEL 3
//QUESTION 1
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
ages.sort();
console.log(ages);
let medianAge = ages[4] + ages[5];
console.log(medianAge / 2);

let averageAge =
  ages[0] +
  ages[1] +
  ages[2] +
  ages[3] +
  ages[4] +
  ages[5] +
  ages[6] +
  ages[7] +
  ages[8] +
  ages[9];
console.log(averageAge / 10);

let rangeAge = ages[9] - ages[0];
console.log(rangeAge);

console.log(countries.slice(0, 10));
console.log(countries[5]);
countries.unshift("poland");
console.log(countries);
console.log(countries.slice(0, 6));
console.log(countries.slice(6, 12));
