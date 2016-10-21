window.fbAsyncInit = function() {
    FB.init({
        appId      : '1768467906768645',
        xfbml      : true,
        version    : 'v2.7'
    });
}

( function(d) {
    var js, id = 'facebook-jssdk', ref = d.getElementsByTagName('script')[0];
    if (d.getElementById(id)) {
        return;
    }
    js = d.createElement('script');
    js.id = id;
    js.async = true;
    js.src = "//connect.facebook.net/en_US/all.js";
    ref.parentNode.insertBefore(js, ref);
}(document));

function getFeeds() {
    $(document).trigger('fbInit');
    FB.login(function(response) {
        var tagToSearch = "#" + $("#searchText").val();
        if (response.authResponse) {
            var result = {};
            var resultArray = [];

            console.log("You are signed into FB");
            var access_token = FB.getAuthResponse()['accessToken'];

            FB.api('/me/movies', function(response) {
                if(response && !response.error){
                    for(i in response.data){
                        var currentMovies = response.data[i];
                        resultArray.push(currentMovies.name);
                    }
                    result.movies = Object.assign({}, resultArray);
                }
            });

            FB.api('/me/likes', function(response) {
                resultArray = [];
                if(response && !response.error){
                    for(i in response.data){
                        var currentlikes = response.data[i];
                        resultArray.push(currentlikes.name);
                    }
                    result.likes = Object.assign({}, resultArray);
                }
            });

            FB.api('/me/books', function(response) {
                resultArray = [];
                if(response && !response.error){
                    for(i in response.data){
                        var currentBooks = response.data[i];
                        resultArray.push(currentBooks.name);
                    }
                    result.books = Object.assign({}, resultArray);
                }
            });

            console.log(result);
        } else {
            // Do Something
        }
    }, {scope: 'user_books, user_likes, user_movies, publish_actions, manage_pages, publish_pages', perms:'manage_pages'});
}
