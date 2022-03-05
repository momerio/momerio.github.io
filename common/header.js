

///// header setting /////
function headerHTML(thisPage) {
    switch (thisPage) {
        case "top page":
            var gotoHomeHref = "index.html";
            var gotoBlogHref = "blog/index.html";
            break;
        case "blog":
            var gotoHomeHref = "../index.html";
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

    console.log("header.js loaded");
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
        darkText.innerHTML = "Dark Mode";
        isDarkMode = false;
    }
    else {
        linkStyle.href = href;
        darkText.innerHTML = "Light Mode";
        isDarkMode = true;
    }
};

//////////
