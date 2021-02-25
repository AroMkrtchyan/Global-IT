import React from 'react';

import css from './title.module.css';
import Icon from './icon.svg'
import image from './image.svg'

import Button from "../button";
const Title = () => {
  return (
    <div className={css.title}>
      <div className={css.text}>
        <div className={css.line}></div>
        <h1>FRONT END</h1>
        <h2>ԾՐԱԳՐԱՎՈՐՈՂ</h2>
        <p>
          Գրանցվիր և ստացիր կրթություն, քո երազած մասագետը դառնալու համար։ Ստացիր պրակտիկայի հնարավորություն և
          եղիր առաջինը աշխատաշուկայում
        </p>
        <Button  label='Գրանցվել'/>
        <span>
          <img src={Icon} alt="icon"/> 14.09.2020 - 29.03.2021
        </span>
      </div>
      <div className={css.image}>
          <img src={image} alt="image" />
      </div>
        {/*<svg width="1921" height="896" viewBox="0 0 1921 896" fill="none" xmlns="http://www.w3.org/2000/svg">*/}
        {/*    <path d="M0.09375 0H1920.09V720C1920.09 720 1605.09 938.429 1371.97 887.44C1125.7 833.577 1079.93 569.913 677.542 722.285C140.552 925.624 0.09375 720 0.09375 720V0Z" fill="#0B0316"/>*/}
        {/*</svg>*/}
    </div>
  )
};

export default Title;