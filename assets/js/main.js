
const menuBtn = document.querySelector('.menu__btn')
const menuList = document.querySelector('.menu__list')
const body = document.querySelector('body')

menuBtn.addEventListener('click', (e) => {
  menuBtn.classList.toggle('active')
  body.classList.toggle('active')
  if (menuList.classList.contains('active')) {
    setTimeout(() => menuList.classList.toggle('active'), 500)
  } else {
    menuList.classList.toggle('active')
  }
})

const headersList = document.querySelectorAll('.slider__header')
const notesList = document.querySelectorAll('.slider__note')
const indicatorsList = document.querySelectorAll('.slider__indicator')
const descriptionsList = document.querySelectorAll('.slider__description')

let index = 0;
let interval = 5000;
let heightsArr = [];
let heightMax = null;

setInterval(() => {
  headersList[index].classList.toggle('active')
  notesList[index].classList.toggle('active')
  indicatorsList[index].classList.toggle('active')
  index = (index + 1) % headersList.length;
  headersList[index].classList.toggle('active')
  notesList[index].classList.toggle('active')
  indicatorsList[index].classList.toggle('active')
}, interval)

descriptionsList.forEach(el => heightsArr.push(el.clientHeight))
heightMax = Math.max(...heightsArr)
descriptionsList.forEach(el => el.style.height = `${heightMax}px`)