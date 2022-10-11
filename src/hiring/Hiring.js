import React from 'react';
import s from './Hiring.module.css';
import sContainer from './../common/styles/Container.module.css';


export const Hiring = () => {
   return (
     <div className={s.hiringBlock}>
        <div className={`${sContainer.container}  ${s.hiringWrap}`}>
              <h2 className={s.hiringTitle}>I am considering options for remote work</h2>
              <button className={s.hireMe}>hire me</button>
        </div>

     </div>
   );
};

