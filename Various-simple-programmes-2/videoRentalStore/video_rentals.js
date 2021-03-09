
window.addEventListener("load", function () {

    // Note: the data within the 'customerdb.js' file will be within scope
    // for code in this file because it is loaded into the browser document

    // Console log demo to show how to access fields within the JavaScript object
    console.log(`Customer #${2} details --> Name: ${customers[2].name}  Gender: ${customers[2].gender}`);

    // This array has the names of the header rows for the tables
    const headerNames = ["Name", "Gender", "Year born", "Year Joined", "Number of Rentals"];

    // These nested JavaScript objects can be used to store
    // the statistics you calculate for the table
    const summaryStatistics = {
        numMales: {
            name: "Number of males",
            value: 0
        },
        numFemales: {
            name: "Number of females",
            value: 0
        },
        thirty_or_younger: {
            name: "0-30 yrs",
            value: 0
        },
        under_65: {
            name: "< 65yrs",
            value: 0
        },
        on_or_over_65: {
            name: "65 <=",
            value: 0
        },
        num_gold: {
            name: "Gold members",
            value: 0
        },
        num_silver: {
            name: "Silver members",
            value: 0
        },
        num_bronze: {
            name: "Bronze members",
            value: 0
        }
    };

    /* TODO: Your code here */

    //This creates the Header for the table and the row, and appends them to the Details section
    
     const tHead = document.createElement("thead");
     const tHeadRow = document.createElement("tr");
     const details = document.querySelector("#details");
     details.appendChild(tHead);
     tHead.appendChild(tHeadRow);
 
     //Adds the headerNames to the Header Row through a for loop
 
     for (let index = 0; index < headerNames.length; index++) {
         const header = document.createElement("th");
         header.innerHTML = `${headerNames[index]}`;
         tHeadRow.appendChild(header);
    }

    //This creates the body of the table to display the content of the Details section
    
    const tBody = document.createElement("tbody");
    details.appendChild(tBody);
    
    for (let i = 0; i < customers.length; i++) {
        let tRow = document.createElement("tr");
        let tData1 = document.createElement("td");
        let tData2 = document.createElement("td");
        let tData3 = document.createElement("td");
        let tData4 = document.createElement("td");
        let tData5 = document.createElement("td");
        tData1.innerHTML = `${customers[i].name}`;
        tData2.innerHTML = `${customers[i].gender}`;
        tData3.innerHTML = `${customers[i].year_born}`;
        tData4.innerHTML = `${customers[i].joined}`;
        tData5.innerHTML = `${customers[i].num_hires}`;
        tRow.appendChild(tData1);
        tRow.appendChild(tData2);
        tRow.appendChild(tData3);
        tRow.appendChild(tData4);
        tRow.appendChild(tData5);
        tBody.appendChild(tRow);
    }
    
    //All the functions to update the statistics values

    // Function to determine the number of males

    function numOfMales(){
        for (let i = 0; i < customers.length; i++) {
            if (customers[i].gender === "male"){
                summaryStatistics.numMales.value++;
            };
        }
    }

    //Function to determine the number of Females

    function numFemales(){
        for (let i = 0; i < customers.length; i++) {
            if (customers[i].gender === "female"){
                summaryStatistics.numFemales.value++;
            };
        }
    }

    //Function to determine the age of each customer

    function customerAge(){
        const currentYear = new Date().getFullYear();
        for (let i = 0; i < customers.length; i++) {
            if ((currentYear - customers[i].year_born) <= 30){
                summaryStatistics.thirty_or_younger.value++;
            } else if ((currentYear - customers[i].year_born) > 30 && (currentYear - customers[i].year_born) < 65){
                summaryStatistics.under_65.value++;
            } else {
                summaryStatistics.on_or_over_65.value++;
            }
        }
    }

    //Function to determine the loyalty status of each customer

    function loyaltyStatus(){
        for (let i = 0; i < customers.length; i++) {
            const currentYear = new Date().getFullYear();
            const moviesPerWeek = customers[i].num_hires / ((currentYear - customers[i].joined) * 52);
            if (moviesPerWeek >= 4){
                summaryStatistics.num_gold.value++;
            } else if (moviesPerWeek >= 1){
                summaryStatistics.num_silver.value++;
            } else {
                summaryStatistics.num_bronze.value++;
            }
        }
    }


    //The calls to the functions to update the statistics details:

    numOfMales();
    numFemales();
    customerAge();
    loyaltyStatus();



    //Creation of the Statistics table

    const tHead2 = document.createElement("thead");
    const tHeadRow2 = document.createElement("tr");
    const header = document.createElement("th");
    const header2 = document.createElement("th");
    const tBody2 = document.createElement("tbody");
    const statistics = document.querySelector("#statistics");
    statistics.appendChild(tHead2);
    tHead2.appendChild(tHeadRow2);
    tHeadRow2.appendChild(header);
    tHeadRow2.appendChild(header2);
    header.innerHTML = `Summary Statistics`;
    
    statistics.appendChild(tBody2);
    

    //Loop through the statistics elements to display them in the table

    for (const prop in summaryStatistics){
        let tRow = document.createElement("tr");
        tBody2.appendChild(tRow);
        extractJson(summaryStatistics[prop], tRow);
    }


    //Function to extract Json values and add information to the row of a table

    function extractJson(json, div){
        let tData1 = document.createElement("td");
        let tData2 = document.createElement("td");
        tData1.innerText = json.name;
        tData2.innerText = json.value;
        div.appendChild(tData1);
        div.appendChild(tData2);
    }


    


});

