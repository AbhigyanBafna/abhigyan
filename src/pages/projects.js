export default function Projects() {
    
    const Twitter = require('twitter');

    const client = new Twitter({
    consumer_key: '<your_consumer_key>',
    consumer_secret: '<your_consumer_secret>',
    access_token_key: '<your_access_token_key>',
    access_token_secret: '<your_access_token_secret>'
    });

    const params = { screen_name: 'your_twitter_handle', count: 200 };

    client.get('statuses/user_timeline', params, function(error, tweets, response) {
    if (!error) {
        console.log(`You have ${tweets.length} tweets.`);
    } else {
        console.log(error);
    }
    });


    return(
        <div>
            Projects
        </div>
    )
}