const express = require('express');
//https://www.npmjs.com/package/@faker-js/faker
const { faker } = require ('@faker-js/faker');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hi, I am an express server!');
});

app.get('/new-route', (req, res) => {
  res.send('Hi, I am a new endpoint!');
});

// var products = [
//   {
//     name: 'iPhone',
//     price: 1000
//   },
//   {
//     name: 'Samsung',
//     price: 2000
//   }

// ];

//const products = [];

app.get('/products', (req, res) => {

  const products = [];
  const {size} = req.query;
  const limit = size || 10;

  for (let i = 0; i < limit; i++) {
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.imageUrl()
    });
  }

  res.json(products);
});

app.get('/products/filter', (req, res) => {
  const { name } = req.query;
  res.json('I am filtering products by name: ' + name);
});

app.get('/products/:id', (req, res) => {
  // const id = req.params.id;

  //with ES6:
  const { id } = req.params;
  res.json({
    id,
    name: 'iPhone',
    price: 1000
  });
});




app.get('/users', (req, res) => {
  const {limit, offset} = req.query;
  if (limit && offset) {
    res.json({
      limit,
      offset
    });
  }else{
    res.send('No limit or offset');
  }

});


app.get('/categories/:categoryId/products/:productId', (req, res) => {
  const { categoryId, productId } = req.params;
  res.json({
    categoryId,
    productId,
    //products,
  });
});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});



