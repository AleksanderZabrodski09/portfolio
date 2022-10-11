import s from './Skill.module.css';

import React from 'react';

export const Skill = (props) => {
   return (
     <div className={s.cardSkill}>
        <div className={s.icon}>
           <img src="" alt="icon"/>
        </div>
        <h3 className={s.titleSkill}>{props.title}</h3>
        <span className={s.description}>{props.text}</span>

     </div>)
}