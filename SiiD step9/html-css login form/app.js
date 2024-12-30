/*ログインフォームを拡張し、一度Sign Inのボタンが押されたら次回以降、emailとpasswordが自動入力される機能をlocalStorageを用いて実装する

 【大まかな流れ】
 １　フォームを操作するための要素を取得する
 ２　フォームが開かれているときに、保存れているデータがあれば自動入力する。
 ３　フォームが送信されたら、送信されたものを保存する。
 ４　データをリセットするボタンをつけたい！

 【操作必要なhtmlの要素】
 １　フォーム →おｋ
 ２　メール →おｋ
 ３　パスワード →おｋ
 【難しそうな所】
 １　データを保存する仕組み

*/

/* */

/*フォーム全体を取得 */
const form = document.querySelector(".form");
/*メールを取得 */
const emailInput = document.querySelector("#email");
/*パスワードを取得 */
const passwordInput = document.querySelector("#password");
/* ログイン情報クリアのボタンを取得*/
const clearStorageButton =document.querySelector("#clear-storage");
/* チェックボックスを取得*/
const saveCheckbox = document.querySelector("#save-checkbox");



/*保存したデータを取得する*/
window.addEventListener("load" ,() =>{ /*ここの（）の中に引数を書かなくていい理由がいまいち分からない */
const savedEmail = localStorage.getItem("email");
const savedPassword =localStorage.getItem("password");

if (savedEmail) {
    emailInput.value = savedEmail;

}
if (savedPassword) {
    passwordInput.value = savedPassword;
}

});





/* データを保存する*/
form.addEventListener("submit",(event)=>{ /* ここの（）に引数があるのもよくわからない。あとで調べる*/
event.preventDefault();

const email = emailInput.value;
const password = passwordInput.value;

if(email && password){

    if (!saveCheckbox.checked) {
    const confirmSave = confirm("本当にパスワードを保存しますか？？");
    if (confirmSave) {
        localStorage.setItem("email",email);
        localStorage.setItem("password",password);
        alert("ログイン情報が保存されました！！");

    } else {
        alert ("ログイン情報を保存しませんでした！！");
    }
 } else {
    alert ("チェックボックスが有効のため情報は保存されません！");
 }
} else {
    alert("メールアドレスとパスワードを入力してくだい！");
}

});



/*ログイン情報をクリアする*/
clearStorageButton.addEventListener("click", () => { /*ここの（）の中に引数を書かなくていい理由がいまいち分からない */
localStorage.clear();
alert("ログイン情報を削除しました！");
emailInput.value ="";
passwordInput.value ="";
});

