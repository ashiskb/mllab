---
title: Talks 
permalink: /talks/
---

### **Group Meeting and Talks at the lab**

<div class="content list">
  {% for post in site.posts %}
    {% if post.categories contains 'talks' %}
    <div class="list-item">
    <p class="list-post-title">
        <a href="{{ site.baseurl }}{{ post.url }}">- {{ post.title }}</a> (<small>{{post.date | date: "%m/%d/%y" }}</small>)
        </p>
    </div>
    {% endif %}
  {% endfor %}
</div>
