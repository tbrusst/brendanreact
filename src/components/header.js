import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import headshot from "../images/brendanrusso_headshot.jpg"
import logo from "../images/brendanrusso_logo.svg"
import styled from "styled-components"
import { Button, theme } from "../styles/GlobalStyle"

const LogoDiv = styled.div`
  background: no-repeat center;
  background-size: contain;
  height: 35rem;
  width: 100%;
  position: absolute;
`
const ImageDiv = styled.div`
  background: no-repeat center;
  background-size: cover;
  height: 25rem;
  width: 50%;
  z-index: 10;
  left: 25%;
  bottom: 15%;

  position: relative;
  border-radius: 20px;
`
const MainButton = styled.button`
  font-family: signo, sans-serif;
  color: ${theme.black};
  background: ${theme.primary};
  border-radius: 50px;
  border: none;
  padding: 10px 50px;
  max-width: 50%;
`

const Grid = styled.div`
  padding: 0 5rem;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 60px;
  grid-row-gap: 0px;
  max-height: 100vh;
`

const Title = styled.div`
  grid-area: 1 / 2 / 2 / 9;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  z-index: 11;
`

const ImageLogoHold = styled.div`
  grid-area: 2 / 3 / 3 / 8;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 0rem;
`

const TextSection = styled.div`
  grid-area: 2 / 8 / 3 / 12;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin-top: -6rem;
`

const Header = ({ siteTitle }) => (
  <Grid>
    <Title>
      <h4>Creative Technologist</h4>
      <h1>Brendan Russo</h1>
    </Title>

    <ImageLogoHold>
      <ImageDiv style={{ backgroundImage: "url(" + headshot + ")" }}></ImageDiv>
      <LogoDiv style={{ backgroundImage: "url(" + logo + ")" }}></LogoDiv>
    </ImageLogoHold>
    <TextSection>
      <p>
        I am currently working part-time as a UX Designer at a software startup
        called Setvi . I studied Interactive Digital Media at Drexel University
        and am currently seeking full time opportunities in and around
        Philadelphia.
      </p>
      <p>
        My training and experience in digital media have allowed me to become
        well accomplished in UX/UI, motion design, and frontend development. As
        a Creative Technologist I am able to design beautifully functional
        products and then bring them to life in code.
      </p>
      <p>
        Please contact me with any questions you may have or with any
        information regarding opportunities in related fields.
      </p>

      <MainButton>Contact Me</MainButton>
    </TextSection>
  </Grid>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
