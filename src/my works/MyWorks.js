import React from 'react';
import s from './MyWorks.module.css';
import sContainer from './../common/styles/Container.module.css';
import {Project} from './projects/Project';


export const MyWorks = (props) => {
   return (
     <div className={s.myWorksBlock}>
        <div className={`${sContainer.container} ${s.skillsContainer}`}>
           <h2 className={s.titleBigMyWorks}>MY WORKS</h2>
           <div className={s.myWorksWrap}>
              {
                 props.projects.map((p) => {
                    return <Project
                      id={p.id}
                      key={p.id}
                      title={p.title}
                      text={p.text}/>
                 })
              }
           </div>

           {/*<Project title={'React'} text={'description'}/>*/}
           {/*<Project title={'JS'} text={'description'}/>*/}
           {/*<Project title={'TS'} text={'description'}/>*/}
        </div>

     </div>
   );
};


