$(document).ready(() => {

  let counter = 141;
  const tweetInput = $("#tweet-text");

  // console.log('Composer connected');
  // $("#tweet-text").on('keypress', () => {
  //   console.log('keypress');
  // });
  // $("#tweet-text").on('keydown', () => {
  //   console.log('keydown');
  // })
  // $("#tweet-text").on('keyup', () => {
  //   console.log('keyup');
  // })
  // $("#tweet-text").on('blur', () => {
  //   console.log('blur');
  // })
  // $("#tweet-text").on('change', () => {
  //   const newTweet = tweetInput.val();
  //   console.log('change', newTweet);
  // })
  $("#tweet-text").on('input', function () {
    // const newTweet = this;
    // const newTweet = tweetInput.val();
    // console.log('input', newTweet, newTweet.length);
    console.log('input', $(this).val(), $(this).val().length);
  })
});