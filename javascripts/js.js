$(document).ready(function() {
  $('#img1').mouseenter(function() {
    $('#Nat').addClass('underline');
  }).mouseleave(function() {
    $('#Nat').removeClass('underline');
  });

  $('#img1').mouseenter(function() {
    $(this).css('border','2px solid rgb(112, 0, 255)');
  }).mouseleave(function() {
    $(this).css('border','2px solid black');
  });

  $('#img2').mouseenter(function() {
    $('#SOW').addClass('underline');
  }).mouseleave(function() {
    $('#SOW').removeClass('underline');
  });

  $('#img2').mouseenter(function() {
    $(this).css('border','2px solid rgb(112, 0, 255)');
  }).mouseleave(function() {
    $(this).css('border','2px solid black');
  });

  $('#img3').mouseenter(function() {
    $('#OS').addClass('underline');
  }).mouseleave(function() {
    $('#OS').removeClass('underline');
  });

  $('#img3').mouseenter(function() {
    $(this).css('border','2px solid rgb(112, 0, 255)');
  }).mouseleave(function() {
    $(this).css('border','2px solid black');
  });





  function deselect(e) {
    $('.pop').slideFadeToggle(function() {
      e.removeClass('selected');
    });
  }

  $(function() {
    $('#name').on('click', function() {
      if($(this).hasClass('selected')) {
        deselect($(this));
      } else {
        $(this).addClass('selected');
        $('.pop').slideFadeToggle();
      }
      return false;
    });

    $('.close').on('click', function() {
      deselect($('#name'));
      return false;
    });
  });

  $.fn.slideFadeToggle = function(easing, callback) {
    return this.animate({ opacity: 'toggle', height: 'toggle' }, 'fast', easing, callback);
  };
});
