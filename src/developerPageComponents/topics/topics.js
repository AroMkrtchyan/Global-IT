import React from 'react'

import css from './topics.module.css'
import icon from './icon.svg'
import image from './image.svg'
import TopicsItem from "./topicsItem";


const Topics = () => {
  return (
    <div className={css.topics}>
      <div className={css.title}>
        <img src={icon} alt="image"/>
        <h1>Փուլի թեմաները</h1>
      </div>
      <div className={css.section}>
        <div className={css.main}>
          <TopicsItem />
        </div>
        <div className={css.info}>
          <h1>Բնութագիր</h1>
          <p>
            Այստեղ լինելու է ինչ որ տեքստ, բայց դիզայնեռը չգիտի ինչ տեքստ։
            Այստեղ լինելու է ինչ որ տեքստ, բայց դիզայնեռը չգիտի ինչ տեքստ։
            Այստեղ լինելու է ինչ որ տեքստ, բայց դիզայնեռը չգիտի ինչ տեքստ։
            Այստեղ լինելու է ինչ որ տեքստ, բայց դիզայնեռը չգիտի ինչ տեքստ։
          </p>
          <p>
            Այստեղ լինելու է ինչ որ տեքստ, բայց դիզայնեռը չգիտի ինչ տեքստ։
            Այստեղ լինելու է ինչ որ տեքստ, բայց դիզայնեռը չգիտի ինչ տեքստ։
            Այստեղ լինելու է ինչ որ տեքստ, բայց դիզայնեռը չգիտի ինչ տեքստ։
            Այստեղ լինելու է ինչ որ տեքստ, բայց դիզայնեռը չգիտի ինչ տեքստ։
          </p>
          <div>
            <img src={image} alt="image"/>
          </div>
          <div className={css.buttonGroup}>
              <button>3 ժամ 25 րոպե</button>
              <button>Ֆայլ</button>
              <button>Առաջադրանք</button>
          </div>
        </div>

      </div>
    </div>
  )
};

export default Topics