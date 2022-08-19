// set up dependencies
const express = require('express')
const app = express();
const port = 8000;


// handle requests with routes
app.get('/', (req, res) => {
    res.send('Homepage')
})

app.get('/test', (req, res) => {
    res.send('Test Page')
})


app.post('/test', (req, res) => {
    res.send('Testing post request')
})


// listen on a port 
app.listen(port, () => {
    console.log(`Listening to port: ${port}`)
})

