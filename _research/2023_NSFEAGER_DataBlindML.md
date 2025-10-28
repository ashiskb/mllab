---
title: NSF/EAGER -- Building a Provable Differentially Private Real-time Data-blind ML Algorithm -- A case study on Enhancing STEM Student Engagement in Online Learning (Award 2329919)
category: grant
photo: nsfeager-datablindml.png
year: 2023
publisher: National Science Foundation
---

<img width="800" src="{{site.baseurl}}/images/research/{{page.photo}}" data-action="zoom">
**Abstract**
The COVID-19 pandemic may be over, but transitions in course delivery format?going remote, or hybrid?are still being used and universities appreciate their potential to attract more diverse groups of students than purely on-campus classes. This flexible education format in platforms like Zoom is here to stay. To deliver better learning experiences, educators need to gauge students' engagement in courses. But, while lecturing, it is challenging to assess engagement online. Machine learning technology can help educators during lectures so that the classroom engagement dynamics can be estimated, and proper interventions can be taken in real time. However, data-driven machine learning (ML) technology puts its users at risk of privacy loss, even with distributed machine learning programs hosted in individual students? personal workstations that learn patterns of their users and report the patterns back to a global learner that merges the resulting findings into a global ML model. Although no private data is leaving local workstations, the individual patterns distributed across the network can leak private data. This project will build innovative privacy-aware student-engagement detection technology. The main novelty of this project will be in its capacity to learn in real-time from various types of student engagement data without directly accessing it. In platformized online education, the project will add privacy guarantee to users, while underrepresented STEM students can safely interact with educators and peers to facilitate the community of inquiry model of learning.

The project aims to design a distributed machine learning paradigm that introduces three hierarchical categories of learner nodes that will be facilitated by a novel neural network architecture agnostic gradient sharing algorithm that will make any coordinated attempt to reconstruct original data from the partial gradients shared between nodes provably intractable. The hierarchical organization of the framework makes it effective at providing a level of obfuscation in partial gradients coming from partially observable model architecture. The research methodology will be motivated by concepts of differential privacy in gradient sharing algorithms. The project will introduce new concepts regarding how to select the gradient components to distribute and to optimize learnable parameters without incurring any additional computational overhead in building a global model, compared to the state-of-the-art gradient-based defense algorithms. The project will be driven by two research thrusts: (1) design of a provable privacy-aware distributed machine learning framework, (2) leveraging the novel framework in estimating student engagement in platformized online STEM education at University of Colorado Denver. The research effort will solve an open problem in the distributed machine learning from a black-box perspective where both full gradients and model architecture are unknown. Therefore, it has potential to be adopted in other areas where privacy aware ML is a requirement. The project outcomes will provide immediate benefits to 1) undergraduate STEM students while improving student retention and overall learning experiences, 2) online STEM instructors who will be able to gauge student engagement in real-time with an equitable, privacy-aware and inclusive learning environment.

This award reflects NSF's statutory mission and has been deemed worthy of support through evaluation using the Foundation's intellectual merit and broader impacts review criteria.

**Sponsor**
National Science Foundation [Award (id: 2329919) Information Link](https://www.nsf.gov/awardsearch/showAward?AWD_ID=2329919&HistoricalAwards=false)

**Collaborators**
- Ashis Kumer Biswas (PI)
- James Thiering (MS Student, CU Denver)
- Deeptimaan Banerjee (MS Student, CU Denver)
- Prateek Gothwal (MS Student, CU Denver)
- Dylan Zelkin (MS Student, CU Denver)
- Pooja Kulkarni (MS Student, CU Denver),
- Tarun Sethupath Radha Krishna (MS Student, CU Denver)
- Justin Quijada Perla (High School Student, Broomfield High School)
- Ethan Dorman (High School Student, Broomfield High School)

**Tools developed and published**
* Tool 1: [TABY 3.0: Teaching Assistant Bot for You](https://github.com/ashiskb/TABY.git)
* Tool 2: [ E-learning Students' Classroom Engagement Assessment tool with Bias Mitigated Multi-task Model](https://github.com/ashiskb/elearning-engagement-study.git)
* Tool 3: [Expression Classifier with Mixture of Experts: ExpressNet-MoE](https://github.com/DeeptimaanB/ExpressNet-MoE)
* Tool 4: [Engagement Detection with spatiotemporal cues: ViBED-Net](https://github.com/prateek-gothwal/ViBED-Net)


**Presentations and Publications of Research Products**

* *October 2025*: Deeptimaan Banerjee, Prateek Gothwal, and Ashis Kumer Biswas, ExpressNet-MoE: A Hybrid Deep Neural Network for Emotion Recognition, preprint at arXiv 2025 [[ Link ](https://arxiv.org/abs/2510.13493)], currently under review at Elsevier/MLWA.
* *October 2025*: Prateek Gothwal, Deeptimaan Banerjee, and Ashis Kumer Biswas, ViBED-Net: Video Based Engagement Detection Network Using Face-Aware and Scene-Aware Spatiotemporal Cues, preprint at arXiv 2025 [ [Link](https://arxiv.org/abs/2510.18016) ], currently under review at Springer/Nature.
* *October 2025*: Deeptimaan Banerjee, Prateek Gothwal, and Ashis Kumer Biswas, FedEngage: A Federated Learning Based Video Conferencing Systemfor Real-time Student Engagement Tracking. [ [Link](https://olucdenver-my.sharepoint.com/:b:/g/personal/ashis_biswas_cuanschutz_edu/ESmzHwXHN0hGqAVlT107Y6wBcsAxKMyEzHf3Ee1V8Na6zQ?e=4qBhQJ)]
* *October 2025*: James Thiering, Tarun Sethupat Radha krishna, Dylan Zelkin, and Ashis Kumer Biswas, Automatic Assessment of Students' Classroom Engagement with Bias Mitigated Multi-task Model. [[Link](https://arxiv.org/abs/2510.22057)]
* *February 2024*: Justin Quijada-Perla, Ethan Dorman, Ashis Kumer Biswas, An engagement detection demo with and without bias mitigation. The research was presented by 2 high-school seniors, Justin Quijada-Perla and Ethan Dorman who I mentored in Fall’23 and Spring’24 in Boulder Valley School district (BVSD) Regional Science Fair and received good feedbacks from the judges and the attendees. [ Link to the presented poster ](https://olucdenver-my.sharepoint.com/:p:/g/personal/ashis_biswas_cuanschutz_edu/EfzpsrP1uZtEg3l0f0mmASYBkpZhJpACE5SzUnn8R7JkqA?e=dEw9xL)


-