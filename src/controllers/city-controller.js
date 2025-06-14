const {CityService} = require("../services/index");

const cityServiceInstance = new CityService();

const createCity = async (req,res) => {
    try {
        const result = await cityServiceInstance.createCity(req.body);
        return res.status(201).json({
            success:true,
            data:result,
            err:{},
            message:"city created successfully"
        })
    } catch (error) {
        console.log("error in controller",error);
        return res.status(500).json({
            success:false,
            data:{},
            err:error,
            message:"failed to create city"
        })
    }
}

const updateCity = async (req,res) => {
    const cityId  = req.params.id
    const data = req.body
    try {
        const result = await cityServiceInstance.updateCity(cityId,data);
        return res.status(200).json({
            success:true,
            data:result,
            err:{},
            message:`city  with ${cityId}  updated successfully`
        })
    } catch (error) {
        console.log("error in controller",error);
        return res.status(500).json({
            success:false,
            data:{},
            err:error,
            message:"failed to update city"
        })
    }
}

const getCity = async (req,res) => {
    const cityId = req.params.id 
    try {
        const result = await cityServiceInstance.getCity(cityId);
        return res.status(200).json({
            success:true,
            data:result,
            err:{},
            message:"city fetced successfully"
        })
    } catch (error) {
        console.log("error in controller",error);
        return res.status(500).json({
            success:false,
            data:{},
            err:error,
            message:"failed to fetch city"
        })
    }
}

const removeCity = async (req,res) => {
    const cityId = req.params.id
    try {
        const result = cityServiceInstance.deleteCity(cityId);
        return res.status(200).json({
            success:true,
            data:result,
            err:{},
            message:"city deleted successfully"
        })
    } catch (error) {
        console.log("error in controller",error);
        return res.status(500).json({
            success:false,
            data:{},
            err:error,
            message:"failed to create city"
        })
    }
}

const getAllCities = async (req,res) => {
    console.log("reached here",req.query);
    try {
        const resultedCities = await cityServiceInstance.getAllCities(req.query)
        return res.status(200).json({
            success:true,
            data:resultedCities,
            err:{},
            message:"cities fetched successfully"
        })
    } catch (error) {
        console.log("error in controller",error);
        return res.status(500).json({
            success:false,
            data:{},
            err:error,
            message:"failed to get all cities"
        })
    }
}

module.exports = {
    createCity,
    updateCity,
    getCity,
    removeCity,
    getAllCities
}

