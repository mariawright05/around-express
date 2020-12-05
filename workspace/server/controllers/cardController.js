const path = require('path');
const pathToData = path.join(__dirname, '..', 'data', 'cards.json');
const getFileContent = require('../helpers/getFileContent');

function getCards(req, res) {
  return getFileContent(pathToData)
    .then((cards) => {
      res.send(cards)
    })
}

module.exports = getCards;