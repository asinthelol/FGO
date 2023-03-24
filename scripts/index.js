// Variables.
let itemMatch;
let itemArr = [];
const itemButtonContainer = document.getElementById("item-button-container");
const darkButton = document.getElementById("dark-mode-button");
const lightButton = document.getElementById("light-mode-button");
const itemButton = document.getElementById("item-button");
const searchBarContainer = document.getElementById("search-bar-container");
const searchBar = document.getElementById("search");
const itemArea = document.getElementById("item-area");
const items = document.getElementsByClassName("item");
const itemName = document.getElementsByTagName("h1");
const fgoHeader = document.getElementById("header");
const locationBox = document.getElementsByClassName("location-box");
const itemBox = document.getElementsByClassName("item-box");
const phoneMediaQuery = window.matchMedia("(max-width: 500px)");
const body = document.getElementById("body");
const textEle = document.getElementsByClassName("text-el");

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
            itemArea.style.display = "flex";
            items[i].classList.add("active")
        } else {
            items[i].classList.remove("active");
            items[i].style.display = "none";
            locationBox[i].classList.remove("active");
            locationBox[i].style.display = "none"
        }
    }
})

// When the searchbar is focused, fades out the header and moves the search bar.
searchBar.addEventListener("focusin", () => {
    searchBar.classList.add("active");
    fgoHeader.classList.add("active");
})

for(let i = 0; i < items.length; i++) {
    itemBox[i].addEventListener("click", () => {
        if(locationBox[i].parentElement === items[i] && (!(locationBox[i].classList.contains("active")))) {
            locationBox[i].style.display = "flex";
            locationBox[i].style.transition = "height 0.5s, opacity 0.3s ease-in 0.25s, transform 0.5s";
            locationBox[i].children[1].classList.add("active");
            setTimeout( () => {locationBox[i].classList.add("active")}, 10);
        } else {
            locationBox[i].style.transition = "height 0.5s, opacity 0.1s, transform 0.5s";
            locationBox[i].classList.remove("active");
            setTimeout( () => {locationBox[i].style.display = "none"}, 500);
        }
    })
}

itemButton.addEventListener("click",  () => {
    searchBarContainer.style.display = "block";
    searchBar.style.display = "block";
    itemButtonContainer.style.opacity = "0";
    setTimeout( () => {itemButtonContainer.style.display = "none"}, 150);
    setTimeout( () => {searchBarContainer.style.opacity = "1"}, 300);
    setTimeout( () => {searchBar.style.opacity = "1"}, 300);
})

darkButton.addEventListener("click", () => {
    body.classList.add("darkMode");
    darkButton.classList.add("active");
    lightButton.classList.add("active");
    itemArea.classList.add("darkMode");
    for(let i = 0; i < textEle.length; i++) {textEle[i].classList.add("darkMode");}
    for(let i = 0; i < itemBox.length; i++) {itemBox[i].classList.add("darkMode");}
    for(let i = 0; i < itemBox.length; i++) {locationBox[i].classList.add("darkMode");}
    itemButton.classList.add("darkMode");
})

lightButton.addEventListener("click", () => {
    body.classList.remove("darkMode");
    darkButton.classList.remove("active");
    lightButton.classList.remove("active");
    itemArea.classList.remove("darkMode");
    for(let i = 0; i < textEle.length; i++) {textEle[i].classList.remove("darkMode");}
    for(let i = 0; i < itemBox.length; i++) {itemBox[i].classList.remove("darkMode");}
    for(let i = 0; i < itemBox.length; i++) {locationBox[i].classList.remove("darkMode");}
    itemButton.classList.remove("darkMode");
})