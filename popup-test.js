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

var URLthatDelays = "http://codesnippets.altervista.org/examples/html5/tutorial-popup-fade/wait.php?wait=5";

function loadScreenButton () {
    document.getElementById('launch').addEventListener('click', function() {
        //console.log('launch');
        $('#dbug').html('launch');
        popup.fire({'message':'<p>&nbsp;<p>Getting data.','color':'green','minShowTime':2000});
        //console.log('URLthatDelays:', URLthatDelays);
        $.get(URLthatDelays, function(data){
            popup.extingish({'message':'<p>&nbsp;<p>Got it.','color':'black'}, 2000);
            //console.log('callback data:', data);
            $('#dbug').html('callback data:' + data);
        });
    });
}
