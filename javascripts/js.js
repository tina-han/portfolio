$(document).ready(function() {
  $('#desc').show(200);


  $('#img1').mouseenter(function() {
    $('#nat, #sow, #os, #tpin, #book, #nyt, #venmo, #gg').addClass('fade');
  }).mouseleave(function() {
    $('#nat, #sow, #os, #tpin, #book, #nyt, #venmo, #gg').removeClass('fade');
  });

  $('#img2').mouseenter(function() {
    $('#starry, #sow, #os, #tpin, #book, #nyt, #venmo, #gg').addClass('fade');
  }).mouseleave(function() {
    $('#starry, #sow, #os, #tpin, #book, #nyt, #venmo, #gg').removeClass('fade');
  });

  $('#img3').mouseenter(function() {
    $('#starry, #nat, #os, #tpin, #book, #nyt, #venmo, #gg').addClass('fade');
  }).mouseleave(function() {
    $('#starry, #nat, #os, #tpin, #book, #nyt, #venmo, #gg').removeClass('fade');
  });

  $('#img4').mouseenter(function() {
    $('#starry, #nat, #sow, #tpin, #book, #nyt, #venmo, #gg').addClass('fade');
  }).mouseleave(function() {
    $('#starry, #nat, #sow, #tpin, #book, #nyt, #venmo, #gg').removeClass('fade');
  });

  $('#img5').mouseenter(function() {
    $('#starry, #nat, #sow, #os, #book, #nyt, #venmo, #gg').addClass('fade');
  }).mouseleave(function() {
    $('#starry, #nat, #sow, #os, #book, #nyt, #venmo, #gg').removeClass('fade');
  });

  $('#img6').mouseenter(function() {
    $('#starry, #nat, #sow, #os, #tpin, #nyt, #venmo, #gg').addClass('fade');
  }).mouseleave(function() {
    $('#starry, #nat, #sow, #os, #tpin, #nyt, #venmo, #gg').removeClass('fade');
  });

  $('#img7').mouseenter(function() {
    $('#starry, #nat, #sow, #os, #tpin, #book, #venmo, #gg').addClass('fade');
  }).mouseleave(function() {
    $('#starry, #nat, #sow, #os, #tpin, #book, #venmo, #gg').removeClass('fade');
  });

  $('#img8').mouseenter(function() {
    $('#starry, #nat, #sow, #os, #tpin, #book, #nyt, #gg').addClass('fade');
  }).mouseleave(function() {
    $('#starry, #nat, #sow, #os, #tpin, #book, #nyt, #gg').removeClass('fade');
  });

  $('#img9').mouseenter(function() {
    $('#starry, #nat, #sow, #os, #tpin, #book, #nyt, #venmo').addClass('fade');
  }).mouseleave(function() {
    $('#starry, #nat, #sow, #os, #tpin, #book, #nyt, #venmo').removeClass('fade');
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
