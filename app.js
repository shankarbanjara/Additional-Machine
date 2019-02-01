// ALL OF THE HTML ELEMENTS

//THE AREA WHERE THE ANSWER WILL BE DISPLAYED
const result = document.getElementById('results');
// THE INPUT AREA FOR THE FIRST NUMBER
const ip1 = document.getElementById('ip1');
// INPUT AREA FOR THE SECOND NUMBER
const ip2 = document.getElementById('ip2');
// THE BUTTON THAT WILL CALCULATE THE VALUE OF THE TWO INPUTS AND DISPLAY THE RESULT
const calc = document.getElementById('calc');
// THE BUTTON THAT WILL GENERATE TWO RANDOM NUMBERS FOR THE TWO INPUTS
const rand = document.getElementById('rand');
// THE BUTTON THAT WILL CLEAR THE INPUTS AND RESULT AREA.
const clr = document.getElementById('clr');


//EVENT LISTENER FOR THE CALC BUTTON
calc.addEventListener('click', function(){
  // CREATED TWO NEW VARIABLES THAT USE PARSEFLOAT TO CONVERT A STRING TO A NUMBER
  const firstNum = parseFloat(ip1.value);
  const secondNum = parseFloat(ip2.value);
  // SETS THE INNER HTML TO THE SUM OF THE TWO INPUTS 
  result.innerHTML = firstNum + secondNum;
})

//EVENT LISTENER FOR CLEAR BUTTON
clr.addEventListener('click', function(){
  // RESET THE THREE AREAS TO AN EMPTY STRING
  ip1.value = '';
  ip2.value = '';
  result.innerHTML = '';
});




//A FUNCTION THAT GENERATES A RANDOM NUMBER BETWEEN 0 AND 1000
function randomNumberGenerator(){
  return Math.floor(Math.random()*1000);
}

rand.addEventListener('click',function(){
  ip1.value = randomNumberGenerator();
  ip2.value = randomNumberGenerator();
})