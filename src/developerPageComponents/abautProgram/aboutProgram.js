import React from 'react'

import css from './aboutProgram.module.css'
import AboutProgramItem from "./aboutProgramItem";





const AboutProgram = () => {
  return  (
    <div className={css.aboutProgramWrapper}>
      <div className={css.aboutProgram}>
        <h1 className={css.title}>
          Ինչ է մտնում ծրագրի մեջ
        </h1>
        <div className={css.itemWrapper}>
          <AboutProgramItem />
        </div>
        <div className={css.line}>
            <span></span><span></span><span></span>
        </div>
      </div>

    </div>
    )
};

export default AboutProgram;