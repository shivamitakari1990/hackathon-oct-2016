
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

function PostToFacebook() {
    $(document).trigger('fbInit');
    FB.login(function(response) {
    var tagToSearch = "#" + $("#searchText").val();    
    if (response.authResponse) {
        console.log("You are signed into FB");
        var access_token = FB.getAuthResponse()['accessToken'];
        console.log(access_token);
       
        
        FB.api('/me/movies', function(response) {
            console.log(response)
            console.log(response.data)
            if(response && !response.error){
            for(i in response.data){
                var currentlikes = response.data[i];
                console.log(currentlikes)
            }}
        })
        
    }   else {
        // cancelled
    }
}, {scope: 'user_movies,publish_actions,manage_pages,publish_pages', perms:'manage_pages'});
}

function SearchHashtag() {
     $(document).trigger('fbInit');
    FB.login(function(response) {
    var tagToSearch = "#" + $("#searchText").val();    
    if (response.authResponse) {
        console.log("You are signed into FB");
        var access_token = FB.getAuthResponse()['accessToken'];
        console.log(access_token);
       
        
        FB.api('/me/location', function(response) {
            console.log(response)
            console.log(response.data)
            // if(response && !response.error){
            // for(i in response.data){
            //     var currentlikes = response.data[i];
            //     console.log(currentlikes)
            // }}
        })
        
    }   else {
        // cancelled
    }
}, {scope: 'user_location,publish_actions,manage_pages,publish_pages', perms:'manage_pages'});
}

function getUserlikes(params) {
    var result=[]
    $(document).trigger('fbInit');
    FB.login(function(response) {
    var tagToSearch = "#" + $("#searchText").val();    
    if (response.authResponse) {
        console.log("You are signed into FB");
        var access_token = FB.getAuthResponse()['accessToken'];
        console.log(access_token);
        
        FB.api('/me/likes', function(response) {
            console.log(response)
            console.log(response.data)
            
            if(response && !response.error){
            for(i in response.data){
                var currentlikes = response.data[i];
                console.log(currentlikes)
                console.log(currentlikes.name)
                result.push(currentlikes.name)
            }
        console.log(result)}
        })
        
    }   else {
        // cancelled
    }
}, {scope: 'user_likes,publish_actions,manage_pages,publish_pages', perms:'manage_pages'});
return result
}

function getBooksdetails() {
    $(document).trigger('fbInit');
    FB.login(function(response) {
    var tagToSearch = "#" + $("#searchText").val();    
    if (response.authResponse) {
        console.log("You are signed into FB");
        var access_token = FB.getAuthResponse()['accessToken'];
        console.log(access_token);
       
        
        FB.api('/me/books', function(response) {
            console.log(response)
            console.log(response.data)
            if(response && !response.error){
            for(i in response.data){
                var currentlikes = response.data[i];
                console.log(currentlikes)
            }}
        })
        
    }
}, {scope: 'user_books', perms:'manage_pages'});
}

function getTelevisiondetails() {
    $(document).trigger('fbInit');
    FB.login(function(response) {
    var tagToSearch = "#" + $("#searchText").val();
    if (response.authResponse) {
        console.log("You are signed into FB");
        var access_token = FB.getAuthResponse()['accessToken'];
        console.log(access_token);
        FB.api('/me/television', function(response) {
            console.log(response)
            console.log(response.data)
            if(response && !response.error){
            for(i in response.data){
                var currentlikes = response.data[i];
                console.log(currentlikes)
            }}
        })
        
    }
}, {scope: 'user_television', perms:'manage_pages'});
}
