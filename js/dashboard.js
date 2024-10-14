const gradesArray = document.getElementsByClassName("grade");

for (let i = 0; i < gradesArray.length; i++) {
    if (gradesArray[i].innerHTML == 0) {
        gradesArray[i].classList.add("ungraded");
    } else if (gradesArray[i] < 5.5) {
        gradesArray[i].classList.add("fail");
    } else {
        gradesArray[i].classList.add("pass");
    }
}
console.log(gradesArray[0].innerHTML);
