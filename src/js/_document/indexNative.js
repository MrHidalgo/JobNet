/**
 * @description Document DOM ready.
 */
(function () {
	/*
	* =============================================
	* CALLBACK :: start
	* ============================================= */
	const mainHeightSize = () => {
		const _main = $('#main .main__scroll');

		function _helperResize() {
			const _headerHeight = $("header").outerHeight(true),
				_footerHeight = $('footer').outerHeight(true),
				_advertisingHeight = $('#advertising').outerHeight(true);

			let _windowHeight = $(window).outerHeight(true),
				_otherHeightContent = _headerHeight + _footerHeight + _advertisingHeight,
				_maxHeight = _windowHeight - _otherHeightContent,
				_wrapper1Height = (_maxHeight * 25) / 100,
				_wrapper2Height = (_maxHeight * 30) / 100,
				_wrapper3Height = _maxHeight - (_wrapper1Height + _wrapper2Height);

			_main.css({height: 'calc(100vh - (' + (_otherHeightContent) + 'px))'});

			$('#main .main__box-wrapper-1').css({height: _wrapper1Height});
			$('#main .main__box-wrapper-2').css({height: _wrapper2Height});
			$('#main .main__box-wrapper-3').css({height: _wrapper3Height});
		}

		$(window).on('load', () => {
			setTimeout((ev) => {
				_helperResize();

				_main.animate({
					opacity: 1
				}, 750);
			}, 200);
		});

		$(window).on('resize', (ev) => {
			_helperResize();
		});
	};


	const perfectScrollbarCB = () => {
		const ps = new PerfectScrollbar('#mainScroll-js', {
			wheelSpeed: 2,
			wheelPropagation: true
		});
	};
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
		mainHeightSize();
		perfectScrollbarCB();
		// ==========================================
	};
	initNative();
})();
