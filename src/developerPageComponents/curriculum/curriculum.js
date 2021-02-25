import React from 'react'

import css from './curriculum.module.css'
import CurriculumItem from "./curriculumItem";

const Curriculum = () => {
  return  (
    <div className={css.curriculum}>
      <div className={css.title}>
        <h1>Ուսումանկան նախնական ծրագիրը</h1>
        <p>
          Դասընթացների տևողությունը - <span>6 ամիս</span>
        </p>
      </div>
      <div className={css.itemWrapper}>
        <CurriculumItem/>
      </div>
    </div>
  )
};

export default Curriculum