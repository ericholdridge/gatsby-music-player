import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMusic } from "@fortawesome/free-solid-svg-icons"
import styled from "styled-components"
import Container from "../components/Container"

const Nav = ({ libraryStatus, setLibraryStatus }) => {
  return (
    <StyledNav>
      <Container>
        <h1>Waves</h1>
        <button onClick={() => setLibraryStatus(!libraryStatus)}>
          Library
          <FontAwesomeIcon
            aria-hidden="true"
            icon={faMusic}
            title="Music Library"
          />
        </button>
      </Container>
    </StyledNav>
  )
}

const StyledNav = styled.nav`
  width: 100%;
  min-height: 10vh;
  padding: 30px 0;
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    button {
      background: transparent;
      cursor: pointer;
      border: none;
      border: 2px solid rgb(65, 65, 65);
      padding: 0.5rem;
      transition: all 0.3s ease;
      &:hover {
        background: rgb(65, 65, 65);
        color: white;
      }
      &:focus {
        outline: 1px solid rgb(65, 65, 65);
      }
    }
  }
`

export default Nav
