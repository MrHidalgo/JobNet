/**
 * @description Document DOM ready.
 */
(function () {
	/*
	* =============================================
	* CALLBACK :: start
	* ============================================= */

	/*
	* CALLBACK :: end
	* ============================================= */


	/**
	 * @name initNative
	 *
	 * @description Init all method
	 */
	const initNative = () => {
		// default
		initPreventBehavior();
		// ==========================================

		// lib
		initHamburger();
		initHeaderFixed();
		initPopups();
		initSmoothScroll();
		initStellar();
		initSwiper();
		// ==========================================

		// callback
		// ==========================================
	};
	initNative();
})();
