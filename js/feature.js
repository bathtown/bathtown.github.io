// goto top
function goTop() {
    scrollTo(0, 0);
}

// refresh pictures
function refreshPic() {
    // 刷新页面
    location.reload();
    alert('This is my PJ');
}

var likedNumber = 99;
// heart++
function likedPlus() {
    likedNumber++;
    document.getElementById("likedNumber").innerHTML = likedNumber;
    alert('This is my PJ');
}