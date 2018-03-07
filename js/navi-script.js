$('ul li:has(ul)').addClass('has-submenu');
$('ul li ul').addClass('sub-menu');
$('ul.dropdown li').hover(function () {
    $(this).addClass('hover');
}, function () {
    $(this).removeClass('hover');
});
var $menu = $('#menu'), $menulink = $('#spinner-form'), $search = $('#search'), $search_box = $('.search_box'), $menuTrigger = $('.has-submenu > a');
$menulink.click(function (e) {
    $menulink.toggleClass('active');
    $menu.toggleClass('active');
    if ($search.hasClass('active')) {
        $('.menu.active').css('padding-top', '50px');
    }
});
$search.click(function (e) {
    e.preventDefault();
    $search_box.toggleClass('active');
});
$menuTrigger.click(function (e) {
    e.preventDefault();
    var t = $(this);
    t.toggleClass('active').next('ul').toggleClass('active');
});
$('ul li:has(ul)');
$(function () {
  $(document).ready(function() {

    var scrollOffset = $('.nav_wrapper').offset();

    $(window).scroll(function() {
      if ($(document).scrollTop() > scrollOffset.top) {
        $('.nav_wrapper').addClass('f-nav');
      }
      else {
        $('.nav_wrapper').removeClass('f-nav');
      }
    });
  } );

});