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

//QUESTION 3






