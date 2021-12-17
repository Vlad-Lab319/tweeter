$(document).ready(() => {

  const scrollElement = document.documentElement;

  const scrollFunction = function() {
    if ($(scrollElement).scrollTop() > 30) {
      $('#scrollbutton').css('visibility', 'visible');
    } else {
      $('#scrollbutton').css('visibility', 'hidden');
    }
  } 

  window.onscroll = function() { scrollFunction()};

  $('#scrollbutton').click(() => {
    console.log('click', $(document.documentElement).scrollTop());
    $(document.documentElement).scrollTop(0);
  })


});