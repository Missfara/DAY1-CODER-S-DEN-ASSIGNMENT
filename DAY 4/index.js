// // let ageDrive = prompt("Enter your age");
// // if (ageDrive >= 18) {
// //   alert("You are old enough to drive");
// // } else if (ageDrive < 18) {
// //   alert("You are not eligible and have few years to drive");
// // }

// // //QUESTION 2

// // let yourAge = prompt("enter your age");
// // let myAge = 25;
// // if (myAge == yourAge) {
// //   console.log("we are agemates");
// // } else if (myAge > yourAge) {
// //   alert("I am older than you");
// // } else if (myAge < yourAge) {
// //   alert("You are older than me");
// // }

// // //QUESTION 3
// // let a = 18;
// // let b = 21;
// // if (a > b) {
// //   console.log("a is greater than b");
// // } else if (a < b) {
// //   console.log("b is greater than a");
// // }

// // a < b ? console.log("b is greater than a") : console.log("a is greater than b");

// // //QUESTION 4
// let num = prompt("enter any number");
// if (num % 2 === 0) {
//   alert("This is an even number");
// } else {
//   alert("This is an odd number");
// }

// // //LEVEL 2
// // //QUESTION 1
// // let grade = prompt("Kindly, input your score");
// // if (grade >= 80) {
// //   alert("Your grade is a A");
// // } else if (grade >= 70) {
// //   alert("your grade is a B");
// // } else if (grade >= 60) {
// //   console.log("Your grade is a C");
// // } else if (grade >= 50) {
// //   console.log("Your grade is a D");
// // } else if (grade >= 0) {
// //   console.log("Your grade is an F");
// // }

// //QUESTION 2
// let season = prompt("Enter any month to know its season");
// switch (season) {
//   case "September" || "October" || "November":
//     alert("The season is Autumn");
//     break;
//   case "December" || "January" || "February":
//     alert("The season is Winter");
//     break;
//   case "March" || "April" || "May":
//     alert("The season is Spring");
//     break;
//   case "june" || "June" || "july" || "August":
//     alert("The season is Summer");
//     break;
//   default:
//     alert("This is not a month.");
//     break;
// }

// //QUESTION 3
// // let day = prompt("Enter any day of the week").toLowerCase;
// // if (day === "saturday" || day === "sunday") {
// //   alert("Today is a Weekend");
// // } else if (
// //   day === "monday" ||
// //   day === "tuesday" ||
// //   day === "wednesday" ||
// //   day === "thursday" ||
// //   day === "friday"
// // ) {
// //   alert("Today is a Working day");
// // } else {
// //   alert("This is not a day of the week");
// // }

let month = prompt("Enter any month to know the days in it");
switch (month) {
  //case january:
  //   alert("Its 31 days in ja");
  case march:
    alert("its 31 days ma");
  case july:
    alert("its 31 days ju");
  case october:
    alert("its 31 days oc");
  case december:
    alert("its 31 days in december");
  case may:
    alert("its  31 days ma");
  case august:
    alert("31 days A");
    break;
  default:
    alert("this is not applicable");
    break;
}
