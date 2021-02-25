import React from 'react'

import css from './whatLearnItem.module.css'
import icon1 from './icon.svg'


const itemData = [
    {id:'1',
     title: 'HTML CSS',
     text: 'Դուք կծանոթանաք Front end ծրագրավորման սկզբանակն և կարևորագույն գերտեքստի նշագրման լեզվին։' +
            ' Կիմանաք էթ ինչ է Flexsbox-ը, SAS-ը, և այլն։',
     icon: icon1}
];

const WhatLearnItem = () => {
    const itemInfo = itemData.map((item,index) => {
       return (
           <div className='item'>
               <div className={css.whatLearnItem} key={index}>
                   <span>{item.id}</span>
                   <div className={css.icon}>
                       <img src={item.icon} alt="icon"/>
                   </div>
                   <h1 className={css.title}>
                       {item.title}
                   </h1>
                   <p className={css.text}>
                       {item.text}
                   </p>
               </div>
           </div>

       )
    });
    return itemInfo;
};

export default WhatLearnItem;