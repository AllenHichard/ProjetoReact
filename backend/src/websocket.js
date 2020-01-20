const socketio = require("socket.io");
const parseStringAsArray = require("./utils/parseStringAsArray");
const calculateDistance = require("./utils/calculateDistance");

let io;
const connections = [];

exports.setupWebsocket = (server) => {
    //console.log("ok");
     io = socketio(server);

    io.on('connection', socket =>{
        const {latitude, longitude, techs} = socket.handshake.query;
        
        connections.push({
            id: socket.id,
            coordinates: {
                latitude: Number(latitude),
                longitude: Number(longitude),
            },
            techs: parseStringAsArray(techs),
        });
        
        
        //console.log(socket.id);
        //console.log(socket.handshake.query);

        /*setTimeout(()=>{
            socket.emit("message", "Hello OmniStack")
        }, 3000)
        */
    });
};



exports.findConnections = (coordinates, techs) => {
    return connections.filter(connection=>{
        return calculateDistance(coordinates, connection.coordinates) < 10
        && connection.techs.some(item => techs.includes(item))
    });
}

exports.sendMenssage = (to, message, data) => {
    to.forEach(connection =>{
        io.to(connection.id).emit(message, data)
    })
}