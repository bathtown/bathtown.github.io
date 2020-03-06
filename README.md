# 😜Notes about my Project 01  

* sources：[fudan_19ss_web基础课程_Project_01_旅游照片分享平台（上）](https://github.com/fudansswebfundamental/Project1-2020)

## 奇异现象👻

* 在设置CSS的hover时，有时会发现hover不起作用，原因：  
  * 顺序：`a:link` < `a:visited` < `a:hover` < `a:active`
  * hover后面有空格——子元素起效  
  * 颜色没写对🙃

* 在chrome和firefox无法显示css——在CSS文件头加上 `@charset "utf-8"`

* `<input type="submit"\>` 的 `width` 会包括 `padding` ，而 `<input type="text"\>` 和 `<input type="password"\>` 不会🙃  
  * W3C盒子模型（标准模型）：`width` 不包含 `padding` 和 `border`
  * IE盒子模型：`width = padding + border`
  * 怪异盒子模型：部分部分

* 前面的css会被后面的css覆盖🙃  

## 一些实现

* 实现一段文字溢出后显示省略号

  ```css
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  ```

* 做一个nav
  * 避免nav遮盖下面内容：body设置padding-top
  
* 下拉菜单
  *HTML

  ···html

  ···

  *CSS

  ···css

  ···

* 代码兼容

  ```html
  <!--[if lt IE 9]>
  <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
  <script src="https://oss.maxcdn.com/libs/respond.js/1.3.0/respond.min.js"></script>
  <![endif]-->
  ```

* 浏览器上加logo：`<link rel="icon" href="../images/Bathtub.png" type="image/x-icon"/>`

* 夜间模式
  * Reference: [How to Enable Dark Mode on Your Website with Pure CSS?](https://dev.to/oahehc/how-to-enable-dark-mode-on-your-website-with-pure-css-ake)
  * CSS `var()` 函数：`var(custom-property-name, value)`，`custom-property-name`必须以`--`开头，如：`--main-bg-color: white;`
  * `<input type="checkbox" id="nightMode" />`的兄弟元素`<article>...</article>`
  * HTML

    ```html
      <input type="checkbox" id="nightMode" />
      <article>
          <h1>Dark Mode w Pure CSS</h1>
          <p>
              This is an example to display how to support dark mode without using
              any Javascript.
          </p>
      </article>
    ```

  * CSS
  
    ```css
      :root {
          --bgColor: #fafafa;
          --fontColor: #444444;
          --borderColor: darkgrey;
      }

      /* choose brother element */
      #nightMode:checked,
      #nightMode:checked+* {
          --bgColor: #444444;
          --fontColor: #fafafa;
          --borderColor: grey;
      }

      * {
          margin: 0;
          padding: 0;
          background: var(--bgColor);
          color: var(--fontColor);
      }

      input[type="checkbox"] {
          position: absolute;/* 浮在表面 */
          top: 10px;
          right: 10px;
          border-radius: 50%;
          cursor: pointer;
      }

      article {
          min-height: 100vh;/* 全页面显示 */
      }

      h1 {
          border-bottom: 3px solid var(--borderColor);
      }
    ```

* 回到顶部
  * 设置锚点

    ```html
    <body style="height:2000px;">
        <div id="topAnchor"></div>
        <a href="#topAnchor" style="position:fixed;right:0;bottom:0">回到顶部</a>
    </body>
    ```

  * scrollTop（表示被隐藏在内容区域上方的像素数）

    ```html
    <body style="height:2000px;">
        <button id="test" style="position:fixed;right:0;bottom:0">回到顶部</button>
        <script>
            test.onclick = function(){
                document.body.scrollTop = document.documentElement.scrollTop = 0;
            }
        </script>
    </body>
    ```

  * scrollTo()

    ```html
    <body style="height:2000px;">
        <button id="test" style="position:fixed;right:0;bottom:0">回到顶部</button>
        <script>
            test.onclick = function(){
                scrollTo(0,0);
            }
        </script>
    </body>
    ```

* 模糊：`filter: blur;`

## 设计手册

* 页面
  * Home
  * Browser
  * Search
  * login
  * register
  * upload
  * my favorites & my photos
  * 404
  * bonus
  * end

* 正在浏览页面：`class="imlooking`

* 流程
  * 框架逻辑
  * 所有页面内容
  * 统一CSS样式

* 字体大小`font-size`:
  * html.`font-size: 12px`;html的font-size才是root，而不是body
  * a.`font-size: 1.2rem`;
  * p.`font-size: 1.2rem`;
  * h1.`font-size: 1.6rem`;
  * footer.p.`font-size: 1rem`;

* 字体`font-family: "Gill Sans", sans-serif;`

* 颜色
  * `white` < `#fafafa` < `gainsboro` < `grey`
  * before linked: `rgba(255, 255, 255, 0.8)`
  * `black` > `#444444`

* 盒子模型

  ```css
  * {
      padding: 0;/* 避免浏览器自动添加的padding和margin */
      margin: 0;
      box-sizing: content-box | border-box;/* 标准盒子模型 */
  }
  ```

## 新的知识🧀

* 响应式布局  
  * 少使用绝对的宽度，多使用百分比  
  * 字体不使用px，使用rem  
  * 选择加载css：`<link rel="stylesheet" type="text/css" media="screen and (max-device-width: 400px)" href="tinyScreen.css" />`如果屏幕宽度小于400像素（max-device-width: 400px），就加载tinyScreen.css文件
  * Media Queries：
    * CSS

      ```css
      @media screen and (max-width: 960px){
        body{
          background: #000;
        }
      }
      ```

      意思是：当页面小于960px的时候执行它下面的CSS

    * 等于960px：`max-device-width:960px`

    * 大于960px：`min-width:960px`

    * 大于960px小于1200px：`(min-width:960px) and (max-width:1200px)`

    * 注意顺序：

      ```css
      @media (min-width: 1200){ //>=1200的设备 }
      @media (min-width: 992px){ //>=992的设备 }
      @media (min-width: 768px){ //>=768的设备 }
      ```

    * 竖屏：`@media screen and (orientation: portrait) and (max-width: 720px) {...}`

    * 横屏：`@media screen and (orientation: landscape) {...}`

  * `width: 100%;max-width: 150px;`一起设定
  * 不同分辨率设备显示不同大小的图片

    ```html
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width,initial-scale=1">
        <title>Document</title>
        <script>
            document.createElement("picture");
        </script>
    </head>

    <body>
        <picture>
            <source srcset="./travel-images/normal/tiny/6114850721.jpg" media="(max-width: 600px)">
            <source srcset="./travel-images/normal/small/6114850721.jpg" media="(max-width: 800px)">
            <img srcset="./travel-images/normal/medium/6114850721.jpg" alt="pic">
        </picture>
    </body>

    </html>
    ```

* Flex布局
  * Reference: [阮一峰：Flex-语法](http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html)
  * Reference: [阮一峰：Flex-实例]( http://www.ruanyifeng.com/blog/2015/07/flex-examples.html)
  * 设为 Flex 布局以后，子元素的 `float` 、 `clear` 和 `vertical-align` 属性将失效
  * 父元素六个属性
    * `flex-direction` 排列方向：`flex-direction: row | row-reverse | column | column-reverse;`
    * `flex-wrap` 换不换行： `flex-wrap: nowrap | wrap | wrap-reverse;`
    * `flex-flow`：`flex-direction` + `flex-wrap`
    * `justify-content` 水平居中方式： `justify-content: flex-start | flex-end | center | space-between | space-around;`
      * `space-between` ：两端无间隔，中间有间隔
      * `space-around` ：两边也有间隔
    * `align-items` 垂直居中方式： `align-items: flex-start | flex-end | center | baseline | stretch;`
      * `baseline` ：以第一行文字为基线对齐
      * `stretch(default)` ：如果项目未设置高度或设为auto，将占满整个容器的高度。
    * `align-content` 多行对齐方式： `align-content: flex-start | flex-end | center | space-between | space-around | stretch;`
  * 子元素六个属性
    * `order` 前后顺序（左到右或上到下）：`order: <integer>;`
    * `flex-grow` 放大比例： `flex-grow: <number>; /* default 0 */`
    * `flex-shrink`缩小比例： `flex-shrink: <number>; /* default 1 */`
    * `flex-basis` 长度（父代 `flex-direction: column` ）或宽度（父代 `flex-direction: row` ），有点奇怪
    * `flex` ： `flex: none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]`
    * `align-self` 与其他子代不同的对齐方式，覆盖父代的 `align-items` ： `align-self: auto | flex-start | flex-end | center | baseline | stretch;`
  * 固定底栏
    * HTML

      ```html
        <body class="Site">
          <header>...</header>
          <main class="Site-content">...</main>
          <footer>...</footer>
        </body>
        ```

    * CSS

      ```css
      .Site {
        display: flex;
        min-height: 100vh;
        flex-direction: column;
      }
      .Site-content {
        flex: 1;
      }
      ```

* Grid布局
