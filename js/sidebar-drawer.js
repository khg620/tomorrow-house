// const drawerMenu = document.querySelectorAll('.drawer-menu')

// function openDrawerMenu(e) {
//   e.target.parentElement.classList.toggle('is-open')
//   e.target.parentElement.classList.toggle('is-active')
// }

// for (var i = 0; i < drawerMenu.length; i++) {
//   drawerMenu[i].addEventListener('click', openDrawerMenu)
// }

const drawerMenuButtonList = document.querySelectorAll(
  '.sidebar-nav .drawer-menu-button'
)

function toggleDrawerMenu() {
  const drawerMenu = this.parentNode
  drawerMenu.classList.toggle('is-open')
  drawerMenu.classList.toggle('is-active')
}

drawerMenuButtonList.forEach(function (item) {
  item.addEventListener('click', toggleDrawerMenu)
})
