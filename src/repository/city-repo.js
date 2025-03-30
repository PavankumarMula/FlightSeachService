 const {city} =require("../models/index");

 class cityRepo {
    async createCity({name}){
        try {
            const newCity = await city.create({name});
            return newCity
        } catch (error) {
            console.log("error while creating new city",error)
            return error
        }
    }
    async deleteCity(cityId){
        try {
            const deletedId = await city.destroy({where:{id:cityId}});
            return deletedId
        } catch (error) {
            console.log("error while deleting",error);
            return error
        }
    }
 }
 module.exports = cityRepo