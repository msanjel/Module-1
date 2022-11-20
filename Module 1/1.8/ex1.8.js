const start = parseInt(prompt('Start year: '));
const end = parseInt(prompt('End year: '));
const target = document.querySelector('#target');

for (let year = start; year <= end; year++) {
  if (year % 400 === 0 || year % 4 === 0 && year % 100 !== 0) {
    target.innerHTML += `<li>${year}</li>`;
    console.log(year);
  }
}