require('dotenv').config()

const { env: { TEST_MONGODB_URL: MONGODB_URL } } = process

const { mongoose } = require('data')

const registerUser = require('./register-user')

mongoose.connect(MONGODB_URL)
    .then(async () => {
        await registerUser('alejandro', 'mascort', 'alejandromascort@hotmail.com', '123123123')
        console.log('user already registered')
    })
    .catch(error => console.log(error.message))
    .finally(() => mongoose.disconnect())