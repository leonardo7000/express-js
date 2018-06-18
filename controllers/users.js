const Users = require('../models/users');

const controller = {
    readAll(req, res, next){
        Users.find({}).exec()
            .then((vegetables) => {
            req.data = vegetables;
            next()
        })
    },
    readOne(req, res, next){
        Users.findById(req.params.id)
            .then((user) => {
                req.data = user;
                next()
            })
    },
    create(req, res, next){
        Users.create({
            name: req.body.name,
            password: req.body.password,
            email: req.body.email
        })
        .then((user) => {
            req.data = user._doc;
            next()
        })
    },
    update(req, res, next){
        Users.findByIdAndUpdate(req.params.id, {
            name: req.body.name,
            password: req.body.password,
            email: req.body.email
        })
            .then((user) => {
                req.data = req.body;
                next();
            })
    },
    delete(req, res, next){
        Users.findByIdAndRemove(req.params.id)
            .then((user) => {
                req.data = user._doc;
                next();
            })
    }
};

module.exports = controller;