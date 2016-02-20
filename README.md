# Plugin-Popup-Fade-UI
a popup that works likes alert() and toast(), but uses &lt;div> and position:absolute to accomplish the task

### Plugin Popup Fade UI ##
Date: 2016-02-19

Code for a tutorial to do a popup similar to alerts/notifications (but not modal) with HTML5 and CSS3. The element has a four (4) second transition as it fades. Change the time in the CSS (this line `transition: opacity 4s ease;`) .

There are five (5) modules to this object.

1. init()      - set the initial values (see parameters below). This is required, if you use a button to toggle the popup.
2. toggle()    - toggle the visibility of the popup (no parameters)
3. message()   - sets the message, colors and "fade out" in the popup.
4. fire()      - sets the message and toggles in one function
5. extingish() - sets a new message before a "fade out"

**more detail**

- `popup.init()` allows you to override the default DOM `id`
- `popup.toggle()` you should not have to use.
- `popup.message()` allows you to set the message and colors.
- `popup.fired()` runs `popup.message()` and `popup.toggle()`
- `popup.extingish()` allows you to reset the message, colors, and wait for the previous message to show a minimum amount of time (`minShowTime`). It also has a `timeout` to the "fade out".

## init() ##

This function takes three (3) parameters.

- timeout - milliseconds to delay before the element starts to fade out, defaults to 7000 
- id      - element `id` of the popup, defaults to 'popup'
- button  - button to tie the `popup.toggle()` to, defaults to 'toggle'. 

*Example:* ` popup.init({'timeout':5000,'id':'mymessagebox','button':'mybutton'}); `

With the example,
- the `timeout` is set to 5000 milliseconds (5 seconds)
- the `id` of the &lt;div&gt; that will hold me message is 'mymessagebox'
- the `id` of the &lt;button&gt; that is used to toggle the message is named 'mybutton'.

## message() ##

This function takes three (3) parameters - as a JSON.

- color           - the color of the text
- backgroundColor - the background of the text
- minShowTime     - the minimum time the message should be shown. Setting the parameter does not automatically "fade out" the message. Set `time` with `init()` for automatic "fade out".

Note: by not using `toggle()` at this point, the message box can be reused; namely with `extingish()`.

*Example:* ` popup.message({'color':'white','backgroundColor':'green','minShowTime':'2000'}); `

With the example,
- the `color` of the text is set to 'white'
- the `backgroundColor` (background-color) of the message box is set to 'green'.
- the `minShowTime` (the minimum time to show) the message box is set to '2000'. The "fade out" starts after this time.

## fire() ##

This takes the same parameters as `message()` and also make the message visible. If no parameter is given, then it just makes the message visible.

## extingish() ##

This function takes four (4) parameters - three (3) as a JSON, and one other.

- message - This takes the same parameters as `message()` and also make the message visible, but also waits for the `minShowTime` to elapse to zero (0). `minShowTime` should have been previously set.

- timeout - The time to wait before starting the "fade out".

If `minShowTime` equals zero (0), it immediately changes the "message" and and starts the "fade out" after `timeout`.

If `minShowTime` is greater than zero (0), it queues the "message" and "fade out".

If there is no "message", it does not update the screen.

If there is no `timeout`, then it starts the "fade out" with the `timeout` delay.

### How It Works ###

- If the `timeout = '0'`, then it will not automatically "fade out". This means, if you manually `popup.toggle()` and set `timeout = '0'`, then you have to manually `popup.toggle()`. NOTE: Zero ('0') is a string.

- If the `timeout > 0`, then it will "fade out" after *popup.timeout* (milliseconds).

- If you do not run `popup.init()`, you will have to programatically `popup.toggle()` or use `popup.fire()`.



### Important Appearance Attributes in the CSS ##

In `popup.css`:

- Change the background color with `background-color:`
- `position:absolute;` is positioned relative to the nearest positioned ancestor (instead of positioned relative to the viewport, like fixed).
- `top:` and `left:` where the popup is placed relative to the "top,left" of the screen.
- `height:` and `width:` the size of the popup.

