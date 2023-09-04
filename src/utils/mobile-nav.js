const mobileNav = ()=>{

    const headerBtn = document.querySelector('.header__bars');
    const mobileNav = document.querySelector('.mobile-nav');
    const mobileLinks = document.querySelectorAll('mobile-nav__link');
    const headerBtns = document.querySelector('.headerBtns ')
    // const close = document.querySelector('.header__close')


    //state
    let isMobileNavOpen = false;
    
    
    headerBtn.addEventListener('click', ()=>{
        isMobileNavOpen = !isMobileNavOpen
        if(isMobileNavOpen){

            mobileNav.style.display = 'flex';
            // close.style.display = 'flex';
            headerBtn.style.display = 'flex';
            headerBtns.style.display = "none"

            document.body.style.overflow = 'hidden';

        }else{
            mobileNav.style.display = 'none';
            close.style.display = 'none';
            document.body.style.overflow = 'auto';
            headerBtns.style.display = "flex"
        }
    })

    mobileLinks.forEach(link=>{
        link.addEventListener('click', ()=>{
            isMobileNavOpen = false;
            mobileNav.style.display = 'none';
            document.body.style.overflowY = 'auto';
        })

    })
}
export default mobileNav;