import React from 'react';
import s from "assets/styles/general/index.module.styl"
import skillsList from './data.json';

const Skills = () => (
  <>
    <section className={s.sections}>
      <div className={s.container}>
        <div className={s.wrapper}>
          <div>
            <div className={[s.bannerImgRight, s.sticky].join(' ')}>
              <h3>Habilidades</h3>
              <small>Linguagens, ferramentas e soluções</small>
            </div>
          </div>
          <div>
            <div id="box" className={s.media}>
              {skillsList.map((item) => (
                <div className={s.item} key={item.title}>
                  <h3><span>{item.size}</span><small>%</small> {item.title}</h3>
                  <div className={s.contentProgressBar}>
                    {/* <div className={s.progressBar} style={{width : item.size + '%' }}></div> */}
                    <div className={[s.progressBar, 'animateBar'].join(' ')} data-width={item.size} style={{width: '0'}}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default Skills;