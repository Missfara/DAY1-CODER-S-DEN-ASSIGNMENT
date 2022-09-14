// /*for (let b = 0; b <= 10; b++) {
//   console.log(b);
// }

// let i = 0;
// while (i <= 10) {
//   console.log(i);
//   i++;
// }

// let a = 0;
// do {
//   console.log(a);
//   a++;
// } while (a <= 10);*/

// // //QUESTION 2
// // for (let b = 10; b >= 0; b--) {
// //   console.log(b);
// // }

// // let i = 10;
// // while (i >= 0) {
// //   console.log(i);
// //   i--;
// // }

// // let a = 10;
// // do {
// //   console.log(a);
// //   a--;
// // } while (a >= 0);

// // //QUESTION 3
// // let n = 9;
// // for (let a = 0; a <= n; a++) console.log(a);

// // //QUESTION 4
// // let j = 0;
// // while (j <= 7) {
// //   console.log("#".repeat(j));
// //   j++;
// // }

// for (let j = 0; j <= 7; j++) {
//   console.log("#".repeat(j));
// }

// // //QUESTION 5
// // for (let d = 0; d <= 10; d++) {
// //   console.log(`$ (d) x $(d) = $(d ** 2)');
// // }

// //QUESTION 6
// for (let f = 0; f <= 10; f++) {
//   console.log(`${f}\t${f ** 2}\t ${f **3}`);
// }
// //QUESTION 7
// // for (let i = 0; i <= 100; i++) {
// //   if (i % 2 == 0) {
// //     continue;
// //   }
// //   console.log(i);
// // }
// //QUESTION 8
// // for (let d = 0; d <= 100; d++) {
// //   if (d % 2 == 1) {
// //     continue;
// //   }
// //   console.log(d);
// // }

// //QUESTION 9
// //let count = 0;
// // let i,j

// // for(j=2;j<=100;j++)
// // {
// //     for( i=1;i<=j;i++)
// //     {
// //         if(j%i==0) count++
// //     }

// //     if(count==2)
// //     console.log(j)
// //     count=0

// // }

// //QUESTION 10
// let sum = 0;
// for (let b = 0; b <= 100; b++) {
//   sum = sum + b;
//   console.log(sum);
// }

// //
// //QUESTION 11
// sum = 0;
// for (let i = 0; i <= 100; i++) {
//   if (i % 2 == 1) {
//     continue;
//   }
//   sum = sum + i;
//   console.log(sum);
// }

// sum1 = 0;
// for (let d = 0; d <= 100; d++) {
//   if (d % 2 == 0) {
//     continue;
//   }
//   sum1 = sum1 + d;
//   // console.log(sum1);
// }
// //let adSum = sum + " " + sum1;

// console.log([sum, sum1]);

// //QUESTION 13

// let myArray = [];
// for (let randomNumber = 0; myArray.length <= 5; randomNumber++) {
//   myArray.push(Math.floor(Math.random() * 21));
// }
// console.log(myArray);

// //QUESTION 14

// let myArr = [];
// for (let randomNumber = 0; myArr.length <= 5; randomNumber++) {
//   myArr.push(Math.floor(Math.random() * 10));
// }
// console.log(myArr);

// //QUESTION 15

// let myArra = [];
// for (let randomNumber = 0; myArra.length <= 5; randomNumber++) {
//   myArra.push(Math.floor(Math.random() * 21));
// }
// console.log(myArra);

// //QUESTION 16
// function square() {
//   return 5 ** 2;
// }
// console.log(square());

// const square1 = () => {
//   return 5 ** 2;
// };
// console.log(square1());

// //OR
// const square2 = () => 5 ** 2;
// console.log(square2());

//LEVEL 2
//QUESTION 4
const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];
// //QUESTION 4
// let upper = [];
// for (let i = 0; i < countries.length; i++) {
//   upper[i] = countries[i].toUpperCase();
// }
// console.log(upper);

//QUESTION 5
// let arrayOfLengths = [];

// for (let i = 0; i < countries.length; i++) {
//   arrayOfLengths.push(countries[i].length);
// }
// console.log(arrayOfLengths);

// //QUESTION 6
// for (let a = 0; a < countries.length; a++) {
//   console.log([
//     countries[a] +
//       "," +
//       " " +
//       countries[a].slice(0, 3).toUpperCase() +
//       "," +
//       " " +
//       countries[a].length,
//   ]);
// }
// //QUESTION 7
// let above = [];
// for (b = 0; b < countries.length; b++) {
//   if (countries[b].includes("land")) {
//     above.push(countries[b]);
//   }
// }
// console.log(above);

// //QUESTION 8
// let ball = [];
// for (let d = 0; d < countries.length; d++) {
//   if (countries[d].includes("ia")) {
//     ball.push(countries[d]);
//   }
// }
// console.log(ball);

// //QUESTION 9
// let longest = countries.filter((each) => {
//   return each.length > 7;
// });
// console.log(longest);
// //QUESTION 10

// let arrFive = countries.filter((each) => each.length == 5);
// console.log(arrFive);
// //QUESTION 11
const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];

// let great = webTechs.filter((each) => each.length > 7);
// console.log(great.toString());
// //OR

// //QUESTION 12
// //for (let z = 0; 0 < webTechs.length; z++);

// // let upper = webTechs.map((each) => each.toUpperCase());
// // let num = webTechs.map((each) => each.length);
// // console.log([upper + "," + "" + num]);

// //QUESTION 12
// let web;
// const webArr = [];
// for (web of webTechs) {
//   let webArray = [web, web.length];
//   webArr.push(webArray);
// }
// console.log(webArr);

// //QUESTION 13
// let acronym = "";
const mernstack = ["MongoDB", "Express", "React", "Node"];
// for (let y = 0; y < mernstack.length; y++) {
//   let sum = mernstack[y].charAt(0);
//   acronym += sum;
// }

// console.log(acronym);

//QUESTION 14
str = [];
for (let b = 0; b < webTechs.length; b++) {
  str.push(webTechs[b]);
}
console.log(str.toString());

//QUESTION 15
let fruit = ["banana", "orange", "mango", "lemon"];
for (let f = 3; f >= 0; f--) {
  console.log(fruit[f]);
}
//OR
const newA = [];
let fruit1 = ["banana", "orange", "mango", "lemon"];
for (let f = 3; f >= 0; f--) {
  newA.push(fruit1[f]);
}
console.log(newA);

//QUESTION 16
for (let a = 0; a < webTechs.length; a++) {
  console.log(webTechs[a].toUpperCase());
}

//LEVEL 3
//QUESTION 1
console.log(countries);

//QUESTION 2
let sortedCountries = countries.sort();
console.log(sortedCountries);

//QUESTION 3
console.log(webTechs.sort());
console.log(mernstack.sort());

//QUESTION 4
let land = [];
for (let b = 0; b < countries.length; b++) {
  if (countries[b].includes("land")) {
    land.push(countries[b]);
  }
}
console.log(land);

//QUESTION 5
let high = countries.filter((each) => each.length > 7);
console.log(high);

//QUESTION 6
let land1 = [];
for (let c = 0; c < countries.length; c++) {
  if (countries[c].includes("land")) {
    land1.push(countries[c]);
  }
}
console.log(land1);

//QUESTION 7
let four = countries.filter((each) => each.length == 4);
console.log(four);

//QUESTION 8

//QUESTION 9
let every = countries.map((each) => each.toUpperCase());
console.log(every.reverse());
