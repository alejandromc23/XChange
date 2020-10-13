module.exports = (req, res, next) => {
    res.setHeader('Acces-Control-Allow-Origin', '*')
    res.setHeader('Acces-Control-Allow-Headers', '*')
    res.setHeader('Acces-Control-Allow-Methods', '*')

    next()
}