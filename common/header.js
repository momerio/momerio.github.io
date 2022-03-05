

///// header setting /////
var headerScript = `
<div class="wrapper site-header__wrapper">
    <a href="#" class="brand">Momerio</a>
    <nav class="nav">
        <button class="nav__toggle" aria-expanded="false" type="button">
            menu
        </button>
        <ul class="nav__wrapper">
            <li class="nav__item selected"><a href="index.html">Home</a></li>
            <li class="nav__item"><a href="blog/index.html">Blog</a></li>
            <!-- <li class="nav__item"><a href="#">Link</a></li> -->
            <li class="nav__item"><a href="https://github.com/momerio">GitHub</a></li>
            <li class="nav__item"><a href="javascript:changeDarkMode();" id="dark-mode-text">Dark Mode</a>
            </li>
        </ul>
    </nav>
</div>
`;


var headerHTML = document.getElementById("header");
headerHTML.innerHTML = headerScript;

/////////



///// change dark or light mode script /////

var isDarkMode = false;

function changeDarkMode() {
    var linkStyle = document.getElementById("dark-mode-change");
    var darkText = document.getElementById("dark-mode-text");
    if (isDarkMode) {
        // change to light mode
        linkStyle.href = "";
        darkText.innerHTML = "Dark Mode";
        isDarkMode = false;
    }
    else {
        linkStyle.href = "css/top-style-dark-mode.css";
        darkText.innerHTML = "Light Mode";
        isDarkMode = true;
    }
};

//////////
