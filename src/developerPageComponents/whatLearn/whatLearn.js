import React from "react";

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import css from './whatLearn.module.css';
import WhatLearnItem from "./whatLearnItem";


const WhatLearn = () => {
  return (
   <div className={css.whatLearn}>
     <h1>
       Ինչ եք սովորելու
     </h1>
     <OwlCarousel className='owl-theme'
                  loop margin={10}
                  autoplay
                  responsive={{
                              0:{
                                 items:1,
                                 nav:true
                              },
                              500:{
                                  items:2,
                                  nav:true
                              },
                               700:{
                                 items:3,
                                 nav:false
                              },
                              1000:{
                                  items:4,
                                  nav:false
                              }
                              }}>

         <WhatLearnItem />
     </OwlCarousel>;
   </div>
  )
};

export default WhatLearn;