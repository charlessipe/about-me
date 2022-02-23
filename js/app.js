'use strict';

let score = 0;
let username = prompt('What is your name?');

alert("Hello " + username + "!");

function question1() {
  let question1 = prompt('Was my first job after graduation an accounting clerk?').toLowerCase();

  if (question1 === 'yes' || question1 === 'y') {
    alert('Yes is correct!');
    score++;
  } else {
    alert('Sorry, no is not the correct response.');
  }
}
question1();

function question2() {
  let question2 = prompt('Have I ever worked part time at the Seattle Sonics Team Shop at Key Arena?').toLowerCase();

  if (question2 === 'yes' || question2 === 'y') {
    alert('You\'re right!');
    score++;
  } else {
    alert('Sorry, that is incorrect');
  }
}
question2();

function question3() {
  let question3 = prompt('Have I ever lived in Oklahoma?').toLowerCase();

  if (question3 === 'yes' || question3 === 'y') {
    alert('No, it was actually Texas, not Oklahoma.');
  } else {
    alert('Yes, that is right.');
    score++;
  }
}
question3();

function question4() {
  let question4 = prompt('Have I ever been fired?').toLowerCase();

  if (question4 === 'yes' || question4 === 'y') {
    alert('No, I have not.');
  } else {
    alert('Yes, that is right.');
    score++;
  }
}
question4();

function question5() {
  let question5 = prompt('Have I ever commuted over 25 miles to work?').toLowerCase();

  if (question5 === 'yes' || question5 === 'y') {
    alert('Yep, it was brutal.');
    score++;
  } else {
    alert('Actually, I have.');
  }
}
question5();


let attempts = 4;
let attemptcounter = 0;

for (let i = 0; i < attempts; i++){
    let question6 = prompt('What number am I thinking of between 0 and 10?');
    if (question6 == 5){
        alert("5 is the correct number!");
        attempts = 0; 
        score++;
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

let favoriteWebsites = ['cal newport', 'css tricks'];

let trys = 6;
let trycounter = 0;

for (let j = 0; j < trys; j++){
    let question7 = prompt('What is one of my favorite websites that start with C?').toLowerCase();

    if (question7 === favoriteWebsites[0] || question7 === favoriteWebsites[1]) {
      alert('Correct. Acceptable answers are ' + favoriteWebsites[0] + " and " + favoriteWebsites[1]);
      trys = 0;
      score++;
    } else {
      alert('Not quite. Remaining tries: ' + (trys - j - 1));
      trycounter++;
    }
}

if (trycounter ===6){
    alert("You are out of attempts. Acceptable answers are " + favoriteWebsites[0] + " and " + favoriteWebsites[1]);
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


alert("Thanks for playing " + username + "! You answered " + score + " questions correctly." );

