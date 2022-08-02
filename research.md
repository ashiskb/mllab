---
title: Research 
permalink: /research/
---

{% assign research_sorted = site.research | sort: 'year' | reverse %}
{% assign research_array = "autism|cancer|common-sense|cybersecurity|nlp" | split: "|" %}

{% for item in research_array %}

<div class="pos_header">
{% if item == 'autism' %}
<h3>Autism Research</h3>
 {% elsif item == 'cancer' %}
<h3>Cancer Research</h3>
 {% elsif item == 'common-sense' %}
<h3>Common Sense Reasoning</h3>
 {% elsif item == 'cybersecurity' %}
<h3>Cybersecurity</h3>
 {% elsif item == 'nlp' %}
<h3>Natural Language Processing</h3>
{% endif %}
</div>

<div class="content list research">
  {% for resProfile in research_sorted %}
    {% if resProfile.category contains item %}
    <div class="list-item-people">
      <p class="list-post-title">
        {% if resProfile.photo %}
        <a href="{{ site.baseurl }}{{ resProfile.url }}"><img width="200" src="{{site.baseurl}}/images/research/{{resProfile.photo}}"></a>
        {% else %}
        <a href="{{ site.baseurl }}{{ resProfile.url }}"><img width="200" src="http://evansheline.com/wp-content/uploads/2011/02/facebook-Storm-Trooper.jpg"></a>
        {% endif %}
        <a class="name" href="{{ site.baseurl }}{{ resProfile.url }}"> {{ resProfile.title }}, ({{resProfile.publisher}}, {{resProfile.year}})</a>
      </p>
    </div>    
    {% endif %}
  {% endfor %}
</div>
<hr>
{% endfor %}
