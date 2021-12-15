import './styles.scss'
import img from './card.png'

function rootStyle() {
  const elemRoot = document.getElementById('root')
  elemRoot.classList.add('container')
}

function titleComponent() {
  const elemH1 = document.createElement('h1')
  elemH1.innerHTML = 'Hello world'
  elemH1.classList.add('title')
  return elemH1
}

function imageComponent() {
  const elemImg = new Image(1200, 630)
  elemImg.src = img
  return elemImg
}

rootStyle()
document.body.appendChild(titleComponent())
document.body.appendChild(imageComponent())
