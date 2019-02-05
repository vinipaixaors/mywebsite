// import { Link } from "gatsby"
// import PropTypes from "prop-types"
import React from "react"
import s from "./footer.module.styl"


class Footer extends React.Component{
  render() {
    return (
      <div className={s.footerBg}>
        <span> Footer O meu caralho!!!</span>
      </div>
    )
  }
}

export default Footer