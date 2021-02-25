import React from 'react'

import css from './learnGLOBALITItem.module.css'



const LearnGLOBALITItem = ({icon, title, text}) => {
  return (
    <div className={css.learnGLOBALITItem}>
      <div className={css.iconBlock}>
          <span>1</span>
          <img src={icon} alt="icon"/>
      </div>
      <h1 className={css.title}>
          {title}
      </h1>
      <p className={css.text}>
          {text}
      </p>
    </div>
  )
};


export default LearnGLOBALITItem