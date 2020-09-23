const { utils: { Email } } = require('commons')
const { Schema, SchemaTypes: { ObjectId } } = require('mongoose')

module.exports = new Schema({
    name: {
        type: String,
        required: true
    },

    surname: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true,
        validate: [Email.validate, 'invalid e-mail']
    },

    password: {
        type: String,
        required: true
    },

    favorites: [{
        type: ObjectId,
        required: true,
        ref: 'Product'
    }],

    image: {
        data: Buffer,
        contentType: String
    },

    location: {
        type: {
            type: String,
            enum: ['Point'],
            required: true
        },
        coordinates: {
            type: [Number],
            required: true
        }
    },

    conversations: [{
        type: ObjectId,
        required: true,
        ref: 'Conversation'
    }]
})