---
tag: index-page
---

<html>
  <head>
    <meta charset="UTF-8">
    <meta name="google" content="notranslate" />  
    <title>{{site.title}}</title>
      {% include external-dependancies.html %}
      <link rel="stylesheet" type="text/css" href="/css/index-page-stylesheet.css">  
<style>
span {  
  cursor: pointer;
  transition: 0.5s
}
#images img { 
  display: none; 
  max-width:100%;
}
#images #original { 
  display: block; 
}
span:hover{
  background:;
  color: white;    
  opacity: 1.0;
  transition: 0.5s
}    
.img-container-1 {
    position: fixed;
    height:100vh;
    z-index:-1;
    opacity:0;
    no-repeat center center fixed;
    background: url() no-repeat center center fixed;
    background-size: cover;
}
.img-container-2 {
    position: fixed;
    height:100vh;
    z-index:-2;
    opacity:0;
    background: url() no-repeat center center fixed;
    background-size: cover;
}

</style>
      
  </head>
<body>
<div class="preload" style="opacity: 0; position: absolute; top: -9999px; left: -9999px;">
    <img src="/assets/index-images/hover_0.jpg" alt="">
    <img src="/assets/index-images/hover_1.jpg" alt="">
    <img src="/assets/index-images/hover_2.jpg" alt="">
    <img src="/assets/index-images/hover_3.jpg" alt="">
    <img src="/assets/index-images/hover_4.jpg" alt="">
</div><!-- /.preload -->    

{% include header.html %}

<div class="container-fluid ">    
    <div class="row">
    <div class="col-xs-12 img-container-1"></div>
    </div>
    <div class="row">
    <div class="col-xs-12 img-container-2"></div>
    </div>
    <div class="row">
        <div class="interactive-text col-xs-11 col-xs-offset-1" style="opacity:0;">
        <span class="int_txt string-1" id="hover_1" style="position: relative;" >"Netikiu fotografijos galia,<br></span>
        <span class="int_txt string-2" id="hover_2"> bet tikiu žmonėmis ir jų aplinkos ženklais,</span>
        <span class="int_txt string-3" id="hover_3"> kurių atvaizdai lieka nuotraukose.</span>
        <span class="int_txt string-4" id="hover_4"> Jaučiuosi viso to dalimi.”</span>
        </div>
    </div>
    <div class="row">
        <div class="info-text col-xs-11 col-xs-offset-1">
            <a style="font-weight:400; font-size:13px;">Asmeninė ir reklamos fotografija</a>
            <a>Tel: +37062059469</a>
            <a>Email: arturas@valiauga.lt</a>
        
        </div>
    </div>
    
    
</div>
setTimeout(function(){ alert("Hello");}, 3000);
<script>
  $(document).ready(function(){
     $('.img-container-2').css('background-image', 'url("/assets/index-images/hover_0.jpg")');
      $('.interactive-text').stop(true,true).delay(650).fadeTo(1500,1);
       $('.img-container-2').stop(true,true).fadeTo(1500,1);
          $('span').hover(hover_on,hover_off);
    });  
    function hover_on(){
    var thisId = $(this).attr('id');          
                 $('.img-container-2').stop(true,true).fadeTo(1000,0);  
                 $('.img-container-1').stop(true,true).css('background-image', 'url("/assets/index-images/' + thisId + '.jpg")');
                 $('.img-container-1').stop(true,true).fadeTo(1000,1);
    }
    function hover_off(){
    $('.img-container-1').stop(true,true).fadeTo(500,0);
                 $('.img-container-2').stop(true,true).fadeTo(500,1);
                  }
    
    
</script>

<script>
$('.preload').waitForImages(function() {
//    alert('All images are loaded.');
});    
</script>    


  </body>