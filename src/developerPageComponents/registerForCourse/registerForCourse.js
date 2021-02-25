import React from 'react'

import css from './registerForCourse.module.css'
import Button from "../button";


const RegisterForCourse = () => {
  return (
    <div className={css.registerForCourse}>
      <div className={css.title}>
        <h1>
            Դասընթացը անցկացվում է անհատական և խմբակային տարբերակով
        </h1>
        <span>Հասցրու գրանցվել</span>
      </div>
      <div className={css.buttonWrapper}>
        <Button label='Գրանցվել դասընթացին'/>
      </div>

    </div>
  )
};

export default RegisterForCourse