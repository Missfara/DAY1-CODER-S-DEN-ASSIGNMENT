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
  let arr = [1, 2, 3, 4, 5, "ade", "shola"];
  return arr;
};
console.log(printArray());

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
console.log(sumOf(29));

//QUESTION 11
let sumOfOdd = (a) => {
  let sum = 0;
  for (let e = 0; e <= a; e + 2) {
    sum += e;
    if (e % 2 == 0) {
    }
  }
  return sum;
};
console.log(sumOfOdd(100));

//QUESTION 12

let sumOfEven = (a) => {
  let sum = 0;
  for (let d = 0; d <= a; d++) {
    if (d % 2 == 1) {
      sum += d;
    }
  }
  return sum;
};
console.log(sumOfEven(10));

//QUESTION 13
let evenAndOdd = (positive) => {
  for (let z = 0; z <= positive; z++) {}
};
