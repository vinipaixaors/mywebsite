import React from 'react';
import s from "assets/styles/general/index.module.styl"

const  skillsList = [
  {
    title: 'HTML',
    size: '80'
  },
  {
    title: 'CSS',
    size: '85',
    prop: {
      1: 'Stylus',
      2: 'PostCSS',
      3: 'Sass',
      4: 'bootstrap',
      5: 'Bulma',
    },
  },
  {
    title: 'Javascript',
    size: '75'
  },
  {
    title: 'React',
    size: '65'
  },
  {
    title: 'NodeJS',
    size: '55'
  },
  {
    title: 'Gulp',
    size: '80'
  },
  {
    title: 'Git',
    size: '70'
  },
  {
    title: 'PHP',
    size: '40'
  },
  {
    title: 'Python',
    size: '30'
  },
  {
    title: 'Scrum',
    size: '80'
  },
  {
    title: 'AWS',
    size: '60'
  },
  {
    title: 'Google Analytics',
    size: '90'
  },
  {
    title: 'SEO',
    size: '90'
  },
  {
    title: 'Adobe XD',
    size: '60'
  },
  {
    title: 'Adobe Illustrator',
    size: '75'
  },
  {
    title: 'Adobe Photoshop',
    size: '80'
  },
  {
    title: 'Zeplin',
    size: '70'
  }
];



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