const { city } = require("../models/index");
const {Op} = require('sequelize')

class cityRepo {
    // create a new city
    async createCity({ name }) {
        try {
            const result = await city.create({ name });
            return result
        } catch (error) {
            console.log("error in repo level", error)
            return error
        }
    }

    // get the city
    async getCity(cityId) {
        console.log("city id",cityId)
        try {
            const result = await city.findByPk(cityId);
            if (!result) {
                console.log("city is not found")
                return null
            }
            return result
        } catch (error) {
            console.log("error in repo level", error)
            return error
        }
    }

    // update the city
    async updateCity(cityId,data ) {
        try {
            const result = await city.update(data, { where: { id: cityId } });
            if (!result) {
                console.log("city is not found")
                return null
            }
            return result
        } catch (error) {
            console.log("error in repo level", error)
            return error
        }
    }

    // delete the city
    async removeCity(cityId) {
        try {
            const res = await city.destroy({ where: { id: cityId } });
            if (res === 0) {
                console.log("city not found or already deleted");
                return false;
            }
            return true;
        } catch (error) {
            console.log("error in repo level", error);
            return error;
        }
    }

    async getAllCities(query){
        console.log("inside repo",query);
        try {
            const cities = await city.findAll({where:query})
            return cities
        } catch (error) {
            console.log("error in repo level", error);
            return error;
        }
    }

}
module.exports = cityRepo