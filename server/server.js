const express = require('express');

const app = express();
const PORT = 5000;

const artistListArray = require('./Modules/artist')
    
const songListArray = require('./Modules/song')

app.use(express.static('server/public'));

app.get('/artist', (req, res) => {
    res.send(artistListArray);
});

// TODO - Add GET for songs
app.get('/songs', (req, res) => {
    res.send(songListArray)
});







app.listen(PORT, () => {
    console.log('listening on port', PORT)
});