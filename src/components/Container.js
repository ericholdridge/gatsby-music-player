import React from "react"
import styled from "styled-components"

const Container = ({ children }) => (
  <StyledContainer className="container">{children}</StyledContainer>
)

const StyledContainer = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  @media (max-width: 1080px) {
    width: 90%;
  }
`

export default Container
