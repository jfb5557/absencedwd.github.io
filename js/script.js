var main = function(){

  $(window).resize(function() {

    let $width = $(window).width()

    if ($width <= 760) {
      $('.nav').hide();
    }
    else {
      $('.nav').show();
    }

  });

  $(document).scroll(function(event) {
    $pageScroll = $(this).scrollTop();
    //console.log($pageScroll);
  });
}

$(document).ready(main);
