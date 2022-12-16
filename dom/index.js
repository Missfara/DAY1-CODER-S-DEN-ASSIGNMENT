let para1 = document.getElementsByTagName("p");
console.log(para1[0]);
//
let par1 = document.querySelector("p");
console.log(par1);
//
let just = document.querySelector("#para1");
console.log(just);
//
let just1 = document.querySelector("#para2");
console.log(just1);
//
let just2 = document.querySelector("#para3");
console.log(just2);
//
let just3 = document.querySelector("#para4");
console.log(just3);
//

let all = document.querySelectorAll("p");
console.log(all);
//
for (let a = 0; a < 4; a++) {
  console.log(all[a]);
}
//
let text = document.querySelectorAll("p");
text[3].textContent = "fourth paragraph";
text[2].textContent = "";
//console.log(text);

//
let se = document.querySelectorAll("p");
se[0].setAttribute("class", "parag");
se[0].setAttribute("id", "parag1");
se[1].setAttribute("class", "parag");
se[1].setAttribute("id", "parag2");
se[2].setAttribute("class", "parag");
se[2].setAttribute("id", "parag3");
se[3].setAttribute("class", "parag");
se[3].setAttribute("id", "parag4");

text[0].style.backgroundColor = "aqua";
text[0].style.Color = "white";
text[0].style.border = " 2px solid red";
text[0].style.fontSize = "44px";
text[0].style.padding = "25px";
//
text[1].style.backgroundColor = "green";
text[1].style.Color = "white";
text[1].style.border = " 2px solid blue";
text[1].style.fontSize = "34px";
text[1].style.padding = "20px";
//
text[3].style.backgroundColor = "teal";
text[3].style.Color = "white";
text[3].style.border = " 2px solid yellow";
text[3].style.fontSize = "24px";
text[3].style.padding = "15px";
//

text.forEach((tex, i) =>
  i % 2 !== 0 ? (tex.style.width = "15rem") : (tex.style.width = "18rem")
);
//DOM PROJECT 2
//CREATING AN ELEMENT
let title;
for (let i = 0; i < 3; i++) {
  title = document.createElement("h1");
  title.className = "title";
  title.style.fontSize = "24px";
  title.textContent = i;
  console.log(title);
}

//APPENDING CHILD TO A PARENT ELEMENT
let title1;
for (let i = 0; i < 3; i++) {
  title1 = document.createElement("h1");
  title1.className = "title";
  title1.style.fontSize = "24px";
  title1.textContent = i;
  document.body.appendChild(title1);
}
//.REMOVING A CHILD FROM A PARENT ELEMENT

let rem = document.querySelectorAll("p");
rem.textContent = "";

// let long;
// for (let a = 0; a <= 100; a++) {
//   long = document.createElement("div");
//   long.style.padding = "10px";
//   long.style.margin = "5px";
//   long.style.width = "20px";
//   long.style.height = "10px";

//   long.textContent = a;
//   a % 2 == 0
//     ? (long.style.backgroundColor = "green")
//     : (long.style.backgroundColor = "yellow");
//   document.body.appendChild(long);
//   console.log(long);
// }
// //WHENEVER WE CLICK THE BUTTON, WE CALL THE FUNCTION
// // erySelector(".but");
// button1.addEventListener("dblclick", (e) => {
//   console.log("e gives the event listener object:", e);
//   console.log("e.target gives the selected element: ", e.target);
//   console.log(
//     "e.target.textContent gives content of selected element: ",
//     e.target.textContent
//   );
// });
// const button = document.querySelector("button");
// button.addEventListener("click", (e) => {
//   alert("e gives the event listener object:", e);
//   alert("e.target gives the selected element: ", e.target);
//   alert(
//     "e.target.textContent gives content of selected element: ",
//     e.target.textContent
//   );
// });
// //

// const clickMe = () => {
//   alert("We can attach event on HTML element");
// };
// //

// const button1 = document.qu

//
let row = document.getElementsByClassName("row")[0];
//let numArr =
numArr.forEach
