const gradesArray = document.getElementsByClassName("grade");
const creditsArray = document.getElementsByClassName("credits");
let totalECs = 0;

for (let i = 0; i < gradesArray.length; i++) {
    if (gradesArray[i].innerHTML == 0) {
        gradesArray[i].classList.add("ungraded");
    } else if (gradesArray[i] < 5.5) {
        gradesArray[i].classList.add("fail");
    } else {
        gradesArray[i].classList.add("pass");
        totalECs += parseFloat(creditsArray[i].innerHTML);
    }
}

let width = (totalECs / 60) * 100;
document.getElementById("progress-bar").setAttribute("style", "width: " + width + "%");