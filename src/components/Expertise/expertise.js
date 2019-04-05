import React from 'react';
import s from "../../assets/styles/general/index.module.styl";
import expertiseList from './data.json';

const Expertise = () => (
  <>
    <section className={s.sections}>
      <div className={s.container}>
        <div className={s.wrapper}>
          <div>
            <div className={[s.bannerImgRight, s.sticky].join(' ')}>
              <h3>Experiência</h3>
              <small>Ainda faltam muitas linhas de código</small>
            </div>
          </div>
          <div>
            <div className={s.media}>
              {expertiseList.map((item) => (
                <div key={item.numb}>
                  <div className={s.item}>
                    <span>{item.numb}</span>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
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

export default Expertise;