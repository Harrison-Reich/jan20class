import { useState } from 'react'
import axios from 'axios'

const App = () => {
  const [movieState, setMovieState] = useState({
    title: '',
    movie: {},
    movies: []
  })

  const handleInputChange = ({ target: { name, value } }) => setMovieState({ ...movieState, [name]: value })

  const handleSearchMovie = event => {
    event.preventDefault()
    axios.get(`http://www.omdbapi.com/?apikey=trilogy&t=${movieState.title}`)
      .then(({ data: movie }) => {
        console.log(movie)
        setMovieState({ ...movieState, movie, title: '' })
      })
      .catch(err => console.error(err))
  }

  const handleSaveMovie = () => {
    const movies = JSON.parse(JSON.stringify(movieState.movies))
    movies.push(movieState.movie)
    setMovieState({ ...movieState, movies, movie: {} })
  }
  return (
    <div class='container'>
      <div className='row'>
        <form>
          <label htmlFor='title'>title</label>
          <input
            type='text'
            name='title'
            value={movieState.title}
            onChange={handleInputChange}
          />
          <button onClick={handleSearchMovie}>Search</button>
        </form>
      </div>
      <hr />
      <div class='row'>
        <div className='col-md-6'>
          {
            movieState.movie.Title ? (
              <div>
                <h1>{movieState.movie.Title} <button onClick={handleSaveMovie}>Save Movie</button></h1>
                <h3>Released On {movieState.movie.Released}</h3>
                <p>{movieState.movie.Plot}</p>
              </div>
            ) : null
          }
        </div>
        <div className='col-md-6'>
          <h4>Saved Movies</h4>
          {
            movieState.movies.map(movie => (
              <div>
                <h1>{movie.Title}</h1>
                <h3>Released On {movie.Released}</h3>
                <p>{movie.Plot}</p>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default App
