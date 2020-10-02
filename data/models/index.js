const { model } = require('mongoose')
const { user, product, conversation } = require('./schemas')

module.exports = {
    User: model('User', user),
    Product: model('Product', product),
    Conversation: model('Conversation', conversation)
}