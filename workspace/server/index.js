const express = require('express');

const { PORT = 3000 } = process.env;

const app = express();

const path = require('path');

app.use(express.static(path.join(__dirname, 'public')))

app.listen(PORT, () => {
    console.log(`App listening at port ${PORT}`)
})