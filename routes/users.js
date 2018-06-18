const route = require('express').Router();
const prepareBody = require('../controllers/prepareBody');
const controller = require('../controllers/users');

route.get('/',  controller.readAll, prepareBody, (request, response) => {
    response.json(request.responseData);
});

route.get('/:id', controller.readOne, prepareBody, (request, response) => {
    response.json(request.responseData);
});

route.post('/',  controller.create, prepareBody, (request, response) => {
    response.json(request.responseData);
});

route.put('/:id', controller.update, prepareBody, (request, response) => {
    response.json(request.responseData);
});

route.delete('/:id', controller.delete, prepareBody, (request, response) => {
    response.json(request.responseData);
});

module.exports = route;