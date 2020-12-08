const path = require('path');
const pathToData = path.join(__dirname, '..', 'data', 'users.json');
const getFileContent = require('../helpers/getFileContent');



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



module.exports = {
  getUsers,
  getOneUser
}