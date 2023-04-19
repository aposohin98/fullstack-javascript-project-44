import {
    getRandomNumber, greetingAndGetName, askQuestion, MAX_ROUNDS,
} from '../index.js';

const operationMap = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
};

const getNextOperation = () => {
    const operations = Object.keys(operationMap);

    const nextOperation = operations[getRandomNumber(0, operations.length)];

    return nextOperation;
};

const getNextNumbers = () => {
    const a = getRandomNumber(0, 100);
    const b = getRandomNumber(0, 100);

    return [a, b];
};

const game = () => {
    console.log('What is the result of the expression?');

    for (let i = 0; i < MAX_ROUNDS; i += 1) {
        const operation = getNextOperation();
        const getRightAnswer = operationMap[operation];

        const [a, b] = getNextNumbers();
        const rightAnswer = getRightAnswer(a, b);
        const isUserAnswerCorrect = askQuestion(`${a} ${operation} ${b}`, rightAnswer);

        if (!isUserAnswerCorrect) {
            return false;
        }
    }

    return true;
};

const calc = () => {
    const name = greetingAndGetName();
    const isWinner = game();
    const text = isWinner ? `Congratulations, ${name}!` : `Let's try again, ${name}!`;

    console.log(text);
};

export default calc;
