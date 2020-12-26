const path = require('path');
const pathToData = path.join(__dirname, '..', 'data', 'users.json');
const getFileContent = require('../helpers/getFileContent');
const User = require('../models/user');


function getUsers(req, res) {
  return getFileContent(pathToData, res)
    .then((users) => {
      res.status(200).send(users);
    })
    .catch((err) => res.status(500).send({ message: err }))
}

function getOneUser(req, res) {
  getFileContent(pathToData, res)
    .then((users) => {
      const user = users.find((user) => user._id === req.params.id)

      if(user) {
        return res.status(200).send(user);
      }

      return res.status(404).send({ message: 'User ID not found'});
    })
    .catch((err) => res.status(500).send({ message: err }))
}

function createUser(req, res) {
  const { name, about, avatar } = req.body;

  User.create({ name, about, avatar })
    .then(user => res.status(200).send(user))
    .catch(err => res.status(500).send({ message: 'Error' }));
}

module.exports = {
  getUsers,
  getOneUser,
  createUser,
}