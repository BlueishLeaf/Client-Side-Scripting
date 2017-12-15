//NOTE: This plugin uses my own twitter application
$(document).ready(function(){
    $('#fetchSocialBtn').click(function () {

        //Retrieve the value of the text box and initialise the variable
        var searchTerm = $('#searchBox').val();
        //Social feed gets the last 10 posts, with a character limit of 200, and allows images/videos
        $('.social-feed-container').socialfeed({
            twitter: {
                accounts: [searchTerm],
                limit: 10,
                consumer_key: 'tNR95QEbdb8OJAm8cy6E6eY68',
                consumer_secret: 'Urr1ZepOA4sMvJNnGQMZthh06k00Eq22Xr5tMSX4uGf4PGz9zI'
            },

            length:200,
            show_media: true
        });
    });


});