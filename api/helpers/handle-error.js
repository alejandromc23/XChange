const { errors : { DuplicityError, CredentialsError, VoidError, UnexistenceError } } = require('commons')

const logger = require('../logger').singletonFileLogger()

module.exports = (error, res) => {
    let status = 500

    switch(true) {
        case error instanceof TypeError || error instanceof VoidError:
            status = 406
            break
        case error instanceof UnexistenceError || error instanceof DuplicityError:
            status = 409
            break
        case error instanceof CredentialsError:
            status = 401
            break
    }

    if (status < 500)
        logger.warn(`response with error status ${status} - ${error}`)
    else
        logger.error(`response with error status ${status} - ${error}`)

    res.status(status).json({ error: error.message })
}