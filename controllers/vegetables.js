const Vegetables = require('../models/vegetables');


const controller = {
    create(req, res, next){
        Vegetables.create({
            name: req.body.name,
            weight: req.body.weight,
            count: req.body.count
        })
        .then((vegetable) => {
            req.data = vegetable._doc;
            next()
        })
    },
    readAll(req, res, next){
        Vegetables.find({}).exec()
        .then((vegetables) => {
            req.data = vegetables;
            next();
        })
    },
    readOne(req, res, next){
        Vegetables.findById(req.params.id)
        .then((vegetable) => {
            req.data = vegetable;
            next();
        })
    }

};


module.exports = controller;