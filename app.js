const primaryNav = document.querySelector('.primary-navigation')
const navToggle = document.querySelector('.mobile-nav-toogle')

navToggle-addEventListener('click', () => {
    console.log("navToggle is clicked")
    const navVisible = primaryNav.getAttribute('data-visible')
    if(navVisible === "false"){
        primaryNav.setAttribute('data-visible', true);
        navToggle.setAttribute('aria-expanded', true);
    }
    else{
        primaryNav.setAttribute('data-visible', false);
        navToggle.setAttribute('aria-expanded', false);
    }
})