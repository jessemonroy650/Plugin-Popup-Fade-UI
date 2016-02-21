/*
    Date: 2016-02-20
*/
function makeToast() {
    // This is in the popup
    document.getElementById('timeouttime').innerHTML = popup.timeout/1000;
    setTimeout(popup.toggle , 500);
}

function doAlert() {
    popup.init({'id':'popupx','mid':'messagex', 'timeout':'0'});
    popup.message({'message':'This is an alert(). Click on the [okay] button to make it go away.', color:'green'});
    popup.fire();
}

var URLthatDelays = "http://codesnippets.altervista.org/examples/html5/tutorial-popup-fade/wait.php?wait=1";

function loadScreenButton () {
    document.getElementById('launch').addEventListener('click', function() {
        console.log('launch');
        $('#dbug').html('launch');
        console.log('URLthatDelays:', URLthatDelays);
        $.get(URLthatDelays, function(data){
            console.log('callback data:', data);
            $('#dbug').html('callback data:' + data);
        });
/*
jQuery.ajax({
url: URLthatDelays,
crossDomain: true
}).done(function(data) {
$('#dbug').html('callback data:' + data);
});
*/

    });
}
