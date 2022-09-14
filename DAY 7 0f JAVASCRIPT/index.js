//QUESTION 1
function fullName2() {
  let name1 = "faluyi";
  let name2 = "ifeoluwa";
  let space = " ";
  let all = name1 + space + name2;
  console.log(all);
}
fullName2();

//QUESTION 2

function fullName(a, b) {
  return a + " " + b;
}
console.log(fullName("ifeoluwa", "faluyi"));

//QUESTION 3
function addNumbers(a, b) {
  let sum = a + b;
  return sum;
}
console.log(addNumbers(12, 11));

//QUESTION 4
function areaOfRectangle(a, b) {
  let area = a * b;
  return area;
}
console.log(areaOfRectangle(8, 9));

//QUESTION 5
function perimeterOfRectangle(d, e) {
  let perimeter = d + e * 2;
  return perimeter;
}
console.log(perimeterOfRectangle(6, 9));

//QUESTION 6
let volumeOfRectPrism = function (a, b, d) {
  let volume = a * b * d;
  return volume;
};
console.log(volumeOfRectPrism(10, 12, 15));

//QUESTION 7
let areaOfCircle = (r) => {
  let area = Math.PI * r * r;
  return area;
};
console.log(areaOfCircle(8));

//QUESTION 8
let circumOfCircle = function (r) {
  let circumference = 2 * Math.PI * r;
  return circumference;
};
console.log(circumOfCircle(10));

//QUESTION 9
let densityOfSubstance = (a, b) => {
  let density = a / b;
  return density;
};
console.log(densityOfSubstance(80, 10));

//QUESTION 10

let speedRate = () => {
  totalDistance = 100;
  totalSpeed = 20;
  speed = totalDistance / totalSpeed;
  return speed;
};
console.log(speedRate());

// QUESTION 11
let weightOfSubstance = function () {
  let mass = 50;
  let gravity = 10;
  weight = mass * gravity;
  return weight;
};
console.log(weightOfSubstance());

//QUESTION 12
let temperature = () => {
  let oC = 87;
  let oF = (oC * 9) / 5 + 32;
  return oF;
};
console.log(temperature());

//QUESTION 13
let bmiCalc = (weight, height) => {
  let bmi = weight / height ** 2;
  if (bmi < 18.5) {
    console.log("Underweight");
  } else if (bmi >= 18.5 || bmi <= 24.9) {
    console.log(`BMI is: ${bmi}: Normal weight`);
  } else if (bmi >= 25 || bmi <= 29.9) {
    console.log(`BMI is: ${bmi}: Overweight`);
  } else if (bmi >= 30) {
    console.log(`BMI is: ${bmi}: Obese`);
  } else {
    console.log("Please enter valid inputs");
  }
};
bmiCalc(90, 2);

//QUESTION 14

function checkSeason(month) {
  if (month == "december" || month == "january" || month == "february") {
    return "Autumn";
  } else if (month == "march" || month == "april" || month == "may") {
    return "Spring";
  } else if (month == "june" || month == "july" || month == "august") {
    return "Summer";
  } else if (
    month == "september" ||
    month == "october" ||
    month == "november"
  ) {
    return "Autumn";
  } else {
    return "oops! Something went horribly wrong";
  }
}
console.log(checkSeason("may"));

//QUESTION 15
let findMax = (a, b, c) => {
  let result;
  if (a > b && a > c) {
    return a;
  } else if (b > a && b > c) {
    return b;
  } else if (c > a && c > b) {
    return c;
  } else {
    return "Oops! something went horribly wrong.";
  }
};

console.log(findMax(12, 32, 45));

//LEVEL 2
//QUESTION 1
//y = 8x + 9.

const solveLinEquation = (a, b, c) => {
  let m = a / b;
  let c1 = -c / b;

  console.log(m, c1);
};

solveLinEquation(8, 1, -9);

//QUESTION 2
let solveQuad = (a, b, c) => {
  let;
};

//QUESTION 3
let printArray = (array) => {
  for (let item of array) {
    console.log(item);
  }
};
let arr = [1, 2, 3, 4, 5, "ade", "shola"];
printArray(arr);

//QUESTION 4
let showDateTime = () => {
  let d = new Date();
  return d;
};
console.log(showDateTime());

//QUESTION 5
let swapValue = (a, b) => {
  return [b, a];
};
console.log(swapValue(34, 4));

//QUESTION 6
let reverseArr = (arr) => {
  let array = ["a", "b", "c", "d", "e"];
  return array.reverse();
};

console.log(reverseArr());

//OR
const reverseArray = (arr) => {
  const newArr = [];
  for (let item of arr) {
    newArr.unshift(item);
  }
  return newArr;
};
console.log(reverseArray([1, 2, 3, 4, 5, 6, 7, "a", "b"]));

//QUESTION 7

let array3 = ["rajah", "ebuka", "tamara", "oluwaseun", "eunice"];
let capitalize = array3.map((each) => each.toUpperCase());
console.log(capitalize);

