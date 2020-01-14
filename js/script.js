$(document).ready(function () {
  $('.main_btna, .main_btn, a[href="#sheldure"]').on('click', function () {
    $('.overlay').fadeIn('slow');
    $('.modal').slideDown('2000');
  });

  $('.close').on('click', function () {
    $('.overlay').fadeOut('slow');
    $('.modal').slideUp('2000');
  });
});