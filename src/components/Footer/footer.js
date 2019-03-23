// import { Link } from "gatsby"
// import PropTypes from "prop-types"
import React from "react"
import s from "./footer.module.styl"


class Footer extends React.Component{
  render() {
    return (
      // <div id="contact">
      <div>
        <section className={s.sections}>
          
          <div className={s.container}>
            <div className={s.wrapper}>
              <div></div>
              <div>
                <h1>
                  <span>Vinícius</span>
                  <span>Paixão</span>
                </h1>
                <ul>
                  <li><a href="https://github.com/vinipaixaors/">github</a></li>
                  <li><a href="https://www.linkedin.com/in/viniciuspaixaors/">linkedin</a></li>
                  {/* <li><a href="#">youtube</a></li>
                  <li><a href="#">instagram</a></li> */}
                </ul>
                <span className={s.op8}>
                  © {new Date().getFullYear()} Todos direitos reservados 
                  - Desenvolvido por
                  {` `}
                  <a href="https://www.gatsbyjs.org">Gatsby</a>, por Vinícius Paixão
                </span>
              </div>
            </div>
          </div>
          
        </section>
      </div>
    )
  }
}

export default Footer