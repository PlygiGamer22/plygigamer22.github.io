document.addEventListener('DOMContentLoaded', function(){
	const btnSi = document.getElementById('btn-si');
	const btnNo = document.getElementById('btn-no');
	const result = document.getElementById('result');
	let noCount = 0;

	btnNo.addEventListener('click', function(){
		noCount += 1;
		if(noCount <= 3){
			const scale = 1 + 0.14 * noCount;
			btnSi.style.transform = `scale(${scale})`;
			btnSi.style.transition = 'transform .18s ease';
			btnSi.style.boxShadow = '0 12px 28px rgba(255,107,129,0.22)';
		} else {
			// Después del tercer click, el botón "no" se mueve aleatoriamente cada vez
			const parent = btnNo.parentElement;
			const parentRect = parent.getBoundingClientRect();
			// ampliar rango: usar tanto el ancho del contenedor como una fracción del viewport
			const viewportFactor = Math.max(window.innerWidth * 0.6, parentRect.width * 1.2);
			const rangeX = Math.max(parentRect.width * 1.6, viewportFactor);
			let x = (Math.random() * rangeX) - (rangeX / 2);
			let y = (Math.random() * 120 - 60); // más movimiento vertical

			// Evitar que el botón salga del área de la tarjeta (.card)
			const btnRect = btnNo.getBoundingClientRect();
			const card = document.querySelector('.card');
			const cardRect = card.getBoundingClientRect();
			const margin = 8; // margen desde los bordes de la tarjeta
			// límites relativos a la tarjeta
			const leftLimit = cardRect.left + margin;
			const rightLimit = cardRect.right - btnRect.width - margin;
			const topLimit = cardRect.top + margin;
			const bottomLimit = cardRect.bottom - btnRect.height - margin;

			const targetLeft = btnRect.left + x;
			const targetTop = btnRect.top + y;

			if (targetLeft < leftLimit) x += leftLimit - targetLeft;
			if (targetLeft > rightLimit) x -= targetLeft - rightLimit;
			if (targetTop < topLimit) y += topLimit - targetTop;
			if (targetTop > bottomLimit) y -= targetTop - bottomLimit;

			btnNo.style.transform = `translate(${x}px, ${y}px)`;
			btnNo.style.transition = 'transform .22s cubic-bezier(.2,.9,.3,1)';
		}
	});

	btnSi.addEventListener('click', function(){
		// Mostrar mensaje y gatito amoroso con botón "Leer Carta"
		const main = document.querySelector('main');
		main.innerHTML = '';
		const wrap = document.createElement('div');
		wrap.className = 'result';
		wrap.innerHTML = `
			<h2>Felicidades — serás mi San Valentín ❤️</h2>
			<img class="kitten" src="https://cdn.pixabay.com/photo/2022/03/09/14/11/cat-7057971_1280.png" alt="Gatito amoroso">
			<div style="margin-top:12px;">
				<button id="leer-carta" class="btn btn-si leer-btn">Leer Carta</button>
			</div>
		`;
		main.appendChild(wrap);

		// Listener para abrir la sección de la carta
		setTimeout(() => {
			const btnLeer = document.getElementById('leer-carta');
			if (!btnLeer) return;
			btnLeer.addEventListener('click', function(){
				main.innerHTML = '';
				const card = document.createElement('div');
				card.className = 'result';
				card.innerHTML = `
					<h2>Aqui tienes tu carta</h2>
					<div class="carta-contenido">
						<p>Angelyt,</p>
						<p>Es raro para mi escribir una carta de esta manera, pero, no importa el medio ¿verdad? lo que importa es el sentimiento, lo hago con el mismo amor con el que lo haría normalmente. Con esta carta quiero primero agradecerte por estar en mi vida, por permitirme conocerte cada dia mas y enseñarme a amarte, aunque todo esto es nuevo para mi estoy dispuesto a seguir aprendiendo contigo. Te amo con todo mi corazón, eres mi princesa hermosa y espero cada dia poder hacerte más feliz.</p>
                        <br>
                        <p>Le doy gracias a Dios por permitirme conocer a una persona tan maravillosa como tú, por tu sonrisa que me alegra el día, por tu mirada que me enamora cada vez más, por tu voz que me calma y me hace sentir en paz, por tu corazón que es tan puro y lleno de amor. Eres un regalo del cielo y cada día doy gracias por tenerte a mi lado. Te amo montones muasss.</p>
						<p>Con cariño, Tu bofe </p>
					</div>
					<div style="margin-top:12px;">
						<button id="volver" class="btn btn-no">Volver</button>
					</div>
				`;
				main.appendChild(card);
				// Volver a la pantalla de felicitaciones
				document.getElementById('volver').addEventListener('click', function(){
					btnSi.click();
				});
			});
		}, 50);
	});

});