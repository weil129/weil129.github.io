var headerBottom = document.querySelector("header").getBoundingClientRect().bottom + 150;
var personImg = document.querySelector(".person-wrap");
window.addEventListener("scroll", function () {
    // 获取屏幕滚动的距离
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    if (scrollTop >= headerBottom) {
        personImg.classList.add("animate");
    } else {
        personImg.classList.remove("animate");
    }
});