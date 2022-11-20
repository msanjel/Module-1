const dice = parseInt(prompt('How many dices you want to roll? '));
const sum = parseInt(prompt('What sum you want from them?'));
let odd = 0;

for (let i = 0; i <= 10000; i++) {
  let roll = 0;
  for (let d = 1; d <= dice; d++) {
    roll += Math.floor(Math.random() * 6) + 1;
    if (roll == sum) {
      odd++;
    }
  }
}
document.querySelector(
    '#target').innerHTML = `Probability is ${(odd/10000)*100} %`;