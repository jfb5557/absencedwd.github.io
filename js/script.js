var main = function(){
  $(document).scroll(function(event) {
    $pageScroll = $(this).scrollTop();
    console.log($pageScroll);
  });
}

$(document).ready(main);
