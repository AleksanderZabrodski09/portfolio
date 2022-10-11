import s from './Project.module.css';
import React from 'react';

export const Project = (props) => {
   return (
     <div className={s.cardProject}>
        <div className={s.viewContainer}>
           {/*<img className={s.image} src="" alt=""/>*/}
           <a href="" className={s.open}>Open</a>
        </div>
        <span className={s.titleProject}>{props.title}</span>
        <span className={s.description}>{props.text}</span>

     </div>)
}