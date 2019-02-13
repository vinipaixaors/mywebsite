import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import s from "./header.module.styl"

const Header = ({ siteTitle }) => (
  <header className={s.main}>
    {/* <div className={s.container}>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          Logo
          {siteTitle}
        </Link>
      </h1>
    </div> */}
    <ul className={s.navHeader}>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/curriculo/">Currículo</Link></li>
      <li><Link to="/portfolio/">Portfólio</Link></li>
      <li><Link to="/freelancer/">Freelancer</Link></li>
      <li><Link to="/blog/">Blog</Link></li>
      <li><Link to="#contact">Contato</Link></li>
    </ul>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
