

/**
 * @name initPopups
 *
 * @description
 */
const initPopups = () => {

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
      beforeOpen: function() {
        this.st.mainClass = this.st.el.attr('data-effect');
      },
      open: function() {
				gallerySlider = new Swiper('.gallerySlider', gallerySliderOpt);
				videoSlider = new Swiper('.videoSlider', videoSliderOpt);
				testimonialsSlider = new Swiper('.testimonialsSlider', testimonialsSliderOpt);
			},
      close: function() {}
    }
  });

  if($('.body-login').length) {
		$.magnificPopup.open({
			items: {
				src: '#loginModal'
			}
		});
	}

};
