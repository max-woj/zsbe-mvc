const express = require('express');
const router = express.Router();
const CarsModel = require('../model/CarsModel');

router.post('/cars/:brand/:model', (req, res) => {     //zadanie 2
    const carsModel = new CarsModel();
    carsModel.addModel(req.params.brand, req.params.model);

    console.log(req.params.brand);
   
});

router.delete('/cars/:brand/:model', (req, res) => {
    const carsModel = new CarsModel();
    carsModel.deleteModel(req.params.brand, req.params.model);
    res.status(204);
    res.send()
});

router.get('/cars/:brand', (req, res) => {
     const carsModel = new CarsModel();
     const myBrandCars = carsModel.fetchSingleBrand(req.params.brand);

    res.render('../views/cars.twig', myBrandCars);
});

module.exports = router;

