var newParent = document.getElementById('outerPageTitle');
var oldParent = document.getElementById('pageTitle');

while (oldParent.childNodes.length > 0) {
  newParent.appendChild(oldParent.childNodes[0]);
}


$(document).ready(function () {
  $('.animsition').animsition({
    inClass: 'zoom-in-sm',
    outClass: 'zoom-out-sm'
  });
});


if ($(window).width() > 1200) {


  $(".bg_mover").mousemove(function (e) {
    parallaxIt(e, ".parallax_slide", -130);
    parallaxIt(e, "img", 0);
  });

  function parallaxIt(e, target, movement) {
    var $this = $(".bg_mover");
    var relX = e.pageX - $this.offset().left;
    var relY = e.pageY - $this.offset().top;

    TweenMax.to(target, 1, {
      x: (relX - $this.width() / 2) / $this.width() * movement,
      y: (relY - $this.height() / 2) / $this.height() * movement
    });
  }
  /*parallax image hover*/


  $(".menu .menu_click").on('mouseenter', function () {
    $(this).parents('.menu').addClass('open');
    $('main').addClass('add_overlay');
    $('body').addClass('open_menu');
  });
  $(".menu").on('mouseleave', function () {
    $(this).removeClass('open');
    $('main').removeClass('add_overlay');
    $('body').removeClass('open_menu');
  });


} else {

  $(".menu .menu_click").on('click', function (e) {
    $(this).parents('.menu').toggleClass('open');
    $('.menu .close_menu').fadeToggle();
    $('main').toggleClass('add_overlay');
    $('body').toggleClass('open_menu');
    e.preventDefault();
  });

  $(".menu .close_menu").on('click', function (e) {
    $('.menu').removeClass('open');
    $(this).fadeOut();
    $('main').removeClass('add_overlay');
    $('body').removeClass('open_menu');
    e.preventDefault();
  });

  $(document).on('click', function (event) {
    if (!$(event.target).closest('.menu').length) {
      $('.menu').removeClass('open');
      $('.menu .close_menu').fadeOut();
      $('main').removeClass('add_overlay');
      $('body').removeClass('open_menu');
    }
  });

}

$(window).scroll(function () {
  var scrollDistance = $(window).scrollTop() + 150;
  $('.page-section').each(function () {
    if ($(this).position().top <= scrollDistance) {

      $(this).addClass('in_view');

    } else {

      $(this).removeClass('in_view');
    }
  });
}).scroll();

if ($('body').hasClass('homepage')) {
  $(".homepage").addClass("active");
}
if ($('body').hasClass('about')) {
  $(".about").addClass("active");
}
if ($('body').hasClass('links')) {
  $(".links").addClass("active");
}
if ($('body').hasClass('augmentedreality')) {
  $(".augmentedreality").addClass("active");
}
if ($('body').hasClass('projects')) {
  $(".projects").addClass("active");
}
if ($('body').hasClass('contact')) {
  $(".contact").addClass("active");
}
