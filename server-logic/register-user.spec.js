require('dotenv').config()

const { env: { TEST_MONGODB_URL: MONGODB_URL } } = process
const registerUser = require('./register-user')
const { random } = Math
const { expect } = require('chai')
const { mongoose, models: { User } } = require('data')
const bcrypt = require('bcryptjs')

describe('server - register user', () => {
    before(() => mongoose.connect(MONGODB_URL).then(() => User.deleteMany()))

    let name, surname, email, password
    beforeEach(() => {
        name = `name`
        surname = `surname`
        email = `namesurname${random()}@email.com`
        password = `${random()}`
    })

    describe('when data introduced is in a correct format', () => {
        it('should register a user if this was not registered before', async () => {
            await registerUser(name, surname, email, password)

            const user = await User.findOne({email})

            expect(user.name).to.equal(name)
            expect(user.surname).to.equal(surname)
            expect(user.email).to.equal(email)
            
            const match = await bcrypt.compare(password, user.password)
            expect(match).to.be.true
        })

        it('should return error if trying to register an already registered user', async () => {
            try {
                const hash = await bcrypt.hash(password, 10)
                await User.create({name, surname, email, password: hash})

                await registerUser(name, surname, email, password)

                throw new Error('it should not reach this point')
            } catch (error) {
                expect(error).to.be.an.instanceOf(Error)
                expect(error.message).to.equal(`user with e-mail ${email} already registered`)
            }
        })
    })

    describe('when data is introduced in a wrong format', () => {
        it('should fail if any field is blank or empty', () => {
            expect(() => {
                registerUser('', surname, email, password)
            }).to.throw(Error, 'fields cannot be blank or empty')

            expect(() => {
                registerUser(name, '', email, password)
            }).to.throw(Error, 'fields cannot be blank or empty')

            expect(() => {
                registerUser(name, surname, '', password)
            }).to.throw(Error, 'fields cannot be blank or empty')

            expect(() => {
                registerUser(name, surname, email, '')
            }).to.throw(Error, 'fields cannot be blank or empty')
        })

        it('should fail when fields are not strings', () => {
            expect(() => {
                registerUser(undefined, surname, email, password)
            }).to.throw(TypeError, `undefined is not a string`)

            expect(() => {
                registerUser(name, true, email, password)
            }).to.throw(TypeError, `true is not a string`)

            expect(() => {
                registerUser(name, surname, 1, password)
            }).to.throw(TypeError, `1 is not a string`)

            expect(() => {
                registerUser(name, surname, { a : true }, password)
            }).to.throw(TypeError, `[object Object] is not a string`)

            expect(() => {
                registerUser(name, surname, email, [1,2,3])
            }).to.throw(TypeError, `1,2,3 is not a string`)
        })

        it('should fail if name or surname are not real', () => {
            expect(() => {
                registerUser('23 lebron', surname, email, password)
            }).to.throw(Error, `23 lebron is not a name`)

            expect(() => {
                registerUser(name, '[]', email, password)
            }).to.throw(Error, `[] is not a name`)

            expect(() => {
                registerUser('lebron.james', surname, email, password)
            }).to.throw(Error, `lebron.james is not a name`)

            expect(() => {
                registerUser(name, 'alex*el', email, password)
            }).to.throw(Error, `alex*el is not a name`)
        })

        it('should fail if email is not real', () => {
            expect(() => {
                registerUser(name, surname, 'email', password)
            }).to.throw(Error, 'email is not an e-mail')

            expect(() => {
                registerUser(name, surname, '234', password)
            }).to.throw(Error, '234 is not an e-mail')
        })

        afterEach(() => User.deleteMany())

        after(mongoose.disconnect)
    })
})