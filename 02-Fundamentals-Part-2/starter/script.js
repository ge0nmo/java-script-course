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

*/

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