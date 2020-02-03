(() => {
	if (document) {
		const menu = document.querySelector('.js-toggle-menu');

		menu.addEventListener('click', () => {
			document.body.classList.toggle('mobile-menu-active');
		});
	}
})();
