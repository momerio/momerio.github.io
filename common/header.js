

///// header setting /////
{/* 
使用方法: 

1. header部分に以下のソースを読み込む
<header class="site-header" id="header"></header>

2. JS参照部分に以下のスクリプトを読み込む

headerHTMLの引数は現在ページを示す．
    トップページ: top page
    ブログページ: blog

```
<script type="text/javascript" src="/common/header.js"></script>
<script>
    headerHTML("blog");
</script>
```

 */}

function headerHTML(thisPage) {
    switch (thisPage) {
        case "top page":
            var gotoHomeHref = "/index.html";
            var gotoBlogHref = "blog/index.html";
            break;
        case "blog":
            var gotoHomeHref = "/index.html";
            var gotoBlogHref = "index.html";
            break;
        default:
            console.log("headerHTML: thisPage is not defined");
            var gotoHomeHref = "/index.html";
            var gotoBlogHref = "/index.html";
            break;
    }

    var headerScript = `
<div class="wrapper site-header__wrapper">
    <a href="/index.html" class="brand">Momerio</a>
    <nav class="nav">
        <button class="nav__toggle" aria-expanded="false" type="button">
            menu
        </button>
        <ul class="nav__wrapper">
            <li class="nav__item selected"><a href="${gotoHomeHref}">Home</a></li>
            <li class="nav__item"><a href="${gotoBlogHref}">Blog</a></li>
            <li class="nav__item"><a href="https://github.com/momerio">GitHub</a></li>
            <li class="nav__item"><a href="javascript:changeDarkMode();" id="dark-mode-text">Dark Mode</a>
            </li>
        </ul>
    </nav>
</div>
`;

    var headerHTML = document.getElementById("header");
    headerHTML.innerHTML = headerScript;
}
/////////



///// change dark or light mode script /////

var isDarkMode = false;

function changeDarkMode(href) {
    var linkStyle = document.getElementById("dark-mode-change");
    var darkText = document.getElementById("dark-mode-text");
    if (isDarkMode) {
        // change to light mode
        linkStyle.href = "";
        darkText.innerHTML = "Dark Mode"; //表示名
        isDarkMode = false;
    }
    else {
        linkStyle.href = href;
        darkText.innerHTML = "Light Mode"; //表示名
        isDarkMode = true;
    }
};

//////////
