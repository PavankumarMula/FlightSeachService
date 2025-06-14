const { Op } = require("sequelize");
const {cityRepository} = require("../repository/index");


const cityRepoInstance = new cityRepository();

class CityService {

    constructor(){
        this.cityRepo = cityRepoInstance;
    }

    async createCity(data){
        try {
            const res = await this.cityRepo.createCity(data);
            return res;
        } catch (error) {
            console.log("error in the service layer",error)
            return error
        }
    }

    async getCity(cityId){
        try {
            const res = await this.cityRepo.getCity(cityId);
            return res;
        } catch (error) {
            console.log("error in the service layer",error)
            return error
        }
    }

    async updateCity(cityId,data){
        try {
            const res = await this.cityRepo.updateCity(cityId,data);
            return res;
        } catch (error) {
            console.log("error in the service layer",error)
            return error
        }
    }

    async deleteCity(cityId){
        try {
            const res = await this.cityRepo.removeCity(cityId);
            return true
        } catch (error) {
            console.log("error in the service layer",error)
            return error
        }
    }

    async getAllCities(query){
        const {name} = query
        const whereClause = {};
        if(name){
            whereClause.name={
                [Op.startsWith]:name
            }
        }
        try {
            const cities = await this.cityRepo.getAllCities(whereClause);
            return cities
        } catch (error) {
            console.log("error in the service layer",error);
            return error
        }
    }

}

module.exports = CityService