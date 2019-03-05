import React from 'react';
import PropTypes  from 'prop-types';
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

Experience.PropTypes = {
  numb: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

Experience.defaultProps = {
  num: null,
  title: null,
  description: null,
};

export default Experience;