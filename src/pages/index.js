import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

import SEO from "../components/seo"
import { Container, Row, Col } from "react-bootstrap"
import headshot from "../images/brendanrusso_headshot.jpg"
import logo from "../images/brendanrusso_logo.svg"
import Header from "../components/header"
import PostList from "../components/postlist"

const IndexPage = () => (
  <Layout>
    <SEO title="Portfolio" />
    <Header />
    <PostList />
  </Layout>
)

export default IndexPage
