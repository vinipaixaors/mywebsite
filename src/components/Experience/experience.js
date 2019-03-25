import React from 'react'
import "./experience.styl"
import s from "assets/styles/general/index.module.styl"
import experienceList from "./data.json"
// import experienceList from "./data.js"
// let admins = require('./data.1.json');

const Experience = () => (
  <>
    <section className={s.sections}>
      <div className={s.container}>
        <div className={s.wrapper}>
          <div>
            <div id={s.vini} className={[s.bannerImgRight, s.sticky].join(' ')}>
              <h3>Experiência e Formação</h3>
              <small>Lugares por onde passei, atuei e aprendi.</small>
            </div>
          </div>
          <div>
            <div className={s.media}>
              {/* <div className={s.timeline + ' ' + s.viniteste}> */}
              {/* <div className={[s.timeline, s.viniteste].join(' ')}> */}
              
              <div className={s.timeline}>
                {experienceList.map((item) => (
                  <div key={item.id}>
                    <div className={`${s.pointTimeline} ${item.type}`}></div>
                    <div className={`${s.item} ${item.type}`}>
                      <div>
                        <h5>{item.dateStart} - {item.dateEnd}</h5>
                        <h4>{item.institution}</h4>
                        <span>{item.role}</span>
                        <small>{item.locate}</small>
                      </div>
                      <div>
                        <p>{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default Experience;