import {
  greetingAndGetName, askQuestion, MAX_ROUNDS, getRandomNumbersPair,
} from '../index.js';

const getNod = (a, b) => {
  const max = Math.max(a, b);
  const min = Math.min(a, b);

  let nod = 1;

  for (let i = 2; i <= min; i += 1) {
    if (min % i === 0 && max % i === 0) {
      nod = i;
    }
  }

  return nod;
};

const game = () => {
  console.log('Find the greatest common divisor of given numbers.');

  for (let i = 0; i < MAX_ROUNDS; i += 1) {
    const [a, b] = getRandomNumbersPair();

    const rightAnswer = getNod(a, b);
    const isUserAnswerCorrect = askQuestion(`${a} ${b}`, `${rightAnswer}`);

    if (!isUserAnswerCorrect) {
      return false;
    }
  }

  return true;
};

const gcd = () => {
  const name = greetingAndGetName();
  const isWinner = game();
  const text = isWinner ? `Congratulations, ${name}!` : `Let's try again, ${name}!`;

  console.log(text);
};

export default gcd;
