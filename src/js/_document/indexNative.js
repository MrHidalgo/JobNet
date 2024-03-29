/**
 * @description Document DOM ready.
 */
(function () {
	/*
	* =============================================
	* CALLBACK :: start
	* ============================================= */
	const mainHeightSize = () => {
		const _main = $('#main'),
			_mainScroll = $('#main .main__scroll');

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

			_mainScroll.css({height: 'calc(100vh - (' + (_otherHeightContent) + 'px))'});

			$('#main .main__box-wrapper-1').css({height: _wrapper1Height});
			$('#main .main__box-wrapper-2').css({height: _wrapper2Height});
			$('#main .main__box-wrapper-3').css({height: _wrapper3Height});
		}

		if($(window).width() > 767) {
			$(window).on('load', () => {
				setTimeout((ev) => {
					_helperResize();

					_main.animate({
						opacity: 1
					}, 750);
				}, 200);

				$('#exhibitors, #jobs, #chat').removeClass('hidden');
			});
		} else {
			_main.animate({
				opacity: 1
			}, 750);

			$('#exhibitors, #jobs, #chat').removeClass('hidden');
		}

		$(window).on('resize', (ev) => {
			if($(window).width() > 767) {
				_helperResize();

				_main.animate({
					opacity: 1
				}, 750);
			} else {
				_main.attr('style', '');
				_mainScroll.attr('style', '');

				$('#main .main__box-wrapper-1').attr('style', '');
				$('#main .main__box-wrapper-2').attr('style', '');
				$('#main .main__box-wrapper-3').attr('style', '');
			}
		});
	};


	const perfectScrollbarCB = () => {
		if(document.getElementById('mainScroll-js')) {
			const ps = new PerfectScrollbar('#mainScroll-js', {
				wheelSpeed: 1,
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
			$('html, body').addClass('is-hideScroll');

			$('.header__link').removeClass('is-active');
			$(ev.currentTarget).addClass('is-active');

			$('#exhibitors').addClass('is-open');
			$('#overlay').addClass('is-show');

			$('#jobs').removeClass('is-open is-chat');
			$('#chat, #seminar').removeClass('is-open');

			if($('[hamburger-js]').hasClass('is-active')) {
				$('[hamburger-js]').removeClass('is-active');
				$('[mobile-block-js]').removeClass('is-open');
			}
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


	const seminarSection = () => {
		function _helperClose() {
			$('[seminars-btn-js]').removeClass('is-active');
			$('html, body').removeClass('is-hideScroll');
			$('#seminar').removeClass('is-open');
			$('#overlay').removeClass('is-show');
		}

		$('[seminars-btn-js]').on('click', (ev) => {
			$('html, body').addClass('is-hideScroll');

			$('.header__link').removeClass('is-active');
			$(ev.currentTarget).addClass('is-active');

			$('#seminar').addClass('is-open');
			$('#overlay').addClass('is-show');

			$('#jobs').removeClass('is-open is-chat');
			$('#chat, #exhibitors').removeClass('is-open');

			if($('[hamburger-js]').hasClass('is-active')) {
				$('[hamburger-js]').removeClass('is-active');
				$('[mobile-block-js]').removeClass('is-open');
			}
		});

		$('[seminars-close-js]').on('click', (ev) => {
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
			$('html, body').addClass('is-hideScroll');

			$('.header__link').removeClass('is-active');
			$(ev.currentTarget).addClass('is-active');

			$('#jobs').addClass('is-open');
			$('#overlay').addClass('is-show');

			$('#exhibitors, #chat, #seminar').removeClass('is-open');

			if($('[hamburger-js]').hasClass('is-active')) {
				$('[hamburger-js]').removeClass('is-active');
				$('[mobile-block-js]').removeClass('is-open');
			}
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


	const messageSection = () => {
		$('[message-btn-js]').on('click', (ev) => {
			$('html, body').addClass('is-hideScroll');

			$('.header__link').removeClass('is-active');
			$(ev.currentTarget).addClass('is-active');

			$('#chat').addClass('is-open');
			$('#overlay').addClass('is-show');

			$('#exhibitors, #jobs, #seminar').removeClass('is-open');

			if($('[hamburger-js]').hasClass('is-active')) {
				$('[hamburger-js]').removeClass('is-active');
				$('[mobile-block-js]').removeClass('is-open');
			}
		});
	};


	const vacanciesCollapse = () => {
		$('[vacancies-head-js]').on('click', (ev) => {
			ev.preventDefault();
			$(ev.currentTarget).siblings('[vacancies-body-js]').slideToggle(350).css({display: 'flex'});
		});
	};


	const parallaxBG = () => {
		$('#mainBg').css({
			backgroundPositionX: ($('#mainScroll-js').find('.main__box')[0].getBoundingClientRect().left * 0.125)
		});

		$('#mainScroll-js').scroll((ev) => {
			const _offset = $(ev.currentTarget).find('.main__box')[0].getBoundingClientRect().left;

			$('#mainBg').css({
				backgroundPositionX: (_offset * 0.125)
			});
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
		initSwiper();
		// ==========================================

		// callback
		mainHeightSize();
		perfectScrollbarCB();
		detailsToggle();
		exhibitorsSection();
		seminarSection();
		jobsSection();
		messageSection();
		vacanciesCollapse();
		parallaxBG();
		// ==========================================
	};
	initNative();
})();
