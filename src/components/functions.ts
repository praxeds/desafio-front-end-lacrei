import { useState } from 'react';

export const handleClick = (newTitle : string, className : string) => (event : any) => {
    document.title = newTitle;

    //Removes the class active from all elements
    const activeEl = document.querySelectorAll('.active');
    activeEl.forEach((el) => {
      el.classList.remove('active')
    })

    //Adds the class active to the clicked element
    const sameEl = document.querySelectorAll(className);
    sameEl.forEach((el) => {
      el.classList.add('active')
    })
  }