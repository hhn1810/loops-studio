// Menu
const toogleMenu = document.querySelector('#toogle-menu'),
      closeMenu = document.querySelector('#close-menu'),
      nav = document.querySelector('nav')
if(toogleMenu){
  toogleMenu.addEventListener('click',()=>{
    nav.classList.add('active')
  })
}
if(closeMenu){
  closeMenu.addEventListener('click',()=>{
    nav.classList.remove('active')
  })
}
