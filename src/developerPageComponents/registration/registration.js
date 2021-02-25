import React  from 'react'

import css from './registration.module.css'
import Button from "../button";
import check from './check_icon.svg'
import close from './close.svg'



const Registration = () => {

  // const not = <img src={not} alt="icon"/>;
  // const check = <img src={check} alt="icon"/>;

 const courses = {
   group: false,
   individual: true,
   video: true,
   online: true,
   ofline: false,
   am: true,
   ru: false,
   en: false
 };


  return (
    <div className={css.registration}>
      <div className={css.title}>
        <h1>
          Գրանցվել դասընթացներին
        </h1>
        <p>
          Դասընթացների սկիզբը
           <span> 25․09․2020 - 25․03․2021</span>
        </p>
      </div>
      <div className={css.sectionWrapper}>
        <div className={css.section}>

          <div className={css.version}>
            <p>
              Դասընթացների անցկացման
              <span> տարբերակները</span>
            </p>
            <div className={css.first}>
              <p>
                <span>
                  {courses.group ? <img src={check} alt="icon"/> :  <img src={close} alt="icon"/>}
                </span>
                Խմբային դասընթացներ
              </p>
              <p>
                <span>
                  {courses.individual ? <img src={check} alt="icon"/> :  <img src={close} alt="icon"/>}
                </span>
                Անհատական դասընթացներ
              </p>
            </div>
            <div>
              <p>
                <span>
                  {courses.video ? <img src={check} alt="icon"/> :  <img src={close} alt="icon"/>}
                </span>
                Վիդեո դասեր
              </p>
              <p>
                <span>
                  {courses.online ? <img src={check} alt="icon"/> :  <img src={close} alt="icon"/>}
                </span>
                Ուղիղ միացմամբ
              </p>
              <p>
                <span>
                  {courses.ofline ? <img src={check} alt="icon"/> :  <img src={close} alt="icon"/>}
                </span>
                Դասասենյակում
              </p>
            </div>
            <div>
              <p>
                <span>
                  {courses.am ? <img src={check} alt="icon"/> :  <img src={close} alt="icon"/>}
                </span>
                Հայերեն
              </p>
              <p>
                <span>
                  {courses.ru ? <img src={check} alt="icon"/> :  <img src={close} alt="icon"/>}
                </span>
                Ռուսերեն
              </p>
              <p>
                <span>
                  {courses.en ? <img src={check} alt="icon"/> :  <img src={close} alt="icon"/>}
                </span>
                Անգլերեն
              </p>
            </div>
          </div>
          <div className={css.prices}>
            <p>
              Դասընթացների արժեքը
            </p>
            <p>
              <span> 265 000</span>
              <del> 240 000դր</del>
            </p>
          </div>
          <div className={css.priceYear}>
            <p>
              <span>30 000դր </span>
              Ամսեկան վճարման դեպքում
            </p>
          </div>
          <div className={css.buttonWrapper}>
            <Button label={'Դիմել դասընթացին'} />
          </div>
        </div>
      </div>

    </div>
  )
};

export default Registration