---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults
---

<html>
  <head>
    <meta charset="UTF-8">
    <title>title</title>
      {% include external-dependancies.html %}
      <link rel="stylesheet" type="text/css" href="/css/index-page-stylesheet.css">  
<style>
      span {  
          cursor: pointer;
      }
      #images img { 
          display: none; 
          height: auto;
          max-height:100%;
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

{% include header-new.html %}

<div class="container-fluid">    

<div class="row">
<div class="row interactive-text">
<span class="int_txt string-1" id="hover_1" >"Netikiu<br>fotografijos galia,</span>
<span class="int_txt string-2" id="hover_2"> bet tikiu<br>žmonėmis ir jų<br>aplinkos ženklais,</span>
<span class="int_txt string-3" id="hover_3"> kurių atvaizdai lieka nuotraukose.</span>
<span class="int_txt string-4" id="hover_4"> Jaučiuosi viso to<br>dalimi.”</span>
</div>
</div>
    
<div class="row">
<div class="col-xs-offset-3 col-xs-6">
    <div id="images" style=" position: fixed; background-color:; height: 80vh; min-width:50vw; z-index:-1; top: 15%;">
      <img src="/assets/page-1/08.JPG" id="original" />
      <img src="/assets/page-1/09.JPG" id="hover_1_pic" />
      <img src="/assets/page-1/11.JPG" id="hover_2_pic" />
      <img src="/assets/page-1/07.JPG" id="hover_3_pic" />
      <img src="/assets/page-1/05.JPG" id="hover_4_pic" />
    </div>
</div>    
</div>

</div>

<script>
$('span').hover( 
    function(){
    var thisId = $(this).attr('id');
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
</script>

  </body>
</html>