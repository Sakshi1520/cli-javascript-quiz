import * as readLineSync from 'readline-sync';
import chalk from 'chalk';

var questionBank = [
  {
    question: 'What is JavaScript?',
    options: ['JavaScript is a scripting language used to make the website interactive', 'JavaScript is an assembly language used to make the website interactive', 'JavaScript is a compiled language used to make the website interactive'],
    answer: 'JavaScript is a scripting language used to make the website interactive'
  },
  {
    question: 'Which of the following can be used to call a JavaScript Code Snippet?',
    options: ['Preprocessor', 'RMI', 'Function/Method'],
    answer: 'Function/Method'
  },
  {
    question: 'Why event handlers is needed in JS?',
    options: ['Allows JavaScript code to alter the behaviour of windows', 'Adds innerHTML page to the code', 'Change the server location', 'Performs handling of exceptions and occurrences'],
    answer: 'Allows JavaScript code to alter the behaviour of windows'
  }, {
    question: 'Which of the following is the property that is triggered in response to JS errors?',
    options: ['onclick', 'onerror', 'onexception'],
    answer: 'onerror'
  }, {
    question: 'Which of the following type of a variable is volatile?',
    options: ['Mutable', 'Dynamic', 'Immutable'],
    answer: 'Mutable'
  },
];

var score = 0;

var highScore = [
  {
    name: 'Shailey',
    score: '5'
  },
  {
    name: 'Prathu',
    score: '4'
  }
];

function welcome() {
  console.log(chalk.bold('Welcome to the JavaScript Quiz'))
  var userName = readLineSync.question("Hey Genius, What's your name? ");
  console.log(chalk.underline('Hii', userName + '!\n'));
  console.log('Let\'s get Started with the Quiz, Shall we? \nPlease Note: Enter first letter Capital and all others small');
  console.log("-------------------------\n");
}

function runQuiz(question, options, answer) {
  console.log(chalk.blue.bold(question));
  var answerGiven = readLineSync.keyInSelect(options);
  // If question is not answered, simply return and Do not change score.
  if (answerGiven === -1) {
    console.log("-------------------------\n");
    return;
  }
  if (options[answerGiven] === answer) {
    console.log(chalk.bgGreen("You are Right!"));
    score++;
  }
  else {
    console.log(chalk.bgRed('Oops! Wrong answer'));
    score--;
  }
  console.log('Your score is: ' + score);
  console.log("-------------------------\n");
}

function playGame() {
  for (let i = 0; i < questionBank.length; i++) {
    runQuiz(questionBank[i].question, questionBank[i].options, questionBank[i].answer);
  }
}

function displayScore() {
  let brokenHighScore = false;
  console.log(chalk.black.bgWhite.bold('YAYYY!, Your final score is: ' + score));
  console.log('\nLeaderboard:');
  for (let i = 0; i < highScore.length; i++) {
    console.log(highScore[i].name + ": " + highScore[i].score);
    if (highScore[i].score <= score) {
      brokenHighScore = true;
    }
  }
  if (brokenHighScore) {
    console.log(chalk.magenta.bold('Congratulations! You have created a new High Score\nKindly Send this Screenshot so that you could be added to the LeaderBoard'))
  }
}

welcome();
playGame();
displayScore();
