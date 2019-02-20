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
      <section className={s.sections}>
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
                  {/* <li><a href="https://github.com/vinipaixaors/" className={s.iconGithub}> </a></li> */}
                  <li><a href="https://github.com/vinipaixaors/">Github</a></li>
                  <li><a href="https://www.linkedin.com/in/viniciuspaixaors/">Linkedin</a></li>
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

      <section className={s.sections}>
        <div className={s.headerBg}></div>
        <div className={s.contentBg}></div>
        <div className={s.container}>
          <div className={s.wrapper}>
            <div>
              <div className={s.bannerImgRight}>
                <h3>Intro</h3>
                <small>Um pouco sobre meu <strong>perfil</strong></small>
              </div>
            </div>
            <div>
              <p className={s.firstParagraph}>Coordenador de tecnologia no Metrópoles, atuo na área de tecnologia a mais de 14 anos. Formado em Design Gráfico e estudante de engenharia de software, conquistou o 24º PRÊMIO CNT DE JORNALISMO com o especial CICLOVIAS EM BUSCA DE UMA CIDADE - pelo Correio Braziliense.</p>
              <p>Através da Vulpe Desing Studio pude exercer os conhecimento adquiridos em minha graduação em Design Gráfico e trabalhei diretamente com o mercado brasiliense. Atualmente meu foco está associado ao desenvolvimento Front-End e Back-End para aplicações web e mobile.</p>
              <p>Possuo um perfil comunicativo, flexível, responsável e engajado. Disposto a absorver novos desafios e muito interesse em aprender/estudar novas tecnologias e acompanhar as tendências. </p>
              {/* <p>Abaixo podemos conferir algumas das principais tarefas desempenhadas na profissão: </p> */}
            </div>
          </div>
        </div>
      </section>

      <section className={s.sections}>
        <div className={s.headerBg}></div>
        <div className={s.contentBg}></div>
        <div className={s.container}>
          <div className={s.wrapper}>
            <div>
              <div className={s.bannerImgRight}>
                <h3>Experiência</h3>
                <small>Ainda faltam muitas linhas de código</small>
              </div>
            </div>
            <div>
              <div className={s.media}>
                <div className={s.item}>
                  <span>01</span>
                  <h3>Front-End Avançado</h3>
                  <p>A arte de juntar ótima experiência do usuário, boa navegação, tecnicas modernas de desenvolvimento para uma entrega eficiente e de alta qualidade.</p>
                </div>
                <div className={s.item}>
                  <span>02</span>
                  <h3>WordPress</h3>
                  <p>Conhecimento avançado no CMS mais utilizado no mundo. </p>
                </div>
                <div className={s.item}>
                  <span>03</span>
                  <h3>Métricas Web</h3>
                  <p>Certificado pelo Google em 2015, possuo um nível avançado em acompanhamento de métricas. Utilizo as seguintes ferramentas: Google Analytics e Data Studio; ChartBeat;</p>
                </div>
                <div className={s.item}>
                  <span>04</span>
                  <h3>Design Gráfico</h3>
                  <p>Trabalho com ferramentas Adobe CC e formação na área.</p>
                </div>
                {/* <div className={s.item}>
                  <span>05</span>
                  <h3>Javascript</h3>
                  <p>Cras ornare tristique elit lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id.</p>
                </div>
                <div className={s.item}>
                  <span>06</span>
                  <h3>Javascript</h3>
                  <p>Cras ornare tristique elit lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id.</p>
                </div> */}
              </div>
              
            </div>
          </div>
        </div>
      </section>

      <section className={s.sections}>
        <div className={s.headerBg}></div>
        <div className={s.contentBg}></div>
        <div className={s.container}>
          <div className={s.wrapper}>
            <div>
              <div className={s.bannerImgRight}>
                <h3>Prêmios</h3>
                <small>Conquistas inesquecíveis</small>
              </div>
            </div>
            <div className={s.awards}>
              <div className={s.item}>
                <a href="https://www.metropoles.com/materias-especiais/mulheres-caminhoneiras-superam-preconceitos-pelas-estradas-do-brasil-2">
                  <small>2018</small>
                  <h4>25º Prêmio CNT de Jornalismo</h4>
                  <small>Internet</small>
                  <p>Caminhoneiras, codinome coragem</p>
                </a>
              </div>
              <div className={s.item}>
                <a href="https://especiais.correiobraziliense.net.br/ciclovias-em-busca-de-uma-cidade/">
                  <small>2017</small>
                  <h4>24º Prêmio CNT de Jornalismo</h4>
                  <small>Meio ambiente e transporte</small>
                  <p>Ciclovias em busca de uma cidade</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    
    
    {/* <Footer /> */}
  </Layout>
)

export default IndexPage
