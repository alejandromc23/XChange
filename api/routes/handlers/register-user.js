const { registerUser } = require('server-logic')

module.exports = (req, res) => {
    const { body : { name, surname, email, password } } = req

    try {
        registerUser(name, surname, email, password)
            .then(() => res.status(201).send())
            .catch(error => res.status(401).json( { error : error.message }))
    } catch (error) {
        console.error(error.message)
    }
}