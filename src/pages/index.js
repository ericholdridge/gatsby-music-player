import React, { useState, useRef } from "react"
import GlobalStyles from "../styles/GlobalStyles"
import Player from "../components/Player"
import Song from "../components/Song"
import SongData from "../util"
import Library from "../components/Library"
import { Helmet } from "react-helmet"
import Nav from "../components/Nav"
import SEO from "../components/seo"
import { graphql } from "gatsby"

const IndexPage = ({ data }) => {
  const songData = data.site.siteMetadata.data
  const [songs, setSongs] = useState(songData)
  const [currentSong, setCurrentSong] = useState(songs[0])
  const [isPlaying, setIsPlaying] = useState(false)
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
  })
  const [libraryStatus, setLibraryStatus] = useState(false)
  // Get a reference to the audio html element
  const audioRef = useRef(null)

  const timeUpdateHandler = e => {
    const current = e.target.currentTime
    const duration = e.target.duration
    setSongInfo({ ...songInfo, currentTime: current, duration })
  }
  return (
    <section className="index">
      <GlobalStyles />
      <Helmet>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <SEO title="Music Player" />
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} />
      <Song currentSong={currentSong} />
      <Player
        currentSong={currentSong}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        audioRef={audioRef}
        songInfo={songInfo}
        setSongInfo={setSongInfo}
      />
      <Library
        songs={songs}
        setSongs={setSongs}
        currentSong={currentSong}
        setCurrentSong={setCurrentSong}
        setIsPlaying={setIsPlaying}
        audioRef={audioRef}
        isPlaying={isPlaying}
        libraryStatus={libraryStatus}
      />
      <audio
        onLoadedMetadata={timeUpdateHandler}
        onTimeUpdate={timeUpdateHandler}
        ref={audioRef}
        src={currentSong.audio}
      >
        <track
          default
          kind="captions"
          srcLang="en"
          src={currentSong.audio}
        ></track>
      </audio>
    </section>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        data {
          name
          cover
          artist
          audio
          id
          active
        }
      }
    }
  }
`

export default IndexPage