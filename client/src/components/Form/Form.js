// Form properties and inputs + functions
const Form = ({
  title,
  artist,
  album,
  handleInputChange,
  handleAddSong
}) => {
  return (
    <form>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">Title</label>
        <input
          type="text"
          className="form-control"
          name="title"
          value={title}
          onChange={handleInputChange} />
      </div>
      <div className="mb-3">
        <label htmlFor="artist" className="form-label">Artist</label>
        <input
          type="text"
          className="form-control"
          name="artist"
          value={artist}
          onChange={handleInputChange} />
      </div>
      <div className="mb-3">
        <label htmlFor="album" className="form-label">Album</label>
        <input
          type="text"
          className="form-control"
          name="album"
          value={album}
          onChange={handleInputChange} />
      </div>
      <button
        type="submit"
        className="btn btn-primary"
        onClick={handleAddSong} >
        Add Song
      </button>
    </form>
  )
}

export default Form
