import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from 'styled-components'

const HeaderWrapper = styled.header`
  background: rgba(255,255,255,0.7);
  margin: 0;
  h1 {
    margin: 0;
    font-size: 22px;
  }
  a {
    color: black;
    text-decoration: none;
  }
`;

const Heading = styled.div`
  margin: 0 auto;
  width: 100%;
  padding: 20px;
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
