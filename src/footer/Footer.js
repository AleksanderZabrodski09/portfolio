import React from 'react';
import s from './Footer.module.css';
import sContainer from './../common/styles/Container.module.css';


export const Footer = () => {
   return (
     <div className={s.footerBlock}>
        <div className={`${sContainer.container} ${s.footerWrap}`}>
           <h2 className={s.footerTitle}>Aleksander Zabrodski</h2>
           <div className={s.footerIcons}>
              <div className={s.icon}>
                 <img src="" alt="icon"/>
              </div>
              <div className={s.icon}>
                 <img src="" alt="icon"/>
              </div>
              <div className={s.icon}>
                 <img src="" alt="icon"/>
              </div>
              <div className={s.icon}>
                 <img src="" alt="icon"/>
              </div>

           </div>
           <span className={s.right}>2022 All rights reserved</span>
        </div>

     </div>
   );
};

