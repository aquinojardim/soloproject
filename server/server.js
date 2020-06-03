const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const apiRouter = require('./routes/api');
const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', express.static(path.resolve(__dirname, '../client/assets')));

app.use('/api', apiRouter);

app.get('/', (req, res) => res.status(200).sendFile(path.resolve(__dirname, '../client/index.html')));

app.use((req, res) => res.sendStatus(404));

app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

module.exports = app;
