// how a song appears on a page
const SongCard = ({ title, artist, album }) => {
  return (
    <div className="card">
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <h6>By {artist}</h6>
          <h6>Album: {album}</h6>
        </div>
    </div>
  )
}

export default SongCard
