$(function() {

  var breakMobile = 730; // viewport px breakpoint

  fixedHeader = function() {
    var viewportWidth = $( window ).width(),
        fixedClass = 'navigation--fixed-top',
        $navElement = $(".navigation");

    if ($(window).scrollTop() > '1' && viewportWidth >= breakMobile) {
      $navElement.addClass(fixedClass);
    } else {
      $navElement.removeClass(fixedClass);
    }
  };

  // Toggle mobile navigation
  $(".navigation__mobile-menu__toggle").click(function() {
    $(this).parent().toggleClass('is-open');
  });

      // Force close mobile navigation when clicking anywhere (except the toggle button itself)
  $( document ).on('mousedown touchstart', function(event) {
    if (!$(event.target).closest(".navigation__mobile-menu__toggle").length) {
      // $(".navigation.is-open").removeClass('is-open');
    }
  });

  $(function() {
    $('a[href*=#]:not([href=#])').click(function() {
     if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
       var target = $(this.hash);
       target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
       if (target.length) {
         $('html,body').animate({
           scrollTop: target.offset().top -58
         }, 1000);
         return false;
       }
     }
    });
  });

  $(function() {

    var selectorElement = '.navigation li a , .intro-section__left a',
        targetElement = '.navigation__menu__item';

    $(selectorElement).on('click touch', function(){
      $(targetElement).removeClass('is-active');
      $(this).parent().addClass('is-active');
    });
  });

  $(window).on('resize scroll', fixedHeader);


  //- function for countdown

  $(function() {

    var endDate = "September 17, 2016 09:30:00";

    $('.apply-countdown').countdown({
      date: endDate,
      render: function(data) {
      $(this.el).html("<div class='apply-countdown__numbers'>" + this.leadingZeros(data.days, 2) + " <span>Dias</span></div><div class='apply-countdown__numbers'>" + this.leadingZeros(data.hours, 2) + " <span>Horas</span></div><div class='apply-countdown__numbers'>" + this.leadingZeros(data.min, 2) + " <span>Minutos</span></div><div class='apply-countdown__numbers'>" + this.leadingZeros(data.sec, 2) + " <span>Segundos</span></div>");
      }
    });
  });

});
