import {
    getRandomNumber, greetingAndGetName, askQuestion, MAX_ROUNDS,
} from '../index.js';

const getNumbers = () => {
    const numbers = [];

    while (numbers.length < MAX_ROUNDS) {
        const nextNumber = getRandomNumber(1, 100);

        if (!numbers.includes(nextNumber)) {
            numbers.push(nextNumber);
        }
    }

    return numbers;
};

const game = () => {
    console.log('Answer "yes" if the number is even, otherwise answer "no".');

    const numbers = getNumbers();

    for (let i = 0; i < numbers.length; i += 1) {
        const currentNumber = numbers[i];
        const rightAnswer = (currentNumber % 2 === 0) ? 'yes' : 'no';
        const isUserAnswerCorrect = askQuestion(`${currentNumber}`, rightAnswer);

        if (!isUserAnswerCorrect) {
            return false;
        }
    }

    return true;
};

const even = () => {
    const name = greetingAndGetName();
    const isWinner = game();
    const text = isWinner ? `Congratulations, ${name}!` : `Let's try again, ${name}!`;

    console.log(text);
};

export default even;
