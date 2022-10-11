import React from 'react';
import './App.css';
import {Header} from './header/Header';
import {Main} from './main/Main';
import {Skills} from './skills/Skills';
import {useState} from 'react';
import {MyWorks} from './my works/MyWorks';
import {Hiring} from './hiring/Hiring';
import {Contacts} from './contacts/Contacts';
import {Footer} from './footer/Footer';


export const App = () => {

   let [cards, setCards] = useState([
      {
         id: 1,
         title: 'React',
         text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, omnis?nesciunt omnis'
      },
      {
         id: 2,
         title: 'JS',
         text: 'consectetur adipisicing elit. Adipisci blanditiis doloribus iure nesciunt omnis porro quas quibusdam'
      },
      {id: 3, title: 'TS', text: 'description Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci'}
   ])
   let [projects, setProjects] = useState([
      {
         id: 1,
         title: 'name project 1',
         text: 'Aperiam, omnis?nesciunt omnisdolor sit amet, consectetur adipisicing elit omnis'
      },
      {id: 2, title: 'name project 2', text: 'iunt omnis porro quas quibusdam Adipisci blanditiis doloribus iure nesc'},
   ])

   return (
     <div className="App">
        <Header/>
        <Main/>
        <Skills cards={cards} setCards={setCards}/>
        <MyWorks projects={projects} setProjects={setProjects}/>
        <Hiring/>
        <Contacts/>
        <Footer/>
     </div>
   );
}

