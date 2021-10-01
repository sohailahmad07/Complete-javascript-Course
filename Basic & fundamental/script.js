// what Are variables

// let firstName;
// firstName = 'john'
// console.log(firstName);

// const firstName = 'John';
// console.log(firstName);

// letter&number _ $ 
// Cant Not Start a Name With number 

// let firstName = 'John'; //camel Case
// let first_name = 'John'; // snake case
// let FirstName = 'John'; //pascal Case
// let firstname = 'John'; //

// Primitive datatype

// let firstName = "John";
// console.log(typeof firstName);
// let year = 2021;
// console.log(typeof year);
// let isOld = false;
// console.log(typeof isOld);
// let lastName;
// console.log(typeof lastName);
// let cars = null;
// console.log(typeof cars);

// Math Operators

const now = 2021;

const johnAge = now - 1990; 
const janeAge = now - 2000;
console.log(johnAge , janeAge ,);

const firstName = 'john';
const lastName = 'Doe';

console.log(firstName +' '+lastName) // String concatenation 

console.log(johnAge*2 , johnAge/2, 2**4) // 2*2*2*2

// Assignment Operators


let x = 10 + 25;
x += 30; // x = x + 30
x -= 15; // x = x-15;
x *= 4; // x = x*4;
x++; // x = x+1;
x--; // x = x-1;
console.log(x)

// Comparison Operators

console.log(johnAge > janeAge); // > < >= <=;

const johnIsElder = johnAge > janeAge;

console.log(now - 1990 > now - 2000);

let y , z;
y = z = 50-25-10; // y = z = 50 - 25 - 10 // y = z = 50 // y = 50
console.log(y , z)

console.log((johnAge + janeAge) / 2)






















////////////////////////////////////
// Coding Challenge #1

/*
John and Jane are trying to compare their BMI (Body Mass Index), 
which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).

1. Store Jane's and John's mass and height in variables
2. Calculate both their BMIs using the formula
3. Create a boolean variable 'JaneHigherBMI' containing information about whether Jane has a higher BMI than John.

TEST DATA 1: Janes weights 50 kg and is 1.55 m tall. John weights 85 kg and is 1.85 m tall.
TEST DATA 2: Janes weights 95 kg and is 1.95 m tall. John weights 65 kg and is 1.65 m tall.

GOOD LUCK 
*/
