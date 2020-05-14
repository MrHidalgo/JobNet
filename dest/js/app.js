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

/**
 * @name initStellar
 * @description Stellar.js is a jQuery plugin that provides parallax scrolling effects to any scrolling element.
 *
 * Parallax Elements
 * - data-stellar-ratio="1"
 *
 * Parallax Backgrounds
 * - data-stellar-background-ratio="1"
 */
var initStellar = function initStellar() {
	if ($("[parallax-js]").length) {
		$(function () {
			$.stellar({
				// Set scrolling to be in either one or both directions
				horizontalScrolling: true,
				verticalScrolling: false,

				// Set the global alignment offsets
				horizontalOffset: 0,
				verticalOffset: 0,

				// Refreshes parallax content on window load and resize
				responsive: true,

				// Select which property is used to calculate scroll.
				// Choose 'scroll', 'position', 'margin' or 'transform',
				// or write your own 'scrollProperty' plugin.
				scrollProperty: 'scroll',

				// Select which property is used to position elements.
				// Choose between 'position' or 'transform',
				// or write your own 'positionProperty' plugin.
				positionProperty: 'transform',

				// Enable or disable the two types of parallax
				parallaxBackgrounds: true,
				parallaxElements: true,

				// Hide parallax elements that move outside the viewport
				hideDistantElements: false,

				// Customise how elements are shown and hidden
				hideElement: function hideElement($elem) {
					$elem.hide();
				},
				showElement: function showElement($elem) {
					$elem.show();
				}
			});
		});
	}
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
		var _main = $('#main .main__scroll');

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

			_main.css({ height: 'calc(100vh - (' + _otherHeightContent + 'px))' });

			$('#main .main__box-wrapper-1').css({ height: _wrapper1Height });
			$('#main .main__box-wrapper-2').css({ height: _wrapper2Height });
			$('#main .main__box-wrapper-3').css({ height: _wrapper3Height });
		}

		$(window).on('load', function () {
			setTimeout(function (ev) {
				_helperResize();

				_main.animate({
					opacity: 1
				}, 750);
			}, 200);
		});

		$(window).on('resize', function (ev) {
			_helperResize();
		});
	};

	var perfectScrollbarCB = function perfectScrollbarCB() {
		if (document.getElementById('mainScroll-js')) {
			var ps = new PerfectScrollbar('#mainScroll-js', {
				wheelSpeed: 2,
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
			$(ev.currentTarget).addClass('is-active');
			$('html, body').addClass('is-hideScroll');
			$('#exhibitors').addClass('is-open');
			$('#overlay').addClass('is-show');
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
			$(ev.currentTarget).addClass('is-active');
			$('html, body').addClass('is-hideScroll');
			$('#jobs').addClass('is-open');
			$('#overlay').addClass('is-show');
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