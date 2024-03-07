let sciFiEffect = document.querySelector('.sci-fi-effect')

splitText()

function splitText() {
  let scifxList = sciFiEffect.textContent.split('')
  sciFiEffect.textContent = ''
  
  for (let i = 0; i < scifxList.length; i++) {
    let tempChild = document.createElement('h1')
    tempChild.textContent = scifxList[i]
    tempChild.classList.add('sci-fi-effect')
    tempChild.classList.add('hidden')

    sciFiEffect.parentElement.appendChild(tempChild)
  }
  
  console.log(sciFiEffect.parentElement)
  sciFiEffect.remove()
}

let sciFiEffect2 = document.querySelectorAll('.sci-fi-effect')


for (let i = 0; i < sciFiEffect2.length; i++) {
  setTimeout(() => {removeHidden(sciFiEffect2, i)}, 1000)
}

  function removeHidden(list, count) {
    setInterval(() => {
      list[count].classList.remove('hidden')
    }, 70 * count)
  }