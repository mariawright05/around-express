const express = require('express');
const mongoose = require('mongoose');
const { PORT = 3000 } = process.env;
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const path = require('path');

mongoose.connect('mongodb://localhost:27017/aroundb', {
  useNewUrlParser: true,
  useCreateIndex:true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});


const userRouter = require('./routers/users');
const cardRouter = require('./routers/cards');

app.use(express.static(path.join(__dirname, 'public')))
app.use('/users', userRouter);
app.use('/cards', cardRouter);

app.get('*', (req, res) => {
  res.status(404).send({ message: 'Requested resource not found' });
});

app.listen(PORT, () => {
    console.log(`App listening at port ${PORT}`)
})