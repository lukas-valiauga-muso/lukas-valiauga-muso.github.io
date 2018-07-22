---
page-title: Kūryba, asmeniniai ir reklamos projektai
tag: page-list
---


<html>
  <head>
    <meta charset="UTF-8">
    <title>{{page.title}}</title>
    {%include external-dependancies.html%}  
   <style>
       body
       .page-list{
           height:100vh;
           margin: 0px;
           padding: 0px;
           }
       .list-group{
           padding-top:230px;
           }
       .list-group-item{
           border:none;
           background-color:#ffffff00;
           }
       .col-xs-12{
           background-color:whitesmoke;
           height:100vh;
           }
       a   {
            color: black;
           font-family: Pesaro;
           font-size:36px;
           }
       .project-year {
           font-family: Oxygen;
           font-size: 14px;
           letter-spacing: 2px;
           margin-bottom: 11px;
           padding: 15px 30px 10px 0px;
           background-color: rgba(255, 0, 0, 0);
           float:left;
           vertical-align: super;
           }
       a:hover{
           color:lightgrey !important;
           transition: 0.3s;
           }
       .project-title{
           background-color: rgba(0, 0, 255, 0);
           }
       .page-title{
           font-family: Oxygen;
           font-size: 14px;
           letter-spacing: 2px;
           }
       .footer-div{
           width: 100vw; 
           height: 50px; 
           bottom: 25px; 
           position: fixed; 
           }
   </style>
      
  </head>
  <body>
{% include header.html %}
<div class="container-fluid">    
<div class="row">   
 <div class="col-xs-12">
 
<ul class="list-group">
     {% for page in site.pages %}
         {% if page.tag == "project-page" %}
           <li class="list-group-item col-xs-11 col-xs-offset-1">
               <span style="">
                   <a class="project-year" style="text-decoration:none; pointer-events: none;"> {{page.project-page-year}} </a>
                   <a class="project-title" style="text-decoration:none;" href="{{ page.url }}">{{ page.project-page-title }}</a>
               </span>
           </li>
          {% endif %}
     {% endfor %}
   </ul>
  </div>     
 </div>
<div class="col-xs-12 footer-div" style="">
    <span class="navbar-brand project-title">
    <a class="page-title" href="/index.html" style="text-decoration:none;" >Pradinis /
    <a class="page-title" style="text-decoration:none; pointer-events: none;">{{page.page-title}}</a>
    </a>
    </span>
</div>
</div>
                    
<script>
    $(window).resize(function(){ 
    var title_div_height = $('.project-title').css("height");
        $('.project-year').css("height",title_div_height);
    console.log(title_div_height);
        });
</script>
 
  </body>
</html>

    


    
    
        
        
          
      