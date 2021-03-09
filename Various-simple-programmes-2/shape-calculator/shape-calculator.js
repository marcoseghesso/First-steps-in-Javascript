window.addEventListener("load", function() {

    // TODO 1) Add the generateResults() function below as a click event handler for #btnCalculate

    const calcButton = document.querySelector("#btnCalculate");

    calcButton.addEventListener("click", generateResults);
    
    function generateResults() {

        // Read results from the HTML page
        const coneRadius = parseFloat(document.querySelector("#txtConeRadius").value);
        const coneHeight = parseFloat(document.querySelector("#txtConeHeight").value);
        const cylRadius = parseFloat(document.querySelector("#txtCylinderRadius").value);
        const cylHeight = parseFloat(document.querySelector("#txtCylinderHeight").value);

        // TODO 6) Within these lines, use ALL the functions you wrote to complete the program.
        // --------------------------------------
        const coneVol = getConeVolume(coneRadius, coneHeight);
        const cylVol = getCylinderVolume(cylRadius, cylHeight);
        displayShapeVolumes(coneVol, cylVol);
        displayLargestShapeInfo(coneVol, cylVol);
        // --------------------------------------

    }

    // TODO Below this line, complete the functions.
    // --------------------------------------

    // 2) A function to calculate the volume of a cone
    function getConeVolume(radius, height) {
        const vol = Math.PI * Math.pow(radius, 2) * height / 3.0;
        return vol;
    }

    // TODO 3) Write a function called getCylinderVolume which calculates the volume
    // of a cylinder, given its radius and height.

    function getCylinderVolume(radius, height){
        const vol = Math.PI * Math.pow(radius, 2) * height;
        return vol;
    }

    // TODO 4) Write a function called displayShapeVolumes, which takes the volumes
    // of the cylinder and cone, and displays them in the #coneVolume and #cylVolume <span>s

    function displayShapeVolumes(coneVol, cylVol){
        const coneVolume = document.querySelector("#coneVolume");
        const cylVolume = document.querySelector("#cylVolume");
        coneVolume.innerHTML = `${coneVol}`;
        cylVolume.innerHTML = `${cylVol}`;
    }

    // TODO 5) Write a function called displayLargestShapeInfo, which takes the volumes
    // of the cylinder and cone, and displays an informational message about the largest
    // shape in the appropriate #resultDetail <p>.

    function displayLargestShapeInfo(coneVol, cylVol){
        const resultDetails = document.querySelector("#resultDetail")
        if (coneVol > cylVol){
            resultDetails.innerHTML = `The shape with the largest volume is the Cone, with a volume of ${coneVol} cm <sup>3</sup>.`
        }
        if (coneVol < cylVol){
            resultDetails.innerHTML = `The shape with the largest volume is the Cylinder, with a volume of ${cylVol} cm <sup>3</sup>.`
        }
        if (coneVol == cylVol){
            resultDetails.innerHTML = `Both shapes have the exact same volume of ${cylVol} cm <sup>3</sup>.`
        }
    }

});