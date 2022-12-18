const path = require('path')
const books = require('../models/books.model')

const model = require('../models/books.model')

function getBooks(req, res) {
    res.json(model)
}

function getBook(req, res) {
    const id = +req.params.id
    if(model[id]){
        return res.json(model[id])
    }

    res.status(404).json({error: "Id not present"})
}

function postBook(req, res) {
    const entry = {
        book: req.body.book,
        author: req.body.author
    }

    model.push(entry)

    res.send(entry)
}

function bestBookCover(req, res) {
    const filepath = path.resolve(__dirname, '..', 'public', 'cioran.jpg')
    res.sendFile(filepath)

}

function favorite(req, res) {
    res.render('../views/index', {
        bookType: "Evolutionary",
        title: "My Books Collection",
        books: ["Descent of Man", "Moral Ape", "Evolution of Desire"]
    })
}


module.exports = {
    getBook,
    getBooks,
    postBook,
    bestBookCover,
    favorite
}
