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
title: 'AP Stats: Simulation by Programming'
toc: true
tags: []
categories:
  - Learn
thumbnail: >-
  https://cdn.jsdelivr.net/gh/declan-haojin/blog-image@master/img/20200907224118.png
cover: >-
  https://cdn.jsdelivr.net/gh/declan-haojin/blog-image@master/img/20200907224118.png
abbrlink: daf2
date: 2020-09-07 22:21:24
password:
---
## Poster
---

![](https://cdn.jsdelivr.net/gh/declan-haojin/blog-image@master/img/20200907222929.png)



![](https://cdn.jsdelivr.net/gh/declan-haojin/blog-image@master/img/20200907222938.png)
![](https://cdn.jsdelivr.net/gh/declan-haojin/blog-image@master/img/20200907222945.png)
![](https://cdn.jsdelivr.net/gh/declan-haojin/blog-image@master/img/20200907222952.png)

## Code
---

``` python
import random
import csv
import codecs
import matplotlib.pyplot as plt
plt.style.use('ggplot')

plt.rcParams['savefig.dpi'] = 100 #图片像素
plt.rcParams['figure.dpi'] = 100 #分辨率

scale = 10000000
num1 = num2 = num3 = 0
customer = []
yogurt = []
pos1 = []
pos2 = []
pos3 = []

for i in range(0,scale):
    temp = random.randint(0,100)
    if(temp <= 38): num1 = num1 + 1
    elif(temp <= 80): num2 = num2 + 1
    else: num3 = num3 + 1
        
    customer.append(temp)
    pos1.append(float(num1)/(i+1))
    pos2.append(float(num2)/(i+1))
    pos3.append(float(num3)/(i+1))
# print(pos1[9999])
# with open("data.csv","w") as csvfile: 
#     writer = csv.writer(csvfile)

#先写入columns_name
    # writer.writerow(["num","customer","type","pos1","pos2","pos3"])
    # #写入多行用writerows
    # for i in range(0,scale):
    #     writer.writerow([i, customer[i], pos1[i], pos2[i], pos3[i]])
    # print("保存文件成功，处理结束")
# print(len(customer))
for i in range(0,scale):
    temp = customer[i]
    if(temp <= 38): customer[i] = "chocolate"
    elif(temp <= 80): customer[i] = "vanilla"
    else: customer[i] = "strawberry"

# for i in customer:
print(pos1[len(pos1)-1])
print(pos2[len(pos2)-1])
print(pos3[len(pos3)-1])
plt.figure()
plt.subplot(2,2,1)

plt.xlabel('Until the nth customer') 
plt.ylabel('Possibility') 
plt.plot(range(0,scale), pos1, label="chocolate")
plt.plot(range(0,scale), pos2, label="vanilla")
plt.plot(range(0,scale), pos3, label="strawberry")
plt.legend()



plt.subplot(2,2,2)
plt.xlabel('Flavor') 
plt.ylabel('Number of the customer') 
list0 = [num1,num2,num3]
list1 = [scale*0.38, scale*0.42, scale*0.2]
y = ["chocolate","vanilla","strawberry"]

x = list(range(len(y)))
total_width, n = 0.8, 4
width = total_width / n
plt.bar(x, list0, width=width, label='Actual', tick_label=y, fc='y')
for i in range(len(x)):
	x[i] = x[i] + width
plt.bar(x, list1, width=width, label='Predicted', fc='r')
plt.legend()


plt.subplot(2,2,3)
labels = ["chocolate","vanilla","strawberry"]    # 各部分标签
sizes = [pos1[len(pos1)-1], pos2[len(pos2)-1], pos3[len(pos3)-1]]    # 各部分大小
colors = ['yellowgreen','lightskyblue','yellow']
explode = (0,0,0) #将某一块分割出来，值越大分割出的间隙越大
patches,text1,text2 = plt.pie(sizes,
                      explode=explode,
                      labels=labels,
                      colors=colors,
                      labeldistance = 1.2,#图例距圆心半径倍距离
                      autopct = '%3.2f%%', #数值保留固定小数位
                      shadow = False, #无阴影设置
                      startangle =90, #逆时针起始角度设置
                      pctdistance = 0.6) #数值距圆心半径倍数距离
#patches饼图的返回值，texts1饼图外label的文本，texts2饼图内部文本
# x，y轴刻度设置一致，保证饼图为圆形
plt.axis('equal')
plt.legend()


plt.subplot(2,2,4)
plt.xlabel('The nth customer') 
plt.ylabel('Flavor') 
plt.plot(range(0,scale), customer)



plt.show()

```


``` python
import random
import csv
import codecs
import matplotlib.pyplot as plt

ans1 = []
ans2 = []
ans3 = []

def process(x):
    random.seed(x)
    plt.style.use('ggplot')

    plt.rcParams['savefig.dpi'] = 100 #图片像素
    plt.rcParams['figure.dpi'] = 100 #分辨率

    scale = 10000
    num1 = num2 = num3 = 0
    customer = []
    yogurt = []
    pos1 = []
    pos2 = []
    pos3 = []

    for i in range(0,scale):
        temp = random.randint(0,100)
        if(temp <= 38): num1 = num1 + 1
        elif(temp <= 80): num2 = num2 + 1
        else: num3 = num3 + 1
            
        customer.append(temp)
        pos1.append(float(num1)/(i+1))
        pos2.append(float(num2)/(i+1))
        pos3.append(float(num3)/(i+1))
    # print(pos1[9999])
    # with open("data.csv","w") as csvfile: 
    #     writer = csv.writer(csvfile)

    #先写入columns_name
        # writer.writerow(["num","customer","type","pos1","pos2","pos3"])
        # #写入多行用writerows
        # for i in range(0,scale):
        #     writer.writerow([i, customer[i], pos1[i], pos2[i], pos3[i]])
        # print("保存文件成功，处理结束")
    # print(len(customer))
    for i in range(0,scale):
        temp = customer[i]
        if(temp <= 38): customer[i] = "chocolate"
        elif(temp <= 80): customer[i] = "vanilla"
        else: customer[i] = "strawberry"

    # for i in customer:
    # print(pos1[len(pos1)-1])
    # print(pos2[len(pos2)-1])
    # print(pos3[len(pos3)-1])

    ans1.append(pos1[len(pos1)-1])
    ans2.append(pos2[len(pos2)-1])
    ans3.append(pos3[len(pos3)-1])

for i in range(0,200):
    process(i)

plt.figure()

plt.xlabel('Randem.seed(n)') 
plt.ylabel('Possibility') 
plt.plot(range(0,200), ans1, label="chocolate")
plt.plot(range(0,200), ans2, label="vanilla")
plt.plot(range(0,200), ans3, label="strawberry")
plt.legend()
plt.show()
```
