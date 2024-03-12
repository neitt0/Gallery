let body = document.querySelector('body')
let nav = document.querySelector('nav')

let buttons = document.querySelectorAll('button')
let indexBtn = document.querySelector('.index')
let infoBtn = document.querySelector('.info')

let indexContent = document.querySelector('.index-content')
let infoContent = document.querySelector('.info-content')

let currentInfoP

// buttons.forEach((b) => {
//   console.log(b)
//   b.addEventListener('click', () => {
//     console.log(b)
//   })
// })

indexBtn.addEventListener('click', () => {
  if (!nav.classList.contains('fullNav')) {
    nav.classList.toggle('fullNav')

    indexContent.hidden = false;
    infoContent.hidden = true;

    body.classList.toggle('scroll-toggle')
    nav.classList.toggle('scroll-toggle')
  } else if (currentInfoP != indexBtn) {
    indexContent.hidden = false;
    infoContent.hidden = true;
  
  } else if (nav.classList.contains('fullNav') && currentInfoP == indexBtn) {
    nav.classList.toggle('fullNav')
    indexContent.hidden = true;
    infoContent.hidden = true;
  } else {
    console.log('something went incredibly wrong')
  }
  
  // Remove empty children
  // might be useless because there should always be an img attached to a .indexImgContainer
  let indexImgContainer = document.querySelectorAll('.indexImgContainer')
  for (child of indexImgContainer) {
    if (child.children.length < 1) {
      indexContent.removeChild(child)
    }
  }
  
  currentInfoP = indexBtn
})

infoBtn.addEventListener('click', () => {
  
  if (!nav.classList.contains('fullNav')) {
    nav.classList.toggle('fullNav')

    infoContent.hidden = false;
    indexContent.hidden = true;

    body.classList.toggle('scroll-toggle')
    nav.classList.toggle('scroll-toggle')
  } else if (currentInfoP != infoBtn) {
    infoContent.hidden = false;
    indexContent.hidden = true;

  } else if (nav.classList.contains('fullNav') && currentInfoP == infoBtn) {
    nav.classList.toggle('fullNav')

    indexContent.hidden = true;
    infoContent.hidden = true;
  } else {
    console.log('something went incredibly wrong')
  }

  currentInfoP = infoBtn
})