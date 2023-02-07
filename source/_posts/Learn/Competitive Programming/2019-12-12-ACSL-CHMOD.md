---
title: ACSL CHMOD
toc: true
categories:
  - Learn
  - Competitive Programming
thumbnail: 'http://ww1.sinaimg.cn/large/bea775ably1g9u9hrjk1sj21mt0wy7pk.jpg'
cover: 'http://ww1.sinaimg.cn/large/bea775ably1g9u9hrjk1sj21mt0wy7pk.jpg'
abbrlink: d44f
date: 2019-12-12 19:30:41
tags:
---

~~~java
import java.util.Scanner;

public class CHMOD
{
    static String[] num = new String[4];
    public static void input()
    {
        Scanner input = new Scanner(System.in);
        String s = input.next();
        int len = s.length();
        int cnt = 0;
        num[cnt++] = s.substring(0, 1);
        for(int i=1;i<len;i++)
        {
            if(s.charAt(i)>='0' && s.charAt(i)<='9')
            {
                num[cnt++] = Integer.toBinaryString(s.charAt(i)-'0');
            }
        }
        input.close();
    }

    public static void process()
    {
        String[] ans = new String[]{"","","",""};
        for(int i=1;i<4;i++)
        {
            while(num[i].length()<3) num[i] = '0' + num[i];
            if(num[i].charAt(0) == '1') ans[i] += 'r'; else ans[i] += '-';
            if(num[i].charAt(1) == '1') ans[i] += 'w'; else ans[i] += '-';
            if(num[i].charAt(2) == '1') ans[i] += 'x'; else ans[i] += '-';
        }
        
        boolean flag1,flag2,flag3;
        flag1 = flag2 = flag3 = false;

        if(num[0].charAt(0)=='1' && ans[1].charAt(2)=='x') flag1 = true;
        if(num[0].charAt(0)=='2' && ans[2].charAt(2)=='x') flag2 = true;
        if(num[0].charAt(0)=='4' && ans[3].charAt(2)=='x') flag3 = true;
        
        for(int i=1;i<4;i++)
        {
            System.out.print(num[i]+" ");
        }
        System.out.print("and ");

        
        if(ans[1].charAt(2)=='x' && flag1 == true)
        {
            System.out.print( ans[1].charAt(0) );
            System.out.print( ans[1].charAt(1) );
            System.out.print("s");
        }
        else System.out.print(ans[1]+" ");

        if(ans[2].charAt(2)=='x' && flag2 == true)
        {
            System.out.print( ans[2].charAt(0) );
            System.out.print( ans[2].charAt(1) );
            System.out.print("s");
        }
        else System.out.print(ans[2]+" ");

        if(ans[3].charAt(2)=='x' && flag3 == true)
        {
            System.out.print( ans[3].charAt(0) );
            System.out.print( ans[3].charAt(1) );
            System.out.print("t");
        }
        else System.out.print(ans[3]);

        
    }

    
    public static void main(String[] args)
    {
        input();
        process();
    }
}

/*
0,5,2,6
1,7,3,0
2,4,1,5
4,2,3,4
4,5,6,7

*/
~~~

