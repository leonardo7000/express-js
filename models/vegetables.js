const mongoose = require('mongoose');

const vegetablesSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    weight: {
        type: Number,
        default: 0
    },
    count: {
        type: Number,
        default: 0
    }
});

module.exports = mongoose.model('Vegetables', vegetablesSchema);