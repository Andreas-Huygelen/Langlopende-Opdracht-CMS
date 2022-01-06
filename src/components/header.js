import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import logo from "../images/logo.png"
import {
  header,
  flexbox,
  logocss
} from "../page.module.css"

const Header = ({ siteTitle }) => {
  return(
  
  <header className={header} >
    <div className={flexbox}>
      <img className={logocss} src={logo} alt={siteTitle}/>
      <Link to="/">Home</Link> <br />
      <Link to="/game/">GamesList</Link> <br />
    </div>
  </header>
)}



Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
