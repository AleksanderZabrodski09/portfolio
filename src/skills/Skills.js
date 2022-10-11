import React, {useState} from 'react';
import s from './Skills.module.css';
import sContainer from './../common/styles/Container.module.css';
import {Skill} from './skill/Skill';



export const Skills = (props) => {
   return (
     <div className={s.skillsBlock}>
        <div className={`${sContainer.container} ${s.skillsContainer}`}>
           <h2 className={s.titleBigSkills}>MY SKILLS</h2>
           <div className={s.skillsWrap}>
              {
                 props.cards.map((c) => {
                    return <Skill
                      id={c.id}
                      key={c.id}
                      title={c.title}
                      text={c.text}/>
                 })
              }
           </div>

           {/*<Skill title={'React'} text={'description'}/>*/}
           {/*<Skill title={'JS'} text={'description'}/>*/}
           {/*<Skill title={'TS'} text={'description'}/>*/}
        </div>
     </div>
   );
};


