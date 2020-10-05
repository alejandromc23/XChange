const { Router } = require('express')
const bodyParser = require('body-parser')

const {
    registerUser
} = require('./handlers')

const parseBody = bodyParser.json()

const api = new Router()

api.post('/users', parseBody, registerUser)

module.exports = {
    api
}