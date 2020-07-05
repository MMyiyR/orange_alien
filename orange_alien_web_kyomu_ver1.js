$(function() {

  $('.kyomu-icon1').click(function() {
    if ($('.kyomu-icon1').hasClass('mu')) {
      // 閉じる
      $('.mikan-background-color').slideUp(50);
      $('.mikan-ue').slideUp(70);
      $('.kyomu-icon1').removeClass('mu');
    } else {
       // 開く
      $('.mikan-background-color').slideDown(50);
      $('.mikan-ue').slideDown(70);
      $('.kyomu-icon1').addClass('mu');
    }
  });

  $('.kyomu-icon2').click(function() {
    if ($('.kyomu-icon2').hasClass('mu')) {
      // 閉じる
      $('.mikan-background-color').hide();
      $('.mikan-yoko').hide();
      $('.kyomu-icon2').removeClass('mu');
    } else {
       // 開く
      $('.mikan-background-color').show();
      $('.mikan-yoko').show();
      $('.kyomu-icon2').addClass('mu');
    }
  });

});
