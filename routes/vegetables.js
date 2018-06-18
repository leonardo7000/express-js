const route = require('express').Router();
const prepareBody = require('../controllers/prepareBody');
const controller = require('../controllers/vegetables');

route.get('/',  controller.readAll, prepareBody, (request, response) => {
    response.json(request.responseData);
});

route.get('/:id', controller.readOne, prepareBody, (request, response) => {
    response.json(request.responseData);
});

route.post('/', controller.create, prepareBody, (req, res) => {
 res.json(req.responseData);
});

module.exports = route;