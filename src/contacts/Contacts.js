import React from 'react';
import s from './Contacts.module.css';
import sContainer from './../common/styles/Container.module.css';


export const Contacts = () => {
   return (
     <div className={s.contactsBlock}>
        <div className={`${sContainer.container} ${s.contactsWrap}`}>
           <h2 className={s.contactsTitle}>CONTACTS</h2>
           <form className={s.form}>
              <input type={'text'} />
              <input type={'text'} />
              <textarea />
           </form>
           <button className={s.send}>SEND</button>
        </div>

     </div>
   );
};

