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

// heart++
var likedNumber = 99;
function likedPlus() {
    if (document.getElementById("liking").style.color == "rgba(255, 69, 0, 0.2)" ||
        document.getElementById("liking").style.color == "") {
        likedNumber++;
        document.getElementById("liking").style.color = "orangered";
    }
    else {
        likedNumber--;
        document.getElementById("liking").style.color = "rgba(255, 69, 0, 0.2)";
    }
    document.getElementById("likedNumber").innerHTML = likedNumber;
    alert('This is my PJ');
}

