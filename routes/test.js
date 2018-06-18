const route = require('express').Router();
const controller = require('../controllers/test');

route.get('/', controller, (request, response) => {
    response.send(`It works -- ${request.test}`);
});



module.exports = route;