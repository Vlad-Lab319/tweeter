$(document).ready(() => {

  const tweetLength = 140;
  $("#tweet-text").on('input', function () {
    let counter = tweetLength - $(this).val().length;
    $($(this).parent().prop("tagName") + " div .counter").text(counter);
  })
});