// Task 1: Creating the Base Structure
document.addEventListener("DOMContentLoaded", () => {
    const riskDashboard = document.getElementById("riskDashboard"); // selecting riskDashboard container
    console.log("Risk Dashboard Loaded!"); // logs message "Risk Dashboard Loaded!" when the page loads

    // event listener to add new risk items
    document.getElementById("riskForm").addEventListener("submit", function(event) {
        event.preventDefault(); //stops page refresh on form submission

        const riskName = document.getElementById("riskName").value;
        const riskLevel = document.getElementById("riskLevel").value;
        const department = document.getElementById("department").value;
        
        // call function to add the risk item
        addRiskItem(riskName, riskLevel, department);
    });

    // Task 2: Adding Risk Items Dynamically
    function addRiskItem(riskName, riskLevel, department) {
        // create a div for the risk card
        const riskCard = document.createElement("div");
        riskCard.classList.add("riskCard");
        
        // populating the risk card with info
        riskCard.innerHTML = `
            <strong>${riskName}</strong><br>
            Risk Level: <span class="riskLevel">${riskLevel}</span><br>
            Department: ${department}<br>
            <button class="resolveBtn">Resolve</button>
        `;
        // Task 4: Categorizing Risks by Level
        switch (riskLevel) { // assign background color based on risk level
            case "Low": riskCard.style.backgroundColor = "green"; break; // if low risk, green background
            case "Medium": riskCard.style.backgroundColor = "yellow"; break; // if medium risk, yellow background
            case "High": riskCard.style.backgroundColor = "red"; break; // if high risk, red background
        }

        // Task 3: Removing Risk Items
        // adding resolve button to risk cards
        riskCard.querySelector(".resolveBtn").addEventListener("click", () => { 
            riskDashboard.removeChild(riskCard); // removes risk cardx from parent
        });


    }

});

