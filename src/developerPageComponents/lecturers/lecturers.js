import React from 'react'

import css from './lecturers.module.css'
import LecturersItem from "./lecturersItem";

const Lecturers = () => {
  return (
    <div className={css.lecturers}>
      <h1 className={css.title}>
          Դասախոսները
      </h1>
      <div className={css.itemWrapper}>
        <LecturersItem/>
        <LecturersItem/>
        <LecturersItem/>
      </div>
      <div className={css.text}>
        <h1>
          Front end ծրագրավորման կուրսի ուսումնական ծրագիրը
        </h1>
        <p>
            Մեր ծրագիրը ամենա էֆեկտիվն է, քանի որ մենք հավի ենք առնում և կարևորում դասընթացներից
            ստացած գիտելիքների աստճանաբար յուրացումը։ Մենք թույլ չենք տալիս որ ստեղծվի մատուցվող գիտելիքների կուտակում։
        </p>
       </div>
    </div>
  )
};

export default Lecturers;