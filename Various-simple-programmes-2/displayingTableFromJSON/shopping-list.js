window.addEventListener("load", function () {

    // TODO 1) Create a JSON shopping list with the following information:
    // 3 Puppies
    // 8 Kittens
    // 2 Pikachu
    // 4 T-Rex
    const shoppingList = [
        {item: "Puppies", ammount: 3},
        {item: "Kittens", ammount: 8},
        {item: "Pikachu", ammount: 2},
        {item: "T-Rex", ammount: 4}
    ];

    const tbody = document.querySelector("#table-body");

    // TODO 2) Iterate through the shoppingList, and populate the #table-body <tbody> with the data.

    for (let i = 0; i < shoppingList.length; i++){
        let tr = document.createElement("tr");
        let td1 = document.createElement("td");
        td1.innerHTML = `${shoppingList[i].item}`;
        let td2 = document.createElement("td");
        td2.innerHTML = `${shoppingList[i].ammount}`;   
        tbody.appendChild(tr);
        tr.appendChild(td1);
        tr.appendChild(td2);
    }

});
