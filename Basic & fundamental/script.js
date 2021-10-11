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
/*
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
*/





////////////////////////////////////
// Coding Challenge #1

/*
John and Jane are trying to compare their BMI (Body Mass Index), 
which is calculated using the formula: BMI = mass / height ** 2 OR mass / (height * height). (mass in kg and height in meter).

1. Store Jane's and John's mass and height in variables
2. Calculate both their BMIs using the formula
3. Create a boolean variable 'JaneHigherBMI' containing information about whether Jane has a higher BMI than John.

TEST DATA 1: Janes weights 50 kg and is 1.55 m tall. John weights 85 kg and is 1.85 m tall.
TEST DATA 2: Janes weights 95 kg and is 1.95 m tall. John weights 65 kg and is 1.65 m tall.

GOOD LUCK 
*/

// const johnWeight = 65;
// const johnHeight = 1.65;
// const janeWeight = 95;
// const janeHeight = 1.95;

// const calcJohnBMI = johnWeight / (johnHeight * johnHeight);
// const calcJaneBMI  =  janeWeight / janeHeight ** 2;
// console.log(calcJohnBMI);
// console.log(calcJaneBMI);

// const JanehasHigherBMI = calcJaneBMI > calcJohnBMI;

// console.log(JanehasHigherBMI)



// // Template String

// const firstName = 'John';
// const lastName = 'Doe';
// const job = 'Programmer';
// const age = 2021 - 1990;

// // ES5 Ways

// console.log('Hi My Name Is '+ firstName +' '+ lastName + " I'm a " + job + " I'm " + age + ' Years Old');
// console.log('multiple \nline \nstring')

// // ES6 Way Template literal

// console.log(`Hi My Name is ${firstName} ${lastName} I'm ${job} I'm ${age} years old`);
// console.log(`multiple
// Line
// String`);


// if(-5 > 0){
//     console.log('Positive Number')
// }else{
//     console.log('Negative Number')
// }

// Muliple Decisions

// let marks = 59;

// if(marks >= 90){
//     console.log('Grade A')
// }else if(marks >= 80){
//     console.log('Grade B')
// }else if (marks >= 70){
//     console.log('Grade C')
// }else if (marks >= 60){
//     console.log('Grade D')
// }else{
//     console.log('Grade F')
// }


////////////////////////////////////
// Coding Challenge #2

/*
You can Use the BMI example from Challenge #1, and the code you already wrote;

1. Print a nice output to the console, saying who has the higher BMI. 
2. Use a template literal to include the BMI values in the outputs. 
Example: "John BMI (24) is higher than Jane BMI (23)!"

GOOD LUCK 
*/

// const johnWeight = 65;
// const johnHeight = 1.95;
// const janeWeight = 95;
// const janeHeight = 1.65;

// const johnWeight = 90;
// const johnHeight = 1.65;
// const janeWeight = 50;
// const janeHeight = 1.95;

// const calcJohnBMI = johnWeight / (johnHeight * johnHeight);
// const calcJaneBMI = janeWeight / janeHeight ** 2;
// console.log(calcJohnBMI);
// console.log(calcJaneBMI);

// if(calcJohnBMI > calcJaneBMI) {
//     console.log(`John BMI ${calcJohnBMI} is higher than Jane BMI  ${calcJaneBMI}`);
// }
// else {
//     console.log(`Jane BMI ${calcJaneBMI} is higher than John BMI  ${calcJohnBMI}`); 
// }


// Type Conversion

// const number = Number('5');
// console.log( number + 5);

// console.log(String(454456456), 4544665);

// const x = 'i am ' + 23 + ' Years old'

// console.log('23' + 10);
// console.log('25' - 10);
// console.log('25' / '2');
// console.log('25' > '2');

// console.log(4 + 6 + 15 + '23');
// console.log('4' - 6 + 15 + 23);
// console.log('4' - '6' - '15' + '23');

// Falsy values In JavaScript: 0, '', undefined, null, NaN

// console.log(Boolean(0));
// console.log(Boolean(''))
// console.log(Boolean(undefined))
// console.log(Boolean(null))
// console.log(Boolean(NaN))
// console.log(Boolean({}))

// const number = 'john';

// if(number){
//     console.log('Number is Truthy value')
// }else{
//     console.log('Number Is Falsy Value')
// }

// let value;

// if(value === undefined){
//     console.log('value is undefined')
// }else{
//     console.log('value is defined')
// }

// console.log('1' === '1');
// console.log(1 == '1');

// const number = Number(prompt('Please Enter Number 7'));

// console.log(typeof number);

// if (number === 7) {
//     console.log('Correct')
// } else {
//     console.log('Wrong Number')
// }

// if(number !== 7){
//     console.log('Not Number 7')
// }else{
//     console.log('Number 7')
// }

// logical Operators

/*
&& And operator
|| Or operator
! Not operator
*/

const isAdult = false;
const passDrivingTest = false;
const hasGoodVison = false;

// console.log(isAdult && passDrivingTest && hasGoodVison);
// console.log(isAdult || passDrivingTest || hasGoodVison);
// console.log(!isAdult);

// if(isAdult || passDrivingTest || !hasGoodVison){
//     console.log('John is Eligible For Driving Licence')
// }else{
//     console.log('John is Not Eligible For Driving Licence')
// }