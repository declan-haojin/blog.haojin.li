---
title: Getting started with Python 2
toc: true
tags:
  - python
  - note
categories: []
thumbnail: 'https://i.loli.net/2020/01/22/XzJFwKPmbsnlj26.png'
cover: 'https://i.loli.net/2020/01/22/XzJFwKPmbsnlj26.png'
abbrlink: '6005'
date: 2020-01-31 22:42:57
---

## For and Else

```python
for x in range(6):
    print(x)
    if x==2: break
else: print("over") # this line will skip if last line exists
```

## Pass

There cannot exist any blank within `for` and `if else`. We must use `pass` to avoid the mistake.

```python
for x in [1,2,3,4]:
	pass
print("over")
```

