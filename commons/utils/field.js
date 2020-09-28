const Field = {
    isString(field) {
        return typeof field === String
    },

    isEmpty(field) {
        return field.length === 0
    }
}

Field.validate = function (field) {
    if (!this.isString(field)) throw new TypeError(`${field} is not a string`)
    if (this.isEmpty(field)) throw new Error('fields cannot be blank or empty')
}

module.exports = Field