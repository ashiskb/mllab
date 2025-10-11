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


| Who are they | Graduation year | Research title |
| :------------- |:-------------| :-----------|
| Malgorzata Schwab | PhD (2024) | Invertible Neural Networks for trustworthy AI
| Srivani Inturi | MS (2024) | Saptiotemporal Forecasting of Ionospheric VTEC using Transformer Model in the Global Scale
| Javier Pastorino | PhD (2022) | Training Machine Learning Models in Various Oblivious Settings
| Michael Hoover | MS (2022) | Convolutional Neural Networks for Segmentation of Brain Tumors
| James Thiering | MS (2022) | Bias mitigation in Visual models through Split-model regularization: demonstrations in engagement classification
| Nathan Justice | MS (2020) | Identification of metastatic tissue (cancer tissues metastasis) in histopathologic scans of lymph node sections
| Rory Flynn | MS (2020) | Predicting Autism Spectrum Disorder from Genome-wide Association Data with Genetic Balancing Generative Adversarial Network
| Zhelin Yu | MS (2020) | Brain Tumor Classification and Segmentation with MRI Images
| Jian Peng | MS (2019) | 3D CNN Data Integration platform for ADHD Detection
| Mohammed Mahdi | MS (2018) | Protein Phosphorylation Site Prediction - a deep learning approach
