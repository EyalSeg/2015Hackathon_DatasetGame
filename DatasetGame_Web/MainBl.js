var GameBase = function(serviceUrl) {
    this._serviceUrl = serviceUrl;
    this._routeTaggable = '/taggable';
};

GameBase.prototype.getTaggable = function() {
    return $.getJSON(this._serviceUrl + this._routeTaggable);
};


function GameWhereIsThis() {
    var url = "https://demo8044205.mockable.io/";
    GameBase.call(this, url);
}

GameWhereIsThis.prototype = Object.create(GameBase.prototype);
GameWhereIsThis.prototype.constructor = GameWhereIsThis;

// Old Unused Stuff
//function getImageUrl(callback) {
//    $.getJSON("https://api.flickr.com/services/feeds/photos_public.gne?format=json&jsoncallback=?", function(data) {
//        var length = data.items.length;
//        var pic = data.items[Math.floor(Math.random() * (length))];
//        var url = pic.media.m;
//        callback(url.substr(0, url.length -6) + '' + url.substr(url.length-4));
//    });
//
//    //callback('stub.jpg');
//}
