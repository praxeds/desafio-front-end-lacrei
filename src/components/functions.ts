export const handleClick = (newTitle : string, className : string, section : string) => (event : any) => {
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

    //Removes the class currentSection from all elements
    const currentSections = document.querySelectorAll('.currentSection');
    currentSections.forEach((el) => {
      el.classList.remove('currentSection')
      el.classList.add('noDisplay')
    })
    
    //Displays the selected section
    const selectedSection = document.getElementById(section);
    selectedSection?.classList.remove('noDisplay');
    selectedSection?.classList.add('currentSection');
  }

