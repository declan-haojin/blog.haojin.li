---
title: STL
toc: true
categories:
  - Learn
  - Competitive Programming
abbrlink: 24cf
tags: []
date: 2019-01-11 00:45:24
thumbnail:
cover:
---

# STL

> C++ STL 之所以得到广泛的赞誉，也被很多人使用，不只是提供了像vector, string, list等方便的容器，更重要的是STL封装了许多复杂的数据结构算法和大量常用数据结构操作。vector封装数组，list封装了链表，map和set封装了二叉树等，在封装这些数据结构的时候，STL按照程序员的使用习惯，以成员函数方式提供的常用操作，如：插入、排序、删除、查找等。让用户在STL使用过程中，并不会感到陌生。

# 迭代器

```
set<int>::iterator it_set//一个set<int>类型的迭代器
map<string,int>::iterator it_map//一个map<string,int>类型的迭代器
```



# SET

## set的各成员函数列表

1. begin()–返回指向第一个元素的迭代器
2. clear()–清除所有元素
3. count()–返回某个值元素的个数
4. empty()–如果集合为空，返回true
5. end()–返回指向最后一个元素的迭代器
6. equal_range()–返回集合中与给定值相等的上下限的两个迭代器
7. erase()–删除集合中的元素
8. find()–返回一个指向被查找到元素的迭代器
9. get_allocator()–返回集合的分配器
10. insert()–在集合中插入元素
11. lower_bound()–返回指向大于（或等于）某值的第一个元素的迭代器
12. key_comp()–返回一个用于元素间值比较的函数
13. max_size()–返回集合能容纳的元素的最大限值
14. rbegin()–返回指向集合中最后一个元素的反向迭代器
15. rend()–返回指向集合中第一个元素的反向迭代器
16. size()–集合中元素的数目
17. swap()–交换两个集合变量
18. upper_bound()–返回大于某个值元素的迭代器
19. value_comp()–返回一个用于比较元素间的值的函数

```
#include <iostream>
#include <cstdio>
#include <set>

using namespace std;
set<int> s;
set<int>::iterator it_set;

int main()
{
	int n;
	scanf("%d",&n);
	while(n--)
	{
		int tmp;
		scanf("%d",&tmp);
		s.insert(tmp);
	}
	for(it_set=s.begin();it_set!=s.end();it_set++)
	{
		printf("%d\n",*it_set);
	}
	return 0;
}
```

# 链接

# [容器set和multiset](https://blog.csdn.net/xiajun07061225/article/details/7459206)