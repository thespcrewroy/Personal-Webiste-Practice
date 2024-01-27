const sections = document.querySelectorAll('.section');     // Select all elements that shares a class of "section"
const sectBtns = document.querySelectorAll('.controls');    // Select section buttons
const sectBtn = document.querySelectorAll('.control');      // Select each individual button with a class of 'control'
const allSections = document.querySelector('.main-content');// Select the body as a class of 'main content'


function PageTransitions(){
    // Button click active class (on-click, button becomes active button and turns green)
    for(let i = 0; i < sectBtn.length; i++) {
        sectBtn[i].addEventListener('click', function(){
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
            this.className += ' active-btn';
        })
    }

    // Sections active class (on-click, console-log button element)
    allSections.addEventListener('click', (e) =>{
        const id = e.target.dataset.id;     // target the name of data-id from HTML and put it into a var 'id'
        if id {
            // Remove selected from the other buttons
            sectBtns.forEach((btn) =>{
                btn.classList.remove('active')
            })
            e.target.classList.add('active')

            // hide other sections
            sections.forEach((section)=>{
                section.classList.remove('active')
            })

            // Whatever id is coming from the dataset is assigned to the element varaible
            const element = document.getElementById(id);
        }
    })
}

PageTransitions();