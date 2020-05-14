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

		if(!_main) {
			return false;
		}

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
		if(document.getElementById('mainScroll-js')) {
			const ps = new PerfectScrollbar('#mainScroll-js', {
				wheelSpeed: 2,
				wheelPropagation: true
			});
		}
	};


	const detailsToggle = () => {
		$('[details-link-js]').on('click', (ev) => {
			$('[details-link-js]').removeClass('is-active');
			$(ev.currentTarget).addClass('is-active');
		});
	};


	const exhibitorsSection = () => {
		function _helperClose() {
			$('[exhibitors-btn-js]').removeClass('is-active');
			$('html, body').removeClass('is-hideScroll');
			$('#exhibitors').removeClass('is-open');
			$('#overlay').removeClass('is-show');
		}

		$('[exhibitors-btn-js]').on('click', (ev) => {
			$(ev.currentTarget).addClass('is-active');
			$('html, body').addClass('is-hideScroll');
			$('#exhibitors').addClass('is-open');
			$('#overlay').addClass('is-show');
		});

		$('[exhibitors-close-js]').on('click', (ev) => {
			_helperClose();
		});

		$('#overlay').on('click', function (e) {
			_helperClose();
		});

		$(document).on('keyup', function(e){
			if (e.keyCode === 27) {
				_helperClose();
			}
		});

		$('.exhibitors__box').hover(
			(ev) => {$(ev.currentTarget).find('.exhibitors__box-btn-wrapper').stop(true).slideDown(350);},
			(ev) => {$(ev.currentTarget).find('.exhibitors__box-btn-wrapper').stop(true).slideUp(350);}
		);
	};


	const jobsSection = () => {
		function _helperClose() {
			$('html, body').removeClass('is-hideScroll');
			$('#jobs, #chat').removeClass('is-open is-chat');
			$('#overlay').removeClass('is-show');

			$('[jobs-btn-js]').removeClass('is-active');
		}
		function _helperCloseChat() {
			$('#jobs').removeClass('is-chat');
			$('#chat').removeClass('is-open');
		}

		$('[jobs-btn-js]').on('click', (ev) => {
			$(ev.currentTarget).addClass('is-active');
			$('html, body').addClass('is-hideScroll');
			$('#jobs').addClass('is-open');
			$('#overlay').addClass('is-show');
		});

		$('[jobs-card-js]').on('click', (ev) => {
			$('#jobs').addClass('is-chat');
			$('#chat').addClass('is-open');
		});

		$('[chat-close-js]').on('click', (ev) => {
			_helperCloseChat();
		});

		$('[chat-back-js]').on('click', (ev) => {
			_helperCloseChat();
		});

		$('[jobs-close-js]').on('click', (ev) => {
			_helperClose();
		});

		$('#overlay').on('click', function (e) {
			_helperClose();
		});

		$(document).on('keyup', function(e){
			if (e.keyCode === 27) {
				_helperClose();
			}
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
		detailsToggle();
		exhibitorsSection();
		jobsSection();
		// ==========================================
	};
	initNative();
})();
