// a callback function, the name of the function could be any name
//LEVEL 1
//QUESTION 1
/* 
forEach can be manipulated only works for an array, doesnt return an array.
filter only works for element, cannot be manipulated like map, wporks on object and array
reduce is used to take a callback function with accumulator, current and optional initial value.
map  works on array and modifys it, returns a new array.
*/
//QUESTION 2
//Come back function is a function that can be used as a parameter for another function.

//QUESTION 3
const countries = ["Finland", "Sweden", "Denmark", "Norway", "IceLand"];
countries.forEach((each) => console.log(each));

//QUESTION 4
const names = ["Asabeneh", "Mathias", "Elias", "Brook"];
names.forEach((each) => console.log(each));

//QUESTION 5
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numbers.forEach((each) => console.log(each));

//QUESTION 6
let upper = countries.map((each) => each.toUpperCase());
console.log(upper);

//QUESTION 7
let length = countries.map((each) => each.length);
console.log(length);

//QUESTION 8
let square = numbers.map((each) => each ** 2);
console.log(square);

//QUESTION 9
let upper1 = names.map((each) => each.toUpperCase());
console.log(upper1);

//QUESTION 10
const products = [
  { product: "banana", price: 3 },
  { product: "mango", price: 6 },
  { product: "potato", price: " " },
  { product: "avocado", price: 8 },
  { product: "coffee", price: 10 },
  { product: "tea", price: "" },
];
let newArr = products.map((each) => each.price);
console.log(newArr);

//QUESTION 11
let land = countries.filter((each) => each.includes("land"));
console.log(land);

//QUESTION 12
let six = countries.filter((each) => each.length === 6);
console.log(six);

//QUESTION 13
let more = countries.filter((each) => each.length > 5);
console.log(more);

//QUESTION 14
let start = countries.filter((country) => country.startsWith("E"));
console.log(start);

//QUESTION 15
let value = products.filter((each) => typeof each.price === "number");
console.log(value);

//QUESTION 16

const getString = () => {
  let arr = ["rajah", "ade", "bimbo"];
  return arr;
};
console.log(getString());

//QUESTION 17
let sum = numbers.reduce((sum, each) => (sum += each), 0);
console.log(sum);

//QUESTION 18
// let str = ["are", "north", "European", "countries"];
// let sentence = countries.reduce((str, each) => (each += str));
// console.log(sentence);

//QUESTION 19
//Some checks for similarities between some of the element and returns a boolean.
//Every checks similrities between all elements and returns a boolean.

//QUESTION 20
let know = names.some((each) => each.length > 7);
console.log(know);

//QUESTION 21
let all = countries.every((each) => each.includes("land"));
console.log(all);

//QUESTION 22
//Find returns the first element that satisfies a condition. deals with first element only.
//FindIndex returns the index of the first element that satisfies a condition.

//QUESTION 23
let find = countries.find((each) => each.length == 6);
console.log(find);

//QUESTION 24
findI = countries.findIndex((each) => each.length == 6);
console.log(findI);

//QUESTION 25
findNor = countries.findIndex((each) => each.endsWith("way"));
console.log(findNor);

//QUESTION 26
let findRussia = countries.findIndex((each) => each.endsWith("sia"));
console.log(findRussia);

//LEVEL 2
//QUESTION 1

//QUESTION 2
let sum2 = products.reduce(
  (sum, each) => (sum += typeof each.price === "number"),
  0
);

console.log(sum2);

//QUESTION 1

// let result = (num) => {
//   return num > 0 ? "positive" : num < 0 ? "negative" : "zero";
// };

//console.log(result(-1));

//QUESTION 2
// let check = (num) => {
//   return num % 2 || 3 || 4 || 5 || 10 == 0
//     ? "this number is divisible by 2 or 3 etc"
//     : !num % 2 || 3 || 4 || 5 || 10 == 0
//     ? "this number is not divided by 2 0r 3 etc"
//     : "the number is odd";
// };
// console.log(check(70));

// const divisibles = (num) => {
//   let divisors = [],
//     dividers = [2, 3, 4, 5, 10];
//   for (let i = 0; i < dividers.length; i++) {
//     if (Number(num) % dividers[i] == 0) divisors.push(dividers[i]);
//   }
//   if (!divisors.length) {
//     return `${num} is not divisible by 2, 3, 4, 5 or 10`;
//   } else if (divisors.length == 1) {
//     return `${num} is divisible by ${divisors[0]}`;
//   } else {
//     return `${num} is divisible by ${divisors
//       .slice(0, divisors.length - 1)
//       .join(", ")} and ${divisors[divisors.length - 1]}`;
//   }
// };
// console.log(divisibles(6));
// console.log(divisibles(9));
// console.log(divisibles(53));

// //QUESTION 3
// let answer = (arr) => (new Set(arr).size === arr.length ? false : true);
// console.log(answer([2, 3, 4, 4, 7, 9]));

// //QUESTION 4
// let random = () => "ID" + Math.random().toString().slice(3, 8);
// console.log(random());

// //QUESTION 5
// let mtnNumber = (check) =>
//   /(^0|^1)(803|806|814|810|816|703|706|906)\d{7}$/.test(check)
//     ? "valid mtn number"
//     : "invalid mtn Number";

// console.log(mtnNumber("18101056369"));

// //QUESTION 6
// let meeting = (id) =>
//   /^[a-z]{3}-[a-z]{4}-[a-z]{3}$/.test(id) ? "valid meet id" : "invalid meet id";
// console.log(meeting("anf-nmjh-ght"));

//QUESTION 7

const arrayProduct = (arr) =>
  arr.length == 1 ? arr[0] : arr[0] * arrayProduct(arr.slice(1, arr.length));

