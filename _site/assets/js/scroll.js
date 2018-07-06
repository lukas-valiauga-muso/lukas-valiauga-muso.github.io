      $(document).ready(function(){
//         $('.vertical-trick').scrollTop(function(){
//             
//         }); 
    var p = $( ".vertical-trick" ).scrollTop();
    console.log( "scrollTop:" + p);
    $(".horizontal-row").css("left", p*-1)

      });
