$(document).ready(function(){
  'use strict';

  //===== Delay Anmiation =====// 
  var drop = $('.featured-cap > *');
  $('.featured-cap').each(function () {
    var delay = 0;
    $(this).find(drop).each(function () {
      $(this).css({ transitionDelay: delay + 'ms' });
      delay += 200;
    });
  });

  //===== Header Search =====//
  $('.srch-btn').on('click', function () {
    $('.header-search').addClass('active');
    return false;
  });
  $('.srch-cls-btn').on('click', function () {
    $('.header-search').removeClass('active');
    return false;
  });

  //===== Side Panel =====//
  $(".sidepanel > span").on('click', function () {
    $(".sidepanel").toggleClass("show");
    $(this).toggleClass('spin');
    return false;
  });

  //===== Color Picker =====*/
  $('.color-picker a').on("click", function () {
    $('.color-picker a').removeClass("applied");
    $(this).addClass("applied");
    return false;
  });
  

  //===== Accordians =====//
  $('#toggle .toggle-content').hide();
  $('#toggle h6:first').addClass('active').next().slideDown(500).parent().addClass('activate');
  $('#toggle h6').on('click', function() {
    if ($(this).next().is(':hidden')) {
      $('#toggle h6').removeClass('active').next().slideUp(500).parent().removeClass('activate');
      $(this).toggleClass('active').next().slideDown(500).parent().toggleClass('activate');
    }
  });

  //===== Accordians =====//
  $('#toggle2 .toggle-content').hide();
  $('#toggle2 h6:last').addClass('active').next().slideDown(500).parent().addClass('activate');
  $('#toggle2 h6').on('click', function() {
    if ($(this).next().is(':hidden')) {
      $('#toggle2 h6').removeClass('active').next().slideUp(500).parent().removeClass('activate');
      $(this).toggleClass('active').next().slideDown(500).parent().toggleClass('activate');
    }
  });

  //===== Responsive Header =====//
  $('.rspn-mnu-btn').on('click', function () {
    $('.rsnp-mnu').addClass('slidein');
    return false;
  });
  $('.rspn-mnu-cls').on('click', function () {
    $('.rsnp-mnu').removeClass('slidein');
    return false;
  });
  $('.rsnp-mnu li.menu-item-has-children > a').on('click', function () {
    $(this).parent().siblings().children('ul').slideUp();
    $(this).parent().siblings().removeClass('active');
    $(this).parent().children('ul').slideToggle();
    $(this).parent().toggleClass('active');
    return false;
  });

  //===== Scrollbar =====//
  if ($('.rsnp-mnu').length > 0) {
    var ps = new PerfectScrollbar('.rsnp-mnu');
  }

  //===== LightBox =====//
  if ($.isFunction($.fn.fancybox)) {
    $('[data-fancybox],[data-fancybox="gallery"],[data-fancybox="gallery2"],[data-fancybox="gallery3"]').fancybox({});
  }

  //===== Select =====//
  if ($('select').length > 0) {
    $('select').selectpicker();
  }

  //===== Count Down =====//
  if ($.isFunction($.fn.downCount)) {
    $('.countdown').downCount({
      date: '12/12/2020 12:00:00',
      offset: +5
    });
  }

  //===== Counter Up =====//
  if ($.isFunction($.fn.counterUp)) {
    $('.counter').counterUp({
      delay: 10,
      time: 2000
    });
  }

  //===== Owl Carousel =====//
  if ($.isFunction($.fn.owlCarousel)) {

    //=== Video Carousel ===//
    $('.vdo-car').owlCarousel({
      autoplay: true,
      smartSpeed: 3000,
      loop: true,
      items: 4,
      dots: false,
      slideSpeed: 2000,
      autoplayHoverPause: true,
      nav: true,
      margin: 10,
      navText: [
      "<i class='fa fa-angle-left'></i>",
      "<i class='fa fa-angle-right'></i>"
      ],
      responsive:{
        0:{items: 1,nav: false},
        481:{items: 2,margin: 10},
        780:{items: 2,margin: 10},
        981:{items: 3,margin: 10},
        1025:{items: 4,margin: 10},
        1200:{items: 4}
      }
    });

    //=== Latest Event Carousel ===//
    $('.ltst-evnt-car').owlCarousel({
      autoplay: true,
      smartSpeed: 3000,
      loop: true,
      items: 1,
      dots: false,
      slideSpeed: 5000,
      autoplayHoverPause: true,
      nav: true,
      margin: 0,
      navText: [
      "<i class='fa fa-angle-left'></i>",
      "<i class='fa fa-angle-right'></i>"
      ],
    });


    //=== Featured Area Carousel ===//
    $('.featured-car').owlCarousel({
      autoplay: true,
      smartSpeed: 5000,
      loop: true,
      items: 1,
      dots: false,
      slideSpeed: 5000,
      autoplayHoverPause: true,
      nav: false,
	  animateIn: 'fadeIn',
      animateOut: 'fadeOut',
      margin: 0,
      navText: [
      "<i class='fa fa-angle-left'></i>",
      "<i class='fa fa-angle-right'></i>"
      ],
    });


    //=== Testimonials Carousel ===//
    $('.testi-car').owlCarousel({
      autoplay: true,
      smartSpeed: 5000,
      loop: true,
      items: 1,
      dots: true,
      slideSpeed: 5000,
      autoplayHoverPause: true,
      nav: false,
      margin: 0,
      navText: [
      "<i class='fa fa-angle-left'></i>",
      "<i class='fa fa-angle-right'></i>"
      ],
    });

  }

  //===== Slick Carousel =====//
  if ($.isFunction($.fn.slick)) {

    $('.wrk-gal-mn').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: false,
      arrows: false,
      slide: 'li',
      fade: false,
      asNavFor: '.wrk-gal-nv'
    });
    
    $('.wrk-gal-nv').slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      asNavFor: '.wrk-gal-mn',
      dots: false,
      arrows: false,
      slide: 'li',
      vertical: false,
      centerMode: true,
      centerPadding: '0',
      focusOnSelect: true,
      responsive: [
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          centerMode: true
        }
      },
      {
        breakpoint: 490,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          centerMode: true
        }
      }
      ]
    });
  }

});//===== Document Ready Ends =====//

jQuery(window).on('load',function() {
  'use strict';
  var header_height2 = $('header.style3').innerHeight();

  //===== PageLoader =====//
  $(".preloader").fadeOut("slow");
});//===== Window onLoad Ends =====//