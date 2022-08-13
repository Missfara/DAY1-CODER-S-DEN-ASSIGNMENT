let challenge = "30 Days Of JavaScript";
console.log(challenge);
console.log(challenge.length);
console.log(challenge.toUpperCase());
console.log(challenge.toLowerCase());
console.log(challenge.substr(0, 2));
console.log(challenge.substr(2, 21));
console.log(challenge.includes("Script"));
console.log(challenge.split());
console.log(challenge.split(" "));
//QUESTION 11
let cou = "Facebook",
  _cou = "Google",
  coun = "Microsoft",
  _coun = "Apple",
  _count = "IBM",
  countr = "Oracle",
  _countr = "Amazon";

console.log(cou.split(""));
console.log(_cou.split(""));
console.log(coun.split(""));
console.log(_coun.split(""));
console.log(_count.split(""));
console.log(countr.split(""));
console.log(_countr.split(""));

//QUESTION 12
console.log(challenge.replace("JavaScript", "python"));

//QUESTION 13
console.log(challenge.charAt(15));

//QUESTION 14
console.log(challenge.charCodeAt(8));

//QUESTION 15
console.log(challenge.indexOf("a"));

//QUESTION 16
console.log(challenge.lastIndexOf("a"));

//QUESTION 17
let sentence =
  "You cannot end a sentence with because because because is a conjunction";
console.log(sentence.indexOf("because"));

//QUESTION 18
console.log(sentence.lastIndexOf("because"));

//QUESTION 19
console.log(sentence.search("because"));

//QUESTION 20
console.log(challenge.trim(""));

//QUESTION 21
console.log(challenge.startsWith("30"));

//QUESTION 22
console.log(challenge.endsWith("JavaScript"));

//QUESTION 23
console.log(challenge.match("a"));

//QUESTION 24
let word = "30 Days of";
console.log(word.concat(" ", "JavaScript"));

//QUESTION 25
console.log(challenge.repeat(2));

//LEVEL 2

//QUEATION 1
let quote =
  "The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.";
console.log(quote);

//QUESTION 2
let quotes = `"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
`;
console.log(quotes);

//QUESTION 3
let num = "10";
console.log(typeof num);
let numInt = Number(num);
console.log(typeof numInt);

//QUESTION 4
let decimal = 9.8;
console.log(Math.round(decimal));

//QUESTION 5
let anime = "python",
  animal = "jargon";
console.log(anime.includes("on"));
console.log(animal.includes("on"));

//QUESTION 6
let statement = "I hope this course is not full of jargon.";
console.log(statement.includes("jargon"));

//QUESTION 7
let randomNum = Math.random();
let numFromZeroToHundred = randomNum * 100;
console.log(Math.round(numFromZeroToHundred));

//QUESTION 8
let randomNums = Math.random();
let numFromFiftyToHundred = randomNums * 100;
console.log(Math.round(numFromFiftyToHundred));

//QUESTION 9
let randomNumber = Math.random();
let numFromOneToTwoHundredAndFiftyFive = randomNumber * 255;
console.log(Math.round(numFromOneToTwoHundredAndFiftyFive));

//QUESTION 10
let program = "JavaScript";
let character = program.charAt(Math.random() * 10);
console.log(character);

//QUESTION 11
console.log(`1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125`);

//QUESTION 12
console.log(sentence.substr(30, 25));

//LEVEL 3
//QUESTION 1
let paragraph =
  "Love is the best thing in this world. Some found their love and some are still looking for their love.";
console.log(paragraph.match("love"));

//QUESTION 2
console.log(sentence.match("because"));

//QUESTION 3
const sentence1 =
  "%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching";
/*.log(
  sentence1.replace(
    "%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching",
    "I am a teacher, and i love teaching. There is nothing as more rewarding as educating and empowering people. I found teaching more interesting than any other jobs. Does this motivate you to be a Teacher!? This 30days of JavaScript is the result of love of teaching "
  )
);*/

console.log(sentence1.replace(/[%@&$#;]/gi, ""));

//QUESTION 4
let salary =
  "He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.";
//console.log(salary.match(/\d+/gi));
let extraction = salary.match(/\d+/gi);
let tired =
  Number(extraction[0]) + Number(extraction[1]) + Number(extraction[2]);
