const CarsModel = require('./CarsModel');

const mockData = [
    {
        brand: "Brand1",
        models: [
            "1",
            "2",
            "3"
        ]
    },
    {
        brand: "Brand2",
        models: [
            "A",
            "B",
            "C"
        ]
    }
];

describe('Cars Controller test', () => {
    /**
     * @type {CarsModel}
     */
    let model;


    beforeEach(() => {
        // reset data every test
        model = new CarsModel({
            data: JSON.stringify(mockData)
        })
    });

    it('should return mockData', () => {
        expect(model.fetchJson()).toStrictEqual(mockData);
    })
    
    it('should return Arrays of cars', () => {
        expect(model.fetchAllCars()).toBeInstanceOf(Array);
    });

    it('should return single object', () => {
        expect(model.fetchSingleBrand("Brand1")).toBeInstanceOf(Object);
    });

    it('should return undefined', () => {
        expect(model.fetchSingleBrand("dawd")).toBe(undefined);
    });

    it('should update/override all models', () => {
        const newModels = ["1", "2", "3", "4", "5"];
        const getBrand = () => model.fetchAllCars()[0];

        model.updateModel(getBrand().brand, newModels);

        expect(getBrand().brand.models.length).toBe(newModels.length);
    })

    it('should add model', () => {
        const getModelCount = () => model.fetchAllCars()[0].models.length;
        const count = getModelCount();

        model.addModel("Brand1", "NewModel");

        expect(getModelCount()).toBe(count + 1);
    })

})