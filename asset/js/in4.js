const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");

arrows.forEach((arrow, i) => {
    const itemNumber = movieLists[i].querySelectorAll("img").length;
    let clickedCount = 0;
    arrow.addEventListener("click", () => {
        clickedCount++;
        if (itemNumber - (4 + clickedCount) >= 0) {

            movieLists[i].style.transform = `translateX(${
                movieLists[i].computedStyleMap().get("transform")[0].x.value
        -184}px)`;
        } else {
            movieLists[i].style.transform = "translateX(0)";
            clickedCount = 0;
        }
    });
    console.log(movieLists[i].querySelectorAll("img").length);
});