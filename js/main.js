Fancybox.bind("[data-fancybox]", {

});

$(function () {
  $(".menu-list__item:nth-child(1), .footer-nav__link:nth-child(1)").click(function () {
    $('html, body').animate({
      scrollTop: $(".product").offset().top
    }, 1000);
  });
  $(".menu-list__item:nth-child(2), .footer-nav__link:nth-child(2)").click(function () {
    $('html, body').animate({
      scrollTop: $(".how").offset().top
    }, 1000);
  });
  $(".menu-list__item:nth-child(3) , .footer-nav__link:nth-child(3)").click(function () {
    $('html, body').animate({
      scrollTop: $(".video").offset().top
    }, 1000);
  });
  $(".header-btn").click(function (event) {
    $(".header-btn,.header-menu").toggleClass("active");
    if ($(window).width() > 750 && $(".header-btn").hasClass("active") && $(window).width() > 500) {
      $(".header-links").css({ "margin-right": "38%" });
    } else {
      if ($(window).width() > 500) {
        $(".header-links").css({ "margin-right": "40px" });
      }
    }
  });

});