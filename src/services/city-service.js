const {cityRepository} = require("../repository/index");

class CityService {

    constructor(){
        this.cityRepo = new cityRepository();
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
            const res = await this.cityRepo.updateCity({cityId,data});
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

}