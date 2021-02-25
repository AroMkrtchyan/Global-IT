import React from 'react'


import css from './curriculumItem.module.css'


const curriculumData =[
    {num:1,
     name: 'Կայքի ստեղծման հիմաունքները',
     capacity: 5,
     quiet: 1},
    {num:2,
     name: 'Վեբ ծրագրավորումը սկսնակների համար',
     capacity: 6,
     quiet: 1},
    {num:3,
     name: 'Javascript',
     capacity: 7,
     quiet: 2},
    {num:4,
     name: 'React.js',
     capacity: 6,
     quiet: 2},

];


const CurriculumItem = () => {

    const curriculum = curriculumData.map((item , index) => {
        return (
            <div className={css.curriculumItem} key={index}>
                <div className={css.title}>
                    <div>{item.num}</div>
                    <div>
                        <h4>Կուրս</h4>
                        <p>{item.name}</p>
                    </div>

                </div>
                <div className={css.info}>
                    <p><span></span>Տևողությունը․&nbsp;<span>{item.capacity}&nbsp;շաբաթ</span></p>
                    <p><span></span>Հանգիստ․&nbsp;<span>{item.quiet}&nbsp;շաբաթ</span></p>
                </div>
            </div>
        );

    });

  return curriculum
};

export default CurriculumItem