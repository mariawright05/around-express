const path = require('path');
const pathtoData = path.join(__dirname, '..', 'data', 'users.json');
const getFileContent = require('../helpers/getFileContent');



function getUsers(req, res) {
  return getFileContent(pathtoData)
    .then((users) => {
      res.send(users);
    })
}

function getOneUser(req, res) {
  getFileContent(pathtoData)
    .then((users) => {
      const user = users.find((user) => user._id === req.params.id)

      if(user) {
        return res.status(200).send(user);
      }

      return res.status(404).send('User does not exist');
    })
}


getFileContent(pathtoData)
.then((users) => {
  const user = users.find((user) => user._id === req.params.id)

  if(user) {
    return res.status(200).send(user);
  }

  return res.status(404).send('User does not exist');
})

module.exports = {
  getUsers,
  getOneUser
}