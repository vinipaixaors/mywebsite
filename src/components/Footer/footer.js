// import { Link } from "gatsby"
// import PropTypes from "prop-types"
import React from "react"
import s from "./footer.module.styl"


class Footer extends React.Component{
  render() {
    return (
      <>
        <section className={s.footerBg}>
          <div></div>
          <div></div>
          <div className={s.container}>
            Vinicius
          </div>
          © {new Date().getFullYear()} Todos direitos reservados 
          {/* - Desenvolvido com */}
          {` `}
          {/* <a href="https://www.gatsbyjs.org">Gatsby</a>, por Vinícius Paixão */}
        </section>
      </>
    )
  }
}

export default Footer