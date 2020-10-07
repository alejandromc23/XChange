const { registerUser } = require('server-logic')
const handleError = require('../../helpers')

module.exports = (req, res) => {
    const { body : { name, surname, email, password } } = req

    try {
        registerUser(name, surname, email, password)
            .then(() => res.status(201).send())
            .catch(handleError)
    } catch (error) {
        handleError(error)
    }
}