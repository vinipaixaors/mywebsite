import React from 'react';
import s from "assets/styles/general/index.module.styl"

function yearsOld() {
  const now = new Date();
  const mes = now.getMonth();
  const dia = now.getDate();

  if(( mes > 10) && ( dia > 17)){
    return now.getFullYear() - 1985;
  } else if(mes > 11) {
    return now.getFullYear() - 1985;
  } else {
    return now.getFullYear() - 1986;
  }
}

const Introduction = () => (
  <>
    <section className={s.sections}>
        <div className={s.container}>
          <div className={s.wrapper}>
            <div className={s.sticky}>
              <div className={[s.bannerImgRight, s.sticky].join(' ')}>
                <h3>Intro</h3>
                <small>Um pouco sobre meu <strong>perfil</strong></small>
              </div>
            </div>
            <div>
              <p className={s.firstParagraph}>
                Me chamo Vinícius, tenho { yearsOld() } anos e trabalho na empresa <a href="https://www.metropoles.com">Metrópoles</a> como coordenador de tecnologia em Brasília-DF. 
                Atuo com tecnologia a {new Date().getFullYear() - 2004} anos. Formado em design gráfico e estudante de engenharia de software. Conquistei <a href="#awards">três prêmios</a> nesses últimos anos.
              </p>
              <p>
                Atualmente estou focado no desenvolvimento front-end para aplicações web e mobile.
              </p>
              <p>Possuo um perfil comunicativo, focado, responsável e engajado. Disposto a absorver novos desafios e muito interesse em novas tecnologias e tendências de mercado.</p>
              <p>Confira algumas das minhas experiências: </p>
            </div>
          </div>
        </div>
      </section>
  </>
);

export default Introduction;