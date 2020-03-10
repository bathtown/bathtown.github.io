document.body.addEventListener('touchstart', function () { }, false);

// goto top
function goTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

// refresh pictures
function refreshPic() {
    // 刷新页面
    location.reload();
    alert('This is my PJ');
}

// heart++

function likedPlus() {
    var likedNumberObj = document.getElementById("likedNumber");
    var num = likedNumberObj.textContent;
    var heart = document.getElementById("liking");
    if (heart.style.color == "rgb(255, 225, 225)" ||
        heart.style.color == "") {
        num++;
        heart.style.color = "orangered";
    } else {
        num--;
        heart.style.color = "rgb(255, 225, 225)";
    }
    likedNumberObj.innerHTML = num;
    alert('This is my PJ');
}

// switch description and properties
$(function () {
    $(".de_message_choice span").click(function () {
        //获取要显示或隐藏的对s象
        var divShow = $(".de_content").children('.de_choice');
        //判断当前对象是否被选中，如果没选中的话进入if循环
        while (!$(this).hasClass('selected')) {
            //获取当前对象的索引
            var index = $(this).index();
            //当前对象添加选中样式并且其同胞移除选中样式；
            $(this).addClass('selected').siblings('span').removeClass(
                'selected');
            //索引对应的div块显示
            $(divShow[index]).show();
            //索引对应的div块的同胞隐藏
            $(divShow[index]).siblings('.de_choice').hide();
        }
    });
});