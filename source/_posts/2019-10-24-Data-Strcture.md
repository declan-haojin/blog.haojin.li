---
title: Data Structure
toc: true
tags:
- data structures
categories:
- Inspiring Learning
- Competitive Programming
thumbnail: 'http://ww1.sinaimg.cn/large/bea775ably1g8gnmsanfwj20p00dcaaw.jpg'
cover: 'http://ww1.sinaimg.cn/large/bea775ably1g8gnmsanfwj20p00dcaaw.jpg'
img: 'http://ww1.sinaimg.cn/large/bea775ably1g8gnmsanfwj20p00dcaaw.jpg'
author: Declan
abbrlink: ad11
date: 2019-10-24 05:15:56
updated: 2019-10-30 23:45:49
---


## ArrayList

---

~~~java
// the data type must be a type of class
ArrayList<String>  a = new ArrayList<String>();
ArrayList<Integer> b = new ArrayList<Integer>();

// the size of the ArrayList
arrayList.size();

// add data to the ArrayList
arrayList.add("DATA");

// replace data by returning the value of the replaced data
arrayList.set();

// remove data by returning the value of the removed data
arratList.remove();
~~~

### How to traverse the ArrayList

<!--more-->

~~~JAVA
for(int i=0;i<arrayList.size();i++)
{
    int tmp = arrayList.get(i);
}

for(String tmp: words)
// FORM: for (dataType tmp:dataStructureName)
~~~

### How to remove specific elements from ArrayList

~~~JAVA
// notice that the order is inverse
for(int i=arrayList.size()-1;i>=0;i--)
{
    int tmp = arrayList.get(i);
}
~~~

## Stack

---

```java
Stack<Integer> stack = new Stack<Integer>();
// inherit all the method from ArrayList
// new method like push,pop and peek
stack.push();
stack.pop();
// find the value of the top of the stack without removing it 
stack.peek();
```