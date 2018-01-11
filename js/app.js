'use strict';

var inputError = 'Please respond with a Yes or No';

var points = 0;
var dotaHours = 2469;
var dotaTries = 4;
var userName = prompt('Hey what\'s your name?');
var myCars = ['LEXUS', 'NISSAN'];
var carTries = 6;

console.log('User entered ' + userName);
alert('Welcome ' + userName + ' we\'re going to play a guessing game. Please respond to the following questions with either a yes or no answer.');

function dotaTime() {
  var ramonDotaTime = prompt('DOTA 2 is one of my favorite games of all time and I\'ve played it alot, do you think I\'ve surpassed the thousand hour mark?').toUpperCase();
  if(ramonDotaTime === 'YES'){
    alert('Correct! As of right now it\'s actually 2,469 hours... It\'s not something I\'m very proud of.');
    points++;
  } else if (ramonDotaTime === 'NO'){
    alert('Wrong. I have 2,469 hours plays in total. Imagine if I put that time into something resourceful');
  } else {
    alert(inputError);
  }
  console.log(userName + ' answered ' + ramonDotaTime);
}
dotaTime();

function dotaSkill() {
  var ramonDotaSkill = prompt('Do you think with that amount of time played that I\'m actually good?').toUpperCase();
  if(ramonDotaSkill === 'YES'){
    alert('Correct! Though that may be an overstatement, I think above average would\'ve been a better statement.');
    points++;
  } else if (ramonDotaSkill === 'NO'){
    alert('Wrong. I am offended.');
  } else {
    alert(inputError);
  }
  console.log(userName + ' answered ' + ramonDotaSkill);
}
dotaSkill();

alert('Ok ' + userName + ', on to a different subject. This one is more about me.');
function travel() {
  var ramonTravel = prompt('Do you think I\'ve traveled over more than 2 countries?').toUpperCase();
  if(ramonTravel === 'YES'){
    alert('That is incorrect. I\'ve only traveled to one other country which was Mexico.');
  } else if (ramonTravel === 'NO'){
    alert('Correct. I\'ve only ever traveled to Mexico but I got other places I\'d like to visit like Dubai and Japan.');
    points++;
  } else {
    alert(inputError);
  }
  console.log(userName + ' answered ' + ramonTravel);
}
travel();

function carsOwned() {
  var ramonCarsOwned = prompt('I love cars so the last two questions are going to be about that. Do you think I\'ve owned over 3 cars?').toUpperCase();
  if(ramonCarsOwned === 'YES'){
    alert('Incorrect. I\'ve only ever owned my current car which is a Lexus GS300 and a Nissan 240SX.');
  } else if (ramonCarsOwned === 'NO'){
    alert('Correct. I\'ve only ever owned two cars. A Lexus GS300 and a Nissan 240SX, but I have alot of other cars I\'d like to add a lot more into my garage.');
    points++;
  } else {
    alert(inputError);
  }
  console.log(userName + ' answered ' + ramonCarsOwned);
}
carsOwned();

function dreamCars() {
  var ramonDreamCars = prompt('Do you think I want to add over 50 cars to my garage?').toUpperCase();
  if (ramonDreamCars === 'YES'){
    alert('Correct. It might seem overkill but I have alot of cars that I extremely enjoy');
    points++;
  } else if(ramonDreamCars === 'NO'){
    alert('Incorrect. You might think I\'m crazy, and maybe I am but I really do love alot of cars.');
  } else {
    alert(inputError);
  }
  console.log(userName + ' answered ' + ramonDreamCars);
}
dreamCars();

alert('We\'re almost done. The next two questions will need specific answers instead of yes or no. Let\'s see if you were paying attention to the facts about me');

function ramonCars() {
  for(var m = 0; m < myCars.length; m++) {
    var carGuess = prompt('Name the make of one of the cars that I\'ve owned').toUpperCase();
    if(myCars.includes(carGuess)) {
      alert('It looks like you were paying attention, I have owned a ' + carGuess + ' but there is still one more question.');
      carTries = 0;
      m = carGuess;
      points++;
      console.log(userName, 'answered', carGuess);
    } else if(carGuess !== myCars[m] && carTries > 0) {
      carTries--; 
      alert('Try again you have ' + carTries + ' tries remaining.');
      carGuess;
      m = 0;
      console.log(userName, 'answered', carGuess);
    }
  }
}
ramonCars();

function dotaHoursGuess() {
  do {
    var dotaHoursGuess = parseInt(prompt('Last question: How many hours have I played in DOTA 2? I\'ll give you two hints: It is in the thousands and the number of the legendary Kobe Bryants jersey is part of the answer. You have ' + dotaTries + ' attempts.'));
    console.log(userName + ' answered ' + dotaHoursGuess);
    if (dotaHours < dotaHoursGuess) {
      alert('Guess lower.');
      dotaTries--;
    } else if (dotaHours > dotaHoursGuess) {
      alert('Guess higher');
      dotaTries--;
    } else if(dotaHours === dotaHoursGuess) {
      alert('Good JOB!');
      dotaTries = 0;
      points++;
    }
  } while (dotaTries > 0);
}
dotaHoursGuess();

alert('You have earned ' + points + ' points out of 7.');