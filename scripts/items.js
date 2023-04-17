// Const Variables
const itemArea = $('#item-area');



// SLIDER CHECKBOX AREA



// When the user clicks on a rarity button, the items with that rarity will show or hide.
function toggleItems(button, itemClass) {
    if ($(itemClass).is(":visible")) {
        $(itemClass).hide();
        $(button).css({
            "background-color": "var(--lightBlack)",
            "border": "thin solid var(--white)"});
    } else {
        $(itemClass).show();
        $(button).removeAttr("style");
    }
}

$("#bronze-button").click(function () {toggleItems($(this), ".bronze-item");});
$("#silver-button").click(function () {toggleItems($(this), ".silver-item");});
$("#gold-button").click(function () {toggleItems($(this), ".gold-item");});



// ADDING ITEM DIVS AREA



// Reads items.json (contains item names, rarity, rareity img src, and img src) and adds them to an array.
let items = [];
async function getItems(items) {
    try {
      let response = await fetch("json/items/items.json");
      if(response.ok) {
        items = await response.json();
        for (let item of items) {
          let newDiv = $('<div>').addClass(`item ${item.rarity}`);
          newDiv.append(
          `<img class="item-icon" src="${item.imgSrc}">
          <span>${item.name}</span>
          <img class="item-rarity-icon" src=${item.raritySrc}>`);
          itemArea.append(newDiv);
        }
      }

    } catch(err) {
      console.log(err);
    }
  }
  
  getItems();