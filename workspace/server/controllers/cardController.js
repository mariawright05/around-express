const path = require('path');
const pathToData = path.join(__dirname, '..', 'data', 'cards.json');
const getFileContent = require('../helpers/getFileContent');

function getCards(req, res) {
  return getFileContent(pathToData, res)
    .then((cards) => {
      res.status(200).send(cards)
    })
    .catch((err) => res.status(500).send({ message: err }))
};

function createCard (req, res) {
  console.log(req.user._id);
};

module.exports = {
  getCards,
  createCard,
};