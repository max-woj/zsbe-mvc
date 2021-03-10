const fs = require('fs');
class CarsModel {
    fetchJson(path){
        return JSON.parse(fs.readFileSync(path).toString())
    }

    fetchAllCars(){
        return this.fetchJson(__dirname + '/cars.json');
    }

    fetchSingleBrand(brand){
        return this.fetchAllCars().find((obj) => obj.brand === brand);
    }

    addModel(brand, model) {                //zadanie 1
        let cars = this.fetchAllCars();
        let tenModel = cars.find((model)=> model.brand == brand);
        tenModel.models.push(model);
        fs.writeFileSync(__dirname + '/cars.json', JSON.stringify(cars));
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
