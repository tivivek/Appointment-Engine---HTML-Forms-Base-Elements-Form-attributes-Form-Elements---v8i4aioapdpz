const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const port = 8080

// Parse JSON bodies (as sent by API clients)
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const  con  = require('./connector')



app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app;
