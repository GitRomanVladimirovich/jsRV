let min = Number(prompt('Введите min число:'));
let max = Number(prompt('Введите max число:'));

function randomNumber(min, max) {
  const r = Math.random()*(max-min) + min
  return Math.floor(r)
}

// eslint-disable-next-line
console.log(randomNumber(min, max));
