let tagInput = document.querySelector('#missed-features-input input')
let appendHere = document.querySelector('.tagHere')
let oldKey = 0
let newKey
const TABKEY = 9

tagInput.addEventListener('keydown', event => {
  if (event.keyCode === TABKEY) {
    if(event.preventDefault) {
      event.preventDefault()
      if(tagInput.nodeValue === '' || tagInput.nodeValue === ' ') {
        return false
      }
      addTag(tagInput)
    }
    return false
  }
  if (tagInput.nodeValue === '' && event.keyCode === 8) {
    appendHere.removeChild(document.querySelector('.tag:last-child'))
  }
})

function addTag(element) {
  const tag = document.createElement('div')
  const aTag = document.createElement('a')
  const span = document.createElement('span')
  tag.setAttribute('class', 'tag')
  aTag.setAttribute('href', '#')
  aTag.innerHTML = '<i class="fa fa-times" aria-hidden="true"></i>'
  span.textContent = element.value
  aTag.addEventListener('click', () => {
    aTag.parentNode.parentNode.removeChild(aTag.parentNode)
    aTag.removeEventListener('click')
  })
  tag.appendChild(aTag)
  tag.appendChild(span)
  appendHere.appendChild(tag)
  element.value = ''
}
