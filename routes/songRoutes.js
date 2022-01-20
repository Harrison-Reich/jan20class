const router = require('express').Router()
const { Song } = require('../models')

router.get('/songs', async function (req, res) {
  const songs = await Song.find({})
  res.json(songs)
})

router.post('/songs', async function (req, res) {
  const song = await Song.create(req.body)
  res.json(song)
})

router.put('/songs/:id', async function (req, res) {
  await Song.findByIdAndUpdate(req.params.id, req.body)
  res.sendStatus(200)
})

router.delete('/songs/:id', async function (req, res) {
  await Song.findByIdAndDelete(req.params.id)
  res.sendStatus(200)
})

module.exports = router
