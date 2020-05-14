
let gallerySliderOpt = {},
	gallerySlider = null,
	videoSliderOpt = {},
	videoSlider = null,
	testimonialsSliderOpt = {},
	testimonialsSlider = null;

const initSwiper = () => {

	gallerySliderOpt = {
		loop: false,
		grabCursor: true,
		effect: 'slide',
		speed: 750,
		slidesPerView: 1,
		spaceBetween: 30,
		navigation: {
			nextEl: '#galleryModal .c-modal__btn--next',
			prevEl: '#galleryModal .c-modal__btn--prev',
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
			prevEl: '#videoModal .c-modal__btn--prev',
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
			prevEl: '#testimonialsModal .c-modal__btn--prev',
		}
	};

};
