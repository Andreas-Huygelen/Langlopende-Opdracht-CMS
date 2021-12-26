import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import {
  header,
  flexbox,
} from "../page.module.css"

const Header = ({ siteTitle }) => (
  <header className={header} >
    <div className={flexbox}>
      <h1>
        <Link to="/" style={{color: 'gold'}}>
          {siteTitle}
        </Link>
      </h1>
      <Link to="/">Home</Link> <br />
      <Link to="/game/">GamesList</Link> <br />
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
