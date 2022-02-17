'use strict';

let username = prompt('What is your name?');

alert("Hello " + username + "!");

let question1 = prompt('Do you like cold brew?').toLowerCase();

if (question1 === 'yes' || question1 === 'y') {
  console.log('Yes? Cool!');
} else {
  console.log('No? Hrummph!');
}