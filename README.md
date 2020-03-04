# 😜Notes about my Project 01  

* sources：[fudan_19ss_web基础课程_Project_01_旅游照片分享平台（上）](https://github.com/fudansswebfundamental/Project1-2020)

* 在设置CSS的hover时，有时会发现hover不起作用，原因：  
  * 顺序：`a:link` < `a:visited` < `a:hover` < `a:active`
  * hover后面有空格——子元素起效  
  * 颜色没写对🙃

* 响应式布局  
  * 少使用绝对的宽度，多使用百分比  
  * 字体不使用px，使用rem  
  * 流式布局  
  * 选择加载css  
  * `<link rel="stylesheet" type="text/css" media="screen and (max-device-width: 400px)" href="tinyScreen.css" />`
  如果屏幕宽度小于400像素（max-device-width: 400px），就加载tinyScreen.css文件，或者`@media screen and (max-width: 830px) {...}`

* 如何做一个nav？
  * header和ul的margin和padding都要设置为0，不然会有边框  
  * li ul的displace属性设置为none，再hover时才会block
  * 避免nav遮盖下面内容：body设置padding-top  

* 流式布局

* CSS设计手册
  * font-size:
    * html.`font-size: 12px`;html的font-size才是root，而不是body
    * a.`font-size: 1.2rem`;
    * p.`font-size: 1.2rem`;
    * h1.`font-size: 1.6rem`;
    * footer.p.`font-size: 1rem`;
  * color
    * `white` < `#fafafa` < `gainsboro` < `grey`
    * before linked: `rgba(255, 255, 255, 0.8)`
    * `black` > `#444444`
  * font-family: "Gill Sans", sans-serif;

* Boostrap

* 神秘情形：在chrome和firefox无法显示，搜了好久：在CSS文件头加上 `@charset "utf-8"`

* 实现一段文字溢出后显示省略号

    ```css
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    ```

* 细节
  * 浏览器上加logo`<link rel="icon" href="../images/Bathtub.png" type="image/x-icon"/>`
  * height和line-height：设置了height后，如果被压缩换行，则样式就无法显示了！所以设置line-height就比较好（）
  * 🙃彩蛋：Solar System
  * 设置`line-height: 40px;`使元素高度相同
