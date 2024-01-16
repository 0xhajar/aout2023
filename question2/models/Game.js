const path = require('node:path');

// lire et ecrire
const { parse, serialize } = require('../utils/json');

const questionsDbPath = path.join(__dirname, '/../data/questions.json');
const gamesDbPath = path.join(__dirname, '/../data/games.json');

function getQuestions(level) {
  const questions = parse(questionsDbPath, []);
  const toBeReturned = [];
  if (level) {
    while (toBeReturned.length < 3) {
      const question = questions[Math.floor(Math.random() * questions.length)];
      if (question.level === level) toBeReturned.push(question);
    }
  } else {
    for (let i = 0; i < 3; i += 1) {
      toBeReturned.push(questions[Math.floor(Math.random() * questions.length)]);
    }
  }
  return toBeReturned;
}

function saveResult(score, username) {
  const games = parse(gamesDbPath, []);
  const savedResult = {
    username,
    score,
    date: new Date(),
  };
  games.push(savedResult);
  serialize(gamesDbPath, games);
  return savedResult;
}

module.exports = {
  getQuestions,
  saveResult,
};
