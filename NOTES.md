#= NOTES =
Date: 2016-02-23


## ISSUE: Multiple event triggers on same event ##

**Problem Was:** Assigned Wrong Context to Event Listener

[According to Mozilla](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#Multiple_identical_event_listeners), if I get multiple calls on an event with the "same parameters" - the EventListeners *do not need to be removed manually with the removeEventListener method.*

What as missing from this is that - if the *listener* function (expression) get reassigned, then Javascript thinks it is a new function. The best thing to do is to make the function (expression) static. That is, don't reassign the "pointer" to the function - even if it is the exact same function.

**WRONG**
    var popup = {
        button : 'toggle',
        init   : function (parms) {
            popup.btnListener = function(e) {
                popup.toggle();
            };
            popup.btnInstance = document.getElementById(popup.button).addEventListener('click', popup.btnListener, false);
        }
   };

**RIGHT**
    var popup = {
        button : 'toggle',
        btnListener : function(e) {
            popup.toggle();
        },
        init : function (parms) {
            popup.btnInstance = document.getElementById(popup.button).addEventListener('click', popup.btnListener, false);
        }
   };

