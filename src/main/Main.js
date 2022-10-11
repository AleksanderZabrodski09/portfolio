import React from 'react';
import s from './Main.module.css';
import sContainer from './../common/styles/Container.module.css';


export const Main = () => {
   return (
     <div className={s.mainBlock}>
        <div className={sContainer.container}>
           <div className={s.salutation}>
              <span >Hi There</span>
              <h1>I am <br/> Aleksander Zabrodski</h1>
              <p>Front-end Developer</p>
           </div>
           <div className={s.avatar}>foto</div>
        </div>

     </div>
   );
};

