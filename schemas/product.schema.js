const joi = require('joi');

const idSchema = joi.string().uuid();
const nameSchema = joi.string().min(3).max(30);
const priceSchema = joi.number().integer().min(10);
const imageSchema = joi.string().uri();

const createProductSchema = joi.object({
  name: nameSchema.required(),
  price: priceSchema.required(),
  image: imageSchema.required()
});

const updateProductSchema = joi.object({
  name: nameSchema,
  price: priceSchema,
  image: imageSchema
});


const getProductSchema = joi.object({
  id: idSchema.required()
});


module.exports = { createProductSchema, updateProductSchema, getProductSchema };
