window.addEventListener("load", function() {

    // Gets the #calculate button
    const button = document.querySelector("#calculate");

    // This code is run when the #calculate button is clicked.
    button.addEventListener("click", function(event) {

        // This code gets the value the user enters, as an integer.
        const input = document.querySelector("#txtYear");
        let result = document.querySelector("#result");
        //Bonus Exercise goes here
    
        if (input.value == ""){
            result.innerText = "Please enter a valid Year, empty spaces are not allowed."
        } else if (input.value.indexOf(".") > 0 ) {
            result.innerText = "Please enter a valid Year, decimals are not allowed."
        } else {
            // TODO Your code for Exercise One here.
            const year = parseInt(input.value);

            if (year % 100 == 0 && year % 400 == 0) {
                result.innerText = year + " is a leap year"
            } else if (year % 100 == 0 && year % 400 != 0){
                result.innerText = year + " is not a leap year"
            }
            else if (year % 4 == 0){
                result.innerText = year + " is a leap year"
            } else {
                result.innerText = year + " is not a leap year"
            }
        }
    });

});
