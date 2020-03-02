# This is my PJ  

---------- 

- 在设置CSS的hover时，有时会发现hover不起作用，总结一下原因：  
    1. 顺序：a:link，a:visited，a:hover，a:active  
    2. hover后面有空格——子元素起效  
- nav遮住下面内容：body设置padding-top  
- 响应式布局  
    1. 少使用绝对的宽度，多使用百分比  
	2. 字体不使用px，使用相对大小的em，或者高清方案rem  
	3. 流式布局  
	4. 选择加载css  
		a. <link rel="stylesheet" type="text/css" media="screen and (max-device-width: 400px)" href="tinyScreen.css" />
        b. 如果屏幕宽度小于400像素（max-device-width: 400px），就加载tinyScreen.css文件 
- 如何做一个nav？
    1. header和ul的margin和padding都要设置为0  
    2. 
