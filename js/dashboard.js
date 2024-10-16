const gradesArray = document.getElementsByClassName("grade");
const creditsArray = document.getElementsByClassName("credits");

// Start totalECs, width value, and div style width with 0, change them later in the for loop
let totalECs = 0;
let width = 0;
document.getElementById("progress-bar").setAttribute("style", "width: 0%");

// Add a class to a grade to show whether it's a pass or fail, if it's pass add the ECs in the cell
// behind it to the totalECs value
for (let i = 0; i < gradesArray.length; i++) {
    // Add click event to gradesArray cells, allowing the user to change them
    gradesArray[i].addEventListener("click", function() {
        const newGrade = window.prompt("Enter grade received: ");
        gradesArray[i].innerHTML = newGrade;
        // If grade is higher than 5.5, add ECs to totalECs
        if (newGrade >= 5.5) {
            totalECs += parseFloat(creditsArray[i].innerHTML);
        }
        // Add pass or fail based on new grade input
        if (newGrade == 0) {
            gradesArray[i].classList.add("ungraded");
        } else if (newGrade < 5.5) {
            gradesArray[i].classList.add("fail");
        } else {
            gradesArray[i].classList.add("pass");
        }
        // Width of progress bar loaded
        width = (totalECs / 60) * 100;
        document.getElementById("progress-bar").setAttribute("style", "width: " + width + "%;");
        // Update total ECs underneath progress bar
        document.getElementById("total-ec").innerHTML = "Total ECs: " + totalECs;
    })
    // Do once outside of the click event, so that table cells start with class ungraded
    if (gradesArray[i].innerHTML == 0) {
        gradesArray[i].classList.add("ungraded");
    } else if (gradesArray[i] < 5.5) {
        gradesArray[i].classList.add("fail");
    } else {
        gradesArray[i].classList.add("pass");
    }
}