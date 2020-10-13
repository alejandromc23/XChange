const registerUser = require('./register-user')

registerUser('Alejandro', 'Mccuadrado', 'alesm23c@email.com', '123123123')
    .then(() => {})
    .catch(console.error)