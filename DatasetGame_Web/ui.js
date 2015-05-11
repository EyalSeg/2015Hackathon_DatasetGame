function getImageUrl(callback) {
    /*$.getJSON("http://api.flickr.com/services/feeds/photos_public.gne?format=json&jsoncallback=?", function(data) {
        var length = data.items.length;
        var pic = data.items[Math.floor(Math.random() * (length))];
        var url = pic.media.m;
        callback(url.substr(0, url.length -5) + 'm' + url.substr(url.length-4));
    });*/
    callback("stub.jpg");
}

$(document).ready(function() {
    getImageUrl(function(url) {
        var target = "#pic"; // Where is it going?
        $(target).html('<img class="my-image" src="' + url + '" />');
    });
});