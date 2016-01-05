var AppDispatcher = require('../dispatcher/AppDispatcher');

function reciveTweet(tweet) {
    var action = {
        type: 'recive_tweet',
        tweet: tweet
    };

    AppDispatcher.dispatch(action);
}

module.exports = {
    reciveTweet: reciveTweet
}
