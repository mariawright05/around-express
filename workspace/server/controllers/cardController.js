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
    .catch((err) => res.status(500).send({ message: 'Error:' , err:err }))
};

function createCard(req, res) {
  const { name, link } = req.body;

  Card.create({ name, link })
    .then(card => res.status(200).send(card))
    .catch(err => res.status(500).send({ message: 'Error:' , err:err }))
};

function deleteCard(req, res) {
  Card.findByIdAndDelete(req.params.cardId)
    .then(card => res.send({ data: card }))
    .catch(err => res.status(500).send({ message: 'Error:' , err:err }))
};

module.exports = {
  getCards,
  createCard,
  deleteCard,
};