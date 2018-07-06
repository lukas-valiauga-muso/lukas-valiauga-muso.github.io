---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults
---


<html>
  <head>
    <meta charset="UTF-8">
    <title>title</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.1/css/bootstrap.css" />
  </head>
  <body>
      
    
      
      <p> {{ content }}</p>
      
      
    {% for page in site.pages %}  
        {% if page.tag == "project-page" %}
                <a href="{{page.url}}">{{page.title}}</a>
            {% elsif page.tag != "project-page" %}
        {% endif %}
    {% endfor %}
      
      
 
  </body>
</html>