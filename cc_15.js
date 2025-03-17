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
        // Create a div for the risk card
        const riskCard = document.createElement("div");
        riskCard.classList.add("riskCard");
        
        // Populate the risk card with details
        riskCard.innerHTML = `
            <strong>${riskName}</strong><br>
            Risk Level: <span class="riskLevel">${riskLevel}</span><br>
            Department: ${department}<br>
            <button class="resolveBtn">Resolve</button>
        `;
    }

});