console.log(arrayProduct([8, 4, 7]));
console.log(arrayProduct([1, 2, 3, 4, 5, 6, 7]));

//QUESTION 8

//DEMO

//QUESTION 1

// let response = (num) => {
//   let empty = [];
//   for (let a = num; a >= 1; a--) {
//     empty.push(a);
//   }
//   return empty;
// };
// console.log(response(10));
// // OR

// let minus = (num) => {
//   if (num > 1) {
//     return num--;
//   }
//   return num;
// };
// console.log(minus(10));

//QUESTION 2
let every = (set, value) => new Set(set).has(value);

console.log(every([1, 2, 2, 3, 4, 5, 6, 7, 8], 6));

// //QUESTION 3
// let bag = { keren: 3, hifeh: 5, delia: 2 };
// console.log("keren" in Object(bag));
// console.log(Object.entries(bag));

// //QUESTION 4
// let str = "Some-people-like-soup";

// let newStr = str.replace(
//   /-([a-z])([a-z])/g,
//   (char1, char2, char3) => " " + char2 + " " + char3 + " "
// );

// console.log(newStr);

// //QUESTION A
// const nations = [
//   ["libya", "Ghana", "Gambia"],
//   ["Austria", "Poland", "Italy"],
//   ["USA", "Australia", "Dubai"],
// ];
// let [a, b, c] = nations;
// console.log(b.includes("finland"));

// //QUESTION BV
// let obj = {
//   width: 12,
//   height: 34,
//   area: 65,
// };

// let { width: wid, height: hg, area: ar } = obj;
// console.log(wid * hg);

// //REGEX
// let pat = /l..e/gi;
// pat = /[aeiou]/gi;
// pat = /[a-zA-Z0-9]/gi;
// pat = /\D/gi;
// pat = /^t/gi;
// pat = /4$/gi;
// pat = /[a-z]{6,8}/gi;
// pat = /\b[a-z]{2,}/gi;
// pat = /[^ a-zA-Z-0-9]/;
// let sent = `There is nothing like love, except the one from God. He loved us, even when we didn't love him 44444 hallelujah`;
// console.log(sent.match(pat));

// let checkIt = (number) => {
//   let double = /^0(710|810|803|706|703|814|806){7}[0-9]$/gi;
//   console.log(checkIt(number).double);
// };

// let chek = (bool) => (bool === true ? "yes" : "no");
// console.log(chek(true));

// //QUESTION D
// let ans = (arr) => {
//   if (new Set(arr).size === arr.length) {
//     return "same";
//   } else {
//     return "not same";
//   }
// };
// console.log(ans([1, 2, 3, 4, 5, 6, 7, 7]));

// //QUESTION C
// let both = (arr1, arr2) => {
//   let c = new Set([...arr1, ...arr2].sort((a, b) => a - b));
//   return c;
// };
// console.log(both([1, 2, 3, 9, 4, 3, 5], [12, 21, 12, 56, 23]));

//LEETCODE 1
let string2 = (arr1, arr2) => {
  if (arr1.length != arr2.length) {
    return false;
  }
  return arr1.sort().every((item, index) => item === arr2.sort()[index]);
};
console.log(string2(["ade", "funmi"], ["ade", "funmi", "edward"]));

//LEETCODE  2

const fruits = ["banana", "orange", "mango", "lemon"];
fruits[2] = "Apple";
//let last = fruits.toUpperCase();
console.log(fruits, fruits.length);
//console.log(last);
const eightEmptyValues = Array(8).fill("hifeh");
console.log(eightEmptyValues);
//
const firstList = [1, 2, 3];
const secondList = [4, 5, 6];
console.log(firstList.concat(secondList));

//
let nam1 = "Asabeneh Eias Brook";
console.log(nam1.split(" "));
//
// let month = prompt("enter a month");
// let month1 = month.toLowerCase();
// switch (month1) {
//   case "january":
//     console.log("january has 31 days ");
//     break;
//   case "february":
//     console.log("february has 28 days");
//     break;
//   case "wednesday":
//     console.log("Today is Wednesday");
//     break;
//   case "thursday":
//     console.log("Today is Thursday");
//     break;
//   case "friday":
//     console.log("Today is Friday");
//     break;
//   case "saturday":
//     console.log("Today is Saturday");
//     break;
//   case "sunday":
//     console.log("Today is Sunday");
//     break;
//   default:
//     console.log("It is not a week day.");
// }

let a = 4;
let b = 5;
if (a > b) {
  console.log("a is greater than b");
} else {
  console.log("b is greater than a");
}

a > b ? console.log("a is greater than b") : console.log("b is greater than a");
//
// let now = prompt("enter any number");
// now % 2 === 0 ? console.log("it's an even number") : console.log("it's an odd number")
//
const countries3 = ["Finland", "Sweden", undefined, "Norway"];
const [fin, swe, ice = "Iceland", nor, den = "Denmark"] = countries3;
console.log(ice);
//
const fullStack = [
  ["HTML", "CSS", "JS", "React"],
  ["Node", "Express", "MongoDB"],
];
let [d, e] = fullStack;
console.log(d);
//
const countries5 = [
  "Germany",
  "France",
  "Belgium",
  "Finland",
  "Sweden",
  "Norway",
  "Denmark",
  "Iceland",
];

let [gem, fra, , ...others] = countries5;
console.log(gem, fra, others);
//

let [...ever] = countries5;
console.log(ever);
//
function add() {
  let counter = 0;
  function plus() {
    counter += 1;
  }
  plus();
  return counter;
}
console.log(add());

//DOM
let date1 = new Date();
console.log(date1);
