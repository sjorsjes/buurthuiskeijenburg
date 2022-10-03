const menu = document.querySelector('.js-toggle-menu');

console.log(menu);

menu.addEventListener('click', () => {
	document.body.classList.toggle('mobile-menu-active');
});