const express = require('express');
//https://www.npmjs.com/package/@faker-js/faker
const { faker } = require ('@faker-js/faker');

const router = express.Router();

router.get('/', (req, res) => {

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

router.get('/filter', (req, res) => {
  const { name } = req.query;
  res.json('I am filtering products by name: ' + name);
});

router.get('/:id', (req, res) => {
  // const id = req.params.id;

  //with ES6:
  const { id } = req.params;
  res.json({
    id,
    name: 'iPhone',
    price: 1000
  });
});


router.post('/', (req, res) => {
  const body = req.body;
  res.json({
    message: 'I am creating a product',
    data: body
  });
});


router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  res.json({
    message: 'partial update',
    data: body,
    id
  });
});


router.delete('/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    message: 'deleted',
    id
  });
});


module.exports = router;
