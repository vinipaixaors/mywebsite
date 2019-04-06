import React from "react"
// import ReactDOM from 'react-dom'
// import { Link } from "gatsby"
import Layout from "components/Layout"
import Image from "components/image"
import SEO from "components/seo"
import Introduction from "components/Introduction"
import Awards from "components/Awards"
import Expertise from "components/Expertise"
import Skills from "components/Skills"
import Experience from "components/Experience"
import s from "assets/styles/general/index.module.styl"


// window.onload = function (){
//   pregressbar();
// };

// window.onload = () => { 
//   console.log('Iniciou...');
//   pregressbar();
// }

let ctrl = true;

window.document.addEventListener('scroll', function(e){
  if (ctrl){
    var y = window.pageYOffset;
    var element = document.querySelector('#box').offsetHeight;
    
    if(y > element) {
      ctrl = false;
      var animatedElement = document.querySelectorAll('.animateBar'); // Array de Divs .animateBar
      // console.log(animatedElement);

      
      animatedElement.forEach(element => {
        var valProgress = element.getAttribute('data-width');
        element.setAttribute('style', `width: ${valProgress}%`);
      });
      
      // animatedElement.map((item) => {
      //   return (
      //   );
      //   // let valProgress = item.getAttribute('data-width');
      //   // item.style.width = valProgress;
        
      // });
      
      
    }
  }
});

// function progressbar(){
//   console.log('scroll...');
//   // const y = window.scroll( function(e) {
//   // });
// }


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
                  <span>Desenvolvedor, Brasília-DF</span> 
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
                  {/* <li><a href="https://profiles.udacity.com/p/10855558614">Udacity</a></li> */}
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

      <Introduction />
      <Expertise />
      <Skills />
      <Experience />
      <Awards />
    </div>
    
  </Layout>
)

export default IndexPage