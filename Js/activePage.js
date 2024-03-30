const activePage = window.location.pathname;
const navLinkEls = document.querySelectorAll(".navLinks a");

navLinkEls.forEach(link => {
    if (link.getAttribute('href') === activePage) {
        link.classList.add('active');
    }
});
