"use strict";

/*
*
* ============================
* ============================
*
* Include lib:
*
* - webFontLoader.js;
* - preventBehavior.js;
* - svg4everybody.js;
*
* ============================
* ============================
* */

/**
 * @name initHamburger
 *
 * @description Init hamburger logic with animated
 */
var initHamburger = function initHamburger() {

	var btn = document.querySelector("[hamburger-js]"),
	    hideScrollContainer = document.querySelectorAll("html, body"),
	    mobileContainer = document.querySelector("[mobile-block-js]");

	/**
   * @description
  */
	if (btn) {
		btn.addEventListener("click", function (ev) {
			var elem = ev.currentTarget;

			elem.classList.toggle("is-active");
			mobileContainer.classList.toggle("is-open");

			hideScrollContainer.forEach(function (val, idx) {
				val.classList.toggle("is-hideScroll");
			});

			if ($(window).width() > 767) {
				$('#overlay').toggleClass('is-show');
			}
		});

		$('[close-menu-js]').on('click', function (ev) {
			$('[hamburger-js]').removeClass('is-active');
			$('[mobile-block-js]').removeClass('is-open');
			$('html, body').removeClass('is-hideScroll');
		});
	}
};

/**
 * @name initHeaderFixed
 *
 * @description Fixing the site header in the scrolling page.
 */
var initHeaderFixed = function initHeaderFixed() {

	var countScroll = $(window).scrollTop(),
	    headerElement = $('.header');

	if (countScroll > 10) {
		headerElement.addClass("header--fixed");
	} else {
		headerElement.removeClass("header--fixed");
	}
};

/**
 * @name initPopups
 *
 * @description
 */
var initPopups = function initPopups() {

	$('[popup-js]').magnificPopup({
		type: 'inline',
		fixedContentPos: true,
		fixedBgPos: true,
		overflowY: 'auto',
		closeBtnInside: true,
		preloader: false,
		midClick: true,
		removalDelay: 300,
		mainClass: 'is-show',
		callbacks: {
			beforeOpen: function beforeOpen() {
				this.st.mainClass = this.st.el.attr('data-effect');
			},
			open: function open() {
				gallerySlider = new Swiper('.gallerySlider', gallerySliderOpt);
				videoSlider = new Swiper('.videoSlider', videoSliderOpt);
				testimonialsSlider = new Swiper('.testimonialsSlider', testimonialsSliderOpt);
			},
			close: function close() {}
		}
	});
};

/**
 * @name initPreventBehavior
 *
 * @description
 */
var initPreventBehavior = function initPreventBehavior() {

	var link = document.querySelectorAll("a");

	link.forEach(function (val, idx) {

		val.addEventListener("click", function (e) {
			if (val.getAttribute("href") === "#") {
				e.preventDefault();
			}
		});
	});
};

/**
 * @name initSmoothScroll
 *
 * @description Smooth transition to anchors to the block.
 */
var initSmoothScroll = function initSmoothScroll() {
	var btnName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "[anchor-js]";
	var animateSpeed = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1000;


	$(btnName).on("click", function (e) {

		var linkHref = $(e.currentTarget).attr('href'),
		    headerHeight = $(".header").outerHeight() || 0,
		    topHeightOffset = $(linkHref).offset().top - headerHeight;

		$('body, html').animate({
			scrollTop: topHeightOffset
		}, animateSpeed);
	});
};

var gallerySliderOpt = {},
    gallerySlider = null,
    videoSliderOpt = {},
    videoSlider = null,
    testimonialsSliderOpt = {},
    testimonialsSlider = null;

