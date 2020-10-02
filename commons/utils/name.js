const NAME_REGEX = /^[a-zA-Z]+(([a-zA-Z ])?[a-zA-Z]*)*$/

const Name = {
    isName(name) {
        return NAME_REGEX.test(name)
    }
}

Name.validate = function (name) {
    if (!this.isName(name)) throw new Error(`${name} is not a name`)
}.bind(Name)

module.exports = Name