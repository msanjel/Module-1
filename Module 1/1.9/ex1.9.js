const number = parseInt(prompt('Please type an Integer: '));
let prime = true;

if (number === 1) {
  document.querySelector(
      `#target`).innerHTML = number+' is neither a prime number nor a composite';
} else if (number > 1) {
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      prime = false;
      break;
    }
  }
  if (prime) {
    document.querySelector(`#target`).innerHTML =  number + ' is a prime number. ';
  } else {
    document.querySelector(`#target`).innerHTML = number + ' is not a prime number. ' ;
  }
} else {
  document.querySelector(`#target`).innerHTML = number + ' is not a prime number. ';
}