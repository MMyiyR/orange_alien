$(function() {


  if ($(window).width() > 520) {
    $('.OREN').animate({'opacity':'1'},2000,function(){
      $('.logo-OREN').animate({'height':'0'},1000,function(){
        $('.all').fadeIn(1000).dequeue();
      });
    });

  } else {
    $('.OREN').animate({'opacity':'1'},2000,function(){
      $('.logo-OREN').animate({'height':'5%','width': '25%'},1000,function(){
        $('.all').fadeIn(1000).dequeue();
      });
    });

  }



var opacity1 = function() {
  $('#fadeing1').animate({'opacity':'0.6'},1000,function(){
    $('#fadeing1').animate({'opacity':'1'},1000).dequeue();
    setTimeout(opacity1, 1000);
  });
}
opacity1();

var opacity2 = function() {
  $('#fadeing2').animate({'opacity':'0.6'},1000,function(){
    $('#fadeing2').animate({'opacity':'1'},1000).dequeue();
    setTimeout(opacity2, 1000);
  });
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

  $('.M----').click(function() {
    $('.active').removeClass('active');
    $('.M----').addClass('active');

  	$('.mains').animate({'margin-left':'10px','opacity':'0'},150,function(){
      $('.mains').removeClass('block');
      $('.M-----main').addClass('block');
      $('.mains').animate({'margin-left':'0px','opacity':'1'},150).dequeue();
	  });

  });

});

