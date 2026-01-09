// Trigger CSS Animations when elements are scrolled into view

// This JS uses the Intersection Observer API to determine if objects are within the viewport
// It addes an 'in-view' class to elements when they come into view (and removes the class when not on screen)
// Use to add @keyframe or transition animations to elements so they animate once they are on screen

//TO USE
// Simply add the .animate class to those HTML elements that you wish to animate. For example, <h1 class="animate">
// Once in the viewport, the JS will add the 'in-view' class to those elements. For example, <h1 class="animate in-view">
// Define your CSS to enable animations once that element is in view. For example, h1.in-view { }

//Check if the document is loaded (so that this script can be placed in the <head>)
document.addEventListener("DOMContentLoaded", () => {

	// --- DODATEK: WYMUSZENIE STARTU OD GÓRY ---
	// Mówimy przegl¹darce: "nie przywracaj pozycji suwaka, ja siê tym zajmê"
	if ('scrollRestoration' in history) {
		history.scrollRestoration = 'manual';
	}
	// Sprawdzamy, czy w URL jest hash (np. #roads)
	if (window.location.hash) {
		// Szukamy elementu o tym ID
		const target = document.querySelector(window.location.hash);
		if (target) {
			// Jeœli element istnieje, przewijamy do niego
			target.scrollIntoView();
		}
	} else {
		// Jeœli NIE MA hasha, przewijamy na sam¹ górê
		window.scrollTo(0, 0);
	}
    // ------------------------------------------

	// Use Intersection Observer to determine if objects are within the viewport
	const observer = new IntersectionObserver(entries => {
	  entries.forEach(entry => {
		if (entry.isIntersecting) {
		  entry.target.classList.add('in-view');
		  return;
		}
		//entry.target.classList.remove('in-view');
	  });
	});

	// Get all the elements with the .animate class applied
	const allAnimatedElements = document.querySelectorAll('.animate');

	// Add the observer to each of those elements
	allAnimatedElements.forEach((element) => observer.observe(element));

}); 