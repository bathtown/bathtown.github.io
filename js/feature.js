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

if (document.getElementsByClassName("de_choice de_myProperties")[0])
    swap();

// show picture
function show(file) {
    const reader = new FileReader(); // 读取文件
    const img = document.getElementById('uploadPic'); // 获取要显示图片的标签

    reader.onload = function (evt) {
        img.src = evt.target.result;
    };
    reader.readAsDataURL(file.files[0]);
    document.getElementById("uploadPicBox").style.display = "flex";
    document.getElementsByClassName("uploadBtn")[0].style.display = "none";
}

function searchResult() {
    alert('This is my pj!');
    document.getElementsByClassName('filter')[0].setAttribute('class', "filterAfter");
    document.getElementsByClassName('result')[0].style.display = 'block';
    const winWide = window.screen.width;
    if (winWide <= 830)
        document.getElementsByClassName('search_extension')[0].style.display = 'flex';
}

function showSearchBox() {
    document.getElementsByClassName('filterAfter')[0].style.display = 'block';
    document.getElementsByClassName('search_extension')[0].style.display = 'none';
}