import React from 'react';

import css from './lecturersItem.module.css'
import linkedin from './linkedinIcon.svg'
import twitter from './twitterIcon.svg'
import instagram from './instagramIcon.svg'
import facefook from './facebookIcon.svg'
import photo from './photo.svg'


const LecturersItem = () => {
  return (
    <div className={css.lecturersItem} style={{backgroundImage:`url(${photo})`}}>
      <p className={css.name}>
          Արսեն <br/> Մկրտչյան
      </p>
      <div className={css.links}>
          <div><span>Հետևեք&nbsp;ինձ</span></div>
          <div><a href="#"><img src={facefook} alt="facefook"/></a></div>
          <div><a href="#"><img src={twitter} alt="twitter"/></a></div>
          <div><a href="#"><img src={instagram} alt="instagram"/></a></div>
          <div><a href="#"><img src={linkedin} alt="linkedin"/></a></div>
      </div>
    </div>
  )
};

export default LecturersItem