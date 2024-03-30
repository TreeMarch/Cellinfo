const activePage = window.location.pathname;
const navLinkEls = document.querySelectorAll(".navLinks a");

navLinkEls.forEach(link => {
    console.log(link.href);
});
