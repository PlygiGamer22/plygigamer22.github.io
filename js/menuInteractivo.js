document.addEventListener('DOMContentLoaded', () => {
	const navLinks = document.querySelectorAll('nav a');
	const currentPath = window.location.pathname;

	navLinks.forEach(link => {
		if (link.getAttribute('href') === currentPath.split('/').pop()) {
			link.classList.add('active');
		}
	});
});
