/* Navbar mobile */
const hamburger = document.querySelector('.navbar__hamburger');
const mobileMenu = document.querySelector('.navbar__menu');
const links = document.querySelectorAll('.navbar__menu li a');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobileMenu.classList.toggle('active');
});

links.forEach((link) =>
	link.addEventListener('click', () => {
		hamburger.classList.remove('active');
		mobileMenu.classList.remove('active');
	})
);