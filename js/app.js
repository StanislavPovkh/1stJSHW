let firstName = "Stanislav";
let lastName = "Povkh";
let fullName = `${firstName} ${lastName}`;
console.log(fullName);


let length = 5;
let width = 10;
let s = length * width;
console.log(s);

Math.pow(10, 6);
console.log(Math.pow(10, 6));

console.log(Math.floor(Math.random() * 50));


let number = -3;
if (number < 0) {
  console.log("negative value");
} else {
  console.log("positive value");
}


let text = "Hello World!";
if (text.length > 1) {
  console.log(text[text.length - 2]);
} else {
  consol.log("Sorry, the text is too short");
}


let month = 12;
switch (month) {
  case 1:
    console.log("January");
    break;
  case 2:
    console.log("February");
    break;
  case 3:
    console.log("March");
    break;
  case 4:
    console.log("April");
    break;
  case 5:
    console.log("May");
    break;
  case 6:
    console.log("June");
    break;
  case 7:
    console.log("July");
    break;
  case 8:
    console.log("August");
    break;
  case 9:
    console.log("September");
    break;
  case 10:
    console.log("October");
    break;
  case 11:
    console.log("November");
    break;
  case 12:
    console.log("December");
    break;
  default:
    console.log("such data not available");
}


let password = "dsafas&fa";
if (password.length > 5 && password.indexOf("&") !== 1) {
  console.log("this password is strong");
} else {
  console.log("this password is weak");
}


let a = 6;
let b = 3;
if (typeof a === "number" && typeof b === "number") {
  console.log(a + b);
} else {
  console.log("Sum of those items can’t be counted");
}


let textOne = "String";
let textTwo = "String";
if (
  typeof textOne === "string" &&
  typeof textTwo === "string" &&
  textOne.length === textTwo.length
) {
  console.log("those items are strings and they're equal");
} else {
  console.log("items are not compareble");
}