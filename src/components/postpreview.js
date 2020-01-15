import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import { theme } from "../styles/GlobalStyle"
import headshot from "../images/brendanrusso_headshot.jpg"

const Image = styled.div`
  height: 25rem;
  width: 50%;
`

const PostPreview = ({ siteTitle }) => (
  <>
    <div>
      <Image style={{ backgroundImage: "url(" + headshot + ")" }}></Image>
      <h3>Frankford Arsenal</h3>
      <p>UX/UI, Web Development, Motion Design</p>
      <a href="">View Project</a>
    </div>
  </>
)

export default PostPreview
