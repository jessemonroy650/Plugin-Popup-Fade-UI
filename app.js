var gWaittime    = 1000;
var gTimeouttime = 7000;
//
var app = {
    self : {},

    onDeviceReady : function () {
        if (device.platform === "iOS") {
            // hide Exit button. They don't have one on iOS devices.
            document.getElementById('exitApp').classList.add("hidden");
            // deals with post-iOS-7 change that covers the status bar
            document.body.style.marginTop = "20px";
            // hide the Splash Screen for iOS only
            navigator.splashscreen.hide();
        } else if (device.platform == 'Android') {
            // Get rid of 300ms delay 
            document.addEventListener('DOMContentLoaded', function() {
                FastClick.attach(document.body);
            }, false);
            //
            document.getElementById('exitApp').addEventListener('click', function() {
                navigator.app.exitApp();
            });
        } else if (device.platform == 'browser') {
            document.getElementById('exitApp').classList.add("hidden");
        }
        if (device.platform != 'browser') {
            app.phonegapStuff();
        }
        // Toast example
        makeToast();
        // Wait for 'toast' example to finish
        setTimeout(doAlert,12000);
        // Load the button and async example
        loadScreenButton();
    },
    phonegapStuff : function () {
        // Requires the 'device' plugin
        return;
        // A bug in Phonegap does not allow us to use the `id=cordova`
        document.getElementById('acordova').innerHTML = device.cordova;
        document.getElementById('model').innerHTML = device.model;
        document.getElementById('platform').innerHTML = device.platform;
        document.getElementById('uuid').innerHTML = device.uuid;
        document.getElementById('version').innerHTML = device.version;
    }
};

//
//    Entry Point
//
document.addEventListener('DOMContentLoaded', function() {
    // Check to see if we are using a webbrowser
    var v = navigator.appVersion.match('X11');
    //
    // This is truthy, not absolute.
    if ( v == 'X11' ) {
        document.getElementById('isbrowser').innerHTML = v;
        // This needs to be global so other modules can see it.
        device = {platform:'browser'};
        // Force the function.
        app.onDeviceReady();
    } else {
        document.getElementById('isbrowser').innerHTML = 'not X11';
        // Wait for PhoneGap to load
        document.addEventListener("deviceready", app.onDeviceReady, false);
    }
});
