let firstName = "Ademi";
let lastName = "Oreofe";
let country = "Pakistan";
let city = "dakar";
let age = 29;
let isMarried = false;
let year = 2012;

console.log(typeof firstName);
console.log(typeof lastName);
console.log(typeof country);
console.log(typeof city);
console.log(typeof isMarried);
console.log(typeof age);
console.log(typeof year);

//QUESTION 2
let num = "10";
console.log(num === 10);

//QUESTION 3
let decim = 9.8;
console.log(decim == 10);

//QUESTION 4
let $_ = 45;
let $ = 30;
let digit = 898;
console.log($_ > 10);
console.log($ < 49);
console.log(digit > 23);

let num_23 = 28;
let num_24 = 35;
let num_25 = 45;
console.log(num_23 > 48);
console.log(num_24 < 10);
console.log(num_25 < 0);

//QUESTION 5
console.log(4 > 3);
console.log(4 >= 3);
console.log(4 < 3);
console.log(4 <= 3);
console.log(4 == 4);
console.log(4 === 4);
console.log(4 != 4);
console.log(4 !== 4);
console.log(4 != "4");
console.log(4 !== "4");
console.log(4 === "4");

let first = "python";
let last = "jargon";
console.log(first.length < last.length);

//QESTION 6

console.log(4 > 3 && 10 < 12);
console.log(4 > 3 && 10 > 12);
console.log(4 > 3 || 10 < 12);
console.log(4 > 3 || 10 > 12);
console.log(!4 > 3);
console.log(!4 < 3);
console.log(!false);
console.log(!4 > 3 && 10 < 12);
console.log(!4 > 3 && 10 > 12);
console.log(!4 === "4");
console.log(first.includes("on"));
console.log(last.includes("on"));

//QUESTION 7

let now = new Date();
console.log(now.getFullYear());
console.log(now.getDate());
console.log(now.getMonth());
console.log(now.getHours());
console.log(now.getMinutes());
let jan = 1970;
let diff = now.getFullYear() - jan;
console.log(diff);

//LEVEL 2 (QUESTION 1)
let baseTriangle = 20;
let heightTriangle = 10;
let areaOfTriangle = prompt("Enter base and height to calculate Area");
alert(baseTriangle * heightTriangle);

//QUESTION 2
let trian = prompt("Enter side a");
let trian2 = prompt("Enter side b");
let trian3 = prompt("Enter side 3");
alert("the perimeter of the triangle will be 12");

//QUESTION 3
let revi = confirm("lets calculate the area of a rectangle");
let lengthof = prompt(
  "enter any number to to represent the length of a rectangle "
);
let widthof = prompt("enter any number to represent the width of a triangle");
let areaof = alert(widthof * lengthof);
let perim = confirm("let's check the perimeter as well");
let perimof = alert(2 * (lengthof + widthof));

//QUESTION 4
let circle = confirm(
  "lets get the area of a circle using the formular 3.14 * r * r "
);
let radius = prompt("Enter any number to represent radius");
alert(3.14 * radius * radius);
let circum = confirm("let's checkout the circumference as well");
alert(2 * 3.14 * radius);

//QUESTION 5
let x = 12;
let y = 2 * x - 2;
console.log(y);

//QUESTIOIN 9
let see = confirm(
  "let's calculate the earnings of  people  through their hours and rate"
);
let _hour = prompt("enter any number to represent hours");
let _rate = prompt("enter any number to represent rate");
alert(_hour * _rate);

//QUESTION 10
let nameOf = "ifeoluwa";
if (nameOf.length > 7) {
  console.log("your name is long");
} else if (nameOf.length < 7) {
  console.log("your name is short");
}

//QUESTION 11

let nameFisrt = "Asebenah";
let nameLast = "Yetayeh";
if (nameFisrt.length > nameLast.length) {
  console.log("your first name is longer than your family name");
}

//QUESTION 12
let fisrtAge = 250;
let lastAge = 25;
if (fisrtAge.length > lastAge.length) {
  console.log("I am 225 years oler than you");
}

//QUESTION 13
let confirmation = confirm("we want to know if you are eligible to drive");
let born = prompt("Enter your age");
if (born >= 18) {
  alert("You are old enough to drive");
} else if (born < 18) {
  alert("You are too young and not eligible to drive");
}

//question 14
let numYear = confirm(
  "we want to calculate the number of seconds you have lived"
);
let secs = prompt("enter your age");
alert(secs.getSeconds());
