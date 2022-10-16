const express = require('express');
const cors = require('cors');
const routerApi = require('./routes');

const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/error.handler');

const app = express();
const port = 3000;

//express.json is a native middleware
app.use(express.json());


// include localhost in whitelist
// const whitelist = ['http://localhost:3000', 'http://localhost:8080', 'http://127.0.0.1:8080', 'http://127.0.0.1:5500',
// '127.0.0.1:5500', 'http://localhost:80'];

// const options = {
//   origin: (origin, callback) => {             //
//     if (whitelist.includes(origin)) {
//       callback(null, true);
//     } else {
//       console.error('Error origin port: ', origin);
//       callback(new Error('Not allowed by CORS'));
//     }
//   }
// };
// app.use(cors(options));
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hi, I am an express server!');
});

app.get('/new-route', (req, res) => {
  res.send('Hi, I am a new endpoint!');
});

routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});



