$(function() {


  $('.kyomu-icon1').click(function() {
    if ($('.kyomu-icon1').hasClass('mu')) {
      // 閉じる
      $('.mikan-background-color').hide();
      $('.mikan-yoko').hide();
      $('.kyomu-icon1').removeClass('mu');
    } else {
       // 開く
      $('.mikan-background-color').show();
      $('.mikan-yoko').show();
      $('.kyomu-icon1').addClass('mu');
    }
  });
  $('.mikan-background-color').click(function() {
    $('.mikan-background-color').hide();
    $('.mikan-yoko').hide();
    $('.kyomu-icon1').removeClass('mu');
  });

});
