// for safari
document.body.addEventListener('touchstart', function () {
}, false);

// function replacePic() {
//     var imgs = document.images; // All images
//     var len = imgs.length;

//     document.body.onload = function () {
//         for (let i = 0; i < len; i++) {
//             imgs[i].setAttribute("src", imgs[i].getAttribute("data-src"));
//         }
//     }
// }

// replacePic();

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
    const likedNumberObj = document.getElementById("likedNumber");
    let num = likedNumberObj.textContent;
    const heart = document.getElementById("liking");
    if (heart.style.color === "rgb(255, 225, 225)" ||
        heart.style.color === "") {
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
function swap() {
    document.getElementsByClassName("de_choice de_myProperties")[0].style.display = "none";

    const choice1 = document.getElementById("description"); // 上面两个tab
    const choice2 = document.getElementById("properties");

    choice1.onclick = function () {
        document.getElementsByClassName("de_choice de_myProperties")[0].style.display = "none";
        document.getElementsByClassName("de_choice de_myWords")[0].style.display = "block";
        choice1.className = "selected";
        choice2.className = "";
    };

    choice2.onclick = function () {
        document.getElementsByClassName("de_choice de_myProperties")[0].style.display = "inline-table";
        document.getElementsByClassName("de_choice de_myWords")[0].style.display = "none";
        choice1.className = "";
        choice2.className = "selected";
    };
}

swap();

// show picture
function show(file) {
    var reader = new FileReader(); // 读取文件
    var img = document.getElementById('uploadPic'); // 获取要显示图片的标签

    reader.onload = function (evt) {
        img.src = evt.target.result;
    }
    reader.readAsDataURL(file.files[0]);
    document.getElementById("uploadPicBox").style.display = "contents";
    document.getElementsByClassName("uploadBtn")[0].style.display = "none";
}