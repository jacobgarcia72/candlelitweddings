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



  var frmvalidator  = new Validator("contact_form");
  frmvalidator.addValidation("name","req","Please provide your name");
  frmvalidator.addValidation("email","req","Please provide your email");
  frmvalidator.addValidation("email","email",
    "Please enter a valid email address");


})