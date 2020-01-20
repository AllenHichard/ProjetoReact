import socketio from "socket.io-client";

const socket = socketio("http://192.168.0.110:3333",{
    autoConnect: false,
});

function subscribeToNewDevs(subcribeFunction){
    socket.on('new-dev', subcribeFunction)
}

function connect(latitude,longitude,techs){
    socket.io.opts.query = {
        latitude,
        longitude,
        techs,
    }
    socket.connect();

    /*socket.on('message', text => {
        console.log(text);
    })*/

}

function disconnect(){
    if(socket.connected){
        socket.disconnect();
    }
}

export{
    connect,
    disconnect,
    subscribeToNewDevs,
};