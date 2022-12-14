// Variables.
let itemMatch;
let itemArr = [];
const searchBar = document.getElementById("search");
const itemArea = document.getElementById("item-area");
const items = document.getElementsByClassName("item");
const itemName = document.getElementsByTagName("h1");
const fgoHeader = document.getElementById("header");
const locationBox = document.getElementsByClassName("location-box");
const phoneMediaQuery = window.matchMedia("(max-width: 500px)");

// Selects all divs with class "item", selects the <h1> tags, and adds their values to the itemArr array.
for(var i = 0; i < itemName.length; i++) {
        itemMatch = items[i].getElementsByTagName("h1")[0];
        itemArr[i] = itemMatch.innerHTML.toLowerCase();
    }

// Listens for an input in the search bar, takes the value and compares it to the values in itemArr.
// If one of the items contains the input value of the search bar, it will display only those items.
searchBar.addEventListener("input", (n) => {
    for(let i = 0; i < itemName.length; i++) {
        let searchValue = n.target.value.toLowerCase();

        if(itemArr[i].includes(searchValue) && searchValue != "") {
            items[i].style.display = "";
            itemArea.style.display = "grid";
            setTimeout( () => {items[i].classList.add("active")}, 100);
        } else {
            items[i].classList.remove("active");
            setTimeout( () => {items[i].style.display = "none"}, 300);
            locationBox[i].classList.remove("active");
            setTimeout( () => {locationBox[i].style.display = "none"}, 300);
        }
    }
})

// When the searchbar is focused, fades out the header and moves the search bar.
searchBar.addEventListener("focusin", () => {
    searchBar.classList.add("active");
    fgoHeader.classList.add("active");
})

for(let i = 0; i < items.length; i++) {
    items[i].addEventListener("click", () => {
        if(locationBox[i].parentElement === items[i] && (!(locationBox[i].classList.contains("active")))) {
            locationBox[i].style.display = "block";
            setTimeout( () => {locationBox[i].classList.add("active")}, 100);
        } else {
            locationBox[i].classList.remove("active");
            setTimeout( () => {locationBox[i].style.display = "none"}, 300);
        }
    })
}