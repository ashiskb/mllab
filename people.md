---
title: People
permalink: /people/
---

{% assign people_sorted = site.people | sort: 'name' %}
{% assign people_array = "pi|phdstudent|msstudent|ugradstudent|alumni|visiting" | split: "|" %}

{% for item in people_array %}

<div class="pos_header">
{% if item == 'postdoc' %}
<h3>Postdoctoral Fellows</h3>
 {% elsif item == 'pi' %}
<h3>Principal Investigator</h3>
 {% elsif item == 'phdstudent' %}
<h3>PhD Students</h3>
 {% elsif item == 'msstudent' %}
<h3>MS Students</h3>
 {% elsif item == 'ugradstudent' %}
<h3>Undergraduate Students</h3>
 {% elsif item == 'visiting' %}
<h3>Visiting Scholars</h3>
 {% elsif item == 'others' %}
<h3>Honorary Members</h3>
 {% elsif item == 'alumni' %}
<h3>Alumni</h3>
{% elsif item =='visiting' %}
<h3>Visiting Scholars</h3>
{% endif %}
</div>

<div class="content list people">
  {% for profile in people_sorted %}
    {% if profile.position contains item %}
    <div class="list-item-people">
      <p class="list-post-title">
        {% if profile.avatar %}
        <a href="{{ site.baseurl }}{{ profile.url }}"><img width="200" src="{{site.baseurl}}/images/people/{{profile.avatar}}"></a>
        {% else %}
        <a href="{{ site.baseurl }}{{ profile.url }}"><img width="200" src="http://evansheline.com/wp-content/uploads/2011/02/facebook-Storm-Trooper.jpg"></a>
        {% endif %}
        <a class="name" href="{{ site.baseurl }}{{ profile.url }}">{{ profile.name }}</a>
      </p>
    </div>    
    {% endif %}
  {% endfor %}
</div>
<hr>
{% endfor %}


| Who are they | When were they here | Where they went |
| :------------- |:-------------| :-----------|
| Mohammed Mahdi | MS Student (2018) | Research Scientist at the Ministry of Education, Iraq
| Nathan Justice | MS Student (2020) | Amazon
| Zhelin Yu | MS Student (2020) | Oracle
| Jian Peng | MS Student (2019) | InHouse Orders