var initSwiper = function initSwiper() {

	gallerySliderOpt = {
		loop: false,
		grabCursor: true,
		effect: 'slide',
		speed: 750,
		slidesPerView: 1,
		spaceBetween: 30,
		navigation: {
			nextEl: '#galleryModal .c-modal__btn--next',
			prevEl: '#galleryModal .c-modal__btn--prev'
		}
	};

	videoSliderOpt = {
		loop: false,
		grabCursor: true,
		effect: 'slide',
		speed: 750,
		slidesPerView: 1,
		spaceBetween: 30,
		navigation: {
			nextEl: '#videoModal .c-modal__btn--next',
			prevEl: '#videoModal .c-modal__btn--prev'
		}
	};

	testimonialsSliderOpt = {
		loop: false,
		grabCursor: true,
		effect: 'slide',
		speed: 750,
		slidesPerView: 1,
		spaceBetween: 30,
		navigation: {
			nextEl: '#testimonialsModal .c-modal__btn--next',
			prevEl: '#testimonialsModal .c-modal__btn--prev'
		}
	};
};

/**
 * @description Document DOM ready.
 */
(function () {
	/*
 * =============================================
 * CALLBACK :: start
 * ============================================= */
	var mainHeightSize = function mainHeightSize() {
		var _main = $('#main'),
		    _mainScroll = $('#main .main__scroll');

		if (!_main) {
			return false;
		}

		function _helperResize() {
			var _headerHeight = $("header").outerHeight(true),
			    _footerHeight = $('footer').outerHeight(true),
			    _advertisingHeight = $('#advertising').outerHeight(true);

			var _windowHeight = $(window).outerHeight(true),
			    _otherHeightContent = _headerHeight + _footerHeight + _advertisingHeight,
			    _maxHeight = _windowHeight - _otherHeightContent,
			    _wrapper1Height = _maxHeight * 25 / 100,
			    _wrapper2Height = _maxHeight * 30 / 100,
			    _wrapper3Height = _maxHeight - (_wrapper1Height + _wrapper2Height);

			_mainScroll.css({ height: 'calc(100vh - (' + _otherHeightContent + 'px))' });

			$('#main .main__box-wrapper-1').css({ height: _wrapper1Height });
			$('#main .main__box-wrapper-2').css({ height: _wrapper2Height });
			$('#main .main__box-wrapper-3').css({ height: _wrapper3Height });
		}

		if ($(window).width() > 767) {
			$(window).on('load', function () {
				setTimeout(function (ev) {
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

		$(window).on('resize', function (ev) {
			if ($(window).width() > 767) {
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

	var perfectScrollbarCB = function perfectScrollbarCB() {
		if (document.getElementById('mainScroll-js')) {
			var ps = new PerfectScrollbar('#mainScroll-js', {
				wheelSpeed: 1,
				wheelPropagation: true
			});
		}
	};

	var detailsToggle = function detailsToggle() {
		$('[details-link-js]').on('click', function (ev) {
			$('[details-link-js]').removeClass('is-active');
			$(ev.currentTarget).addClass('is-active');
		});
	};

	var exhibitorsSection = function exhibitorsSection() {
		function _helperClose() {
			$('[exhibitors-btn-js]').removeClass('is-active');
			$('html, body').removeClass('is-hideScroll');
			$('#exhibitors').removeClass('is-open');
			$('#overlay').removeClass('is-show');
		}

		$('[exhibitors-btn-js]').on('click', function (ev) {
			$('html, body').addClass('is-hideScroll');

			$('.header__link').removeClass('is-active');
			$(ev.currentTarget).addClass('is-active');

			$('#exhibitors').addClass('is-open');
			$('#overlay').addClass('is-show');

			$('#jobs').removeClass('is-open is-chat');
			$('#chat, #seminar').removeClass('is-open');

			if ($('[hamburger-js]').hasClass('is-active')) {
				$('[hamburger-js]').removeClass('is-active');
				$('[mobile-block-js]').removeClass('is-open');
			}
		});

		$('[exhibitors-close-js]').on('click', function (ev) {
			_helperClose();
		});

		$('#overlay').on('click', function (e) {
			_helperClose();
		});

		$(document).on('keyup', function (e) {
			if (e.keyCode === 27) {
				_helperClose();
			}
		});

		$('.exhibitors__box').hover(function (ev) {
			$(ev.currentTarget).find('.exhibitors__box-btn-wrapper').stop(true).slideDown(350);
		}, function (ev) {
			$(ev.currentTarget).find('.exhibitors__box-btn-wrapper').stop(true).slideUp(350);
		});
	};

	var seminarSection = function seminarSection() {
		function _helperClose() {
			$('[seminars-btn-js]').removeClass('is-active');
			$('html, body').removeClass('is-hideScroll');
			$('#seminar').removeClass('is-open');
			$('#overlay').removeClass('is-show');
		}

		$('[seminars-btn-js]').on('click', function (ev) {
			$('html, body').addClass('is-hideScroll');

			$('.header__link').removeClass('is-active');
			$(ev.currentTarget).addClass('is-active');

			$('#seminar').addClass('is-open');
			$('#overlay').addClass('is-show');

			$('#jobs').removeClass('is-open is-chat');
			$('#chat, #exhibitors').removeClass('is-open');

			if ($('[hamburger-js]').hasClass('is-active')) {
				$('[hamburger-js]').removeClass('is-active');
				$('[mobile-block-js]').removeClass('is-open');
			}
		});

		$('[seminars-close-js]').on('click', function (ev) {
			_helperClose();
		});

		$('#overlay').on('click', function (e) {
			_helperClose();
		});

		$(document).on('keyup', function (e) {
			if (e.keyCode === 27) {
				_helperClose();
			}
		});
	};

	var jobsSection = function jobsSection() {
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

		$('[jobs-btn-js]').on('click', function (ev) {
			$('html, body').addClass('is-hideScroll');

			$('.header__link').removeClass('is-active');
			$(ev.currentTarget).addClass('is-active');

			$('#jobs').addClass('is-open');
			$('#overlay').addClass('is-show');

			$('#exhibitors, #chat, #seminar').removeClass('is-open');

			if ($('[hamburger-js]').hasClass('is-active')) {
				$('[hamburger-js]').removeClass('is-active');
				$('[mobile-block-js]').removeClass('is-open');
			}
		});

		$('[jobs-card-js]').on('click', function (ev) {
			$('#jobs').addClass('is-chat');
			$('#chat').addClass('is-open');
		});

		$('[chat-close-js]').on('click', function (ev) {
			_helperCloseChat();
		});

		$('[chat-back-js]').on('click', function (ev) {
			_helperCloseChat();
		});

		$('[jobs-close-js]').on('click', function (ev) {
			_helperClose();
		});

		$('#overlay').on('click', function (e) {
			_helperClose();
		});

		$(document).on('keyup', function (e) {
			if (e.keyCode === 27) {
				_helperClose();
			}
		});
	};

	var messageSection = function messageSection() {
		$('[message-btn-js]').on('click', function (ev) {
			$('html, body').addClass('is-hideScroll');

			$('.header__link').removeClass('is-active');
			$(ev.currentTarget).addClass('is-active');

			$('#chat').addClass('is-open');
			$('#overlay').addClass('is-show');

			$('#exhibitors, #jobs, #seminar').removeClass('is-open');

			if ($('[hamburger-js]').hasClass('is-active')) {
				$('[hamburger-js]').removeClass('is-active');
				$('[mobile-block-js]').removeClass('is-open');
			}
		});
	};

	var vacanciesCollapse = function vacanciesCollapse() {
		$('[vacancies-head-js]').on('click', function (ev) {
			ev.preventDefault();
			$(ev.currentTarget).siblings('[vacancies-body-js]').slideToggle(350).css({ display: 'flex' });
		});
	};

	var parallaxBG = function parallaxBG() {
		$('#mainBg').css({
			backgroundPositionX: $('#mainScroll-js').find('.main__box')[0].getBoundingClientRect().left * 0.125
		});

		$('#mainScroll-js').scroll(function (ev) {
			var _offset = $(ev.currentTarget).find('.main__box')[0].getBoundingClientRect().left;

			$('#mainBg').css({
				backgroundPositionX: _offset * 0.125
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
	var initNative = function initNative() {
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