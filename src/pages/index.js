import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Form from '../components/form'

const IndexPage = () => (
  <Layout>
    <SEO title='Home' keywords={[`code your future`, `capgemini`, `react`, `gatsby`]} />
    <h1>Welcome to the CodeYourFuture Build-a-thon</h1>
    <h2>Build for good</h2>
    <p>To register for the build-a-thon, click on the button below</p>
    <div style={{ maxWidth: `400px`, maxHeight: `400px` }}>
      <Form />
    </div>
    <Link to='/individual-apply/'>To apply as an individual</Link>
    <Link to='/team-apply/'>To apply as a team</Link>
  </Layout>
)

export default IndexPage
