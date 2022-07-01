---
widgets:
  - position: left
    type: toc
  - position: left
    type: recent_posts
  - position: left
    type: subscribe_email
    description: null
    feedburner_id: declan-haojin
  - position: left
    type: categories
title: VRC Change Up 2020-2021 Dev Log
toc: true
tags:
  - log
categories:
  - Inspiring Learning
  - VEX Robotics
thumbnail: >-
  https://cdn.jsdelivr.net/gh/declan-haojin/blog-image@master/img/20200605015514.png
cover: >-
  https://cdn.jsdelivr.net/gh/declan-haojin/blog-image@master/img/20200605015514.png
abbrlink: 2da8
date: 2020-06-15 23:20:07
password:
---



# 05/31/20
---
## Summary

Today we officially began our new season robotics development. To be honest, I have less time available this season due to my SAT and TOEFL exam and college application stuff. However, I want to insist on this activity which I've already participated since my middle school. My job will gravitate mainly on programming. 

Plus, we move to a brand new activity room with double area and completely new equipment and match field. Hope I can achieve some accomplishments that I left as pities last season.

So sad that today I am alone in my team. They are all busy preparing AP makeup exams, although I also need to retake. 

## Task List

- [x] Get started and familiar with code formatting and competition template again.
- [x] Recode and design my code format and template.
- [x] Finish the entire base program with optimization

<!--more-->

# 06/07/20
---
## Summary

I did a lot things today. And my teammates finally came this time. However, I feel like they did nothing except drawing some useless drafts and chatting with each other. I was there programming. I have finished my basic fraamwork of the whole program and now the manual basic control mood of robot has been completed. That what I am doing now is to make it easy to code and config segments. I want to provide others who have no idea about programming the ability to run a robo without the assistant of a programmer. In the last a few minutes, I talked to Mr.Su, the coach of Robocup which is another robotics competition, in regard with some techniques that control the displacement and turning more accurate. It's my goal to make the best motion control algorithm and I believe I will achieve it.

## Reference
[Inertial Sensor - Sensors for VEX V5](https://kb.vex.com/hc/en-us/articles/360037382272-Inertial-Sensor-Sensors-for-VEX-V5)

## Todo

- [ ] The going straight control algorithm using PID 
- [x] Turning control using inertia sensor

# 06/14/20
---



## Summary

Today we are alone. I assist Tony who is charged for the chassis building picked parts for around an hour. After that I came back to my own job coding. I tested the performance and accuracy of the brand new inertial sensor, which worked really well with error less than 2 degree per round. Also Mr.SU gave me some materials about PID control system and I hopefully will work on it the entire next time. Also, I walked home companied with my coach Mr.Han telling me that the national competiton has been cancelled due to the second epdemic wave in Beijing. Still I enjoy participating in club every week and learn a lot.



## Todo

- [ ] The going straight control algorithm using PID
- [ ] Encapsulation of `controller print function`
- [ ] More custom parameters

<div class="justified-gallery">

![](https://cdn.jsdelivr.net/gh/declan-haojin/blog-image@master/img/20200615004721.png)

</div>

# 06/21/20
---


## Summary
Today I still focus on programming. At first I would like to try reading the material given by Mr.Su but soon I gave up since it's so esoteric and tons of professional terms that I cannot understand. Then I turned into help on VEX Forum and it really help me a lot. I found a tutorial video about PID controller and also multitasking which is fantastic for me. It only took me half an hour to finish it and learned how to write PID. Then I began experienment and it went pretty good. I was stuck on the output unit and finally I figure out the output should be voltage. Today I didn't gravitate much on code style and readability. Fighting!


## Todo

- [x] Quad encoder configuration & test
- [x] Get degree by alternatives using the encoder
- [x] Learned multitasking
- [x] Full PID Algorithm
- [ ] PID parameter tuning
- [ ] Add encoder mood preference: internal/external encoder

<div class="justified-gallery">

![](https://cdn.jsdelivr.net/gh/declan-haojin/blog-image@master/img/20200621232000.png)
![](https://cdn.jsdelivr.net/gh/declan-haojin/blog-image@master/img/20200621232022.png)

</div>
