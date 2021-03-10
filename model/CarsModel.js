const fs = require('fs');

class CarsModel {
    carsFile = __dirname + '/cars.json';

    constructor(conf) {
        if (conf.carsFile)
            this.carsFile = conf.carsFile;
    

        // used to testing
        if (conf.data)
            this.data = JSON.parse(conf.data);
    }

    fetchJson() {
        if (this.data)
            return this.data;
        return JSON.parse(fs.readFileSync(this.carsFile).toString())
    }

    fetchAllCars(){
        return this.fetchJson();
    }

    fetchSingleBrand(brand){
        return this.fetchAllCars().find((obj) => obj.brand === brand);
    }

    addModel(brand, model) {
        // TODO: implement
    }

    /**
     * @param {string} brand 
     * @param {string[]} models 
     */
    updateModel(brand, models) {
        // TODO: implement
    }

    deleteModel(brand, model){
        let cars = this.fetchAllCars();
        let brandObject = cars.find((obj) => obj.brand === brand);
        const modelsList = brandObject.models.filter((element) => {
            return element !== model;
        });
        brandObject.models = modelsList;

        cars = cars.map(item => {
            if(item.brand !== brand){
                return item;
            }
            return brandObject;
        });

        fs.writeFileSync(__dirname + '/cars.json', JSON.stringify(cars));
    }
}

module.exports = CarsModel;
