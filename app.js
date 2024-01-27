const sections = document.querySelectorAll('.section');     // Select all elements that shares a class of "section"
const sectBtns = document.querySelectorAll('.controls');    // Select section buttons
const sectBtn = document.querySelectorAll('.control');      // Select each individual button with a class of 'control'
const allSections = document.querySelector('.main-content');// Select the body as a class of 'main content'


function PageTransitions(){
    // Button click active class
    for(let i = 0; i < sectBtn.length; i++) {
        sectBtn[i].addEventListener('click', () =>{
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].classList = currentBtn[0].className.replace('active-btn', '');
            this.className += ' active-btn'
        })
    }
}

PageTransitions();