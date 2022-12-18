const postValidator = (req, res, next) => {
    if(! (req.body.book && req.body.author)){
        return res.status(400).send({
            error: "No book or author data found."
        })
    }

    next()
        
}

module.exports = postValidator