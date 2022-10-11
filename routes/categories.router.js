const express = require('express');
//https://www.npmjs.com/package/@faker-js/faker
const { faker } = require ('@faker-js/faker');

const router = express.Router();

router.get('/', (req, res) => {

  const categories = [];
  const {size} = req.query;
  const limit = size || 10;

  for (let i = 0; i < limit; i++) {
    categories.push({
      name: faker.commerce.productMaterial(),
      // price: parseInt(faker.commerce.price(), 10),
      image: faker.image.imageUrl()
    });
  }

  res.json(categories);
});


module.exports = router;
