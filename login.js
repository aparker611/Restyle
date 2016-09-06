$(document).ready(function() {
  $('#profile-img').click(function() {
    $('.profile-drop').fadeToggle("slow", "linear");
    $('#ddd').focus();
  });
  var divWidth = $('#exp-desc').width();

  $(window).resize(function(){
      $('#exp-desc-header').width( divWidth );
  }).resize();
});

$(function(){
  $('.header').data('size','big');
});

$(window).scroll(function(){
  if($(document).scrollTop() > 0)
{
    if($('.header').data('size') == 'big')
    {
        $('#salary').stop().animate({
          marginTop: '0'
        });
        $('#profile-img').stop().animate({
          height: '25px',
          width:  '35px'
        });
        $('#title').stop().animate({
          marginTop: '0'
        }, 600);
        $('.header').data('size','small');
        $('.header').stop().animate({
            height:'30px'
        },600);
    }
}
else
  {
    if($('.header').data('size') == 'small')
      {
        $('#salary').stop().animate({
          marginTop: '1%'
        });
        $('#profile-img').stop().animate({
          height: '50px',
          width:  '70px'
        });
        $('#title').stop().animate({
          marginTop: '1%'
        }, 600);
        $('.header').data('size','big');
        $('.header').stop().animate({
            height:'60px'
        },600);
      }
  }
});
