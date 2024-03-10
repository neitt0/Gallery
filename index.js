let buttons = document.querySelectorAll('button')
let indexBtn = document.querySelector('.index')
let infoBtn = document.querySelector('.info')

for (b of buttons) {
  // b.addEventListener('click', () => {
    // stop main page from scrolling while nav in open
    let body = document.querySelector('body')
    let nav = document.querySelector('nav')
    body.style.overflow = 'hidden';
    nav.style.overflow = 'scroll'
    // target button's grandparent
    b.parentElement.parentElement.classList.toggle('fullNav')
  // })
}

// indexBtn.addEventListener('click', () => {
  let articleCells = document.querySelectorAll('.article-content')
  let navContent = document.querySelector('.nav-content')

  for (cell of articleCells) {
    if (cell.children.length > 0) {
      let tempContent = document.createElement('div')

      tempContent.appendChild(cell.children[0])
      tempContent.classList.add('indexImgContainer') 

      navContent.appendChild(tempContent)
    }
  }
// })

infoBtn.addEventListener('click', () => {

})