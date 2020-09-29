console.log("Works!");
let paragraphs = document.getElementsByTagName("p");
console.log(paragraphs);

// for...of
for (ele of paragraphs) {
    ele.style["background-color"] = "#FF69B4";
    if (ele.innerHTML. === "_") {
        ele.innerHTML = ele.innerHTML.strike();
    }
}