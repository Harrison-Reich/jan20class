const { model, Schema } = require('mongoose')

const Song = new Schema({
  title: String,
  artist: String,
  album: String
}, { timestamps: true })

module.exports = model('Song', Song)
