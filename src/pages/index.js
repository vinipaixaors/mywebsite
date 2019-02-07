import React from "react"
import { Link } from "gatsby"
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
            <div></div>
            <div></div>
          </div>
        </div>
      </section>
    </div>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/curriculo/">Currículo</Link>
    {/* <Footer /> */}
  </Layout>
)

export default IndexPage
