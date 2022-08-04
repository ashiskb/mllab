---
title: Reference
permalink: /resources/
---




{% assign reference_types = "deadlines|scientists|students|discussion|icpc" | split: "|" %}

{% for type in reference_types %}

{% if type == 'scientists' %}
### **For scientists**
{% elsif type == 'deadlines' %}
### **Deadlines that we play with**
 {% elsif type == 'students' %}
### **For students, lab members**
 {% elsif type == 'discussion' %}
### **Random bits of discussion**
 {% elsif type == 'icpc' %}
### **For Competitive Programming Enthusiasts**
{% endif %}

<div class="content list">
  {% for post in site.posts %}
    {% if post.categories contains type %}
	{% if type == 'deadlines' %}
<div class="list-item">
<iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTjoxQGOlzWsEO3ZRW_dyo1o0RZtHRKyhgwELN_bL11neZqnOIUS3Ok6J9jiVgPoa9JjRVB1XAJ67gv/pubhtml?widget=true&amp;headers=false" width="1024" height="400"></iframe>

	{% else %}	
    <div class="list-item">
      <p class="list-post-title">
        <a href="{{ site.baseurl }}{{ post.url }}">- {{ post.title }}</a>
      </p>
	{% endif %}
    </div>
    {% endif %}
  {% endfor %}
</div>

{% endfor %}
