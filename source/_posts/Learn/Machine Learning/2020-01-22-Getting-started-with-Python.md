---
title: Getting started with Python 1
toc: true
categories:
  - Learn
  - Machine Learning
thumbnail: https://i.loli.net/2020/01/22/XzJFwKPmbsnlj26.png
cover: https://i.loli.net/2020/01/22/XzJFwKPmbsnlj26.png
abbrlink: '6145'
date: 2020-01-22 22:42:57
tags:
---

# What's new for me

---

- Do not need to declare variables
- indentation replaces curly braces to divide code blocks

# Grammar

---

## Assigning value to multiple variables
```python
x, y, z = 1, 2, "hello"
```

## Define a global variable in local function

~~~python
def myfunc():
	global x
	x = "fantastic"
~~~

## Change the value of a global variable inside the function

~~~python
x = "declan"
def myfunc():
	global x
	x = "declan and jessica"
~~~

<!--more-->

## New data type for me

| Sample                                         | Data Type    |
| ---------------------------------------------- | ------------ |
| `x = 1j`                                       | `complex`    |
| `x = ["apple", "banana", "cherry"]`            | `list`       |
| `x = ("apple", "banana", "cherry")`            | `tuple`      |
| `x = range(6)`                                 | `range`      |
| `x = {"name" : "Bill", "age" : 63}`            | `dict`       |
| `x = {"apple", "banana", "cherry"}`            | `set`        |
| `x = frozenset({"apple", "banana", "cherry"})` | `frozenset`  |
| `x = True`                                     | `bool`       |
| `x = b"Hello"`                                 | `bytes`      |
| `x = bytearray(5)`                             | `bytearray`  |
| `x = memoryview(bytes(5))`                     | `memoryview` |

## Specifying the data type

```python
x = dataType(value)
```

## Verify the data type

```python
x = 'declan'
type(x)
```

## Random number

~~~python
import random
x = random.randrange(1,10)
~~~

## Multiline string (multiline comment)

~~~python
x = """ declan is a boy,
who is talented in CS,
has more hobbies than that."""
~~~

## Crop

~~~python
b = 'declan shares his life'
c = b[2:5]
~~~

### negative index

~~~
c = b[-5:-2]
~~~

## String method

~~~python
a = 'Declan and Billy'
len(a)      # length
a.strip()   # remove leading or trailing whitespace characters
a.lower()   # returns lowercase string
a.upper()   # returns uppercase string
a.replace("Billy","jessica") # replace part of the string to another
a.split(" ") #returns "DeclanBilly"
# check if substring exists
x = 'Declan' in a 
x = 'Declan' not in a
~~~

## String format

Put parameter into `{}`.

~~~python
x = "declan's dreaming score is TOEFL{}+ and SAT{}+"
a, b = 115, 1500
print(x.format(a, b))
~~~

Also can use `{0}` to ensure that parameters are placed in correct placeholder.

**Must starting with 0 and consecutive**

~~~python
x = "declan's dreaming score is TOEFL{1}+ and SAT{0}+"
a, b = 1500, 115
print(x.format(a, b))
~~~

## New arithmetic operator

| operator | name           | instance |
| -------- | -------------- | -------- |
| `**`     | power          | `x ** y` |
| `//`     | floor division | `x // y` |

## Logical operator

***`and`, `or`, `not` cannot be written in symbol***

## Data structure

### List

List is an ordered and changeable collection symbolized as `[]`

```python
####### CREATE #######
declanFriends = ["Billy","Cain","Tony","Tom"]

####### VISIT #######
# visit list
print(declanFriends[0])
# negative index
print(declanFriends[-1]) # -1 is the last element in the list
# visit range
print(declanFriends[1:2]) # returns a new list with specified elements
# visit negative index range
print(declanFriends[-4:-1]) # including -4 and excluding -1
# traverse the list
for x in declanFriends:
    print(x)
    ngtr
######## ADD ########
# add a new element to the tail
declanFriends.append("Jessica")
# add a new element to a specified index
declanFriends.insert(1,"Jessica")

######## REMOVE ########
declanFriends.remove("Tom")
declanFriends.pop(1) # remove the last one if no index specified, returning the last element
del declanFriends[1]

####### COPY #######
myFriends = declanFriends
myFriends = declanFriends.copy()
myFriends = list(declanFriends)

####### METHODS #######
myFriends.count("Billy") # returns the number of a specified element
myFriends.index("Billy") # returns the first index of a specified element
myFriends.reverse()
myFriends.sort()

####### OTHERS #######
# the length of the list
print(len(declanFriends))
# clear the list
declanFriends.clear()
```

***`list2 = list1` cannot really copy, because `list2` will just be a reference to `list1`. Changing `list2` is actually changing `list1`.***

### Tuple

Tuple is an orderable and unchangeable collection symbolized as `()`

```python
####### CREATE #######
companies = ("Microsoft", "Google", "Apple")
bestCompany = ("Microsoft",) # the ',' is necessary for recognizing variable as tuple

####### VISIT #######
# The same as the above List one
```

### Set

Set is an unordered and no-index collection symbolized as `{}`

~~~python
####### CREATE #######
companies = {"Microsoft","Google","Apple"}

####### ADD #######
companies.add("Amazon")
companies.update(("Amazaon","Facebook"))

####### REMOVE #######
companies.remove("Apple") # will raise error if the element is not exist
companies.discard("Apple") # will not raise error if the element is not exist

####### MERGE #######
name = declanFriends.union(companies)

####### OTHERS #######
difference() # returns a collection containing the differences between two or more collections.
difference_update() # delete the same elements from specified set
~~~

### Dictionary

Dictionary is a unorderable, changeable and indexed collection




# Q&A

---

1. `''` & `""`, which is recommend?

2. The different between `is` and `==`?

3. Return `none`?

```python
declanFriends = ["a","b","c"]
print(declanFriends.append("d"))
```

4. The recommend way to remove elements from list, `remove()`, `del()`, `pop()` or `del()`?

5. How to sort `list` in specific way?

6. Weird output

```python
thisset = {"apple", "banana", "cherry"}
thisset.update("orange", "mango", "grapes")
print(thisset)
# output: {'o', 's', 'r', 'a', 'e', 'apple', 'm', 'banana', 'g', 'p', 'n', 'cherry'}
```

7. What means `symmetric_difference()` in set method?