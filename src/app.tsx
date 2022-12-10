import React, { useState } from 'react';
import Home from './components/home/home';
import User from './components/usuario/usuario';
import Profissional from './components/profissional/profissional';

export default function App() {
  const [state, setstate] = useState("firstSection")

  const setNewTitle = (title : string) => {
    document.title = title;
  }
  const resetActiveLinks = () => {
    const activeEl: Element[] = Array.from(document.querySelectorAll('.active'));
    for (const element of activeEl) {
      element.classList.remove('active');
    }
  }

  
  const homeEl: Element[] = Array.from(document.querySelectorAll('.home'));
  const userEl: Element[] = Array.from(document.querySelectorAll('.user'));
  const proEl: Element[] = Array.from(document.querySelectorAll('.pro'));


  for (const element of homeEl) {
    element.addEventListener('click', () => {
      setNewTitle('Home | Desafio Lacrei');
      resetActiveLinks();
      setstate('firstSection')
      element.classList.add('active');
    });
  }
  for (const element of userEl) {
    element.addEventListener('click', () => {
      setNewTitle('Pessoa Usuária | Desafio Lacrei');
      resetActiveLinks();
      setstate('secondSection')
      element.classList.add('active');
    });
  }
  for (const element of proEl) {
    element.addEventListener('click', () => {
      setNewTitle('Profissional | Desafio Lacrei');
      resetActiveLinks();
      setstate('thirdSection')
      element.classList.add('active');
    });
  }
  return (
    <div>
      {state === "firstSection" && < Home />}
      {state === "secondSection" && < User />}
      {state === "thirdSection" && < Profissional />}
    </div>
  )
}