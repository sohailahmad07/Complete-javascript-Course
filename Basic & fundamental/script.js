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

const now = 2021

const johnAge = now - 1990;
const janeAge = now - 2000;

console.log('john Age: ' + johnAge , '\nJane Age : '+ janeAge);

console.log(johnAge*2 , johnAge/2 , 3**4) // 3*3*3*3

const firstName = 'John';
const lastName = 'Doe';

console.log(firstName +' '+ lastName)

// Assignment Operators

x = 10+10; // x=20
x +=30; // x = x+30
x -=25; // x = x -25
x *=2;  // x = x * 2
x++  // x = x+1
x-- // x= x-1
console.log(x)

// comparision Operators

console.log(johnAge > janeAge) // > < >= <=
console.log(johnAge >= 18);

let isAdult = johnAge >= 18;

console.log(isAdult)

console.log(now - 1990 > now - 2000);

let y,z;

y=z=25-10-5; //y=z=10 = y=10

console.log(y,z)

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

GOOD LUCK 😀
*/
