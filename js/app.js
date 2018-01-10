'use strict'

var inputError = 'Please respond with a Yes or No';

var userName = prompt('Hey what\'s your name?');
console.log('User entered ' + userName);
alert('Welcome ' + userName + ' we\'re going to play a guessing game. Please respond to the following questions with either a yes or no answer.');

var ramonDotaTime = prompt('DOTA 2 is one of my favorite games of all time and I\'ve played it alot, do you think I\'ve surpassed the thousand hour mark?').toUpperCase();
if (ramonDotaTime === 'YES'){
    alert('Correct! As of right now it\'s actually 2,469 hours... It\'s not something I\'m very proud of.');
} else if (ramonDotaTime === 'NO'){
    alert('Wrong. I have 2,469 hours plays in total. Imagine if I put that time into something resourceful');
} else {
    alert(inputError);
}
console.log(userName + ' answered ' + ramonDotaTime);

var ramonDotaSkill = prompt('Do you think with that amount of time played that I\'m actually good?').toUpperCase();
if (ramonDotaSkill === 'YES'){
    alert('Correct! Though that may be an overstatement, I think above average would\'ve been a better statement.');
} else if (ramonDotaSkill === 'NO'){
    alert('Wrong. I am offended.')
} else {
    alert(inputError);
}
console.log(userName + ' answered ' + ramonDotaSkill);

alert('Ok ' + userName + ', on to a different subject. This one is more about me.');

var ramonTravel = prompt('Do you think I\'ve traveled over more than 2 countries?').toUpperCase();
if (ramonTravel === 'YES'){
    alert('That is incorrect. I\'ve only traveled to one other country which was Mexico.');
} else if (ramonTravel === 'NO'){
    alert('Correct. I\'ve only ever traveled to Mexico but I got other places I\'d like to visit like Dubai and Japan.');
} else {
    alert(inputError);
}
console.log(userName + ' answered ' + ramonTravel);

var ramonCarsOwned = prompt('I love cars so the last two questions are going to be about that. Do you think I\'ve owned over 3 cars?').toUpperCase();
if (ramonCarsOwned === 'YES'){
    alert('Incorrect. I\'ve only ever owned my current car which is a Lexus GS300 and a Nissan 240SX.');
} else if (ramonCarsOwned === 'NO'){
    alert('Correct. I\'ve only ever owned two cars. A Lexus GS300 and a Nissan 240SX, but I have alot of other cars I\'d like to add a lot more into my garage.')
} else {
    alert(inputError);
}
console.log(userName + ' answered ' + ramonCarsOwned);

var ramonDreamCars = prompt('Do you think I want to add over 50 cars to my garage?').toUpperCase();
if (ramonDreamCars === 'YES'){
    alert('Correct. It might seem overkill but I have alot of cars that I extremely enjoy');
} else if(ramonDreamCars === 'NO'){
    alert('Incorrect. You might think I\'m crazy, and maybe I am but I really do love alot of cars.');
}
console.log(userName + ' answered ' + ramonDreamCars);