const express = require('express');
const cardRouter = express.Router();
const getCards = require('../controllers/cardController');

cardRouter.get('/', getCards);

cardRouter.post('/', createCard);

cardRouter.delete('/:cardId', deleteCard);

module.exports = cardRouter;