---
title: 汉诺塔问题
toc: true
categories:
  - Learn
  - Competitive Programming
thumbnail: >-
  https://cdn.jsdelivr.net/gh/declan-haojin/blog-image@master/img/20200703231436.png
cover: >-
  https://cdn.jsdelivr.net/gh/declan-haojin/blog-image@master/img/20200703231436.png
abbrlink: e841
date: 2018-12-06 11:08:36
tags:
password:
---

## 题面

> 相传在古印度圣庙中，有一种被称为汉诺塔(Hanoi)的游戏。该游戏是在一块铜板装置上，有三根杆(编号A、B、C)，在A杆自下而上、由大到小按顺序放置64个金盘(如下图)。游戏的目标：把A杆上的金盘全部移到C杆上，并仍保持原有顺序叠好。操作规则：每次只能移动一个盘子，并且在移动过程中三根杆上都始终保持大盘在下，小盘在上，操作过程中盘子可以置于A、B、C任一杆上。

*自己汉诺塔问题晕了很久，但搜索写多了至少也有一些通悟*

------

## 不妨假设：

- 当只有

  ```
  1个盘子
  ```

  时

  1. 把盘子从`A`直接移到`C`

- 当只有

  ```
  2个盘子
  ```

  时

  1. 将上面的盘子从`A`移动到`B`
  2. 将下面的盘子从`A`移动到`C`
  3. 将B上的盘子从`B`移动到`C`

- 当有

  ```
  3个盘子
  ```

  时

  1. 将上面的盘子从`A`移动到`C`
  2. 将中间的盘子从`A`移动到`B`
  3. 将C上的盘子从`C`移动到`B`
  4. 将下面的盘子从`A`移动到`C`
  5. 将B上面的盘子从`B`移到`A`
  6. 将B上的盘子从`B`移到`C`
  7. 将A上的盘子从`A`移到`C`

**可以发现当有3个盘子时，中间就会转化成2个盘子的情况，2个盘子最后就会转化成1个盘子的情况，显然可采用递归的方法**

## 思路

把`n-1`个盘子移到`B`，再把最下面的盘子移到`C`，再把`B`上的`n-1`个盘子移到`C`

```C++
#include <iostream>
#include <cstdio>
using namespace std;

int ans,n;

void dfs(int x,int a,int b,int c)// num from  trans   end
{
    if(x==1)
    {
        printf("move from %d to %d\n",a,c);
        ans++;
     	return;   
    }
    dfs(x-1,a,c,b);
    printf("move from %d to %d\n",a,c);
    ans++;
    dfs(x-1,b,a,c);
}

int main()
{
    scanf("%d",&n);
    dfs(n,1,2,3);
    printf("need %d steps\n",ans);
	return 0;
}
```

## 自己遇到的坑

- `a`,`b`,`c`三个柱子没有搞清楚，递归函数里到底四个参数分别代表什么要搞清楚

## 其他一些……

- `f[n]=f[n-1]*2+1`

  本次的次数就等于把n-1个盘子移动了两回，加上剩下的最大的盘子移动的一次