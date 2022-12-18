const logger = (req, res, next) => {
    const initial = Date.now()
    next()
    const delta = Date.now() - initial
    console.log(`${req.method} ${req.url}, ${delta}ms`);
}

module.exports = logger