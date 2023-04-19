import {
  greetingAndGetName, getRandomNumber, MAX_ROUNDS, askQuestion,
} from '../index.js';

const getRandomProgression = () => {
  const length = getRandomNumber(5, 11);
  const from = getRandomNumber(1, 100);
  const step = getRandomNumber(1, 10);
  const progression = [];

  for (let i = 0; i < length; i += 1) {
    const next = from + step * i;
    progression.push(next);
  }

  return progression;
};

const getQuestionAndAnswer = () => {
  const progression = getRandomProgression();
  const hiddenIndex = getRandomNumber(0, progression.length);

  const rightAnswer = progression[hiddenIndex].toString();
  progression[hiddenIndex] = '..';

  const question = progression.join(' ');

  return [question, rightAnswer];
};

const game = () => {
  console.log('What number is missing in the progression?');

  for (let i = 0; i < MAX_ROUNDS; i += 1) {
    const [question, answer] = getQuestionAndAnswer();
    const isUserAnswerCorrect = askQuestion(question, answer);

    if (!isUserAnswerCorrect) {
      return false;
    }
  }

  return true;
};

const progression = () => {
  const name = greetingAndGetName();
  const isWinner = game();
  const text = isWinner ? `Congratulations, ${name}!` : `Let's try again, ${name}!`;

  console.log(text);
};

export default progression;
