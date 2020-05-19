

/**
 * @name initHamburger
 *
 * @description Init hamburger logic with animated
 */
const initHamburger = () => {

  const btn = document.querySelector("[hamburger-js]"),
    hideScrollContainer = document.querySelectorAll("html, body"),
    mobileContainer = document.querySelector("[mobile-block-js]");

	/**
   * @description
	 */
	if(btn) {
		btn.addEventListener("click", (ev) => {
			const elem = ev.currentTarget;

			elem.classList.toggle("is-active");
			mobileContainer.classList.toggle("is-open");

			hideScrollContainer.forEach((val, idx) => {
				val.classList.toggle("is-hideScroll");
			});

			if($(window).width() > 767) {
				$('#overlay').toggleClass('is-show');
			}
		});

		$('[close-menu-js]').on('click', (ev) => {
			$('[hamburger-js]').removeClass('is-active');
			$('[mobile-block-js]').removeClass('is-open');
			$('html, body').removeClass('is-hideScroll');
		});
	}

};
