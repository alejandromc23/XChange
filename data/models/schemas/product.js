const { Schema, SchemaTypes: { ObjectId } } = require('mongoose')

module.exports = new Schema({
    name: {
        type: String,
        lowercase: true,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    image: [{
        data: 'Buffer',
        contentType: String,
        required: true
    }],

    user: {
        type: ObjectId,
        required: true,
        ref: 'User'
    },

    desired: String,

    date: {
        type: Date,
        required: true
    }
})