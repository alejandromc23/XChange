const NAME_REGEX = /^[a-zA-Z]+(([a-zA-Z ])?[a-zA-Z]*)*$/g

const Name = {
    isName(name) {
        return NAME_REGEX.test(name)
    }
}

Name.validate = function (name) {
    if (!this.isName) throw new Error(`${name} is not a name`)
}.bind(Name)

module.exports = Name