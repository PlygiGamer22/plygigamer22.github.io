document.addEventListener('DOMContentLoaded', function() {
	const loader = document.getElementById('loader');
	const hasVisited = localStorage.getItem('hasVisited');

	if (!hasVisited) {

		localStorage.setItem('hasVisited', 'true');
		setTimeout(() => {
			loader.style.opacity = '0';
			setTimeout(() => {
				loader.style.display = 'none';
			}, 500);
		}, 2000);
	} else {

		loader.style.display = 'none';
	}
});
