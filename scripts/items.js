// SLIDER CHECKBOX AREA



/*
  Show and hide items:
  When the user clicks on The slider checkbox
  Checks if the slider is already on
  If it is not, then turn it on and hide the items
  If it is, then turn it off and show the items
*/

// function toggleItems(checkbox, itemRarity) {
//     if (!$(checkbox).is(":checked")) {
//         $(itemRarity).hide();
//     } else {
//         $(itemRarity).show();
//     }
// }

function toggleItems(button, itemClass) {
    if ($(itemClass).is(":visible")) {
        $(itemClass).hide();
        $(button).css({
            "background-color": "var(--darkwhite)",
            "color": "var(--textblack)",
            "border": "thin solid var(--black)"});
    } else {
        $(itemClass).show();
        $(button).css({
            "background-color": "var(--blue)",
            "color": "var(--white)",
            "border": "none"});
    }
}

$("#bronze-button").click(function () {
    toggleItems($(this), ".bronze-item");
})

$("#silver-button").click(function () {
    toggleItems($(this), ".silver-item");
})

$("#gold-button").click(function () {
    toggleItems($(this), ".gold-item");
})

async function getItems() {
    try {
      let response = await fetch("json/items.json");
      
      if(response.ok) {
        console.log("good");
        let items = await response.json();
        for (let item of items) {
            console.log(item.name);
          }
        
      }

    } catch(err) { // Just in case I make a mistake in the JSON file
      console.log(err);
    }
  }
  
  getItems();