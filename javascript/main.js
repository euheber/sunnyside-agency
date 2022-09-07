const mobileBtn = document.querySelector('#mobile-btn')
const mobileMenu = document.querySelector('.mobile-menu')


function handleMobileMenu(){
    mobileMenu.classList.toggle('active')
}

mobileBtn.addEventListener('click', handleMobileMenu)