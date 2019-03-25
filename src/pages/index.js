import React from "react"
// import { Link } from "gatsby"
import Layout from "components/Layout"
// import Footer from "components/Footer"
import Image from "components/image"
import SEO from "components/seo"
import Awards from "components/Awards"
import Expertise from "components/Expertise"
import Skills from "components/Skills"
import Experience from "components/Experience"

import s from "assets/styles/general/index.module.styl"

function yearsOld() {
  const now = new Date();
  const mes = now.getMonth();
  const dia = now.getDate();

  if(( mes > 10) && ( dia > 17)){
    // console.log('bloco 01');
    return now.getFullYear() - 1985;
  } else if(mes > 11) {
    // console.log('bloco 02');
    return now.getFullYear() - 1985;
  } else {
    // console.log('bloco 03');
    return now.getFullYear() - 1986;
  }
}

const IndexPage = () => (
  <Layout>
    <SEO 
      title="Vinícius Paixão" 
      keywords={[`front-end`, `desenvolvedor`, `brasília`, `desenvolvimento`, `web`, `design gráfico`, `vinícius paixão`, `javascript`]} 
      description = "Website portfólio de um desenvolvedor Web front-end de Brasília"
      image = ""
    />
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
                <h2>
                  <strong>Engenheiro de software</strong> e desenvolvedor web 
                  <span> Front-end &amp; Designer</span>
                </h2>
              </div>
              <div className={s.contentFooter}>
                <ul className={s.social}>
                  {/* <li><a href="https://github.com/vinipaixaors/" className={s.iconGithub}> </a></li> */}
                  <li><a href="https://github.com/vinipaixaors/">Github</a></li>
                  <li><a href="https://www.linkedin.com/in/viniciuspaixaors/">Linkedin</a></li>
                  <li><a href="https://twitter.com/viniciuspaixaor">Twitter</a></li>
                  <li><a href="https://profiles.udacity.com/p/10855558614">Udacity</a></li>
                  <li><a href="https://www.instagram.com/viniciuspaixaors/">Instagram</a></li>
                </ul>
                <hr />
                {/* 
                <ul className={s.perosnalContact}>
                  <li className={s.local}>
                    <strong>Local</strong>
                    <span>Brasília, DF</span>
                  </li>
                  <li className={s.whatsapp}>
                    <strong>Whatsapp</strong>
                    <span>
                      <Link to="/#ligar">(61) 9 9999-9999</Link>
                      <Link to="/#ligar2">(61) 9 9999-8888</Link>
                    </span>
                  </li>
                  <li className={s.email}>
                    <strong>E-mail</strong>
                    <span>
                      <a href="mailto:"></a>
                    </span>
                  </li>
                </ul> 
                */}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={s.sections}>
        <div className={s.container}>
          <div className={s.wrapper}>
            <div className={s.sticky}>
              <div className={s.bannerImgRight}>
                <h3>Intro</h3>
                <small>Um pouco sobre meu <strong>perfil</strong></small>
              </div>
            </div>
            <div>
              <p className={s.firstParagraph}>
                Me chamo Vinícius, tenho { yearsOld() } anos e trabalho na empresa <a href="https://www.metropoles.com">Metrópoles</a> como Coordenador de tecnologia em Brasília. 
                Atuo com tecnologia a {new Date().getFullYear() - 2004} anos. Formado em design gráfico e estudante de engenharia de software. Conquistei <a href="#awards">três prêmios</a> nesses últimos anos.
              </p>
              <p>
                Atualmente estou focado no desenvolvimento front-end e back-end para aplicações web e mobile.
              </p>
              <p>Possuo um perfil comunicativo, focado, responsável e engajado. Disposto a absorver novos desafios e muito interesse em novas tecnologias e tendências de mercado.</p>
              <p>Confira algumas das minhas experiências: </p>
            </div>
          </div>
        </div>
      </section>

      <section className={s.sections}>
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
                <Expertise 
                  numb="01"
                  title="Front-End"
                  description="A arte de juntar ótima experiência do usuário, boa navegação e tecnicas modernas de desenvolvimento para uma entrega eficiente e de alta performance.s"
                />
                <Expertise 
                  numb="02"
                  title="CMS WordPress"
                  description="Vivencia no CMS mais presente na web. Usado da forma correta e com os recursos certos, o WP pode ser o CMS da sua empresa."
                />
                <Expertise 
                  numb="03"
                  title="Continuous Delivery"
                  description="Todos os estágios do pipeline de produção até o lançamento do produto para o cliente."
                />
                <Expertise 
                  numb="04"
                  title="Métricas Web"
                  description="Certificado pelo Google em 2015, possuo um nível avançado em métricas web. Ferramentas: Google Analytics e Data Studio; ChartBeat;"
                />
                <Expertise 
                  numb="05"
                  title="Design Gráfico"
                  description="Tendo Design Gráfico como a primeira formação, trabalho com ferramentas Adobe CC com foco na web."
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Skills />
      <Experience />

      <section id="awards" className={s.sections}>
        <div className={s.container}>
          <div className={s.wrapper}>
            <div>
              <div className={s.bannerImgRight}>
                <h3>Prêmios</h3>
                <small>Conquistas inesquecíveis</small>
              </div>
            </div>
            <div className={s.awards}>
              <Awards 
                link="https://www.metropoles.com/materias-especiais/a-tragedia-de-mariana-mg-vista-pela-janela-do-trem-efvm"
                date="2019"
                name="2° Prêmio de Jornalismo ANPTrilhos"
                category="Mídia Digital"
                title="A tragédia de Mariana (MG) vista pela janela do trem"
              />
              <Awards 
                link="https://www.metropoles.com/materias-especiais/mulheres-caminhoneiras-superam-preconceitos-pelas-estradas-do-brasil-2"
                date="2018"
                name="25º Prêmio CNT de Jornalismo"
                category="Internet"
                title="Caminhoneiras, codinome coragem"
              />
              <Awards 
                link="https://especiais.correiobraziliense.net.br/ciclovias-em-busca-de-uma-cidade/"
                date="2017"
                name="24º Prêmio CNT de Jornalismo"
                category="Meio ambiente e transporte"
                title="Ciclovias em busca de uma cidade"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
    {/* <Footer /> */}
  </Layout>
)

export default IndexPage