const express = require('express')
const path = require('path')
const hbs = require('hbs')


const app = express()
const port = process.env.PORT || 3000

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

//Setup static directory to serve
app.use(express.static(publicDirectoryPath))


app.get('', (req, res) => {
    res.render('index', {
        title: 'Kaizen Timer',
        name: 'Rokas Zilinskas'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About',
        name: 'Rokas Zilinskas'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help',
        helpText: 'This is the help page',
        name: 'Danielius'
    })
})



app.get('/help/*', (req, res) => {
    res.render('404',{
        title: '404',
        error_message: 'Help article not found',
        name: 'Danielius'
    })
})

app.get('*', (req, res) => {
    res.render('404',{
        title: '404',
        error_message: 'Page not found',
        name: 'Danielius'
    })
})

app.listen(port, () => {
    console.log('the server has started on port' + port)
})
