import React from 'react'
import "./experience.styl"
import s from "assets/styles/general/index.module.styl"

const  experienceList = [
  {
    id: '05',
    type: 'job',
    dateStart: '2018',
    dateEnd: 'atual',
    institution: 'Metrópoles',
    role: 'Coordenador de Tecnologia',
    locate: 'Brasília, DF',
    description: 'Atual emprego e fonte de novos desafios pessoais e profissionais. Atuo como Coordenador de tecnologia e tenho a missão de por em práticas conhecimento de Engenharia absorvidos ao longos anos. Uma empresa muito promissora no DF e no pais. Está entre as 13 empresa nacionais que mais cresceu nos últimos anos.',
  },
  {
    id: '04',
    type: 'job',
    dateStart: '2017',
    dateEnd: '2018',
    institution: 'Diários Associados',
    role: 'Analista Web',
    locate: 'Brasília, DF',
    description: 'O Bom filho a casa retorna. Convidado a voltar a empresa que muito me fez crescer profissionalmente, pude mais uma vez participar da entrega da nova versão do website do Correio Braziliense. Site esse que obteve muitas tecnologias atuais e um desenvolvimento muito forte com foco no resultado da navegação.',
  },
  {
    id: '004',
    type: 'study',
    dateStart: '2016',
    dateEnd: 'Cursando',
    institution: 'Engenharia de software',
    role: 'Unicesumar',
    locate: 'Brasília, DF',
    description: 'O Curso de Bacharelado em Engenharia de Software tem como objetivo formar profissionais aptos a propor melhorias e inovações no planejamento, construção, gestão e manutenção de processos, serviços e produtos computacionais, baseados nas técnicas da Engenharia de Software: sistemas de software corretos, completos, seguros, amigáveis, usáveis, com qualidade, fáceis de manter e custo justo',
  },
  {
    id: '003',
    type: 'certified',
    dateStart: '2015',
    dateEnd: '2017',
    institution: 'Google Analytics',
    role: 'Certificação',
    locate: 'Brasília, DF',
    description: 'Prova de certificação da Google.',
  },
  {
    id: '03',
    type: 'job',
    dateStart: '2015',
    dateEnd: '2016',
    institution: 'Vulpe Design Studio',
    // role: 'Sócio Fundador, Desenvolvedor Front-End, Designer Gráfico',
    role: 'Sócio Fundador',
    locate: 'Brasília, DF',
    description: 'Condução da gestão estratégica do negócio, planejamento estratégico, gestão estratégica da informação, arquitetura corporativa de negócio.',
  },
  {
    id: '00',
    type: 'study',
    dateStart: '2013',
    dateEnd: '2015',
    institution: 'Universidade Paulista - UNIP',
    role: 'Designer Gráfico',
    locate: 'Brasília, DF',
    description: 'O Curso Superior de Tecnologia em Design Gráfico tem como objetivo desenvolver competências associadas à utilização de métodos e técnicas modernos no âmbito da Comunicação, formando profissionais capazes de atuar nos departamentos de comunicação, publicidade, propaganda e marketing de empresas industriais e de serviços, setor público, organizações não-governamentais e empresas especializadas. Resultado obtido na avaliação do MEC, Ato de Reconhecimento: Portaria nº 685, de 02/03/05, Data da Publicação: 03/03/05, Conceito: A',
  },
  {
    id: '02',
    type: 'job',
    dateStart: '2012',
    dateEnd: '2015',
    institution: 'Diários Associados',
    // role: 'Desenvolvedor Front-End | Designer Gráfico',
    role: 'Desenvolvedor Front-End',
    locate: 'Brasília, DF',
    description: 'Execução de briefings de especiais. Trabalhando com telas resposivas...',
  },
  {
    id: '01',
    type: 'job',
    dateStart: '2007',
    dateEnd: '2012',
    institution: 'PAR CORRETORA DE SEGUROS',
    role: 'Analista Web Jr, Suporte Jr',
    locate: 'Brasília, DF',
    description: 'O meu primeiro emprego de carteira assinada. Iniciei minha carreira com o cargo de suporte técnico, como a maioria dos profissionais de TI. Tive acesso a tecnologias de administração de redes como Firewall Aker, Active Directory e Microsoft Exchange. Em meiados de 2009, adotei um desafio da empresa e assumi o desenvolvimento web. Trabalhei com desenvolvimento de interfaces para sistemas da intranet e web utilizando metodologia ágeis.',
  },
];

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