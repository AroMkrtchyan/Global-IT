import React from 'react'

import css from './learnGLOBALIT.module.css'
import userIcon from './userIcon.svg'
import itemIcon1 from './itemIcon1.svg'
import LearnGLOBALITItem from "./learnGLOBALITItem";

const LearnGLOBALIT = () => {
  return (
    <div className={css.learnGLOBALIT}>
      <h1 className={css.title}>
        Ինչու սովորել GLOBAL IT - ում
      </h1>
      <div className={css.user}>
        <img src={userIcon} alt="image"/>
        <p>
            Բարև, ես կպատմեմ թէ ինչու սովորել GLOBAL IT - ում
        </p>
      </div>
      <div className={css.itemWrapper}>
        <LearnGLOBALITItem  icon ={itemIcon1} title='Երակար տարիների փորձ'
                            text='Մենք շուկայում ենք 2017 թվականից։ Այսօր
                            մենք զբաղվում ենք բազմաթիվ աշակերտների
                            մասնագիտական կրթությամբ և ունենք բազում ավարտած
                            ուսանողներ որոնք գտել են իրենց տեղը շուկայում։' />
          <LearnGLOBALITItem  icon ={itemIcon1} title='Երակար տարիների փորձ'
                              text='Մենք շուկայում ենք 2017 թվականից։ Այսօր
                            մենք զբաղվում ենք բազմաթիվ աշակերտների
                            մասնագիտական կրթությամբ և ունենք բազում ավարտած
                            ուսանողներ որոնք գտել են իրենց տեղը շուկայում։' />
          <LearnGLOBALITItem  icon ={itemIcon1} title='Երակար տարիների փորձ'
                              text='Մենք շուկայում ենք 2017 թվականից։ Այսօր
                            մենք զբաղվում ենք բազմաթիվ աշակերտների
                            մասնագիտական կրթությամբ և ունենք բազում ավարտած
                            ուսանողներ որոնք գտել են իրենց տեղը շուկայում։' />
          <LearnGLOBALITItem  icon ={itemIcon1} title='Երակար տարիների փորձ'
                              text='Մենք շուկայում ենք 2017 թվականից։ Այսօր
                            մենք զբաղվում ենք բազմաթիվ աշակերտների
                            մասնագիտական կրթությամբ և ունենք բազում ավարտած
                            ուսանողներ որոնք գտել են իրենց տեղը շուկայում։' />
      </div>
    </div>
  )
};

export default LearnGLOBALIT