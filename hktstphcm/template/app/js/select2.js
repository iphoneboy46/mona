$(document).ready(function () {
  $('.js-op').select2();
  $(window).on('scroll', function () {
    if ($('.select2-container--open').length) {
      $('.js-op').select2('close');
    }
  });





});