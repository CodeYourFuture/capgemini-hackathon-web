import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from 'styled-components'

const HeaderWrapper = styled.header`
  background: #ab377e;
  margin: 1.45rem 0;
  h1 {
    margin: 0;
  }
  a {
    color: white;
    text-decoration: none;
  }
`;

const Heading = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
`;

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <Heading>
      <h1>
        <Link to="/">
          {siteTitle}
        </Link>
      </h1>
    </Heading>
  </HeaderWrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
