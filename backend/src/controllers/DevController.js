const axios = require('axios');
const Dev = require("../models/Dev");
const stringAsArray = require('../utils/parseStringAsArray');
const {findConnections, sendMenssage} = require("../websocket");
// index, show, store, update, destroy

module.exports = {

    async index(request, response){
        const devs = await Dev.find();
        return response.json(devs);
    },


    async store(request, response) {
        const { github_username, techs, latitude, longitude } = request.body;
        

        let dev = await Dev.findOne({
            github_username
        });

        if(!dev){
            const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);
            const { name = login, avatar_url, bio } = apiResponse.data;
            const techsArray = stringAsArray(techs);
        
            //console.log( apiResponse.data);
            //console.log(name, avatar_url, bio, github_username);
        
            const location = {
                type: 'Point',
                coordinates: [longitude, latitude],
            }
        
            dev = await Dev.create({
                github_username,
                name,
                avatar_url,
                bio,
                techs: techsArray,
                location,
            });



            // filtrar as conexões que estão há no máximo 10km de deistância
            // e que o novo dev tenha pelo menos uma das tecnologias filtradas

            const sendSocketMessageTo = findConnections(
                {latitudem, longitude},
                 techsArray,
            )

            sendMenssage(sendSocketMessageTo,'new-dev', dev);    
            //console.log(sendSocketMessageTo);

            

        }
    
        return response.json(dev);
    }

};