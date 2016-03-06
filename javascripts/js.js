$(document).ready(function() {
  $('#desc').show(300);


  $('#img1').mouseenter(function() {
    $('#nat').addClass('underline');
  }).mouseleave(function() {
    $('#nat').removeClass('underline');
  });

  $('#img1').mouseenter(function() {
    $(this).css('border','2px solid rgb(112, 0, 255)');
  }).mouseleave(function() {
    $(this).css('border','2px solid black');
  });

  $('#img2').mouseenter(function() {
    $('#sow').addClass('underline');
  }).mouseleave(function() {
    $('#sow').removeClass('underline');
  });

  $('#img2').mouseenter(function() {
    $(this).css('border','2px solid rgb(112, 0, 255)');
  }).mouseleave(function() {
    $(this).css('border','2px solid black');
  });

  $('#img3').mouseenter(function() {
    $('#os').addClass('underline');
  }).mouseleave(function() {
    $('#os').removeClass('underline');
  });

  $('#img3').mouseenter(function() {
    $(this).css('border','2px solid rgb(112, 0, 255)');
  }).mouseleave(function() {
    $(this).css('border','2px solid black');
  });

  $('#img4').mouseenter(function() {
    $('#tpin').addClass('underline');
  }).mouseleave(function() {
    $('#tpin').removeClass('underline');
  });

  $('#img4').mouseenter(function() {
    $(this).css('border','2px solid rgb(112, 0, 255)');
  }).mouseleave(function() {
    $(this).css('border','2px solid black');
  });

  $('#img5').mouseenter(function() {
    $('#book').addClass('underline');
  }).mouseleave(function() {
    $('#book').removeClass('underline');
  });

  $('#img5').mouseenter(function() {
    $(this).css('border','2px solid rgb(112, 0, 255)');
  }).mouseleave(function() {
    $(this).css('border','2px solid black');
  });


    $('#img6').mouseenter(function() {
      $('#nyt').addClass('underline');
    }).mouseleave(function() {
      $('#nyt').removeClass('underline');
    });

    $('#img6').mouseenter(function() {
      $(this).css('border','2px solid rgb(112, 0, 255)');
    }).mouseleave(function() {
      $(this).css('border','2px solid black');
    });

  //
  // $('#about').click(function() {
  //   $('.messagepop').animate({
  //     top: '130px',
  //     opacity: '1 '}, {
  //       duration: 50,
  //       specialEasing: {
  //         height:"easeoutBounce"
  //       }
  //     });
  // });

  function deselect(e) {
    $('.pop').slideFadeToggle(function() {
      e.removeClass('selected');
    });
  }

  $(function() {
    $('#about').on('click', function() {
      if($(this).hasClass('selected')) {
        deselect($(this));
      } else {
        $(this).addClass('selected');
        $('.pop').slideFadeToggle();
      }
      return false;
    });

    $('.close').on('click', function() {
      deselect($('#about'));
      return false;
    });
  });

  $.fn.slideFadeToggle = function(easing, callback) {
    return this.animate({ opacity: 'toggle', height: 'toggle' }, 'fast', easing, callback);
  };

});
