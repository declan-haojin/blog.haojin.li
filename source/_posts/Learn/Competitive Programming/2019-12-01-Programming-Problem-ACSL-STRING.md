---
title: ACSL STRING
toc: true
categories:
  - Learn
  - Competitive Programming
thumbnail: http://ww1.sinaimg.cn/large/bea775ably1g9hlos321pj220414ggn8.jpg
cover: http://ww1.sinaimg.cn/large/bea775ably1g9hlos321pj220414ggn8.jpg
abbrlink: e1e7
tags: []
date: 2019-12-01 10:17:04
---


## Question
---
![](https://i.loli.net/2019/12/01/sIVLhJUS9fieDNW.png)

## My thought
---
Nothing... The problem is pretty easy, however it troubled me for a quite long time. Just follow the instruction of the problem and simulate the whole process by coding.

## Points to note
---
- The conversion between `String` and `int`
- How to handle `carry`
- Pay attention to the additional `sign`
- Sometimes we can use `char` to simplify the process

## Code
---
<!--more-->

```java
import java.util.Scanner;
class test
{
    static String num1;
    static int num2,num3;
    public static void input()
    {
        Scanner input = new Scanner(System.in);
        String s = input.next();
        int len = s.length();
        for(int i=0;i<len;i++)
        {
            if(s.charAt(i)==',')
            {
                num1 = s.substring(0,i);
                num2 = s.charAt(i+1)-'0';
                num3 = s.charAt(i+3)-'0';
                break;
            }
        }
        input.close();
        // System.out.println(num1);
        // System.out.println(num2);
        // System.out.println(num3);
    }

    public static void noSolution(int decimalPoint)
    {
        int IntgerNum = num2 - num3 - 1;
        while((IntgerNum--)!=0)
        {
            System.out.print("#");
        }
        System.out.print(".");
        for(int i=0;i<num3;i++)
        {
            System.out.print("#");
        }
    }

    public static void process()
    {
        //find the decimal point
        int decimalPoint  = num1.indexOf(".");
        int decimalLength = num1.length() - decimalPoint - 1;
        int integerLength = decimalPoint;
        
        //find the impossible situation
        if(decimalLength < num3 ||integerLength + 1 + num3 > num2)
        {
            noSolution(decimalPoint);
            return;
        }
        
        String newNum = num1.substring(0,decimalPoint+num3+1);

        // System.out.println(newNum);

        //convert to integer
        String tmp="";
        int newLen = newNum.length();
        for(int i=0;i<newLen;i++)
        {
            if(newNum.charAt(i)=='.') continue;
            tmp += newNum.substring(i,i+1);
        }

        int haveASign = 0;
        if(tmp.charAt(0)=='+')
        {
            haveASign = 1;
            tmp = tmp.substring(1);
        }
        else if(tmp.charAt(0)=='-')
        {
            haveASign = -1;
            tmp = tmp.substring(1);
        }

        // System.out.print(tmp);
        int intTmp = Integer.valueOf(tmp);
        //carry
        if(newLen+1<=num1.length() && num1.charAt(newLen)>'4') intTmp++; 

        String stringTmp = Integer.toString(intTmp);

        int nowLength = stringTmp.length() + 1 + Math.abs(haveASign);

        int cntOutput = 0;
        for(int i=0;i<num2-nowLength;i++)
        {
            System.out.print("#");
            cntOutput++;
        }
        if(haveASign==-1)
        {
            System.out.print("-");
            cntOutput++;
        }
        else if(haveASign==1) 
        {
            System.out.print("+");
            cntOutput++;
        }
        //print integer
        int p=0;
        for(p=0;p<num2-1-cntOutput-num3;p++)
        {
            System.out.print(stringTmp.charAt(p));
        }
        System.out.print(".");
        for(;p<stringTmp.length();p++)
        {
            System.out.print(stringTmp.charAt(p));
        }
        
    }
    public static void main(String[] args)
    {   
        input();
        process();
    }
}
```

# Tips

---

## `String.split(String)`

This method can be used to split a string into parts following the instruction.

- When use `.` or `|` as the symbol of split position, we need to use Escapes `//`.

- It returns a array with the satisfied arrays

