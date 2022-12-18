const express = require('express')

const postValidator  = require('../middlewares/postValidator')
const bookController = require('../controllers/books.controller')

const booksRoute = express.Router()

booksRoute.get('/', bookController.getBooks)

booksRoute.post('/', postValidator, bookController.postBook)

booksRoute.get('/best', bookController.bestBookCover)

booksRoute.get('/fav', bookController.favorite)

// This should be lower than any /endpoint because it will shadow them
booksRoute.get('/:id', bookController.getBook) 

module.exports = booksRoute