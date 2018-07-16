---
tag: page-list
---


<html>
  <head>
    <meta charset="UTF-8">
    <title>{{page.title}}</title>
    {%include external-dependancies.html%}  
   <style>
       .page-list{
           background-color:grey;
           height:100vh;
           margin: 0px;
           padding: 0px;
           }
       .list-group{
           padding-top:100px;
           }
       .list-group-item{
           border-radius: 0px;
           }
   </style>
      
  </head>
  <body>
    
    

        {% include header.html %}
   
   <div class="container-fluid">    

<div class="row">
 <div class="col-xs-6">
 
 <ul class="list-group">
    {% for page in site.pages %}
    {% if page.tag == "project-page" %}
  <li class="list-group-item"><a href="{{ page.url }}">{{ page.project-page-title }}</a></li>
    {% endif %}
    {% endfor %}
</ul>

 
 </div>     
</div>                    
</div>
                    

 
  </body>
</html>

    


    
    
        
        
          
      