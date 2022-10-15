const express = require('express');
const routerApi = require('./routes');

const { logErrors, errorHandler } = require('./middlewares/error.handler');

const app = express();
const port = 3000;

//express native middleware
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hi, I am an express server!');
});

app.get('/new-route', (req, res) => {
  res.send('Hi, I am a new endpoint!');
});

routerApi(app);

app.use(logErrors);
app.use(errorHandler);


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});



