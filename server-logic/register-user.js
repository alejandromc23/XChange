const { utils: { Email, Name, Field } } = require('commons')
const { models: { User } } = require('data')
const bcrypt = require('bcryptjs')

/**
 * Register user into database
 */

module.exports = (name, surname, email, password) => {

    arguments.array.forEach(element => Field.validate(element));
    Name.validate(name)
    Name.validate(surname)
    Email.validate(email)

    return (async () => {
        const user = await User.findOne({ email })

        if (user) throw new Error(`user with e-mail ${email} already registered`)

        const hash = await bcrypt.hash(password, 10)

        await User.create({ name, surname, email, username, password: hash })
    })()
}