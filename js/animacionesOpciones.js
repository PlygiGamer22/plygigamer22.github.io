document.addEventListener('DOMContentLoaded', () => {
	const main = document.querySelector('main');
	main.style.opacity = '0';
	main.style.transform = 'translateY(20px)';
	main.style.transition = 'opacity 0.5s, transform 0.5s';

	setTimeout(() => {
		main.style.opacity = '1';
		main.style.transform = 'translateY(0)';
	}, 300);
});
