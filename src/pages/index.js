import React from "react"
// import { Link } from "gatsby"
import Layout from "../components/Layout/layout"
// import Footer from "../components/Footer/footer"
import Image from "../components/image"
import SEO from "../components/seo"

import s from "../assets/styles/general/index.module.styl"

const IndexPage = () => (
  <Layout>
    <SEO title="Vinícius Paixão" keywords={[`gatsby`, `application`, `react`]} />
    <div>
      <section className={s.sectionBg}>
        <div className={s.headerBg}></div>
        <div className={s.contentBg}></div>
        
        <div className={s.container}>
          <div className={s.wrapper}>
            <div>
              <div className={s.bannerImgRight}>
                <Image />
              </div>
            </div>

            <div>
              <div className={s.contentText}>
                <h1>
                  <span>Vinícius</span>
                  <span>Paixão</span>
                </h1>
                <p><strong>Engenheiro de software</strong> e desenvolvedor Web</p>
                <p>Front-end &amp; Designer</p>
              </div>
              <div className={s.contentFooter}>
                <ul className={s.social}>
                  <li><a href="https://github.com/vinipaixaors/" className={s.iconGithub}> </a></li>
                  <li><a href="https://www.linkedin.com/in/viniciuspaixaors/">linkedin</a></li>
                  <li><a href="https://profiles.udacity.com/p/10855558614">Udacity</a></li>
                  <li><a href="https://www.instagram.com/viniciuspaixaors/">Instagram</a></li>
                </ul>
                <hr />
                <ul className={s.perosnalContact}>
                  <li className={s.local}>
                    <strong>Local</strong>
                    <span>Brasília, DF</span>
                  </li>
                  <li className={s.whatsapp}>
                    <strong>Whatsapp</strong>
                    <span>
                      <a href="#ligar">(61) 9 9999-9999</a>
                      <a href="#ligar">(61) 9 9999-9999</a>
                    </span>
                  </li>
                  <li className={s.email}>
                    <strong>E-mail</strong>
                    <span><a href="mailto:vinicius.paixaors@gmail.com">vinicius.paixaors@gmail.com</a></span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

    {/* <div>
      <section className={s.sectionBg}>
        <div className={s.headerBg}></div>
        <div className={s.contentBg}></div>
        
        <div className={s.container}>
          <div className={s.wrapper}>
            <div></div>

            <div>
              <h1>
                <span>Vinícius</span>
                <span>Paixão</span>
              </h1>
              <p>Desenvolvedor Web &amp; Front-end Expert</p>
              <p>Now go build something great.</p>
            </div>
          </div>
        </div>
      </section>
    </div> */}
    
    
    {/* <Footer /> */}
  </Layout>
)

export default IndexPage
