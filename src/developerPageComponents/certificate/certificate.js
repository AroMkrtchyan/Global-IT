import React from 'react'

import css from './certificate.module.css'
import certificate from './certificate.svg'

const Certificate = () => {
  return (
    <div className={css.certificate}>
      <div className={css.image}>
        <img src={certificate} alt="certificate"/>
      </div>
      <div className={css.text}>
        <h1>
          <span>Ձեր </span>
           ապագա
          վկայականը
        </h1>
        <p>
          Դասընթացների ավարտից հետո դուք
          կստանաք սերտիֆիկատ, որը կդառնա ձեր
          օգնականը IT աշխարհ մուտք գործելու համար։
        </p>
        <p>
          Այն հասանելի կլինի էլեկտրոնային տարբերակով և դուք կկարոցանաք հեշտությամբ այն կցել ձեր ռեզյումեին
        </p>
      </div>
    </div>
  )
};

export default Certificate