

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

// for smart-phone
var isNavAcrive = false;
function showNav() {
    var nav = document.getElementsByClassName("nav__wrapper")[0];
    var hamburger = document.getElementById("hamburger-menu");
    if (!isNavAcrive) {
        nav.classList.add("active");
        hamburger.classList.add("close-btn");
        hamburger.classList.remove("menu-btn");
        console.log("showNav: active");
        isNavAcrive = true;
    } else {
        nav.classList.remove("active");
        hamburger.classList.add("menu-btn");
        hamburger.classList.remove("close-btn");
        isNavAcrive = false;
    }
}

var darkModeHref = "" // ダークモードCSSのURL

function headerHTML(thisPage) {
    var gotoHomeHref = "/index.html";
    var gotoBlogHref = "/blog/index.html";
    switch (thisPage) {
        case "top page":
            darkModeHref = "/css/top-style-dark-mode.css";
            var homeSelected = "selected";
            var blogSelected = "";
            var darkModeSource_test = `<li class="nav__item"><a href="javascript:changeDarkMode();" id="dark-mode-text">Dark Mode</a>`;
            break;
        case "blog":
            darkModeHref = "#";
            var homeSelected = "";
            var blogSelected = "selected";
            var darkModeSource_test = "";
            break;
        default:
            console.log("headerHTML: thisPage is not defined");
            var homeSelected = "selected";
            var blogSelected = "";
            break;
    }

    var headerScript = `
<div class="wrapper site-header__wrapper">
    <a href="/index.html" class="brand">Momerio</a>
    <nav class="nav">
        <div class="hamburger">
            <a href="javascript:showNav()">
                <div id="hamburger-menu" class="menu-btn"><span></span></div>
            </a>            
        </div>
        <ul class="nav__wrapper">
            <li class="nav__item ${homeSelected}"><a href="${gotoHomeHref}">Home</a></li>
            <li class="nav__item ${blogSelected}"><a href="${gotoBlogHref}">Blog</a></li>
            <li class="nav__item"><a href="https://github.com/momerio">GitHub</a></li>
            ${darkModeSource_test}
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

function changeDarkMode() {
    var linkStyle = document.getElementById("dark-mode-change");
    var darkText = document.getElementById("dark-mode-text");
    if (isDarkMode) {
        // change to light mode
        linkStyle.href = "";
        darkText.innerHTML = "Dark Mode"; //表示名
        isDarkMode = false;
    }
    else {
        linkStyle.href = darkModeHref;
        darkText.innerHTML = "Light Mode"; //表示名
        isDarkMode = true;
    }
};

//////////
