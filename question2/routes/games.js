const express = require('express');

const Game = require('../models/Game');

const router = express.Router();

/* GET users listing. */
router.get('/start', (req, res) => {
  const level = req?.query?.level ? req.query.level : undefined;

  if (level && level !== 'easy' && level !== 'medium' && level !== 'hard') return res.sendStatus(400);

  const questions = Game.getQuestions(level);
  return res.json(questions);
});

router.post('/', (req, res) => {
  const score = req?.body?.score ? req.body.score : undefined;
  const username = req?.body?.username ? req.body.username : undefined;

  if (score < 0 || score > 3) return res.sendStatus(400);

  const savedResult = Game.saveResult(score, username);

  return res.json(savedResult);
});

module.exports = router;
