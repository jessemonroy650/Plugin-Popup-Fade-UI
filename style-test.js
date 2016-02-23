/*
    Date: 2016-02-20
*/
function runStyleText() {
    // Toast example
    makeToast();
    // Wait for 'toast' example to finish
    setTimeout(doAlert,4000);
    //setTimeout(doAlternate,500);
}

function makeToast() {
    // This is in the popup
    popup.init({'timeout': 3000});
    document.getElementById('timeouttime').innerHTML = popup.timeout/1000;
    setTimeout(popup.toggle , 200);
}

function doAlert() {
    popup.init({'id':'popupx','mid':'messagex', 'btnCallback':doNBox, 'timeout':'0'});
    popup.message({'message':'This is an alert(). Click on the [okay] button to make it go away.'});
    popup.fire();
}

function doNBox() {
    setTimeout(doNotificationBox, 2000);
}

function doNotificationBox() {
    popup.init({'id':'notification','mid':'messagey', 'button':'togglex', 'btnCallback':doOther, 'timeout':'0'});
    popup.message({'message':'This is an alert(). Click on the [okay] button to make it go away.'});
    popup.fire();
}

function doOther() {
    setTimeout(doAlternate, 2000);
}

var i = 0;
function doAlternate() {
    var msgs = ['critical','success','important','standard'];

    if (msgs.length > i) {
        popup.init({'id':msgs[i], 'timeout': 3000});
        popup.fire({'minShowTime': 3005, 'queued': doAlternate });
        i = i + 1;
    }
    //console.log('doAlternate:', i);
}




