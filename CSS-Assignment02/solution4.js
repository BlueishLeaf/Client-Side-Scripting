$(document).ready(function(){
    $('#fetchSocialBtn').click(function () {

        var searchTerm = $('#searchBox').val();
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