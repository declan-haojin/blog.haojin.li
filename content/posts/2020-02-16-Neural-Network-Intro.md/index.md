---
title: Neural Network
toc: true
tags:
  - AI
categories:
  - Learn
  - Machine Learning
thumbnail: ''
cover: >-

  https://cdn.jsdelivr.net/gh/declan-haojin/blog-image@master/img/默认标题_公众号封面首图_2020-02-16-0.png
abbrlink: 9cdb
date: 2020-02-16 16:20:25
password:
---


> The server's previous technical issues have caused the loss of images and data.

# 基础的神经单元


| 参数   | 功能                                    |
| ------ | --------------------------------------- |
| $x_i$  | 输入的n维度的向量                       |
| $w_i$  | 加权的系数                              |
| $b$    | 偏置                                    |
| $z$    | $\Sigma_{i=1}^{n} w_ix_i+b$ 的值        |
| $h(z)$ | 经过激活函数得到的一个范围在0-1之间的数 |
| $a$    | 作为输入向量x传给下一个神经元           |




***思想：用无限多的神经元节点来模拟任何函数***

# 神经网络的训练过程

## 目的

训练出对于每个神经元节点最佳的$w$和$b$

## BP 算法

求出参数$b$和$w$的导数，当倒数为0时，loss function值最小，与期望值越接近

# 神经网络分类

## 卷积神经网络


通常用于图像识别

### 步骤

1. 以一个固定的大小在图像上滑动，卷积操作

   能够提取照片中的特征，能够避免需要识别的物体位置的不同而导致的差异


2. 输入神经网络中学习

## 循环神经网络 RNN

网络的输入不仅包括当前输入的x，还包括当前的记忆

适用于语言处理等信息前后关联的模型


- 时间顺序下，第一个词arrive输入后得到的输出a会作为输入和Taipei一起输入到第二个神经元当中，不断往后，相当于每一个神经元的输出都要考虑之前的输入，当然，输入的越早产生的影响就会越小

### 改进版： LSTM 长短时记忆


输入变成了四个，输出变成了两个

h'y'j'n除了原有的输出外，加入了本次记忆的信息输出
