$(function() {

  $('.letters').hover(
    function() {
      $('#social').css('opacity', '0.8');
      $('#social').css('transition', 'all 150ms 0s ease');
    },
    function() {
      $('#social').css('opacity', '0');
    }
  )

});
