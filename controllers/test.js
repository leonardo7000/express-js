const controller = (request, response, next) => {
    request.test = 'message from controller!';
    next();
};
module.exports = controller;