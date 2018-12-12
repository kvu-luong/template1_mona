$(document).ready(function () {
  var video1 = document.getElementById('video_source')
  var video2 = document.getElementById('video_source2')
  var video3 = document.getElementById('video_source3')
  var video4 = document.getElementById('video_source4')

  $('#number1').on('click', function () {
    if (video1.paused) {
      video1.play()
    }
    $('#video_source').css('display', 'unset')
    $('#video_source2').css('display', 'none')
    $('#video_source3').css('display', 'none')
    $('#video_source4').css('display', 'none')
  })
  $('#number2').on('click', function () {
    if (video2.paused) {
      video2.play()
    }
    $('#video_source2').css('display', 'unset')
    $('#video_source').css('display', 'none')
    $('#video_source3').css('display', 'none')
    $('#video_source4').css('display', 'none')
  })
  $('#number3').on('click', function () {
    if (video3.paused) {
      video3.play()
    }
    $('#video_source3').css('display', 'unset')
    $('#video_source').css('display', 'none')
    $('#video_source2').css('display', 'none')
    $('#video_source4').css('display', 'none')
  })
  $('#number4').on('click', function () {
    if (video4.paused) {
      video4.play()
    }
    $('#video_source4').css('display', 'unset')
    $('#video_source').css('display', 'none')
    $('#video_source2').css('display', 'none')
    $('#video_source3').css('display', 'none')
  });

  $(".hamburger").on("click",function(){
      $(".menu").toggle();
      console.log($(".menu").css("display") );
      if($(".menu").css("display") == "block"){
        $(".header_right > span").css( {
            "top": "-25px",
            "right": "104%",
        });
      }else{
        $(".header_right > span").css( {
            "top": "0px",
            "right": "2%",
        }); 
      }
    
  })

})
