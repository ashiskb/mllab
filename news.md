---
title: News of the ML Lab in action! 
permalink: /news/
---




{% assign news_types = "news" | split: "|" %}

{% for type in news_types %}

{% if type == 'news' %}
### **News**
{% endif %}

<div class="content list">
  {% for post in site.posts %}
    {% if post.categories contains type %}
    <div class="list-item">
      <p class="list-post-title">
        <a href="{{ site.baseurl }}{{ post.url }}">- {{ post.title }}</a>
      </p>
    </div>
    {% endif %}
  {% endfor %}
</div>

<hr>
{% endfor %}
