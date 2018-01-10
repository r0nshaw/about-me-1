'use strict'

var inputError = 'Please respond with a Yes or No';

var userName = prompt('Hey what\'s your name?');
console.log('User entered ' + userName);
alert('Welcome ' + userName + ' we\'re going to play a guessing game. Please respond to the following questions with either a yes or no answer.');

var ramonDotaTime = prompt('DOTA 2 is one of my favorite games of all time and I\'ve played it alot, do you think I\'ve surpassed the thousand hour mark?').toUpperCase();
if(ramonDotaTime === 'YES'){
    alert('Correct! As of right now it\'s actually 2,469 hours... It\'s not something I\'m very proud of.');
} else if (ramonDotaTime === 'NO'){
    alert('Wrong. I have 2,469 hours plays in total. Imagine if I put that time into something resourceful');
} else {
    alert(inputError);
}
console.log('User answered ' + ramonDotaTime);

var ramonDotaSkill = prompt('Do you think with that amount of time played that I\'m actually good?').toUpperCase();
if(ramonDotaSkill === 'YES'){
    alert('Correct! Though that may be an overstatement, I think above average would\'ve been a better statement.');
} else if (ramonDotaSkill === 'NO'){
    alert('Wrong. I am offended.')
} else {
    alert(inputError)
}
console.log('User answered ' + ramonDotaSkill);

alert('Ok ' + userName + ', on to a different subject.')