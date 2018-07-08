---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults
---


<html>
  <head>
    <meta charset="UTF-8">
    <title>{{site.title}}</title>
  {% include external-dependancies.html %}
  <link rel="stylesheet" type="text/css" href="/css/index-page-stylesheet.css">  
      
      <style>
      
      span {  
    cursor: pointer;
}
#images img { 
display: none; 
}

#images #original { 
display: block; 
}
      
span:hover{
    background:;
    opacity: 0.1;              
}

      
      </style>
      
  </head>
  <body>
<div class="container-fluid">
  <div class="row" style="">
    {% include header.html %}
  </div>
   
<div class="row" style=" background-color:;">  
 <div class="col-xs-12" style="background-color:;">
    <div class="interactive-text int_txt-wrapper">
      <span class="int_txt " id="hover_1" >"Netikiu<br>fotografijos galia,</span>
      <span class="int_txt " id="hover_2"> bet tikiu<br>žmonėmis ir jų<br>aplinkos ženklais,</span>
      <span class="int_txt " id="hover_3"> kurių atvaizdai lieka nuotraukose.</span>
      <span class="int_txt " id="hover_4"> Jaučiuosi viso to<br>dalimi.”</span>
    </div>
  </div>
  <div class="row">
    <div class="col-xs-offset-3 col-xs-6" style=" position: fixed; background-color:blue; height: 80vh; z-index:-1; top: 13%;">BLUE
      <div id="images">
        <img src="http://farm8.staticflickr.com/7171/6717705777_268acd6b2a_m.jpg" id="original" />
        <img src="http://farm8.staticflickr.com/7014/6717705405_80e172b437_m.jpg" id="hover_1_pic" />     
        <img src="http://farm8.staticflickr.com/7144/6717706163_68e9b6f0d4_m.jpg" id="hover_2_pic" /> 
      </div>
     </div>

</div>

 </div>
</div>

<script>
$(document).ready(function(){     
    console.log("ready");
$('span').hover( 
    function(){
    var thisId = $(this).attr('id');
        console.log(thisId);
    $('#images img').stop().fadeOut('fast');
    $('#' + thisId + '_pic').delay(300).fadeIn('normal');
},
function(){
var thisId = $(this).attr('id');
$('#' + thisId + '_pic').stop(true, true).fadeOut('fast',function(){
      $('#original').stop(true, true).fadeIn('normal');
       });
    $('#original').stop(true, true).css('opacity', 1); 
 });
});
</script>    
 
  </body>
</html>


    