const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

app.use(bodyParser.urlencoded(({ extended: false })));
app.use(bodyParser.json());

app.listen(4000, () => console.log('Node server running on http://localhost:4000'));
