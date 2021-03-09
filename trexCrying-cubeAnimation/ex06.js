window.addEventListener("load", function() {

    const firstP = document.querySelector("p");
    const secondClassList = document.querySelector(".second");
    let firstButton = document.querySelector("button");
    let secondButton = document.querySelector("#secondButton");
    const nestedLi = document.querySelector("ul > li")


    console.log(firstP);
    console.log(secondClassList);
    console.log(firstButton);
    console.log(secondButton);
    console.log(nestedLi);

    firstP.style.color = "red";
    firstP.style.fontStyle = "italic";
    secondClassList.innerText = "I am a l33t h4x0r, in ur br0ws3r, ch4ng1n ur p4g3s!!!";
    nestedLi.classList.add("important");
    nestedLi.innerText = Date().toLocaleString();
    let isCrying = false;

    firstButton.addEventListener("click", function(event){
        if (isCrying == false){
            document.querySelector("img").src = "t-rex-cry.png";
            isCrying = true;
        } else {
            document.querySelector("img").src = "t-rex.png";
            isCrying = false;
        }
    });
    
    secondButton.addEventListener("click", function(event){
        let box = document.querySelector("#box");
        box.classList.toggle("animated");
    });
});
