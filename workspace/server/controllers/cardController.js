const path = require('path');
const pathToData = path.join(__dirname, '..', 'data', 'cards.json');
const getFileContent = require('../helpers/getFileContent');
const Card = require('../models/card');
const user = require('../models/user');

function getCards(req, res) {
  return getFileContent(pathToData, res)
    .then((cards) => {
      res.status(200).send(cards)
    })
    .catch((err) => res.status(400).send({ message: err }))
};

function createCard(req, res) {
  const { name, link } = req.body;

  Card.create({ name, link, owner: req.user._id })
    .then(card => res.status(200).send(card))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        res.status(400).send({ message: err });
      } else {
        res.status(500).send({ message: err });
      }
    })
};

function deleteCard(req, res) {
  Card.findByIdAndDelete(req.params.cardId)
    .then((card) => {
      if (!card) {
        res.status(404).send({ message: err })
      } else {
        res.status(500).send({ message: err })
      }
    })
    .catch((err) => {
      if (err.name === 'CastErrpr') {
        res.status(404).send({ message: err });
      } else {
        res.status(500).send({ message: err });
      }
    })
};

module.exports = {
  getCards,
  createCard,
  deleteCard,
};