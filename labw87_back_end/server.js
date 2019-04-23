const express = require('express');
const config = require('./config');
const cors = require('cors');
const mongoose = require('mongoose');
const artists = require('./app/artists');
const albums = require('./app/albums');
const tracks = require('./app/tracks');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

const port = 8003;

mongoose.connect(config.dbUrl, config.mongoOptions).then(() => {
  app.use('/artists', artists);
  app.use('/albums', albums);
  app.use('/tracks', tracks);

  app.listen(port, () => {
    console.log(`Server started on ${port} port`);
  });
});