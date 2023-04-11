---
title: 2019-nCoV Data Prediction
toc: true
tags: []
categories:
  - Learn
  - Machine Learning
thumbnail: >-
  https://cdn.jsdelivr.net/gh/declan-haojin/blog-image@master/img/Snipaste_2020-03-06_18-29-11.png
cover: >-
  https://cdn.jsdelivr.net/gh/declan-haojin/blog-image@master/img/Snipaste_2020-03-06_18-29-11.png
abbrlink: '324'
date: 2020-02-04 17:48:41
---

> 2019 Novel Coronavirus (2019-nCoV) is a virus (more specifically, a coronavirus identified as the cause of an outbreak of respiratory illness first detected in Wuhan, China. Early on, many of the patients in the outbreak in Wuhan, China reportedly had some link to a large seafood and animal market, suggesting animal-to-person spread. However, a growing number of patients reportedly have not had exposure to animal markets, indicating person-to-person spread is occurring. At this time, it’s unclear how easily or sustainably this virus is spreading between people.  The latest situation summary updates are available on CDC’s web page  [2019 Novel Coronavirus, Wuhan, China](https://www.cdc.gov/coronavirus/2019-ncov/index.html)
>
> from https://www.cdc.gov/coronavirus/2019-ncov/about/index.html

![](https://pic.downk.cc/item/5e39539d2fb38b8c3ca5f40c.png)

# Lead

As everyone knows, the serious coronavirus is attacking our country especially in Wuhan while most activities are canceled. Staying at home become the daily routine. Besides working on learning stuff, I am trying to learn Python, a popular programming language which I should master long before. 

After learning Matrix Linear Regression, an powerful and beginner-friendly algorithm used for predicting, I got an idea: **forecasting the future trend by using a series of data including the number of people infected with virus**. So I just started to do it and it's time to share my computing results.

<!--more-->

# Function

***The function of my program is to predict the next-day numbers of people confirmed, suspected, cured... in China by data of previous days.***

# Process

## Collecting Data

There are tremendous available data on [Github](github.io), and I chose a real-time updating excel files as the data sources including the number of people confirmed, suspected, severe, dead, cured and observed. 

![](https://pic.downk.cc/item/5e395a672fb38b8c3ca6a512.png)

## Analyzing Data

I use `Pycharm` with `sklearn`on local computer environment (Windows 10, 1903). 

- The **samples** are numbers of people in different situation each day.
- The **predictions** are numbers of people next day
- The **method** is `multivariable linear regression`

![](https://pic.downk.cc/item/5e395bf02fb38b8c3ca6cab4.png)

## Results

**Based on the data from January 21 to February 3, 2020, the following is my forecast for February 4**

![](https://pic.downk.cc/item/5e39537e2fb38b8c3ca5f0d7.png)

## What does the data tell us

![](https://pic.downk.cc/item/5e39539d2fb38b8c3ca5f40c.png)

***At least for the next few days, the number will still increasing at a serious rate. Please pay attention to safety, try to avoid going out for yourself and for this society.***

## 武汉加油，中国加油！



# Project Code

## `dataReader.py`

```python
def load_data(sample):
    file = open("C://Users/19132/Desktop/data.txt")
    i = 0
    for line in file:
        sample.extend([line.split()])
        i += 1
    return i
    # print(sample)

sample = []
load_data(sample)
```

## `modelTrainer.py`

```python
from sklearn import linear_model
import dataReader
import modelTester

prediction = []

def process(data, sampleNum, n):
    target = []
    i = 1
    while i < sampleNum:
        target.append(data[i][n])
        i += 1

    # print(target)

    reg = linear_model.LinearRegression()
    reg.fit(data[0:-1], target)

    # prediction.extend(reg.predict([[17205,21558,2296,361,475,152700]]))
    prediction.extend(reg.predict([[20438,23214,2788,425,632,171329]]))

data = []
num = dataReader.load_data(data)

i = 0
while i < 6:
    process(data, num, i)
    i += 1

modelTester.testing(prediction)
```

## `modelTester.py`

```python
def testing(prediction):
    print("processing...")
    print(format("confirmed", "<17"), end="\t")
    print(format("suspected", "<17"), end="\t")
    print(format("severe", "<17"), end="\t")
    print(format("death", "<17"), end="\t")
    print(format("cures", "<17"), end="\t")
    print(format("observation", "<17"))

    for x in prediction:
        print(format(int(x), "<17"), end="\t")
    print("\ndone!")
```

## `graphGenerator.py`

```python
import matplotlib.pyplot as plt
from mpl_toolkits.mplot3d import Axes3D
import random
import numpy as np


def draw_scatter(x, y):
    plt.scatter(x, y)
    # plt.xlabel('Heights')
    # plt.ylabel('Weight')
    # plt.title('Heights & Weight of Students')
    plt.show()


def draw_3d_scatter(x, y, z):
    fig = plt.figure()
    ax = fig.add_subplot(111, projection="3d")
    ax.scatter(x, y, z, c='r', marker='o')
    ax.set_xlabel('xlabel')
    ax.set_ylabel('ylabel')
    ax.set_zlabel('zlabel')
    plt.show()


def draw_3d_line(x, y, z):
    fig = plt.figure()
    ax = fig.gca(projection='3d')
    ax.plot(x, y, z, label='parametric curve')
    ax.legend()
    plt.show()
```

***Data Sources https://github.com/JackieZheng/2019-nCoV***

