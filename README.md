# 😜Notes about my Project 01

## 关于 pj

- **姓名：胡彧锋**

- **学号：18307130207**

- sources: **[fudan*19ss_web 基础课程\_Project_01*旅游照片分享平台（上）](https://github.com/fudansswebfundamental/Project1-2020)**

- my Github page: **[Bathtub.com](https://bathtown.github.io/)**

- my repository: **[bathtown/bathtown.github.io](https://github.com/bathtown/bathtown.github.io)**

- 完成情况：3.16.20 完成

- Bonus 完成情况

  - Bonus 1

    - 目标：① 尽可能展示原图片更多的部分；② 图片不会扭曲变形
    - 思路：`div` 作为容器，`img` 水平和垂直都居中

      <img src="./img/bonus1.png" width=600px alt="bonus1"/>

    - 代码

      HTML

      ```html
      <div class="picContainer">
        <img src="" class="imgPart" />
      </div>
      ```

      CSS

      ```CSS
      .picContainer {
        width: 400px;
        height: 300px;
        /* This is a 4/3 picture */
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: darkgrey;
      }

      /* or */

      .picContainer {
        width: 400px;
        height: 300px;
        overflow: hidden;
        position: relative;
      }

      .imgPart {
        transform: translate(-50%, -50%);
        position: absolute;
        top: 50%;
        left: 50%;
      }
      ```

      JS

      ```js
      let div = document.getElementsByClassName('picContainer')[0]
      // 都是一样的

      const divRatio = div.offsetWidth / div.offsetHeight

      function setImgSize(self) {
        self.onload = function() {
          ratio = self.width / self.height
          if (divRatio > ratio) {
            self.style.width = '100%'
          } else {
            self.style.height = '100%'
          }
        }
      }

      let imgs = document.getElementsByTagName('img')
      const len = imgs.length
      for (let i = 0; i < len; i++) {
        setImgSize(imgs[i])
      }
      ```

    - 效果展示：[bonus1](https://bathtown.github.io/src/html/bonus1.html)
    - 缺陷：必须在 `onload` 之后才能调整，速度会有些慢

  - Bonus 2

    - 用 `Media Queries` 为不同尺寸的页面设计了不同的 `css`
    - 手机屏幕隐去过量组件，用手势操作弥补功能缺陷

      ⭐️ browser page 👇

      <img src="./img/browser.gif" width=200px alt="browser page">

      ⭐️ details page 👇

      <img src="./img/details.gif" width=200px alt="details page">

      ⭐️ myGallery page 👇

      <img src="./img/myGallery.gif" width=200px alt="myGallery page">

      ⭐️ search page 👇

      <img src="./img/search.gif" width=200px alt="search page">

  - Bonus 3:

    ```markdown
    David Hume: Beauty in things exists in the mind which contemplates them.
    ```

- ⭐️ **my bright spots**

  - [404 page](https://bathtown.github.io/src/html/privacy.html)
  - [site map](https://bathtown.github.io/src/html/siteMap.html)
  - highly adapted to mobile phones( **even Safari!** as you can see in **Bonus 2** 👆)

## 感想

- First bear in mind: **Pj is pj.**

- 不足

  - 未养成写注释习惯
  - className, ID smells not good
  - CSS 未能做到足够多的复用

## wicked points👻

- 在设置 CSS 的 hover 时，有时会发现 hover 不起作用，原因：

  - wrong oder: `a:link` < `a:visited` < `a:hover` < `a:active`
  - `hover` 后面有空格——子元素起效
  - 颜色没写对 🙃

- 在 chrome 和 firefox 无法显示 css ——在 CSS 文件头加上 `@charset "utf-8"`

- content 到底有没有 padding 和 border？

  - W3C 盒子模型（标准模型）：`width` 不包含 `padding` 和 `border`
  - IE 盒子模型：`width = padding + border`
  - 怪异盒子模型：部分部分
  - solution: try `box-sizing: content-box | border-box;`
  - 例：`<input type="submit" />` 的 `padding` 是向内的，为了和上面的 `<input type="text" />` 宽度相同，要单独设定 `box-sizing: content-box;`

- 外部 css 表中，前面的 css 会被后面的 css 覆盖 🙃

- `transform` 对应的时间是 `transition-duration` 🙃

- `document.getElementById( ).style.` 无法获取外部 css 的`color`/`display`……，所以最开始都是字符串 `""` ，可以先设置 `filterAny.setAttribute('display', 'block');`（同时，如果样式是行内样式，才能通过 `div.style.width` 拿到宽度，而样式表里的样式要通过 `div.offsetWidth` 才可以拿到宽度）

- `transform` 会覆盖掉其他元素，即使是 `position: fixed` 也会被无视，解决：

  ```css
  transform: none;
  z-index: 2;
  /* or */
  transform: translateZ(8px);
  ```

- 定位浮动相对窗口还是父元素？

  - `position: absolute;` 是相对于 `static` 定位以外的第一个**父元素**
  - `position: fixed;` 相对于**窗口**
  - 在做 share list 时候要用 `absolute` ，以防止滚动不变

- 现代浏览器无法支持透明度？不！只是把 `rgba` 写成了 `rgb` ...🙃

- safari（新时代的 IE6！）

  - `hover` 失效

    - 尝试：添加 `:active` 无效
    - 解决：在 js 中添加代码 `document.body.addEventListener('touchstart', function () { }, false);`

  - 防止自动识别电话号码

    - 头文件引入：`<meta name="format-detection" content="telephone=no"/>`
    - 添加样式：`pointer-events: none;`

  - `position: fixed;` 失效，解决参见：[Safari 3D transform 变换 z-index 层级渲染异常的研究](https://www.zhangxinxu.com/wordpress/2016/08/safari-3d-transform-z-index/)

  - 去除 `radio`、`input`、`select` 的独特样式：`-webkit-appearance: none;`

  - js 无法识别 `window.screen.width` ，用 `document.body.clientWidth` 代替

- `onclick="searchResult();"`函数无法改变 className？？？原来是`submit`自带刷新表单功能（同时也无法实现`onclick="window.open('../html/home.html','_self')"`），解决：用 `button` 代替

- **`setInterval` 函数无法`return`**

## 一些实现

- 实现文字溢出后显示省略号

  一行

  ```css
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  ```

  多行

  ```HTML
  <div class="mult_line_ellipsis">
    多行文本css溢出部分css溢出部分css溢出部分css溢出部分css溢出部分css溢出部分css溢出部分……
  </div>
  ```

  ```CSS
  .mult_line_ellipsis{
    overflow: hidden;
    text-overflow:ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;// 3 lines
    -webkit-box-orient: vertical;
    width:130px;
  }
  ```

- 下拉菜单

  - 整个 `dropList` 分为 `dropBtn` 和 `dropContent` 两个部分
  - `dropContent` 最开始隐藏，当鼠标移动到 `dropList` (这时就是指 `dropBtn` ) 上时，整个 `dropList` 显示

- 浏览器上加 logo：`<link rel="icon" href="../img/Bathtub.png" type="image/x-icon"/>`

- 夜间模式

  - Reference: [How to Enable Dark Mode on Your Website with Pure CSS?](https://dev.to/oahehc/how-to-enable-dark-mode-on-your-website-with-pure-css-ake)
  - CSS `var()` 函数：`var(custom-property-name, value)`，`custom-property-name`必须以`--`开头，如：`--main-bg-color: white;`
  - `<input type="checkbox" id="nightMode" />` 的兄弟元素 `<article>...</article>`
  - HTML

    ```html
    <input type="checkbox" id="nightMode" />
    <article>
      <h1>Dark Mode w Pure CSS</h1>
      <p>
        This is an example to display how to support dark mode without using any Javascript.
      </p>
    </article>
    ```

  - CSS

    ```css
    :root {
      --bgColor: #fafafa;
      --fontColor: #444444;
      --borderColor: darkgrey;
    }

    /* choose brother element */
    #nightMode:checked,
    #nightMode:checked + * {
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

    input[type='checkbox'] {
      position: absolute; /* 浮在表面 */
      top: 10px;
      right: 10px;
      border-radius: 50%;
      cursor: pointer;
    }

    article {
      min-height: 100vh; /* 全页面显示 */
    }

    h1 {
      border-bottom: 3px solid var(--borderColor);
    }
    ```

- 回到顶部

  - 设置锚点

    ```html
    <body style="height:2000px;">
      <div id="topAnchor"></div>
      <a href="#topAnchor" style="position:fixed;right:0;bottom:0">回到顶部</a>
    </body>
    ```

  - scrollTop（表示被隐藏在内容区域上方的像素数）

    ```html
    <body style="height:2000px;">
      <button id="test" style="position:fixed;right:0;bottom:0">回到顶部</button>
      <script>
        test.onclick = function() {
          document.body.scrollTop = document.documentElement.scrollTop = 0
        }
      </script>
    </body>
    ```

  - scrollTo()

    ```html
    <body style="height:2000px;">
      <button id="test" style="position:fixed;right:0;bottom:0">回到顶部</button>
      <script>
        test.onclick = function() {
          scrollTo(0, 0) //window.scrollTo({ top: 0, behavior: "smooth" });平滑滚动
        }
      </script>
    </body>
    ```

- 模糊：`filter: blur;//filter用处很多啊`

- 404 page ：直接参考 giuhub 官方教程，值得注意的是，**所有地址** 都要引用绝对地址（css rel，href……），而不是相对于文件夹的地址

- font-awesome icon 加载太慢

  - **16.5s**，难以置信
  - 换成 `svg` 图片，利用 `<embed src="imooc.svg" width="1024" height="768" type="image/svg+xml" />` 插入（注意：embed 是 html5 的标准）/或者直接在 HTML 嵌入 SVG 代码（丑陋）**（效果不是很好，可能是我没有掌握到，放弃）**

  - 不直接用 .css 文件，而是使用 .ttf 字体文件（其实可以看到，font-awesome.css 里面就是这么做的）（**效果也不太好**）

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
    <span class="fa fa-github" title="share on github~"></span>
    <!-- 注意，这里如果是 <i> 标签则会被识别为斜体，如果是 <div> 则会是块元素 -->
    ```

  - ⭐️ 利用 [Icon font 4 Font Awesome](https://www.iconfont.cn/collections/detail?spm=a313x.7781069.0.da5a778a4&cid=2124) 减少字体文件大小，**一开始就应该改选这个！！** 改进后在进入页面时便可以看到 icon

  - 或者直接用 CDN `<link rel="stylesheet" href="https://cdn.staticfile.org/font-awesome/4.7.0/css/font-awesome.css">`

- 图片加载太慢

  - 原因：带宽太低、图片太大——控制在 100kb 之内最好

  - ~~不完全~~解决方法：[tinypng](https://tinypng.com/)、[压缩图](https://www.yasuotu.com/)

  - 转化为 webp 格式

- cubic transition：[cubic-bezier](https://cubic-bezier.com/#.17,.67,.83,.67)

- 下拉输入选框

  ```html
  <form>
    <input list="browsers" />
    <datalist id="browsers">
      <option value="Internet Explorer"> </option>
      <option value="Firefox"> </option>
      <option value="Chrome"> </option>
      <option value="Opera"> </option>
      <option value="Safari"> </option>
    </datalist>
  </form>
  ```

- CSS 复用：[CSS var() 函数](https://www.runoob.com/cssref/func-var.html)

## 设计手册

- 正在浏览页面“高亮”：`class="imlooking"`

- 字体大小 `font-size`:

  - html. `font-size: 12px`; `/ * html 的 font-size 才是 root，而不是 body */`
  - a. `font-size: 1.2rem`;
  - p. `font-size: 1.2rem`;
  - h1. `font-size: 1.6rem`;
  - footer.p. `font-size: 1rem`;

- 字体 `font-family: monospace;`

- 颜色

  - 白 → 黑： `white` < `#fafafa` < `whitesmoke` < `gainsboro` < `darkgrey` < `grey` < `#444444` < `black`
  - 透明：`rgba(255, 255, 255, 0.8)`

- 全局设置

  ```css
  * {
    padding: 0; /* 避免样式自动添加的padding和margin */
    margin: 0;
    box-sizing: content-box | border-box; /* 标准盒子模型 */
    outline: none; /* 取消选中时突出 */
  }
  ```

- 语义元素
  - `main`：主体部分
    - `article`：主体内容中的文章
  - `copyright`：用于页脚版权（非正式）
  - `details`：用于细节，有折叠起来的样式（ `summary` & `p`）
  - `small`：定义小型文本
  - `figure`：图表，标题为 `figcaption`

## 新的知识 🧀

- 响应式布局

  - 少使用绝对的宽度，多使用百分比
  - 少用 `px` ，多用 `rem`（包括字体大小、宽度……）
  - 选择加载 css
    - `<link rel="stylesheet" type="text/css" media="screen and (max-device-width: 400px)" href="tinyScreen.css" />`
    - 如果屏幕宽度小于 400 像素（max-device-width: 400px），就加载 tinyScreen.css 文件
  - Media Queries：

    - CSS

      ```css
      @media screen and  (max-width: 960px) {
        body {
          background: #000;
        }
      }
      ```

      意思是：当页面小于 960px 的时候执行它下面的 CSS

    - 等于 960px：`max-device-width:960px`

    - 大于 960px：`min-width:960px`

    - 大于 960px 小于 1200px：`(min-width:960px) and (max-width:1200px)`

    - 注意顺序：

      ```css
      @media (min-width: 1200){ //>=1200的设备 }
      @media (min-width: 992px){ //>=992的设备 }
      @media (min-width: 768px){ //>=768的设备 }
      ```

    - 竖屏：`@media screen and (orientation: portrait) and (max-width: 720px) {...}`

    - 横屏：`@media screen and (orientation: landscape) {...}`

  - `width: 100%;max-width: 150px;` 一起设定
  - 不同分辨率设备显示不同大小的图片

    ```html
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <title>Document</title>
        <script>
          document.createElement('picture')
        </script>
      </head>

      <body>
        <picture>
          <source srcset="./travel-images/normal/tiny/6114850721.jpg" media="(max-width: 600px)" />
          <source srcset="./travel-images/normal/small/6114850721.jpg" media="(max-width: 800px)" />
          <img srcset="./travel-images/normal/medium/6114850721.jpg" alt="pic" />
        </picture>
      </body>
    </html>
    ```

- Flex 布局

  - Reference: [阮一峰：Flex-语法](http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html)
  - Reference: [阮一峰：Flex-实例](http://www.ruanyifeng.com/blog/2015/07/flex-examples.html)
  - 设为 Flex 布局以后，子元素的 `float` 、 `clear` 和 `vertical-align` 属性将失效
  - 首先设置父元素 `display:flex;`
  - 父元素六个属性

    - `flex-direction` 排列方向

      ```css
      flex-direction: row | row-reverse | column | column-reverse;
      ```

    - `flex-wrap` 换不换行

      ```css
      flex-wrap: nowrap | wrap | wrap-reverse;
      ```

    - `flex-flow`：`flex-direction` + `flex-wrap`

    - `justify-content` 水平居中方式

      ```css
      justify-content: flex-start | flex-end | center | space-between | space-around;
      /* space-between ：两端无间隔，中间有间隔, space-around ：两边也有间隔 */
      ```

    - `align-items` 垂直居中方式

      ```css
      align-items: flex-start | flex-end | center | baseline | stretch;
      /*  baseline ：以第一行文字为基线对齐, stretch(default) ：如果项目未设置高度或设为 auto ，将占满整个容器的高度。 */
      ```

    - `align-content` 多行对齐方式：

      ```css
      align-content: flex-start | flex-end | center | space-between | space-around | stretch;
      ```

  - 子元素六个属性

    - `order` 前后顺序（左到右或上到下）

      ```css
      order: <integer>;
      ```

    - `flex-grow` 放大比例

      ```css
      flex-grow: <number>; /* default 0 */
      ```

    - `flex-shrink`缩小比例

      ```css
      flex-shrink: <number>; /* default 1 */
      ```

    - `flex-basis` 长度（父代 `flex-direction: column` ）或宽度（父代 `flex-direction: row` ），有点奇怪

    - `flex` ： `flex: none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]`

    - `align-self` 与其他子代不同的对齐方式，覆盖父代的 `align-items`

      ```css
      align-self: auto | flex-start | flex-end | center | baseline | stretch;
      ```

  - 固定底栏

    - HTML

      ```html
      <body class="Site">
        <header>...</header>
        <main class="Site-content">...</main>
        <footer>...</footer>
      </body>
      ```

    - CSS

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

## 未实现/未解决

- 技术类

  - 导航栏合并
  - 懒加载：[js 实现图片懒加载原理](https://blog.csdn.net/w1418899532/article/details/90515969)
  - 瀑布流
  - 图片加载太慢
  - 上传图片“类型”验证

- 设计类

  - 黑暗模式
  - 首页图片切换
  - Grid 布局：[Grid 网格布局教程 - 阮一峰](http://www.ruanyifeng.com/blog/2019/03/grid-layout-tutorial.html)

- 功能类
  - 用户换头像

## Log

### 3.11.2020

- 0.8 版本完成，共用部分搭建完成
- browser、search、myGallery、myHearts、upload 无内容
- index.html 重定向到 login.html

- 解决问题：图片占位

  HTML

  ```html
  <div>
    <img />
  </div>
  ```

  CSS

  ```css
  div {
    width: 100%;
    padding-bottom: 56.25%; /* 16:9, 56.25% = 100% * 9 / 16 padding-bottom的为百分比的时候是相对于父类宽度*/
    height: 0;
    overflow: hidden;
    background-color: gainsboro; /* rainbow color not complete */
  }

  img {
    width: 100%;
    /* cursor: pointer; */
  }
  ```

### 3.12.2020

- 取消掉对 jq 的依赖，纯原生 js 实现 tab 切换，减少下载负担

  Javascript

  ```js
  // switch description and properties
  function swap() {
    document.getElementsByClassName('de_choice de_myProperties')[0].style.display = 'none'

    var choice1 = document.getElementById('description') // 上面两个tab
    var choice2 = document.getElementById('properties')

    choice1.onclick = function() {
      document.getElementsByClassName('de_choice de_myProperties')[0].style.display = 'none'
      document.getElementsByClassName('de_choice de_myWords')[0].style.display = 'block'
      choice1.className = 'selected'
      choice2.className = ''
    }

    choice2.onclick = function() {
      document.getElementsByClassName('de_choice de_myProperties')[0].style.display = 'inline-table'
      document.getElementsByClassName('de_choice de_myWords')[0].style.display = 'none'
      choice1.className = ''
      choice2.className = 'selected'
    }
  }

  swap()
  ```

### 3.13.2020

- finish upload page
- finish my gallery page
- finish my hearts page

### 3.14.2020

- finish search page
- add touch to my gallery page & my hearts page

### 3.15.2020

- fix `position: fixed;` in Safari
- finish browser page
- finish pj!

### 3.16.2020

- add site map
