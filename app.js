const express = require('express')

const logger  = require('./middlewares/logger')
const booksRoute = require('./routes/books.route')

const PORT = 8000

const app = express()

// https://expressjs.com/en/4x/api.html#app.set
// To set parameters in express app
app.set('view engine', 'hbs') // Setting templating engine
app.set('views', './views') // setting views folder


app.use(logger)
app.use(express.json())

// Api
app.use('/books', booksRoute)

// Exposing a directory to public at the specified endpoint
app.use('/', express.static('public'))
// app.use(express.static('public'))  // can be also written like this

// All other go to 404
app.all('*', (req, res) => {
    res.status(404).json({error: "route doesn't exist"})
})

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}...`);
})