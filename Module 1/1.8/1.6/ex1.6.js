'use strict'
const option=confirm('Should I print the square root?');
if (option) {
  const number = prompt('Give me a number:');
  if (number >= 0) {
    document.querySelector('#target').innerHTML = 'Square root of given number is ' + (number) ** 0.5;
  } else {
    document.querySelector('#target').innerHTML = 'Square root of given number is not defined ';
  }
}
else{
    document.querySelector('#target').innerHTML='Square root of given number will not be calculated ';
  }
