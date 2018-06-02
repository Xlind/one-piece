// 控制音频的播放和暂停
// 定义了playMusic（）方法
function playMusic() {
    // 获取audio的id
    var m=document.getElementById("muc");
    // 判断，如果当前音频是暂停的状态，就调用了播放的方法，否则，调用暂停的方法
    if (m.paused)
        m.play();
    else
        m.pause();
}
// 定义了跳转方法
function goToVideo() {
    document.querySelector("#vdoStyle").scrollIntoView();
}

