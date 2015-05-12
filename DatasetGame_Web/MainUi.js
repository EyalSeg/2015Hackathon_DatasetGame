var server = null;

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
    $( window ).resize(function() {
        resizeImageToPanel();
    });

    $("#inputForm").submit(function (event) {
        event.preventDefault()
    });

    server = new GameWhereIsThis();

    getNewTaggable();
});

function getNewTaggable() {
    server.getTaggable()
        .done(taggableReady)
        .fail(function(jqxhr, textStatus, error) {
            var err = textStatus + ", " + error;
            console.log( "Request Failed: " + err );
        });
}

function taggableReady(response) {
    console.log(JSON.stringify(response));
    var target = "#picContainer"; // Where is it going?
    var oImg = $('<img id="myPic">');
    oImg[0].src = response.url;
    oImg.hide();
    oImg.load(resizeImageToPanel);
    $(target).append(oImg);
}
