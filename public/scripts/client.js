/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(() => {

// Rendering all tweets

const renderTweets = function(tweets) {
  // loops through tweets
  for (let tweet of tweets) {
    // calls createTweetElement for each tweet
    const $tweet = createTweetElement(tweet);
    // takes return value and appends it to the tweets container
    $('#tweets-container').append($tweet);
  }
}

// Tweet mark up and data injection

const createTweetElement = function(data) {
  let $tweet = `
  <article class="tweet">
    <header>
      <div>
        <span>
          <img src="${data.user.avatars}" alt="avatar goes here"/>
          ${data.user.name}
        </span>
        <span>${data.user.handle}</span>
      </div>
      <p>
      ${data.content.text}
      </p>
    </header>
    <footer>
      <span>
        ${timeago.format(data.created_at)}
      </span>
      <div>
        <i class="fas fa-flag"></i>
        <i class="fas fa-retweet"></i>
        <i class="fas fa-heart"></i>
      </div>
    </footer>
  </article>
  `;

  return $tweet;

}

// Tweet post and refreshing a page

$("#tweet-form").on("submit", function(event) {
  event.preventDefault();
  const tweetLength = $("#tweet-text").val().length;
  if (tweetLength > 140) {
    alert("Too long tweet!");
  } else if (tweetLength === 0 ) {
    alert("Empty tweet is not allowed!");
  } else {

    $.post('/tweets', $(this).serialize())
    .then($('#tweets-container').empty())
    .then(loadTweets);

    $("#tweet-text").val('');

  }
});

const loadTweets = function() {
  $.ajax('/tweets', { method: 'GET' })
  .then(function (tweets) {
    console.log('Success: ');
    renderTweets(tweets);
  });
}

const $tweets = loadTweets();

});