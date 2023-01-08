---
title: Digital Reassembly
toc: true
categories: []
thumbnail: 'http://ww1.sinaimg.cn/large/bea775ably1g9u9o4dlh3j21d90r9k00.jpg'
cover: 'http://ww1.sinaimg.cn/large/bea775ably1g9u9o4dlh3j21d90r9k00.jpg'
abbrlink: f903
date: 2019-12-12 21:21:45
tags:
---

~~~java
import java.util.Scanner;
public class digitReassembly {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        
        String s1 = input.next();
        String s2 = input.next();

        input.close();

        int num = Integer.valueOf(s2);

        while(s1.length()%num!=0)
        {
            s1 = s1 + "0";
        }

        int ans = 0;
        int cnt = s1.length()/num;
        int p = 0;
        for(int i=0;i<cnt;i++)
        {
            ans += Integer.valueOf(s1.substring(p,p+num));
            p = p+num;
        }

        System.out.println(ans);
    }
}
~~~

