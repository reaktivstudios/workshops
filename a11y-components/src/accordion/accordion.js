document.addEventListener( 'DOMContentLoaded', () => {
	const accordionTriggers = document.querySelectorAll('.accordion-trigger');

	/**
	 * Toggle panels associated with a given button.
	 * 
	 * @param {Element} button Button to toggle panel for.
	 */
	const togglePanel = button => {
		const panel   = document.getElementById( button.getAttribute( 'aria-controls' ) );
		const visible = button.getAttribute( 'aria-expanded' ) === 'true';

		button.setAttribute( 'aria-expanded', ( ! visible ).toString() );
		panel.setAttribute( 'aria-hidden', visible.toString() );
	}

	/**
	 * Callback for button click event.
	 * 
	 * @param {Event} e The event
	 */
	const buttonClick = e => {
		e.preventDefault();

		// @ts-ignore
		togglePanel(e.target);
	}
	
	for ( let i = 0; i < accordionTriggers.length; i++ ) {
		accordionTriggers[i].addEventListener( 'click', buttonClick );
	}
} );