// //QUESTION 8
let addArr1 = (arr) => {
  let array = ["a", "b", "c", "d", "e"];
  array.push(arr);
  return array;
};

console.log(addArr1("g"));

//QUESTION 9
let minusArr = (index) => {
  let array = ["a", "b", "c", "d", "e"];
  array.splice(index, 1);
  return array;
};

console.log(minusArr(3));

//QUESTION 10
let sumOf = (a) => {
  let sum = 0;
  for (let d = 0; d <= a; d++) {
    sum += d;
  }
  return sum;
};
console.log(sumOf(24));

//QUESTION 11
let sumOfEven = (a) => {
  let sum = 0;
  for (let e = 0; e <= a; e++) {
    if (e % 2 == 0) {
      sum += e;
    }
  }
  return sum;
};
console.log(sumOfEven(100));

//QUESTION 12

let sumOfOdd = (a) => {
  let sum = 0;
  for (let d = 0; d <= a; d++) {
    if (d % 2 !== 0) {
      sum += d;
    }
  }
  return sum;
};

console.log(sumOfOdd(10));

//QUESTION 13
let odd = [];
let even = [];

let evenAndOdd = (positive) => {
  for (let z = 0; z <= positive; z++) {
    if (z % 2 === 0) {
      even.push(positive[z]);
    } else if (z % 2 === 1) {
      odd.push(positive[z]);
    }
  }
  return `the number of even are ${odd.length} and the number of odds are ${odd.length}`;
};
console.log(evenAndOdd(200));

//QUESTION 14
let sumOfEverything = (a, b, d) => {
  let sum = a + b + d;
  return sum;
};
console.log(sumOfEverything(45, 19, 23));

//QUESTION 15

const characters = "abcdefghijklmABCDEFOLKvbyzGHIHJK#@GHBKLOPSZQY1234567890";
let randomId = (length) => {
  let result = " ";
  let characterLength = characters.length;
  for (let y = 0; y < length; y++) {
    result += characters.charAt(Math.floor(Math.random() * characterLength));
  }
  return result.toString();
};
console.log(randomId(4));

//QUESTION 16

//QUESTION 17
const character1 = "abc12345def67#890";
let hexaRandom = (length) => {
  let output = " ";
  let charactersLength = character1.length;
  for (let y = 0; y < length; y++) {
    output += character1.charAt(Math.floor(Math.random() * charactersLength));
  }
  return output.toString();
};
console.log(hexaRandom(5));

//QUESTION 18

const character2 = "abc12345def67#890ADFGWQBNMJKUYTCPLJKFSAwoplbzxysswhg";
let UserIdGen = (length) => {
  let output = " ";
  let characters2Length = character2.length;
  for (let y = 0; y < length; y++) {
    output += character2.charAt(Math.floor(Math.random() * characters2Length));
  }
  return output.toString();
};
console.log(UserIdGen(7));

//LEVEL 3
//QUESTION 1

const randomId2 = (n) => {
  const chars = "0123456789abcdefghijklmnopqrstuvwxyz";
  const charsArr = chars.split("");
  let id = ``;
  for (let i = 0; i < n; i++) {
    id += `${charsArr[Math.floor(Math.random() * charsArr.length)]}`;
  }
  return id;
};
console.log(randomId2(10));

//QUESTION 2
let randomInteger = (num) => {
  return Math.floor(Math.random() * (num + 1));
};
console.log(randomInteger(255));

let rgbColorGenerator = () => {
  let r = randomInteger(255);
  let g = randomInteger(255);
  let b = randomInteger(255);
  //for (let a = 0; a < 5; a++) {
  return `rgb ${[r, g, b]}`;
};
console.log(rgbColorGenerator());

//Question 3
const arrayOfHexaColors = "abc123d456ef#7890";
let hexColor = (length) => {
  let output = [];
  let hexLength = arrayOfHexaColors.length;
  for (let y = 0; y < length; y++) {
    output += arrayOfHexaColors.charAt(Math.floor(Math.random() * hexLength));
  }
  return output;
};
console.log(hexColor(7));

//QUESTION 4

let arrayOfRgbColors = (num) => {
  return Math.floor(Math.random() * (num + 1));
};
console.log(arrayOfRgbColors(255));

let rgbColors = () => {
  let r = arrayOfRgbColors(255);
  let g = arrayOfRgbColors(255);
  let b = arrayOfRgbColors(255);
  //for (let a = 0; a < 5; a++) {
  return `rgb ${[r, g, b]}`;
};
console.log(rgbColors());

//QUESTION 5

const arrayOfHexColors = () => {
  let allHexCodes = "123456789abcdef";
  let loopCount = parseInt(Math.random() * 50);
  let hexColorArr = [];

  for (let x = 1; x <= loopCount; x++) {
    let hexChars = [];
    for (let i = 0; i < 6; i++) {
      hexChars.push(
        allHexCodes[parseInt(Math.random() * allHexCodes.length) - 1]
      );
    }
    hexColorArr.push("#" + hexChars.join(""));
  }
  return hexColorArr;
};
console.log(arrayOfHexColors());

//QUESTION 6
