require('dotenv').config()

const { env: { PORT: PORT_ENV, MONGODB_URL } } = process
const PORT = PORT_ENV || 8080

const path = require('path')

const express = require('express')

const { name, version } = require('./package.json')
const { mongoose } = require('data')

console.debug('initializing server')

try {
    console.debug('connecting to database')
    debugger
    mongoose.connect(MONGODB_URL)
        .then(() => {
            const app = express()

            app.get('*', (req, res) => {
                res.status(404).send('Not found :(')
            })

            app.listen(PORT, () => console.info(`server ${name} ${version} running on port ${PORT}`))

            let interrupted = false

            process.on('SIGINT', () => {
                if (!interrupted) {
                    interrupted = true

                    console.debug('stopping server')
                    console.debug('disconnecting database')

                    mongoose.disconnect()
                        .then(() => console.info('disconnected database'))
                        .catch(() => console.error('could not disconnect from mongo'))
                        .finally(() => {
                            console.info(`server ${name} ${version} stopped`)

                            setTimeout(() => {
                                process.exit()
                            }, 500)
                        })
                }
            })
        })
        .catch(() => console.info('could not connect to mongo'))
} catch (error) {
    console.error(error.message)
} 