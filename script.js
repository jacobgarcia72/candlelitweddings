$( document ).ready(function() {

  var video = 'video.video-player';
  var src = 'video.video-player source';

  $('.play-video').on('click', function(){
    var newmp4 = './video/sample'+ $(this).data('index') +'.mp4'
    $(video).get(0).pause();
    $(src).attr('src', newmp4);
    $(video).get(0).load();
    $(video).get(0).play();
  });

  $(video).on('play', function(){
  $('video.bg-video').css('opacity','0');
  });
  $(video).on('pause', function(){
    $('video.bg-video').css('opacity','1');
  });

})