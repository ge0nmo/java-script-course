'use strict';

/*let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive :D');

//const interface = 'Audio';
//const private = 534;


function logger() {
    console.log("My name is Jonas");
}

// calling / running / invoking function
logger();

function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;

    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);


//Function decoration
function calcAge1(birthYear) {
    return 2037 - birthYear;
}

const age1 = calcAge1(1994);
console.log(age1);

//Function expression
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}
const age2 = calcAge2(1994);
console.log(age2);


//Arrow function
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1994);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    //return retirement;

    return `${firstName} retires in ${retirement}`;
}

console.log(yearsUntilRetirement(1994, "Jonas"));
console.log(yearsUntilRetirement(1980, "Bob"));


function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applesPieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applesPieces} pieces of apple and ${orangePieces} pieces of orange.`;

    return juice;
}

console.log(fruitProcessor(2, 3));


const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = calRetirement(age);
    //return retirement;

    if (retirement > 0) {
        return retirement;
    } else {
        return -1;
    }

    //return `${firstName} retires in ${retirement} y`;
}

const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const calRetirement = function calcRetirement(age) {
    return 65 - age;
}

console.log(yearsUntilRetirement(1951, "Mike"));


const friend1 = "Michael";
const friend2 = "Steven";
const friend3 = "Peter";

const friends = ["Michael", "Steven", "Peter"];

console.log(friends);

//const years = new Array(1991, 1984, 2008, 2020);
//console.log(years);

console.log(friends[0]);
console.log(friends[1]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "Jay";
console.log(friends);
//friends = ["BOB", "ALICE"]; //not work

const firstName = 'Jonas';
const jonas = [firstName, "Schmedtmann", 2037 - 1991, "teacher", friends];

console.log(jonas);
console.log(jonas.length);

//Exercise
function calcAge(birthYear) {
    return 2037 - birthYear;
}

const years = [1990, 1967, 2002, 2010, 2018];



const friends = ["Michael", "Steven", "Peter"];
const newLength = friends.push('Jay');
console.log(friends);
console.log(newLength);

friends.unshift('John');
console.log(friends);

console.log(friends.pop());
console.log(friends);

friends.shift(); //First
console.log(friends);

console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob'));

friends.push(23);
console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));
console.log(friends.includes(23));

if (friends.includes('do')) {
    console.log(`You have a friend called Peter`);
}


const jonasArray = [
    'Jonas',
    'schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven']
];

console.log(jonasArray);
*/
// const jonas = {
//     firstName : 'Jonas',
//     lastName : 'Schmedtmann',
//     age : 2037 - 1991,
//     job : 'teacher',
//     friends : ['Michael', 'Peter', 'Steven'],
//     hasDriverLicense: true,
//     birthYear: 1994,
//     // calcAge: function(birthYear){
//     //     return 2037 - birthYear;
//     // }
//     // calcAge: function(){
//     //     return 2037 - this.birthYear;
//     // }
//     calcAge: function(){
//         this.age = 2037 - this.birthYear;
//         return this.age;
//     },

//     getSummary: function(){
//         return `${this.firstName} is a ${this.calcAge()}-year old ${jonas.job}, and he has ${this.hasDriverLicense ? 'a' : 'no'} driver's license`
//     }
// };


//console.log(jonas.getSummary());

//console.log(jonas.calcAge());

// console.log(jonas);

// console.log(jonas.lastName);
// console.log(jonas['lastName']);

// const nameKey = 'Name';
// console.log(jonas['first' + nameKey]);

// // const interestedIn = prompt("What do you want to know about Jonas? choose between firstName, lastName, age, job, and friends");
// // console.log(interestedIn);

// // //console.log(jonas.interestedIn);


// // if(jonas[interestedIn]){
// //     console.log(jonas[interestedIn]);    
// // } else{
// //     console.log("Wrong request! Choose between firstName, lastName, age, and friends");
// // }

// jonas.location = "Portugal";
// jonas['twitter'] = "@jonasschmedtman";
// console.log(jonas);

// // Challenge
// // "Jonas has 3 friends, and his best friend is called Michael"

// const name = jonas['firstName'];
// const numberOfFriends = jonas['friends'].length;
// const bestFriend = jonas['friends'][0];

// console.log(`${name} has ${numberOfFriends} friends, and his best friend is called ${bestFriend}`);
// console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`);


// console.log(jonas.age);
// console.log(jonas.age);
// console.log(jonas.age);
// console.log(jonas.age);

// // Challenge
// // "Jonas is a 46-year old teacher and he has a driver license"

// console.log(jonas.getSummary());

/*
const mark = {
    fullName: "Mark Miller",
    mass: 78,
    height: 1.69,
    calcBMI: function(){
        this.bmi = this.mass / this.height ** 2;
    },

}

const john = {
    fullName: "John Smith",
    mass: 92,
    height: 1.95,
    calcBMI: function(){
        this.bmi = this.mass / this.height ** 2;
    }
}

mark.calcBMI();
console.log(mark.bmi);

john.calcBMI();
console.log(john.bmi);

if(mark.bmi > john.bmi){
    console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})`);
} else{
    console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi})`);
}


// for(let rep = 1; rep <= 10; rep++){
//     console.log(`Lifting weights repetition ${rep}`)
// }

const jonas = [
    'Jonas',
    'Schmedtmann',
    2037-1991,
    'teacher',
    ['Michael', 'Peter', 'Steven'],
    true
];
const types = [];

for(let i = 0; i < jonas.length; i++){
    console.log(jonas[i], typeof jonas[i]);

    types.push(typeof jonas[i]);
}

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for(let i = 0; i < years.length; i++){
    ages.push(2024 - years[i]);
}

console.log(ages);
*/

const jonas = [
    'Jonas',
    'Schmedtmann',
    2037-1991,
    'teacher',
    ['Michael', 'Peter', 'Steven'],
    true
];

// for(let i = jonas.length - 1; i >= 0; i--){
//     console.log(i, jonas[i]);
// }

// for(let exercise = 1; exercise < 4; exercise++){
//     console.log(`---- Starting exercise ${exercise}`);

//     for(let rep = 1; rep < 6; rep++){
//         console.log(`Lifting weights repitition ${rep}`);
//     }
// }

// let rep = jonas.length - 1;
// while(rep >= 0){
//     console.log(rep, jonas[rep]);
//     rep--;
// }

let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);

while(dice !== 6){
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
}