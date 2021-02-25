import React from 'react';

import css from './whatAwaitsYou.module.css';
import knowledgeIcon from './knowledge.svg';
import portfolio from './portfolio.svg'
import certificate from './certificate.svg'
import freelance from   './freelance.svg'
import WhatAwaitsYouItem from "./whatAwaitsYouItem";

const WhatAwaitYou = () => {
  return (
    <div className={css.whatAwaitsYou}>
      <h1>
        Ինչ է ձեզ սպասվում
      </h1>
      <div className={css.whatAwaitsYouItemWrapper}>
        <WhatAwaitsYouItem
          icon={knowledgeIcon}
          title={'Գիտելիքներ'}
          text={'Անհրաժեշտ front end ծրագրավոման գիտելիքներ'}
        />
        <WhatAwaitsYouItem
          icon={portfolio}
          title={'Պարտֆոլիո'}
          text={'Ռեալ պռոեկտներ որոնք դուք կունենաք դասընթացների վերջում'}
        />
        <WhatAwaitsYouItem
          icon={certificate}
          title={'Սերտիֆիկատ'}
          text={'Ձեր գիտելիքների հաստատումը դուք կստանաք սերտեֆիկատի տեսքով'}
        />
        <WhatAwaitsYouItem
          icon={freelance}
          title={'Ֆրիլանս'}
          text={'Կստանաք հնարավորություն զբաղվել ֆրիլանսով մեր հարթակում'}
        />
      </div>

    </div>
  )
};

export default WhatAwaitYou;