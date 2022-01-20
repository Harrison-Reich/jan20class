import axios from 'axios'

// creating songapi functions CRUD
const SongAPI = {
  getSongs: async function () {
    const { data: songs } = await axios.get('/api/songs')
    return songs
  },
  createSong: async function (data) {
    const { data: song } = await axios.post('/api/songs', data)
    return song
  }
}

export default SongAPI
