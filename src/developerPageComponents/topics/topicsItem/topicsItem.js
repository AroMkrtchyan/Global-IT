import React , {useState} from 'react'

import css from './topicsItem.module.css'
import icon from './icon.svg'

const TopicsItem = ({text}) => {
  const [open, setOpen] = useState(false);

  const list = ['#1 - Ծանոթացում WWW-ին, ֆունդամենտալ թեգեր, սիմվոլներ, ցուցակներ',
                '#2 - Աղյուսակներ, iframe թեգ, մուլտիմեդիա',
                '#3 - head թեգում գործածվող թեգեր, վեբ էջի հիմնական կառուցվածք',
                '#4 - HTML5 թեգեր և ատրիբուտներ, ինֆորմացիայի մուտքագրման համակարգ',
                '#5 - Ծանոթացում CSS-ի հետ, selector-ներ և կոմբինատորներ',
                '#6 - Background հատկանիշ, չափսերի հատկանիշներ',
                '#7 - Box մոդել, Border, Outline, Padding, Margin, Display հատկանիշ',
                '#8 - Pseudo էլեմենտներ, Էջում էլեմենտների դասավորվածության հետ աշխատանք',
                '#9 - CSS3 ստանդարտներ, User Agent, Filter հատկանիշ, Responsive դիզայն, անիմացիաներ',
                '#10 - Փոփոխականները CSS-ում, Flexbox, Grid',
                '#11 - Բարձր մակարդակի Selector-ներ',
                '#12 - Փուլի ամփոփում',
                '#13 - Թեստ'];


  const buttonText = open ? <img src={icon} alt="icon"/> : 'Տեսնել փուլի բոլոր թեմաները';
  const isOpen = () => setOpen(!open );



  const listAllItem = list.map((item,index) => {
    return (<div className={css.topicsItem} key={index}>
            {item}
           </div>)
      });
  const listItem = list.slice(0,6).map((item,index) => {
      return (<div className={css.topicsItem} key={index}>
          {item}
      </div>)
  });
  return (
    <>
      {open ? listAllItem : listItem}
      <div className={css.topicsButton} onClick={isOpen}>
        <span>
            {buttonText}
        </span>
      </div>
    </>
  )
};

export  default TopicsItem