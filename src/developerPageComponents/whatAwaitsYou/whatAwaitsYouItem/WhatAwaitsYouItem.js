import React from 'react';

import css from './WhatAwaitsYouItem.module.css';

const WhatAwaitsYouItem = ({icon, title, text}) => {
  return (
    <div className={css.WhatAwaitsYouItem}>
      <div className={css.icon}>
          <img src={icon} alt="icon"/>
      </div>
      <div className={css.textWrapper}>
        <h4 className={css.title}>
          {title}
        </h4>
        <p className={css.text}>
          {text}
        </p>
      </div>

    </div>
  )
};

export default WhatAwaitsYouItem;