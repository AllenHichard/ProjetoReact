const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require("cors") // para liberar a porta

const app = express();
const url = "mongodb://testeOmni:Maiden66@cluster0-shard-00-00-4d3je.mongodb.net:27017,cluster0-shard-00-01-4d3je.mongodb.net:27017,cluster0-shard-00-02-4d3je.mongodb.net:27017/week10?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority"
const paramet = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}
mongoose.connect(url, paramet);

app.use(cors());// adicionado para liberar todo acesos externo sem restrição

app.use(express.json()); // para entender Json
app.use(routes);

app.listen(3333);











