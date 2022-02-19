'use strict';

let username = prompt('What is your name?');

alert("Hello " + username + "!");

let question1 = prompt('Was my first job after graduation an accounting clerk?').toLowerCase();

if (question1 === 'yes' || question1 === 'y') {
  alert('Yes is correct!');
} else {
  alert('Sorry, no is not the correct response.');
}

let question2 = prompt('Have I ever worked part time at the Seattle Sonics Team Shop at Key Arena?').toLowerCase();

if (question2 === 'yes' || question2 === 'y') {
  alert('You\'re right!');
} else {
  alert('Sorry, that is incorrect');
}

let question3 = prompt('Have I ever lived in Oklahoma?').toLowerCase();

if (question3 === 'yes' || question3 === 'y') {
  alert('No, it was actually Texas, not Oklahoma.');
} else {
  alert('Yes, that is right.');
}

let question4 = prompt('Have I ever been fired?').toLowerCase();

if (question4 === 'yes' || question4 === 'y') {
  alert('No, I have not.');
} else {
  alert('Yes, that is right.');
}

let question5 = prompt('Have I ever commuted over 25 miles to work?').toLowerCase();

if (question5 === 'yes' || question5 === 'y') {
  alert('Yep, it was brutal.');
} else {
  alert('Actually, I have.');
}

let attempts = 4;
let attemptcounter = 0;

for (let i = 0; i < attempts; i++){
    let question6 = prompt('What number am I thinking of between 0 and 10?');
    if (question6 == 5){
        alert("5 is the correct number!");
        attempts = 0; 
    } else if (question6 > 5){
        alert("Your guess is too high.");
        attemptcounter++;
    } else if (question6 < 5){
        alert("Your guess is too low.");
        attemptcounter++;
    }
} 

if (attemptcounter ===4){
    alert("You have exhausted your 4 attempts. The answer is 5.")
}



/*
if (question6 > 5){
  alert("Your guess is too low. Try again.")
} else if(question6 < 5){
  alert("Your guess is too high. Try again.")
} else if(question6 === 5){
  alert("You are correct!");
} else{
    alert("Please enter a number between 0 and 10.")
}
*/


//Indicates through an alert if the guess is “too high” or “too low”.

//It should give the user exactly four opportunities to get the correct answer.

// After all attempts have been exhausted, 
// tell the user the correct answer. Consider using a loop of some sort.


alert("Thanks for playing " + username + "!");

