const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const publicFolder = path.join(__dirname, path.relative(__dirname, '../client/build'));
const app = express();

app.use(logger('dev'));
app.use(cookieParser());
app.use(express.json());
app.use(express.static(publicFolder));

// Handles any requests that don't match the ones above
app.get('/*', (req, res) => {
	res.sendFile(path.join(publicFolder, 'index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);
