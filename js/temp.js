// Close the FAQ question if it's not the last one that's been clicked on
const detailsArray = document.querySelectorAll("details");

for (let i = 0; i < detailsArray.length; i++) {
    detailsArray[i].addEventListener("click", function() {
        for (let j = 0; j < detailsArray.length; j++) {
            if (detailsArray[i] != detailsArray[j]) {
                detailsArray[j].removeAttribute("open");
            }
        }
    });
}