const navItems = document.querySelector('.nav-mobile-items');
const navToggle = document.querySelector('.nav-mobile-toggle');

navToggle.addEventListener('click', () => {
    const visibility = navItems.getAttribute('data-visible');
    if (visibility == 'false') {
        navItems.setAttribute('data-visible', 'true')
        navToggle.setAttribute('aria-expanded', 'true')
    } else {
        navItems.setAttribute('data-visible', 'false')
        navToggle.setAttribute('aria-expanded', 'false')
    }
});