const mongoose = require('mongoose')


const allList = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    age: {
        type: String,
        required: true
    },
    gen: {
        type: String,
        required: true
        
    },
    mobile: {
        type: Number,
        required: true
    }

})

module.exports = mongoose.model('list',allList)