// // BMI Calculator

// const weight = 80;
// const height = 1.8;
// const BMI = weight / height ** 2;
// const formated_BMI = BMI.toFixed(1);
// console.log(formated_BMI);
// if (formated_BMI <= 24.9) {
//   console.log("Normal Weight");
// } else if (formated_BMI > 24.9 && formated_BMI <= 29.9) {
//   console.log("Over Weight");
// } else if (formated_BMI > 29.9 && formated_BMI <= 39.9) {
//   console.log("Obese");
// } else {
//   console.log("Morbidly Obese");
// }

// //Arrays

// const StudentsAge = [10, 20, 30, 40];
// console.log(StudentsAge);

// //Array.from
// const OrignalArray = { 0: "a", 1: "b", 2: "c", length: 3 };
// const CovertedArray = Array.from(OrignalArray);
// console.log(CovertedArray);

// //Arrays Push and Unshift method.
// const age = [0, 1, 2];
// console.log("original aaray", age);
// const newArray = age.push(3, 4);
// console.log("Updated aaray", age);

// //For Loop
// for (let i = 0; i <= 5; i++) {
//   console.log(i);
// }

// //For Loop With Array
// const fruits = ["Mango", "Apple", "Orange", "Banana"];
// for (let a = 0; a < fruits.length; a++) {
//   console.log(fruits[a]);
// }

// //ForEach Loop
// let numbers = [1, 2, 3, 4, 5, 6];
// let sqr = [];
// numbers.forEach(function (num) {
//   sqr.push(num * num);
// });
// console.log(sqr);
// console.log(numbers);

// //Map Array
// let number = [1, 2, 3, 4, 5, 6];
// let newarry = number.map(function (nums) {
//   return nums * 10;
// });
// console.log(newarry);
// console.log(number);

// //Filter Array
// let numbers1 = [1, 2, 3, 4, 5, 6, 7, 8];
// let evenarray = numbers1.filter(function (element) {
//   return element % 2 === 0;
// });
// console.log(evenarray);
// //--------
// let numbers2 = [0, 1, null, "", 5, 6, 7, 8];
// let evenarray1 = numbers2.filter(function (element1) {
//   return Boolean(element1);
// });
// console.log(evenarray1);

//Array Reduce Method
// const numbers = [1, 2, 3, 4, 2, 1, 6, 5, 4, 4];
// const array = numbers.reduce(function (acc, current) {
//   if (acc[current]) {
//     acc[current] += 1;
//   } else {
//     acc[current] = 1;
//   }
//   return acc;
// }, {});
// console.log(array);

const numbers = [1, 2, 3, 4, 2, 1, 6, 5, 4, 4];
const array = numbers.reduce(function (acc, current) {
  if (current > acc) {
    return current;
  } else {
    return acc;
  }
}, 0);
console.log(array);
