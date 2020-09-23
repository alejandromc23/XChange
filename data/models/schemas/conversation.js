const { Schema, SchemaTypes: { ObjectId } } = require('mongoose')

module.exports = new Schema({
    Producer: {
        type: ObjectId,
        required: true,
        ref: 'User'
    },

    Consumer: {
        type: ObjectId,
        required: true,
        ref: 'User'
    },

    messages: [{
        sender: {
            type: ObjectId,
            ref: 'User',
            required: true
        },

        body: {
            type: String,
            required: true
        },

        date: {
            type: Date,
            required: true
        }
    }]
})