import React from 'react';
import propTypes  from 'prop-types';
import s from "../../assets/styles/general/index.module.styl";

const Awards = ({
  link,
  date,
  name,
  category,
  title
}) => (
  <div className={s.item}>
    <a href={link} target="_blank" rel="noopener noreferrer">
      <small>{date}</small>
      <h4>{name}</h4>
      <small>{category}</small>
      <p>{title}</p>
    </a>
  </div>
);

Awards.propTypes = {
  link: propTypes.string.isRequired,
  date: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  category: propTypes.string,
  title: propTypes.string.isRequired,
};

Awards.defaultProps = {
  link: null,
  date: null,
  name: null,
  category: null,
  title: null,
};

export default Awards;