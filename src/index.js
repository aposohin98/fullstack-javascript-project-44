import readlineSync from 'readline-sync';

export const MAX_ROUNDS = 3;

export const greetingAndGetName = () => {
    console.log('Welcome to the Brain Games!');

    const name = readlineSync.question('May I have your name? ');

    console.log(`Hello, ${name}!`);

    return name;
};

export const getRandomNumber = (from, to) => {
    const min = Math.ceil(from);
    const max = Math.floor(to);

    return Math.floor(Math.random() * (max - min) + min);
};

export const askQuestion = (question, rightAnswer) => {
    console.log(`Question: ${question}`);

    const userAnswer = readlineSync.question('Your answer: ');
    const isCorrentAnswer = userAnswer === rightAnswer;
    const text = isCorrentAnswer ? 'Correct!' : `'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`;

    console.log(text);

    return isCorrentAnswer;
};
