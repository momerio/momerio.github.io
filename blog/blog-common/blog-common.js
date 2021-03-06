
// 新着記事
news("news1", "5.html", "【報告】なかにしさんがVTuberになりました");
news("news2", "4.html", "【備忘録】私的よく忘れるJavaScriptの読み込み方法");
news("news3", "3.html", "競技プログラミングのためのPythonの標準入力まとめ");
news("news4", "2.html", "WordCloudやってみた");
// news("news4", "1.html", "テスト投稿");
// news("news5", "1.html", "テスト投稿");

// おすすめ記事
news("recommend1", "5.html", "【報告】なかにしさんがVTuberになりました");
news("recommend2", "4.html", "【備忘録】私的よく忘れるJavaScriptの読み込み方法");
news("recommend3", "3.html", "競技プログラミングのためのPythonの標準入力まとめ");
news("recommend4", "1.html", "WordCloudやってみた");
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

//プロファイル
const profile_name = "名前: Momerio";
const profile_github = "Github: momerio";
const profile_details = "<p>Pythonが好物．</p><p>最近は自然言語処理と深層学習で遊んでいます．</p>";
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