let buttons = document.querySelectorAll('button')
let indexBtn = document.querySelector('.index')
let infoBtn = document.querySelector('.info')

let indexContent = document.querySelector('.index-content')
let infoContent = document.querySelector('.info-content')

for (b of buttons) {
  b.addEventListener('click', () => {
    // stop main page from scrolling while nav in open
    let body = document.querySelector('body')
    let nav = document.querySelector('nav')

    
    body.classList.toggle('scroll-toggle')
    nav.classList.toggle('scroll-toggle')
    
    // target button's grandparent ()
    b.parentElement.parentElement.classList.toggle('fullNav')
  })
}

indexBtn.addEventListener('click', () => {
  if (b.parentElement.parentElement.classList.contains('fullNav')) {
    indexContent.hidden = false;
  } else {
    indexContent.hidden = true;
    infoContent.hidden = true;
  }
})

infoBtn.addEventListener('click', () => {
  if (b.parentElement.parentElement.classList.contains('fullNav')) {
    infoContent.hidden = false;
  } else {
    indexContent.hidden = true;
    infoContent.hidden = true;
  }
})