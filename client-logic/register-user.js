require('dotenv').config()

const { env: { URL } } = process
const { utils: { Field, Name, Email }, errors: { DuplicityError } } = require('commons')

const fetch = require('node-fetch')

module.exports = (name, surname, email, password) => {
    Field.validate(name)
    Field.validate(surname)
    Field.validate(email)
    Field.validate(password)
    Name.validate(name)
    Name.validate(surname)
    Email.validate(email)

    const body = {name, surname, email, password}

    
    return fetch(`${URL}/users`, {
        method: 'POST',
        body: JSON.stringify(body),
        headers : { 'Content-Type': 'application/json' },
    })
        .then(res => {
            if (res.status === 201) return

            return (async () => {
                const text = await res.json()
                const { error } = text
    
                throw new DuplicityError(`${error}`)
            })()
        })
}