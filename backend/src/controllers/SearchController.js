const Dev = require("../models/Dev");
const stringAsArray = require('../utils/parseStringAsArray');

module.exports = {
    //get usa o query
    //post usa o body
    async index(request, response){
        // Buscar todos devs num raio de 10km
        // filtrar
        const { latitude, longitude, techs} = request.query;
        const techsArray = stringAsArray(techs);
        const devs = await Dev.find({
            techs: {
                $in: techsArray,
            },
            location: {
                $near: {
                    $geometry:{
                        type: 'Point',
                        coordinates: [longitude, latitude],
                    },
                    $maxDistance: 10000,
                },
            },
        });
        console.log(techsArray);
        return response.json({ message: "buscou"});
    }

}