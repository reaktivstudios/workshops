/**
 * @type keyup = {
 * 	int which, int keyCode, Element target
 * }
 */
document.addEventListener( 'DOMContentLoaded', () => {
	/**
	 * Toggle panels associated with a given button.
	 * 
	 * @param {Element} button Button to toggle panel for.
	 * @param {boolean} visible  Indicates the panel should be visible.
	 */
	const togglePanel = ( button, visible = false ) =>  {
		const panel = document.getElementById( button.getAttribute( 'aria-controls' ) );

		button.setAttribute( 'aria-expanded', visible .toString() );
		panel.setAttribute( 'aria-hidden', ( ! visible ).toString() );
	}

	/**
	 * Loops all the siblings and hides them before showing current.
	 * 
	 * @param {Element} button Button to toggle panel for.
	 */
	const processButtons = button => {
		const visible = button.getAttribute( 'aria-expanded' ) === 'true';

		if ( visible ) {
			return;
		}

		let nextButton = button.nextElementSibling || false;
		let prevButton = button.previousElementSibling || false;

		while ( nextButton ) {
			togglePanel( nextButton );
			nextButton = nextButton.nextElementSibling || false;
		}

		while ( prevButton ) {
			togglePanel( prevButton );
			prevButton = prevButton.previousElementSibling || false;
		}

		togglePanel( button, true );
	}

	/**
	 * Callback for button click event.
	 * 
	 * @param {Event} e The event
	 */
	const buttonClick = e => {
		e.preventDefault();

		// @ts-ignore
		processButtons( e.target );
		
	}

	/**
	 * Mousedown Event
	 * 
	 * @event document#keyup
	 * @type {object}
	 * @property {element} target
	 * @property {number} which
	 * @property {number} keyCode
	 */
	const keyup = e => {
		const code   = e.key || e.which || e.keyCode;
		const row    = e.target;
		const button = row.querySelector( '[aria-expanded="true"]' );

		if ( ! row.classList.contains( 'tabs-row' ) ) {
			return;
		}

		if ( [ 'ArrowLeft', 'ArrowRight', '37', '39' ].includes( code ) ) {
			e.preventDefault();

			switch ( code ) {
				case 'ArrowLeft':
				case '37':
					const prevButton = button.previousElementSibling;
					if ( prevButton ) {
						processButtons( prevButton );
					}
					break;
				case 'ArrowRight':
				case '39':
					const nextButton = button.nextElementSibling;
					if ( nextButton ) {
						processButtons( nextButton );
					}
					break;
			}
		}
	}
	
	const tabTriggers = document.querySelectorAll('.tab-trigger');
	const tabGroup    = document.querySelectorAll('.tabs-row');

	for ( let i = 0; i < tabTriggers.length; i++ ) {
		tabTriggers[i].addEventListener( 'click', buttonClick );
	}

	for ( let j = 0; j < tabGroup.length; j++ ) {
		tabGroup[j].addEventListener( 'keyup', keyup );
	}
} );
