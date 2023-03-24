<link rel="stylesheet" class="aplayer-secondary-style-marker" href="\assets\css\APlayer.min.css"><script src="\assets\js\APlayer.min.js" class="aplayer-secondary-script-marker"></script><script class="meting-secondary-script-marker" src="\assets\js\Meting.min.js"></script>//动态标题
var OriginTitile = document.title;
var titleTime;
document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        //离开当前页面时标签显示内容
        document.title = '怎么走开啦！😭😭';
        clearTimeout(titleTime);
    } else {
        //返回当前页面时标签显示内容
        document.title = '你来啦！😊😊';
        //两秒后变回正常标题
        titleTime = setTimeout(function () {
            document.title = OriginTitile;
        }, 2000);
    }
});

// 在你想要弹出弹窗的js代码中加入如下代码即可触发弹窗：
new Vue({
    data: function () {
        this.$notify({
            title: "你来啦😊😊",
            message: "我在这里等你很久啦！🦋🦋",
            position: 'top-left',
            offset: 50,
            showClose: true,
            type: "warning",
            duration: 5000
        });
    }
})
