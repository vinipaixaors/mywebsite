import React from 'react';
import propTypes  from 'prop-types';
import s from "../../assets/styles/general/index.module.styl";


// REFATORAR PARA UM COMPONENT NO LAYOUT
// ------------
// Instruções:  Criar um componente único na home chamado 'Experience' que contenha uma lista (array de objetos)
//              outro component que vai renderizar

// const  experienceList = [
//   {
//     title: 'Front-End Avançado',
//     description: 'A arte de juntar ótima experiência do usuário, boa navegação, tecnicas modernas de desenvolvimento para uma entrega eficiente e de alta qualidade.'
//   },
//   {
//     title: 'WORDPRESS',
//     description: 'Conhecimento avançado no CMS mais utilizado no mundo.'
//   },
//   {
//     title: 'MÉTRICAS WEB',
//     description: 'Certificado pelo Google em 2015, possuo um nível avançado em acompanhamento de métricas. Utilizo as seguintes ferramentas: Google Analytics e Data Studio; ChartBeat;'
//   },
//   {
//     title: 'DESIGN GRÁFICO',
//     description: 'Trabalho com ferramentas Adobe CC e formação na área.'
//   }
// ];


const Expertise = ({
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

Expertise.propTypes = {
  numb: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  description: propTypes.string.isRequired,
};

Expertise.defaultProps = {
  num: null,
  title: null,
  description: null,
};

export default Expertise;