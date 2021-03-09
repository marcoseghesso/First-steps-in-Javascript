window.addEventListener("load", function () {

    // TODO 1) Declare variables here.
    
    let timer = null;
    ellapsedTimeMillis = 0;

    // TODO 5) Add event listeners to both buttons:
    // a. When #btnStartTimer is clicked, the startTimer function should be called.
    // b. When #btnStopTimer is clicked, the stopTimer function should be called.

    document.querySelector("#btnStartTimer").addEventListener("click", startTimer);

    document.querySelector("#btnStopTimer").addEventListener("click", stopTimer);

    // TODO 2) Complete this function so that:
    // a. IF the timer isn't already started, it:
    // - Sets the value of elapsedTimeMillis to 0
    // - Displays "0.00" in the #timer_face <span>
    // - Starts a timer calling the updateTimer function every 100ms.
    // b. IF the timer is already started, calling this does nothing.
    function startTimer() {
        if (timer == null){
            ellapsedTimeMillis = 0;
            document.querySelector("#timer_face").innerHTML = 0.00;
            timer = setInterval(updateTimer, 100);
        } 
    }

    // TODO 3) Complete this function so that:
    // a. IF the timer is already started, it stops the timer.
    // b. IF the timer isn't already started, calling this does nothing.
    function stopTimer() {
        if (timer != null){
            clearTimeout(timer);
            timer = null;
            updater = null;
        }
    }

    // TODO 4) Complete this function so that it:
    // a. Appropriately updates the value of elapsedTimeMillis
    // b. Sets the text of the #timer_face <span> to the current elapsed time, in seconds, rounded to 2 decimal places.
    function updateTimer() {
        ellapsedTimeMillis += 100;
        ellapsedTimeInSeconds = ellapsedTimeMillis/1000;
        const timeStr = ellapsedTimeInSeconds.toFixed(2);
        document.querySelector("#timer_face").innerHTML = `${timeStr}`;
    }

});