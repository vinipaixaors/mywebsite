import React from 'react';
import s from "../../assets/styles/general/index.module.styl";
import awardsList from "./data.json";

const Awards = () => (
  <>
    <section id="awards" className={s.sections}>
      <div className={s.container}>
        <div className={s.wrapper}>
          <div>
            <div className={[s.bannerImgRight, s.sticky].join(' ')}>
              <h3>Prêmios</h3>
              <small>Conquistas inesquecíveis</small>
            </div>
          </div>
          <div className={s.awards}>
            {awardsList.map((item) => (
              <div key={item.name}>
                <div className={s.item}>
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    <small>{item.date}</small>
                    <h4>{item.name}</h4>
                    <p>{item.title}</p>
                    <small>- {item.category}</small>
                  </a>
                </div> 
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  </>
);

export default Awards;