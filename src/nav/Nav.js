import React from 'react';
import s from './Nav.module.css';



export const Nav = () => {
   return (
     <div className={s.nav}>
        <div className={`${s.navWrap} ${s.navMobile}`}>
           <a href="">home page</a>
           <a href="">my skills</a>
           <a href="">my works</a>
           <a href="">contacts</a>
        </div>
           <button className={s.hamburger}>
              <span className={s.navLine}></span>
              <span className={s.navLine}></span>
              <span className={s.navLine}></span>
           </button>
     </div>
   );

};

