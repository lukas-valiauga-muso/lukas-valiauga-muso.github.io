$(function() {    
        $('.row').mousewheel(function(evt, chg) {
        this.scrollLeft -= (chg * 1.1); //need a value to speed up the change
        evt.preventDefault();
        });
    });