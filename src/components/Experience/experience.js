import React from 'react';
import propTypes  from 'prop-types';
import s from "../../assets/styles/general/index.module.styl";

const Experience = ({
  numb,
  title,
  description,
}) => (
  <div className={s.item}>
    <span>{numb}</span>
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

Experience.propTypes = {
  numb: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  description: propTypes.string.isRequired,
};

Experience.defaultProps = {
  num: null,
  title: null,
  description: null,
};

export default Experience;