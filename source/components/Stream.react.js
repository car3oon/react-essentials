var React = require('react');
var StreamTweet = require('./StreamTweet.react');
var Header = require('./Header.react');
var TweetStore = require('../stores/TweetStore');

var Stream = React.createClass({

    getInitialState: function () {
        return {
            tweet: TweetStore.getTweet()
        };
    },

    render: function () {
        var tweet = this.state.tweet;

        if (tweet) {
            return (
                <StreamTweet
                    tweet={tweet}
                    onAddTweetToCollection={this.props.onAddTweetToCollection} />
            );
        }

        return (
            <Header text="Waiting for public photos from Twitter..." />
        );
    }
});

module.exports = Stream;
