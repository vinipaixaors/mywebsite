import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import s from "./header.module.styl"

const Header = ({ siteTitle }) => (
  <header className={s.main}>
    <div className={s.container}>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          Logo
          {/* {siteTitle} */}
        </Link>
      </h1>
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
