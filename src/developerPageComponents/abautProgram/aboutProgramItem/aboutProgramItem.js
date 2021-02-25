import React from 'react'

import css from './aboutProgramItem.module.css'

import icon1 from './icon1.svg'
import icon2 from './icon2.svg'
import icon3 from './icon3.svg'
import icon4 from './icon4.svg'
import icon5 from './icon5.svg'
import icon6 from './icon5.svg'


const aboutProgramData = [
    {icon: icon1,
     text: '5 մեծ սեմինարներ դասախոսների հետ'},
    {icon: icon2,
    text: '24 խմբակային պրակտիկ դասընթացներ մենթորի հետ'},
    {icon: icon3,
        text: 'Շաբաթական անձնական խորհրդատվություններ մենթորի հետ '},
    {icon: icon4,
        text: '96 Վիդեոկուրսեր'},
    {icon: icon5,
        text: '5 մեծ ավարտական պռոեկտներ'},
    {icon: icon6,
        text: 'Դուք 6 ամսից ավարտում եք կուրսը և կարող եք արդեն սկսել ձեր կարիեռան'},
];

const AboutProgramItem =({icon}) => {
    const programItem = aboutProgramData.map((item,index) => {
        return (
            <div className={css.aboutProgramItem} key={index}>
                <img src={item.icon} alt="icon"/>
                <p>{item.text}</p>
            </div>
        )
    });
  return  programItem
};

export default AboutProgramItem