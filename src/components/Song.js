import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"

const Song = ({ currentSong }) => {
  return (
    <StyledSong className="song">
      {console.log(currentSong)}
      <div className="image">
        <Img fluid={currentSong.cover.asset.fluid} alt={currentSong.title} />
      </div>
      <h2>{currentSong.title}</h2>
      <h3>{currentSong.artist}</h3>
    </StyledSong>
  )
}

const StyledSong = styled.div`
  width: 100%;
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .image {
    width: 20%;
    border-radius: 50%;
    .gatsby-image-wrapper {
      border-radius: 50%;
    }
  }
  h2 {
    padding: 3rem 1rem 1rem 1rem;
  }
  h3 {
    font-size: 1rem;
  }
`

export default Song
