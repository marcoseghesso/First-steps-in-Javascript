window.addEventListener("load", function() {

    /**
     * This array represents a shopping list. The even-numbered indices are the items, and the odd-numbered indices are
     * the amounts required.
     *
     * This shopping list is for:
     * 3x Puppies
     * 8x Kittens
     * 2x Pikachus
     * 4x T-Rexes.
     */
    const shoppingList = [
        "Puppies", 3,
        "Kittens", 8,
        "Pikachu", 2,
        "T-Rex", 4
    ];

    // TODO Your code here.
    let tbody = document.querySelector("#table-body");
    for (let i = 0 ; i < shoppingList.length ; i++){
        if (i == 0 || i % 2 == 0){
            let tr = document.createElement("tr");
            tr.innerHTML = "<tr></tr>";
            let td1 = document.createElement("td");
            td1.innerHTML = `<td>${shoppingList[i]}</td>`;
            let td2 = document.createElement("td");
            td2.innerHTML = `<td>${shoppingList[i+1]}</td>`;
            tbody.appendChild(tr);
            tr.appendChild(td1);
            tr.appendChild(td2);
        }
    }

});
