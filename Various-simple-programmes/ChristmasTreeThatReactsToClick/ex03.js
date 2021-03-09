window.addEventListener("load", function() {

    // TODO Your code here.

    const arrayOfBaubles = document.querySelectorAll(".bauble");

    arrayOfBaubles.forEach(function(bb, index){
        bb.addEventListener("click", classAnimator);
    });

    function classAnimator(event){
        let bauble = event.target;
        bauble.classList.toggle("animated")
    }

});


