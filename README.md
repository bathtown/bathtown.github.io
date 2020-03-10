# 😜Notes about my Project 01  

* sources：[fudan_19ss_web基础课程_Project_01_旅游照片分享平台（上）](https://github.com/fudansswebfundamental/Project1-2020)

## wicked problems👻

* 在设置CSS的hover时，有时会发现hover不起作用，原因：  
  * 顺序：`a:link` < `a:visited` < `a:hover` < `a:active`
  * `hover` 后面有空格——子元素起效  
  * 颜色没写对🙃

* 在 chrome 和 firefox 无法显示 css ——在 CSS 文件头加上 `@charset "utf-8"`

* content 到底有没有 padding 和 border？
  * W3C盒子模型（标准模型）：`width` 不包含 `padding` 和 `border`
  * IE盒子模型：`width = padding + border`
  * 怪异盒子模型：部分部分
  * 参见 `box-sizing: content-box | border-box;`

* 前面的 css 会被后面的 css 覆盖🙃

* `transform` 对应的时间是 `transition-duration` 🙃  

* `document.getElementById( ).style.color` 获取不了外部css的颜色，所以最开始都是 `""` ，类型是字符串型，而且 `=` 是拷贝而不是引用，无法改变原值

  ```js
  function likedPlus() {
    if (document.getElementById("liking").style.color == "rgb(255, 225, 225)" || document.getElementById("liking").style.color == "") {
        likedNumber++;
        document.getElementById("liking").style.color = "orangered";
    } else {
        likedNumber--;
        document.getElementById("liking").style.color = "rgb(255, 225, 225)";
    }
    document.getElementById("likedNumber").innerHTML = likedNumber;
    alert('This is my PJ');
  }
  ```

* 下层元素的 `transform` 会覆盖掉其他元素，甚至连 `position: fixed` 都无法幸免，解决：

  ```css
  transform: none;
  z-index: 2;
  ```

* 定位浮动
  * `position: absolute;` 是相对于 `static` 定位以外的第一个父元素
  * `position: fixed;` 相对于窗口
  * 在做 share list 时候要用 `absolute` ，以防止滚动不变

* 现代浏览器无法支持透明度？不！只是把 `rgba` 写成了 `rgb` ...🙃

## 一些实现

* 实现一段文字溢出后显示省略号

  ```css
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  ```

* 做一个nav
  * `fixed`
  * `transform : none`
  * 避免nav遮盖下面内容：`body` 设置 `padding-top`
  
* 下拉菜单
  * 整个 `dropList` 分为 `dropBtn` 和 `dropContent` 两个部分
  * `dropContent` 最开始隐藏，当鼠标移动到 `dropList` (这时就是指 `dropBtn` ) 上时，整个 `dropList` 显示

* 浏览器上加logo：`<link rel="icon" href="../images/Bathtub.png" type="image/x-icon"/>`

* 夜间模式
  * Reference: [How to Enable Dark Mode on Your Website with Pure CSS?](https://dev.to/oahehc/how-to-enable-dark-mode-on-your-website-with-pure-css-ake)
  * CSS `var()` 函数：`var(custom-property-name, value)`，`custom-property-name`必须以`--`开头，如：`--main-bg-color: white;`
  * `<input type="checkbox" id="nightMode" />` 的兄弟元素 `<article>...</article>`
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
                scrollTo(0,0);//window.scrollTo({ top: 0, behavior: "smooth" });平滑滚动
            }
        </script>
    </body>
    ```

* 模糊：`filter: blur;//filter用处很多啊`

* 404 page ：直接参考 giuhub 官方教程，值得注意的是，所有地址要引用绝对地址（css rel，href……），而不是相对于文件夹的地址

* 解决 font-awesome icon 加载太慢（16.5s，难以置信）
  * 换成 `svg` 图片，利用 `<embed src="imooc.svg" width="1024" height="768" type="image/svg+xml" />` 插入（注意：embed是html5的标准）/或者直接在 HTML 嵌入 SVG 代码（丑陋）
  * [Iconfont-Font Awesome](https://www.iconfont.cn/collections/detail?spm=a313x.7781069.0.da5a778a4&cid=2124)
  * 不直接用 .css 文件，而是使用 .ttf 字体文件（其实可以看到，font-awesome.css 里面就是这么做的）（**效果也不太好**）

    CSS

    ```css
    @font-face {
      font-family: 'FontAwesome';
      src: url('https://bathtown.github.io/font-awesome-4.7.0/fonts/fontawesome-webfont.eot');
    }

    .fa-github:before {
      content: '\f09b';
      font-family: FontAwesome;
    }
    ```

    HTML

    ```html
    <span class="fa fa-github" title="share on github~"></span> <!-- 注意，这里如果是 <i> 标签则会被识别为斜体，如果是 <div> 则会是块元素 -->
    ```

* 解决图片加载太慢

* transition：[cubic-bezier(.17,.67,.83,.67)](https://cubic-bezier.com/#.17,.67,.83,.67)

* 下拉选框

  ```html
  <form>
    <input list="browsers">
      <datalist id="browsers">
        <option value="Internet Explorer">
        <option value="Firefox">
        <option value="Chrome">
        <option value="Opera">
        <option value="Safari">
      </datalist>
  </form>
  ```

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

* 正在浏览页面：`class="imlooking"`

* 字体大小 `font-size`:
  * html. `font-size: 12px`; html 的 `font-size` 才是 root，而不是 body
  * a. `font-size: 1.2rem`;
  * p. `font-size: 1.2rem`;
  * h1. `font-size: 1.6rem`;
  * footer.p. `font-size: 1rem`;

* 字体 `font-family: monospace;`

* 颜色
  * 浅色： `white` < `#fafafa` < `gainsboro` < `grey`
  * 深色：`black` > `#444444`  
  * 透明白色：before linked: `rgba(255, 255, 255, 0.8)`

* 全局设置

  ```css
  * {
      padding: 0;/* 避免样式自动添加的padding和margin */
      margin: 0;
      box-sizing: content-box | border-box;/* 标准盒子模型 */
  }
  ```

* 语义元素
  * `main`：主体部分
    * `article`：主体内容中的文章
  * `copyright`：用于页脚版权
  * `hgroup`：用于 site map 列表
  * `details`：用于细节，有折叠起来的样式（ `summary` & `p`）
  * `small`：定义小型文本
  * `figure`：图表，标题为 `figcaption`

## 新的知识🧀

* 响应式布局  
  * 少使用绝对的宽度，多使用百分比  
  * 字体不使用 `px` ，使用 `rem`
  * 选择加载css
    * `<link rel="stylesheet" type="text/css" media="screen and (max-device-width: 400px)" href="tinyScreen.css" />`
    * 如果屏幕宽度小于400像素（max-device-width: 400px），就加载 tinyScreen.css 文件
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

  * `width: 100%;max-width: 150px;` 一起设定
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
  * 首先设置父元素 `display:flex;`
  * 父元素六个属性
    * `flex-direction` 排列方向

      ```css
      flex-direction: row | row-reverse | column | column-reverse;
      ```

    * `flex-wrap` 换不换行

      ```css
      flex-wrap: nowrap | wrap | wrap-reverse;
      ```

    * `flex-flow`：`flex-direction` + `flex-wrap`
  
    * `justify-content` 水平居中方式

      ```css
      justify-content: flex-start | flex-end | center | space-between | space-around;
      /* space-between ：两端无间隔，中间有间隔, space-around ：两边也有间隔 */
      ```

    * `align-items` 垂直居中方式

      ```css
      align-items: flex-start | flex-end | center | baseline | stretch;
      /*  baseline ：以第一行文字为基线对齐, stretch(default) ：如果项目未设置高度或设为 auto ，将占满整个容器的高度。 */
      ```

    * `align-content` 多行对齐方式：

      ```css
      align-content: flex-start | flex-end | center | space-between | space-around | stretch;
      ```

  * 子元素六个属性
    * `order` 前后顺序（左到右或上到下）

      ```css
      order: <integer>;
      ```

    * `flex-grow` 放大比例

      ```css
      flex-grow: <number>; /* default 0 */
      ```

    * `flex-shrink`缩小比例

      ```css
      flex-shrink: <number>; /* default 1 */
      ```

    * `flex-basis` 长度（父代 `flex-direction: column` ）或宽度（父代 `flex-direction: row` ），有点奇怪

    * `flex` ： `flex: none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]`

    * `align-self` 与其他子代不同的对齐方式，覆盖父代的 `align-items`

      ```css
      align-self: auto | flex-start | flex-end | center | baseline | stretch;
      ```

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

  * [Grid 网格布局教程 - 阮一峰](http://www.ruanyifeng.com/blog/2019/03/grid-layout-tutorial.html)

## 未实现

* 首页图片切换

* 黑暗模式

* 导航栏合并
