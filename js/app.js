'use strict';

let username = prompt('What is your name?');

alert("Hello " + username + "!");

let question1 = prompt('Was my first job after graduation an accounting clerk?').toLowerCase();
let question2 = prompt('Have I ever worked part time at the Seattle Sonics Team Shop at Key Arena?').toLowerCase();
let question3 = prompt('Have I ever lived in Oklahoma?').toLowerCase();
let question4 = prompt('Have I ever been fired?').toLowerCase();
let question5 = prompt('Have I ever commuted over 25 miles to work?').toLowerCase();


if (question1 === 'yes' || question1 === 'y') {
  console.log('Yes is correct!');
} else {
  console.log('Sorry, no is not the correct response.');
}

if (question2 === 'yes' || question2 === 'y') {
    console.log('You\'re right!');
} else {
  console.log('Sorry, that is incorrect');
}

if (question3 === 'yes' || question3 === 'y') {
    console.log('No, it was actually Texas, not Oklahoma.');
} else {
  console.log('Yes, that is right.');
}

if (question4 === 'yes' || question4 === 'y') {
    console.log('No, I have not.');
} else {
  console.log('Yes, that is right.');
}

if (question5 === 'yes' || question5 === 'y') {
    console.log('Yep, it was brutal.');
} else {
  console.log('Actually, I have.');
}

alert("Thanks for playing " + username + "!");