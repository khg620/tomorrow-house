const myMenu = document.querySelector('.my-menu')
const myMenuButton = document.querySelector('.my-menu-button')

function closeMyMenuOnClickingOutside(e) {
  console.log('window!')
  //1. 내가 클릭한 요소가 무엇이지? => e.target
  //2. myMenu가 요소를 포함하고 잇는지 알 수 있는 방법 => contains
  // myMenu가 e.target을 포함하고 있지 않은 경우 -> myMenu is-active 제거
  if (!myMenu.contains(e.target)) {
    myMenu.classList.remove('is-active')
    // ★ 필요한 시점에 이벤트 심기
    window.removeEventListener('click', closeMyMenuOnClickingOutside)
  }
}

function toggleMymenu() {
  if (!myMenu.classList.contains('is-active')) {
    // ★ 필요한 시점에 이벤트 심기
    window.addEventListener('click', closeMyMenuOnClickingOutside)
  }
  myMenu.classList.toggle('is-active')
}

myMenuButton.addEventListener('click', toggleMymenu)
