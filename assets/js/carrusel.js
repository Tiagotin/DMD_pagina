//--------------------------------------------------Carrusel

	// Access the Images
	let slideImages = document.querySelectorAll('.content');
	// Access the next and prev buttons
	let next = document.querySelector('.next');
	let prev = document.querySelector('.prev');
	// Access the indicators
	let dots = document.querySelectorAll('.dot');

	var counter = 0;
	var autoSlideInterval;
	const delayDuration = 500; // Duración del retraso en milisegundos

	// Code for next button
	next.addEventListener('click', function() {
		if (!next.disabled) {
			next.disabled = true; // Desactiva el botón
			setTimeout(function() {
				slideNext();
				next.disabled = false; // Reactiva el botón después del retraso
			}, delayDuration);
		}
	});

	// Code for prev button
	prev.addEventListener('click', function() {
		if (!prev.disabled) {
			prev.disabled = true; // Desactiva el botón
			setTimeout(function() {
				slidePrev();
				prev.disabled = false; // Reactiva el botón después del retraso
			}, delayDuration);
		}
	});

	function slideNext(){
		slideImages[counter].style.animation = 'next1 0.5s ease-in forwards';
		if(counter >= slideImages.length - 1){
			counter = 0;
		} else {
			counter++;
		}
		slideImages[counter].style.animation = 'next2 0.5s ease-in forwards';
		indicators();
	}

	function slidePrev(){
		slideImages[counter].style.animation = 'prev1 0.5s ease-in forwards';
		if(counter == 0){
			counter = slideImages.length - 1;
		} else {
			counter--;
		}
		slideImages[counter].style.animation = 'prev2 0.5s ease-in forwards';
		indicators();
	}

	// Auto sliding
	function startAutoSliding(){
		autoSlideInterval = setInterval(function(){
			slideNext();
			indicators();
		}, 6000); // Cambia la imagen cada 6 segundos
	}
	startAutoSliding();

	// Stop auto sliding when mouse is over the container or buttons
	function stopAutoSliding() {
		clearInterval(autoSlideInterval);
	}

	// Resume auto sliding
	function resumeAutoSliding() {
		startAutoSliding();
	}

	const container = document.querySelector('.slides');
	container.addEventListener('mouseover', stopAutoSliding);
	container.addEventListener('mouseout', resumeAutoSliding);

	next.addEventListener('mouseover', stopAutoSliding);
	next.addEventListener('mouseout', resumeAutoSliding);

	prev.addEventListener('mouseover', stopAutoSliding);
	prev.addEventListener('mouseout', resumeAutoSliding);

	// Add and remove active class from the indicators
	function indicators(){
		for(let i = 0; i < dots.length; i++){
			dots[i].className = dots[i].className.replace(' active', '');
		}
		dots[counter].className += ' active';
	}

	// Add click event to the indicator
	function switchImage(currentImage){
		currentImage.classList.add('active');
		var imageId = parseInt(currentImage.getAttribute('attr'));
		if(imageId > counter){
			slideImages[counter].style.animation = 'next1 0.5s ease-in forwards';
			counter = imageId;
			slideImages[counter].style.animation = 'next2 0.5s ease-in forwards';
		} else if(imageId == counter){
			return;
		} else {
			slideImages[counter].style.animation = 'prev1 0.5s ease-in forwards';
			counter = imageId;
			slideImages[counter].style.animation = 'prev2 0.5s ease-in forwards';	
		}
		indicators();
	}
