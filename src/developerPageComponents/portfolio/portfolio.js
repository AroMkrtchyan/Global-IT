import React from 'react'

import css from './portfolio.module.css'
import portfolio2 from './portfolio1.svg'
import portfolio1 from './portfolio2.svg'
import portfolio3 from './portfolio3.svg'
import portfolio4 from './portfolio4.svg'

const Portfolio = () => {
  return (
    <div className={css.portfolio}>
      <div className={css.title}>
        <h1>Մեր ուսանողների աշխատանքները</h1>
        <p>
         Մեր ուսանողները կուրսի ավարտից հետո ունենում են <br/> աշխատանքներ որոնք նրանք տեղադրել են <br/> իրենց պարտֆոլիույում
        </p>
      </div>
      <div className={css.section}>
        <div>
          <img src={portfolio1} alt="image"/>
          <img src={portfolio2} alt="image"/>
        </div>
        <div>
          <img src={portfolio3} alt="image"/>
          <img src={portfolio4} alt="image"/>
        </div>

      </div>
    </div>
  )
};

export default Portfolio
