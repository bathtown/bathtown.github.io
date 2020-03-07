// goto top
function goTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
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
    if (document.getElementById("liking").style.color == "rgb(255, 225, 225)" ||
        document.getElementById("liking").style.color == "") {
        likedNumber++;
        document.getElementById("liking").style.color = "orangered";
    }
    else {
        likedNumber--;
        document.getElementById("liking").style.color = "rgb(255, 225, 225)";
    }
    document.getElementById("likedNumber").innerHTML = likedNumber;
    alert('This is my PJ');
}

