---
title: ACSL Diff
toc: true
categories:
  - Learn
  - Competitive Programming
thumbnail: http://ww1.sinaimg.cn/large/bea775ably1ga2f6fqrkxj20xd0iswfd.jpg
cover: http://ww1.sinaimg.cn/large/bea775ably1ga2f6fqrkxj20xd0iswfd.jpg
abbrlink: defb
tags: []
date: 2019-12-19 22:43:14
---

---

```java
import java.util.Scanner;

public class Diff {
    static String s1,s2;
    static String[] word1;
    static String[] word2;

    static void input() {
        Scanner input = new Scanner(System.in);
        s1 = input.nextLine();
        s2 = input.nextLine();
        int len1 = s1.length();
        int len2 = s2.length();
    
        // for(int i=0;i<word1.length;i++) System.out.println(word1[i]);
    }
    
    static String process(String A, String B)
    {
        String common="";
        word1 = A.split(" ");
        word2 = B.split(" ");
        int len1 = word1.length;
        int len2 = word2.length;
        for(int i=0;i<len1;i++)
        {
            for(int j=0;j<len2;j++)
            {
                int pos = word2[j].indexOf(word1[i]);
                if(pos!=-1)
                {
                    word2[j] = word2[j].substring(0,pos) + word2[j].substring(pos+word1[i].length());
                    common = common + word1[i];
                    break;
                }
            }
        }
        return common;
    }
    
    static String declan(String c1, String c2)
    {
        String ans="";
        int len1 = c1.length();
        for(int i=0;i<len1;i++)
        {
            String tmp  = c1.substring(i, i+1);
    
            int pos = c2.indexOf(tmp);
            if(pos==-1) continue;
            ans = ans + tmp;
    
            c2 = c2.substring(pos+1);
        }
        return (ans=="")?("NONE"):(ans);
    }
    
    public static void main(String[] args)
    {
        for(int i=0;i<5;i++)
        {
            System.out.println("Please enter No."+(i+1)+" line of the input data:");
            input();
            String common1 = process(s1,s2);
            String common2 = process(s2,s1);
            System.out.println("The answer to No."+(i+1)+"line is:");
            System.out.println(declan(common1,common2));
            // System.out.println(common1);
            // System.out.println(common2);
        }
        System.out.println("All output done...");
        System.out.println("Thanks for your testing");
        
        // return;
    }
}
/*
The quick brown fox did jump over a log
The brown rabbit quickly did outjump the fox
How much wood would a woodchuck chuck if a woodchuck could
chuck wood He would chuck as much wood as a woodchuck could
I scream you scream we all scream for ice cream
He screams she screams they all scream for a creamery
A skunk sat on a stump and thunk the stump stunk
but the stump thunk the skunk stunk
I have got a date at a quarter to eight
I will see you at the gate so do not be late

abc defgh ijkl mnopq rstuv wxyz
ab cdefgh ijklmn opq rst uv w xy z
*/
```