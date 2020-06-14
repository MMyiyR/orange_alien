$(function() {

  $('.kyomukunn').click(function() {
    $('.image').fadeIn(0);
    $('.opacity').removeClass('opacity');
    $('.kyomukunn').addClass('opacity');

  	$('.mains').animate({'margin-top':'10px'},300,function(){
  	  $('.mains').animate({'margin-left':'10px','opacity':'0'},150,function(){
        $('.mains').removeClass('block');
        $('.kyomu-main').addClass('block');
        $('.image').fadeOut(300);
        $('.mains').animate({'margin-left':'0px','opacity':'1'},150,function(){
		      $('.mains').animate({'margin-top':'0px',},100).dequeue();
	      });
      });
	  });

  });

  $('.about').click(function() {
    $('.image').fadeIn(0);
    $('.opacity').removeClass('opacity');
    $('.about').addClass('opacity');

    $('.mains').animate({'margin-top':'10px'},300,function(){
  	  $('.mains').animate({'margin-left':'10px','opacity':'0'},150,function(){
        $('.mains').removeClass('block');
        $('.about-main').addClass('block');
        $('.image').fadeOut(300);
        $('.mains').animate({'margin-left':'0px','opacity':'1'},150,function(){
		      $('.mains').animate({'margin-top':'0px',},100).dequeue();
	      });
      });
	  });

  });

  $('.links').click(function() {
    $('.image').fadeIn(0);
    $('.opacity').removeClass('opacity');
    $('.links').addClass('opacity');

    $('.mains').animate({'margin-top':'10px'},300,function(){
  	  $('.mains').animate({'margin-left':'10px','opacity':'0'},150,function(){
        $('.mains').removeClass('block');
        $('.links-main').addClass('block');
        $('.image').fadeOut(300);
        $('.mains').animate({'margin-left':'0px','opacity':'1'},150,function(){
		      $('.mains').animate({'margin-top':'0px',},100).dequeue();
	      });
      });
	  });

  });

});
