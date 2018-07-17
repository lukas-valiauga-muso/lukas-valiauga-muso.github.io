---
tag: index-page
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
          height: auto;
/*          max-width:100vw;*/
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

{% include header.html %}

<div class="container-fluid">    

<div class="row">
    <div class="interactive-text">
    <span class="int_txt string-1" id="hover_1" >"Netikiu<br>fotografijos galia,</span>
    <span class="int_txt string-2" id="hover_2"> bet tikiu<br>žmonėmis ir jų<br>aplinkos ženklais,</span>
    <span class="int_txt string-3" id="hover_3"> kurių atvaizdai lieka nuotraukose.</span>
    <span class="int_txt string-4" id="hover_4"> Jaučiuosi viso to<br>dalimi.”</span>
    </div>
</div>
    
<div class="row">
<!--    <div class="col-xs-offset-3 col-xs-6">-->
    <div class="col-xs-12">
        <table width="100%" height="100%" align="center" valign="center">
        <div id="images" style=" position: fixed; background-color:#f0f0f0; height: 100vh; width:100vw; z-index:-1; top: 0vh;">
          <img src="/assets/index-img-1.jpg" id="original" />
          <img src="/assets/page-1/08.JPG" id="hover_1_pic" />
          <img src="/assets/page-1/06.JPG" id="hover_2_pic" />
          <img src="/assets/page-1/07.JPG" id="hover_3_pic" />
          <img src="/assets/page-1/05.JPG" id="hover_4_pic" />
        </div>
        </table>
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