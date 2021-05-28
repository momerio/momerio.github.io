
// 新着記事
news("news1", "2.html", "テスト投稿その2");
news("news2", "1.html", "テスト投稿");
news("news3", "1.html", "テスト投稿");
news("news4", "1.html", "テスト投稿");
news("news5", "1.html", "テスト投稿");

// おすすめ記事
news("recommend1", "1.html", "テスト投稿");
news("recommend2", "1.html", "テスト投稿");
news("recommend3", "1.html", "テスト投稿");
news("recommend4", "1.html", "テスト投稿");
news("recommend5", "index.html", "投稿記事一覧");

////////////////////////////////////////////////////////////////////////

// サイドバー
function profile(name, github, details) {
    // サイド
    document.getElementById("profile_name").textContent = name;
    document.getElementById("profile_github").textContent = github;
    document.getElementById("profile_details").innerHTML = details;
    // ボトム
    document.getElementById("profile_name_bottom").textContent = name;
    document.getElementById("profile_github_bottom").textContent = github;
    document.getElementById("profile_details_bottom").innerHTML = details;
}
const profile_name = "名前: Momerio";
const profile_github = "Github: momerio";
const profile_details = "<p>Pythonが好物な大学生．</p><p>自然言語処理と深層学習をやってます．</p>";
profile(profile_name, profile_github, profile_details)

// 記事情報
function news(id, ref, text) {
    // サイドバー
    link = document.getElementById(id);
    link.href = ref;
    link.textContent = text;
    // ボトム
    link = document.getElementById(id + "_bottom");
    link.href = ref;
    link.textContent = text;
}


hljs.addPlugin({
    'after:highlightElement': ({ el, result, text }) => {
        result.value = result.value.replace(/^/gm, '<span class="row-number"></span>');
    }
});