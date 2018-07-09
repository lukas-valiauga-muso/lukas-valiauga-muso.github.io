

//var overlay_true = $('.overlay-1').attr("display");
//    console.log( overlay_true);    


$(function() {    
        $('.row').mousewheel(function(evt, chg) {
        this.scrollLeft -= (chg * 1.1); //need a value to speed up the change
        evt.preventDefault();
        });
    });

