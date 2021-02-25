import React from 'react'

import css from './grafik.module.css'

const Grafik = () => {
  return (
    <div className={css.grafik}>
      <div className={css.text}>
        <div>
          <div className={css.num}>
            250 000 դր․
          </div>
          <div>
            <h4>Front end ծրագրավորողի</h4>
            <span>
              Միջին աշխատավարձը
            </span>
          </div>
        </div>
        <p>
          Հայաստանի մաշտաբով Frontend ծրագրավորողը ստանում է 250000 դրամ և ավելին աշխատավարձ։
          Բացի այդ դուք հնարավորություն ունեք աշխատել ֆրիլանսում և ստանալ ձեր կատարած աշխատանքին համապատասխան վճար։
        </p>
      </div>
      <div className={css.image}>
          <img src="#" alt="image"/>
      </div>
    </div>
  )
};



export default Grafik