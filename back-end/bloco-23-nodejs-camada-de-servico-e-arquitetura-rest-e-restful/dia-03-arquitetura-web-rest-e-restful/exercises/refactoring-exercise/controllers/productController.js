const express = require('express');
const ProductModel = require('../models/productModel');

const router = express.Router();

router.get('/', async (_req, res, next) => {
  try {
    const products = await ProductModel.getAll();
    return res.status(200).json(products);
  } catch (e) {
    console.log(e);
    return res.status(500).json({message: 'Algo saiu errado'});
  }

});

router.get('/:id', async (req, res, next) => {
  try {
    const product = await ProductModel.getById(req.params.id);
    return res.status(200).json(product);
  } catch (e) {
    console.log(e);
    return res.status(500).json({message: 'Algo saiu errado'});
  }
  
});

router.post('/', async (req, res) => {
  try {
    const { name, brand } = req.body;
    const newProduct = await ProductModel.add(name, brand);
    return res.status(201).json(newProduct);
  } catch (e) {
    console.log(e);
    return res.status(500).json({message: 'Algo saiu errado'});
  }
  
});

router.delete('/:id', async (req, res) => {
  try {
    const products = await ProductModel.exclude(req.params.id);
    return res.status(200).json(products);
  } catch (e) {
    console.log(e);
    return res.status(500).json({message: 'Algo saiu errado'});
  }

});

router.put('/:id', async (req, res) => {
  try {
    const { name, brand } = req.body;
    const products = await ProductModel.update(req.params.id, name, brand);
    return res.status(200).json(products);
  } catch (e) {
    console.log(e);
    return res.status(500).json({message: 'Algo saiu errado'});
  }
  
});

module.exports = router;