// Task 1: Creating the Base Structure
document.addEventListener("DOMContentLoaded", () => {
    const riskDashboard = document.getElementById("riskDashboard"); // selecting riskDashboard container
    console.log("Risk Dashboard Loaded!"); // logs message "Risk Dashboard Loaded!" when the page loads

    // event listener to add new risk items
    document.getElementById("riskForm").addEventListener("submit", function(event) {
        event.preventDefault(); //stops page refresh on form submission

        const riskName = document.getElementById("riskName").value; // user input of name
        const riskLevel = document.getElementById("riskLevel").value; // user input of risk level
        const department = document.getElementById("department").value; // user input of department
        
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

        // Task 6: Handling Event Propagation (Prevent unintended clicks from triggering parent events)
        riskCard.addEventListener("click", (event) => {
            event.stopPropagation();
        });

        // Append the risk card to the dashboard
        riskDashboard.appendChild(riskCard);
    }

        // Task 5: Implementing Bulk Updates
        document.getElementById("increaseRiskLevels").addEventListener("click", () => {
            document.querySelectorAll(".riskCard").forEach(card => {
                const riskLevelSpan = card.querySelector(".riskLevel");
                let newRiskLevel = riskLevelSpan.textContent;
                
                // Increase risk levels: Low → Medium, Medium → High, High remains unchanged
                if (newRiskLevel === "Low") newRiskLevel = "Medium";
                else if (newRiskLevel === "Medium") newRiskLevel = "High";
                
                // Update the displayed risk level
                riskLevelSpan.textContent = newRiskLevel;
                
                // Update background color accordingly
                switch (newRiskLevel) {
                    case "Low": card.style.backgroundColor = "green"; break;
                    case "Medium": card.style.backgroundColor = "yellow"; break;
                    case "High": card.style.backgroundColor = "red"; break;
                }
            });
        });
        // Test Cases
    addRiskItem("Data Breach", "High", "IT");
    addRiskItem("Supply Chain Disruption", "Medium", "Operations");
    addRiskItem("Market Fluctuations", "High", "Finance");
    addRiskItem("Cybersecurity Threat", "High", "IT");
    addRiskItem("HR Compliance Issue", "Low", "Human Resources");
    addRiskItem("Employee Retention", "Low", "HR");

    });

