let sciFiEffect = document.querySelector('.sci-fi-effect')

document.addEventListener('DOMContentLoaded', () => {
  staggerFX()
})

function staggerFX() {
  // split string
  let scifxList = sciFiEffect.textContent.split('')
  sciFiEffect.textContent = ''
  
  for (let i = 0; i < scifxList.length; i++) {
    // create element and add list item as text
    let tempChild = document.createElement('span')
    tempChild.textContent = scifxList[i]
    tempChild.classList.add('sci-fi-effect')
    tempChild.classList.add('hidden')

    sciFiEffect.parentElement.appendChild(tempChild)
  }  

  // remove original element
  sciFiEffect.remove()
  let sciFiList2 = document.querySelectorAll('.sci-fi-effect')
  
  for (let i = 0; i < sciFiList2.length; i++) {
    // set timeout for each iteration of scifilist2
    setTimeout(() => {removeHidden(sciFiList2, i)}, 1000)
  }
  
  function removeHidden(list, count) {
    setInterval(() => {
      list[count].classList.remove('hidden')
    }, 70 * count) // times by count to increasingly delay the letter
  }
}
