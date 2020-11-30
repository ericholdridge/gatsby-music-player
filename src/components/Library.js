import React from "react"
import styled from "styled-components"
import LibrarySong from "./LibrarySong"

const Library = ({
  songs,
  setSongs,
  setCurrentSong,
  currentSong,
  setIsPlaying,
  audioRef,
  isPlaying,
  libraryStatus,
}) => {
  return (
    <StyledLibrary
      className={`library ${libraryStatus ? "active-library" : ""}`}
    >
      <h2>Library</h2>
      <div className="library-songs">
        {songs.map(song => (
          <LibrarySong
            key={song.id}
            song={song}
            songs={songs}
            setSongs={setSongs}
            setCurrentSong={setCurrentSong}
            currentSong={currentSong}
            setIsPlaying={setIsPlaying}
            audioRef={audioRef}
            isPlaying={isPlaying}
          />
        ))}
      </div>
    </StyledLibrary>
  )
}

const StyledLibrary = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 20rem;
  height: 100%;
  box-shadow: 2px 2px 10px #ccc;
  overflow: scroll;
  transform: translateX(-100%);
  transition: all 0.5s ease;
  opacity: 0;
  h2 {
    text-align: center;
    padding: 14px 0;
  }
  .selected {
    background: pink;
  }
  &.active-library {
    transform: translateX(0%);
    opacity: 1;
  }
`

export default Library
