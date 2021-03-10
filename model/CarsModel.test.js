
const CarsModel = require('./CarsModel');
const auta = new CarsModel();
describe('CarsModel', () => { 
    it('test addModel', () => {

        const wszystko = auta.fetchAllCars();

        auta.addModel("Acura", "Alfa");

        expect(auta.fetchAllCars()).not.toStrictEqual(wszystko);
    });

    it('test deleteModel', () => {

        const wszystko = auta.fetchAllCars();

        auta.deleteModel("Acura", "Integra");

        expect(auta.fetchAllCars()).not.toStrictEqual(wszystko);

});

});
