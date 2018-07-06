---
<!--title: Title-->
layout: default
---

# {{ site.name }}

Content is written in [Markdown](https://learnxinyminutes.com/docs/markdown/). Plain text format allows you to focus on your **content**.

<!--
You can use HTML elements in Markdown, such as the comment element, and they won't be affected by a markdown parser. However, if you create an HTML element in your markdown file, you cannot use markdown syntax within that element's contents.
-->

<p> username variable from config.yml: <b>{{ site.github_username }}</b></p>

{% for page in site.pages %}
    {% if page.categories contains 'fruit' %}
<div>    
         <div class="item">
            <h3>{{page.title}}</h3>
            <p>{{page.description}}</p>  
        </div>

</div>    
    {% endif %}
{% endfor %}
<!--https://stackoverflow.com/questions/17118551/generating-a-list-of-pages-not-posts-in-a-given-category

-->

<!--
{% for post in site.posts %}
<div style="border-bottom-style:solid;">
    <h2> {{post.title}} </h2>
    <div class="content">
        {{ post.content }}
    </div>
</div>
{% endfor %}
-->



<!--
<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a>
    </li>
  {% endfor %}
</ul>
-->
