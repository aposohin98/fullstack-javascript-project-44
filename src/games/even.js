import readlineSync from 'readline-sync';

const askQuestions = () => {
    console.log('Answer "yes" if the number is even, otherwise answer "no".');

    const numbers = [15, 6, 7];

    for(let i = 0; i < numbers.length; i++) {
        const currentNumber = numbers[i];

        console.log(`Question: ${currentNumber}`);
        const userAnswer = readlineSync.question('Your answer: ');

        const rightAnswer = (currentNumber % 2 === 0) ? 'yes' : 'no';

        if (userAnswer === rightAnswer) {
            console.log('Correct!');
        } else {
            console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);

            return false;
        }
    }

    return true;
};

const even = () => {
    console.log('Welcome to the Brain Games!');

    const name = readlineSync.question('May I have your name? ');

    console.log(`Hello, ${name}!`);

    const isWinner = askQuestions();

    if (isWinner) {
        console.log(`Congratulations, ${name}!`);
    } else {
        console.log(`Let's try again, ${name}!`);
    }
};

export default even;