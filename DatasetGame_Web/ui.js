function getImageUrl(callback) {
    //$.getJSON("https://api.flickr.com/services/feeds/photos_public.gne?format=json&jsoncallback=?", function(data) {
    //    var length = data.items.length;
    //    var pic = data.items[Math.floor(Math.random() * (length))];
    //    var url = pic.media.m;
    //    callback(url.substr(0, url.length -6) + '' + url.substr(url.length-4));
    //});

    callback('stub.jpg');
}

function resizeImageToPanel() {
    // Shortcuts
    var oMyMainPanel = $('#myMainPanel');
    var oMyPanelBody = $('#myPanelBody');
    var oPicContainer = $('#picContainer');
    var oPic = $('#myPic');
    var oMyHeading = $('#myHeading');
    var oMyFooter = $('#myFooter');

    var dif = oMyPanelBody.outerHeight(true) - oMyPanelBody.height() +
        oPicContainer.outerHeight(true) - oPicContainer.height();

    var panelsHeight = oMyHeading.outerHeight(true) + oMyFooter.outerHeight(true);
    var wantedHeightLimit = oMyMainPanel.outerHeight() - panelsHeight - dif;
    var maximizedWidth = oPicContainer.width();
    var maximizedHeight = maximizedWidth * oPic.height() / oPic.width();

    console.log('maximizedHeighht : ' + maximizedHeight);
    console.log('wantedHeightLimit : ' + wantedHeightLimit);

    if (maximizedHeight > wantedHeightLimit) {
        oPic.height(wantedHeightLimit);
        oPic.width('auto');
    } else {
        oPic.width('100%');
        oPic.height('auto');
    }
    oPic.show();
}

$(document).ready(function() {
    getImageUrl(function(url) {
        var target = "#picContainer"; // Where is it going?
        var oImg = $('<img id="myPic">');
        oImg[0].src = url;
        oImg.hide();
        oImg.load(resizeImageToPanel);
        $(target).append(oImg);
    });

    $("#inputForm").submit(function (event) {
        event.preventDefault();
    });

    $( window ).resize(function() {
        resizeImageToPanel();
    });
});