import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import { theme } from "../styles/GlobalStyle"
import PostPreview from "../components/postpreview"

const PostListWrapper = styled.div`
  margin: 10rem 0 0 0;
  padding: 0 5rem;
  height: 100rem;
`

const PostList = ({ siteTitle }) => (
  <>
    <PostListWrapper>
      <PostPreview />
      <PostPreview />
      <PostPreview />
      <PostPreview />
      <PostPreview />
    </PostListWrapper>
  </>
)

export default PostList
