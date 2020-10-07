const buildError = require('./error-builder')

module.exports = {
    VoidError : buildError('VoidError'),
    DuplicityError : buildError('DuplicityError'),
    CredentialsError : buildError('CredentialsError'),
    UnexistenceError : buildError('UnexistenceError'),
    ValueError : buildError('ValueError')
}