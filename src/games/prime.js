import {
    getRandomNumber, askQuestion, greetingAndGetName, MAX_ROUNDS,
} from '../index.js';

const isPrime = (num) => {
    if (num <= 1) {
        return false;
    }

    const dividers = [1];

    for (let i = 2; i <= num; i += 1) {
        if (num % i === 0) {
            dividers.push(i);
        }
    }

    return dividers.length === 2;
};

const game = () => {
    console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

    for (let i = 0; i < MAX_ROUNDS; i += 1) {
        const question = getRandomNumber(2, 100);
        const rightAnswer = isPrime(question) ? 'yes' : 'no';
        const isUserAnswerCorrect = askQuestion(`${question}`, rightAnswer);

        if (!isUserAnswerCorrect) {
            return false;
        }
    }

    return true;
};

const prime = () => {
    const name = greetingAndGetName();
    const isWinner = game();
    const text = isWinner ? `Congratulations, ${name}!` : `Let's try again, ${name}!`;

    console.log(text);
};

export default prime;
