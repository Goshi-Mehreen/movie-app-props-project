import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

function MovieDetail() {
  const { id } = useParams()

  const [movie, setMovie] = useState(null)
  const [similarMovies, setSimilarMovies] = useState([])

  useEffect(() => {
    const fetchMovieDetail = async () => {
      try {
        const response = await fetch(
          `https://movies-api.accel.li/api/v2/movie_details.json?movie_id=${id}`
        )

        const data = await response.json()

        if (data.status === 'ok') {
          setMovie(data.data.movie)
        }
      } catch (error) {
        console.log(error)
      }
    }

    const fetchSimilarMovies = async () => {
      try {
        const response = await fetch(
          `https://movies-api.accel.li/api/v2/movie_suggestions.json?movie_id=${id}`
        )

        const data = await response.json()

        if (data.status === 'ok') {
          setSimilarMovies(data.data.movies || [])
        }
      } catch (error) {
        console.log(error)
      }
    }

    fetchMovieDetail()
    fetchSimilarMovies()
  }, [id])

  if (!movie) {
    return <p className="text-white p-5">Loading...</p>
  }

  return (
    <div className="bg-zinc-900 min-h-screen text-white p-6">

      <div className="max-w-6xl mx-auto grid md:grid-cols-[260px_1fr_230px] gap-10">

        {/* Left: Poster + Button + Tags */}
        <div>
          <img
            src={movie.large_cover_image}
            alt={movie.title}
            className="w-full rounded border-4 border-white"
          />

          <button className="w-full mt-3 bg-lime-500 hover:bg-lime-400 text-white font-bold text-lg py-3 rounded">
            Download
          </button>

          <div className="flex flex-wrap gap-2 mt-3">
            {movie.genres?.map((genre) => (
              <span
                key={genre}
                className="bg-black border border-zinc-600 text-sm px-2 py-1 rounded"
              >
                {genre}
              </span>
            ))}
          </div>
        </div>

        {/* Center: Movie Details */}
        <div>

          <h1 className="text-4xl font-bold mb-6">
            {movie.title}
          </h1>

          <p className="text-xl font-bold">
            {movie.year}
          </p>

          <p className="text-xl font-bold mb-8">
            {movie.genres?.join(' / ')}
          </p>

          {/* Available Qualities */}
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="italic text-lg mr-1">Available in:</span>

            {movie.torrents?.map((torrent, index) => (
              <span
                key={index}
                className="border border-zinc-600 px-3 py-2 rounded text-sm font-semibold"
              >
                {torrent.quality}.{torrent.type?.toUpperCase()}
                {torrent.video_codec === 'x265' && (
                  <span className="text-lime-500 text-xs ml-1">x265</span>
                )}
              </span>
            ))}
          </div>

          <p className="text-zinc-500 text-sm font-bold mb-6">
            WEB: same quality as BluRay
          </p>

          <button className="border border-zinc-600 bg-zinc-800 hover:border-lime-500 px-4 py-2 rounded text-sm mb-6">
            Download Subtitles
          </button>

          {/* Ratings */}
          <div className="space-y-4">

            <div className="flex items-center gap-4">
              <span className="w-16 text-lime-500 text-2xl">♥</span>
              <span className="text-xl font-bold">{movie.like_count}</span>
            </div>

            <div className="flex items-center gap-4">
              <span className="w-16">
                <span className="bg-yellow-400 text-black font-extrabold text-sm px-1 rounded">
                  IMDb
                </span>
              </span>
              <span className="text-xl font-bold">
                {movie.rating}
                <span className="text-zinc-500 text-sm font-normal">/10</span>
              </span>
            </div>

            <div className="flex items-center gap-4">
              <span className="w-16 text-zinc-400 text-sm">Runtime</span>
              <span className="text-xl font-bold">
                {movie.runtime}
                <span className="text-zinc-500 text-sm font-normal"> min</span>
              </span>
            </div>

          </div>

          {/* Overview */}
          <h2 className="text-xl font-semibold mt-8 mb-2">
            Overview
          </h2>

          <p className="text-zinc-300 leading-7">
            {movie.description_full || movie.description_intro}
          </p>

        </div>

        {/* Right: Similar Movies */}
        <div>
          <h3 className="font-bold mb-3">Similar Movies</h3>

          <div className="grid grid-cols-2 gap-4">
            {similarMovies.slice(0, 4).map((item) => (
              <Link key={item.id} to={`/movie/${item.id}`}>
                <img
                  src={item.medium_cover_image}
                  alt={item.title}
                  className="w-full aspect-[2/3] object-cover border-4 border-white rounded hover:border-lime-500"
                />
              </Link>
            ))}
          </div>
        </div>

      </div>

    </div>
  )
}

export default MovieDetail