$(function() {
$('body').fadeIn();


var opacity1 = function() {
  $('#fadeing1').animate({'opacity':'0.8'},1000,function(){
    $('#fadeing1').animate({'opacity':'1'},1000).dequeue();
    setTimeout(opacity1, 1000);
  })
}
opacity1();

var opacity2 = function() {
  $('#fadeing2').animate({'opacity':'0.8'},1000,function(){
    $('#fadeing2').animate({'opacity':'1'},1000).dequeue();
    setTimeout(opacity2, 1000);
  })
}
opacity2();



  $('.home').click(function() {
    $('.active').removeClass('active');
    $('.home').addClass('active');

  	$('.mains').animate({'margin-left':'10px','opacity':'0'},150,function(){
      $('.mains').removeClass('block');
      $('.home-main').addClass('block');
      $('.mains').animate({'margin-left':'0px','opacity':'1'},150).dequeue();
	  });

  });

  $('.about').click(function() {
    $('.active').removeClass('active');
    $('.about').addClass('active');

  	$('.mains').animate({'margin-left':'10px','opacity':'0'},150,function(){
      $('.mains').removeClass('block');
      $('.about-main').addClass('block');
      $('.mains').animate({'margin-left':'0px','opacity':'1'},150).dequeue();
	  });

  });

  $('.links').click(function() {
    $('.active').removeClass('active');
    $('.links').addClass('active');

  	$('.mains').animate({'margin-left':'10px','opacity':'0'},150,function(){
      $('.mains').removeClass('block');
      $('.links-main').addClass('block');
      $('.mains').animate({'margin-left':'0px','opacity':'1'},150).dequeue();
	  });

  });

  $('.favs').click(function() {
    $('.active').removeClass('active');
    $('.favs').addClass('active');

  	$('.mains').animate({'margin-left':'10px','opacity':'0'},150,function(){
      $('.mains').removeClass('block');
      $('.favs-main').addClass('block');
      $('.mains').animate({'margin-left':'0px','opacity':'1'},150).dequeue();
	  });

  });

});
