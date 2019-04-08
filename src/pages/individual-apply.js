import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Form from "../components/form"

const AppForm = () => (
  <Layout>
    <SEO title='Register' />
    <h1>Register</h1>
    <Form/>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default AppForm
