$(document).ready(() => {
  // $('a#hidebutton').click(function() {
  //   $(".new-tweet").toggleClass("hide");
  //   $(".tweets").toggleClass("hide");
  // });
  
  let hidden = false;

  $('a#hidebutton').click(function() {
    if (!hidden) {
      $(".new-tweet").slideUp();
      $(".tweets").toggleClass("hide");

      hidden = true;
    } else {
      $(".new-tweet").slideDown();
      $(".tweets").toggleClass("hide");
      hidden = false;
    }
  });


});