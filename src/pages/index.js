import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'
import Form from '../components/form'

const IndexPage = () => (
  <Layout>
    <SEO title='Home' keywords={[`code your future`, `capgemini`, `react`, `gatsby`]} />
    <h1>Hi people</h1>
    <h2>Welcome to your new Build-a-thon site.</h2>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
      <Form />
    </div>
    <Link to='/page-2/'>Go to page 2</Link>
  </Layout>
)

export default IndexPage
