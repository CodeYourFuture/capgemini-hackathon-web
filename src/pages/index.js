import React from 'react'
import { Link } from "gatsby"

import Layout from '../components/layout'
import SEO from '../components/seo'
import styled from "styled-components"

const Blurb = styled.div`
  background: rgba(255,255,255,0.7);
  width: 100%;
  height: 350px;
  display: flex;
  align-items: center;
  flex-direction: column;
`

const XRegisterBtn = ({ className }) => (
  <Link to="/individual-apply" className={className}>
    <button>Register</button>
  </Link>
)

const RegisterBtn = styled(XRegisterBtn)`
  transform: translateY(140px);

  button {
    border-radius: 3px;
    background: rgb(106, 254, 77);
    border: 0px;
    font-size: 20px;
    padding: 10px 15px;
  }
`

const IndexPage = () => (
  <Layout>
    <SEO title='Home' keywords={[`code your future`, `capgemini`, `react`, `gatsby`]} />
    <Blurb>
      <h1>Build The Future - CodeYourFuture Build-a-thon</h1>
      <h2>Build for good</h2>
      <p>In partnership with Capgemini</p>
      <p>To register for the build-a-thon, click on the button below</p>
      <RegisterBtn/>
    </Blurb>
  </Layout>
)

export default IndexPage
