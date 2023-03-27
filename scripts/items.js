// SLIDER CHECKBOX AREA



/*
  Show and hide items:
  When the user clicks on The slider checkbox
  Checks if the slider is already on
  If it is not, then turn it on and hide the items
  If it is, then turn it off and show the items
*/
$("#bronze-label").click(function() {
    if(!($("#bronze-check").is(":checked"))) {
        $(".bronze-item").hide();
    } else {
        $(".bronze-item").show();
    }
});

//Repeating code above for silver and gold items
$("#silver-label").click(function() {
    if(!($("#silver-check").is(":checked"))) {
        $(".silver-item").hide();
    } else {
        $(".silver-item").show();
    }
});

$("#gold-label").click(function() {
    if(!($("#gold-check").is(":checked"))) {
        $(".gold-item").hide();
    } else {
        $(".gold-item").show();
    }
});