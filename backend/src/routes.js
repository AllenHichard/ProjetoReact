const {Router} = require('express');
const DevController = require('./controllers/DevController');
const SearchController = require('./controllers/SearchController');
const routes = Router();



routes.post('/x', (request, response) => {
    console.log(request);
    return response.json(request.body);
});


routes.get('/devs', DevController.index)
routes.post('/devs', DevController.store);
routes.get('/search', SearchController.index);

module.exports = routes;
