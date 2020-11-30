import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faPlay,
  faPause,
  faAngleLeft,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons"
import styled from "styled-components"

const Player = ({
  isPlaying,
  setIsPlaying,
  audioRef,
  songInfo,
  setSongInfo,
}) => {
  const getTime = time => {
    return Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
  }

  // Event Handlers
  const playSongHandler = () => {
    if (isPlaying) {
      audioRef.current.pause()
      setIsPlaying(!isPlaying)
    } else {
      audioRef.current.play()
      setIsPlaying(!isPlaying)
    }
  }

  const dragHandler = e => {
    audioRef.current.currentTime = e.target.value
    setSongInfo({ ...songInfo, currentTime: e.target.value })
  }

  return (
    <StyledPlayer className="player">
      <div className="time-control">
        <p>{getTime(songInfo.currentTime)}</p>
        <input
          onChange={dragHandler}
          min={0}
          max={songInfo.duration}
          value={songInfo.currentTime}
          type="range"
        />
        <p>{getTime(songInfo.duration || 0.0)}</p>
      </div>
      <div className="play-control">
        <FontAwesomeIcon
          className="skip-reverse"
          size="2x"
          icon={faAngleLeft}
          title="reverse"
        />
        <FontAwesomeIcon
          onClick={playSongHandler}
          className="play"
          title={isPlaying ? "pause" : "play"}
          size="2x"
          icon={isPlaying ? faPause : faPlay}
        />
        <FontAwesomeIcon
          className="skip-forward"
          size="2x"
          icon={faAngleRight}
          title="forward"
        />
      </div>
    </StyledPlayer>
  )
}

const StyledPlayer = styled.div`
  width: 100%;
  min-height: 20vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  .time-control {
    width: 50%;
    display: flex;
    input {
      width: 100%;
      padding: 1rem 0;
      cursor: pointer;
    }
    p {
      padding: 1rem;
    }
  }
  .play-control {
    width: 30%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    svg {
      cursor: pointer;
    }
  }
`

export default Player
