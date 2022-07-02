---
title: VEX programming tips
toc: true
tags:
- tutorial
categories:
- Inspiring Learning
- VEX Robotics
thumbnail: 'http://ww1.sinaimg.cn/large/bea775ably1g44dxykviij23h02bckg0.jpg'
cover: 'http://ww1.sinaimg.cn/large/bea775ably1g44dxykviij23h02bckg0.jpg'
abbrlink: c76a
date: 2019-05-25 00:53:29
---

# 使用万能的电机控制自定义函数

由于电机的端口是一个`motor`类型的变量，所以我们可以将电机当作变量传参。

## 模板

```c++
void m(motor motorname,int speed=100,int tor=100) //定义一个名为m的函数，三个参数分别是电机端口、速度（默认100）、力矩（默认100）。
{
  motorname.setMaxTorque(tor,percentUnits::pct);
  motorname.spin(directionType::fwd,speed,percentUnits::pct);
}
```



## 实例

```c++
// 底盘四个电机全功率向前1000ms
using namespace vex;
void test()
{
    //四个电机同时以速度100，力矩100向前
    m(MotorLF,100,100);
     m(MotorLB,100,100);
     m(MotorRF,100,100);
     m(MotorRB,100,100);
    //延时1000ms
    task::sleep(1000);
    //四个电机同时停
    m(MotorLF,0);//由于在这里（一般情况下）力矩默认都为100，所以可以直接不传入力矩这个参数，跳过即可）
     m(MotorLB,0);
     m(MotorRF,0);
     m(MotorRB,0);
}
```