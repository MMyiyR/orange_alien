$(function() {

  $('.home').click(function() {
    $('.opacity').removeClass('opacity');
    $('.home').addClass('opacity');

  	$('.mains').animate({'margin-top':'10px'},300,function(){
  	  $('.mains').animate({'margin-left':'10px','opacity':'0'},150,function(){
        $('.mains').removeClass('block');
        $('.home-main').addClass('block');
        $('.mains').animate({'margin-left':'0px','opacity':'1'},150,function(){
		      $('.mains').animate({'margin-top':'0px',},100).dequeue();
	      });
      });
	  });

  });

  $('.about').click(function() {
    $('.opacity').removeClass('opacity');
    $('.about').addClass('opacity');

    $('.mains').animate({'margin-top':'10px'},300,function(){
  	  $('.mains').animate({'margin-left':'10px','opacity':'0'},150,function(){
        $('.mains').removeClass('block');
        $('.about-main').addClass('block');
        $('.mains').animate({'margin-left':'0px','opacity':'1'},150,function(){
		      $('.mains').animate({'margin-top':'0px',},100).dequeue();
	      });
      });
	  });

  });

  $('.links').click(function() {
    $('.opacity').removeClass('opacity');
    $('.links').addClass('opacity');

    $('.mains').animate({'margin-top':'10px'},300,function(){
  	  $('.mains').animate({'margin-left':'10px','opacity':'0'},150,function(){
        $('.mains').removeClass('block');
        $('.links-main').addClass('block');
        $('.mains').animate({'margin-left':'0px','opacity':'1'},150,function(){
		      $('.mains').animate({'margin-top':'0px',},100).dequeue();
	      });
      });
	  });

  });

});
