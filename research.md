---
title: Research 
permalink: /research/
---

{% assign research_sorted = site.research | sort: 'year' | reverse %}
{% assign research_array = "grant|fairness|inclusiveness|reliability|explainability|privacy|security|accountability" | split: "|" %}

<h1>Responsible AI principles drive us</h1>
{% for item in research_array %}
<div class="pos_header">
{% if item == 'grant' %}
<h3>Funded Research Projects</h3>
{% elsif item == 'fairness' %}
<h3>Fairness in AI</h3>
 {% elsif item == 'inclusiveness' %}
<h3>Inclusive AI system design </h3>
 {% elsif item == 'reliability' %}
<h3>Reliability in AI</h3>
 {% elsif item == 'explainability' %}
<h3>Explainable AI (i.e., Transparency, Interpretability)</h3>
 {% elsif item == 'privacy' %}
<h3>Privacy-aware AI system Design</h3>
 {% elsif item == 'security' %}
<h3>Ensuring secure AI systems</h3>
 {% elsif item == 'accountability' %}
<h3>Accountability aspect of AI</h3>
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
