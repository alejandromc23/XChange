const logger = require('../logger').singletonFileLogger()

module.exports = (error, res) => {
    let status = 500

    switch(true) {
        case error instanceof TypeError:
            status = 406
            break
    }

    if (status < 500)
        logger.warn(`response with error status ${status} - ${error}`)
    else
        logger.error(`response with error status ${status} - ${error}`)

    res.status(status).json({ error: error.message })
}