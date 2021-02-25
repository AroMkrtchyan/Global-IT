import React from 'react';

import css from './developerPage.module.css'

import Title from "./developerPageComponents/title/title";
import WhatAwaitYou from "./developerPageComponents/whatAwaitsYou";
import WhatLearn from "./developerPageComponents/whatLearn";
import Curriculum from "./developerPageComponents/curriculum";
import AboutProgram from "./developerPageComponents/abautProgram";
import LearnGLOBALIT from "./developerPageComponents/learnGLOBALIT";
import RegisterForCourse from "./developerPageComponents/registerForCourse";
import Lecturers from "./developerPageComponents/lecturers";
import Topics from "./developerPageComponents/topics";
import Grafik from "./developerPageComponents/grafik";
import Portfolio from "./developerPageComponents/portfolio";
import Certificate from "./developerPageComponents/certificate";
import Registration from "./developerPageComponents/registration";

const DeveloperPage = () => {
  return (
    <div className={css.developerPage}>
      <Title />
      <WhatAwaitYou />
      <WhatLearn />
      <Curriculum />
      <AboutProgram />
      <LearnGLOBALIT />
      <RegisterForCourse />
      <Lecturers />
      <Topics />
      <Grafik />
      <Portfolio />
      <Certificate />
      <Registration />
    </div>
  )
};

export default DeveloperPage