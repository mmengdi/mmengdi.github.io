// 防抖全局计时器
let TT = null; //time用来控制事件的触发
// 防抖函数:fn->逻辑 time->防抖时间
function debounce(fn, time) {
    if (TT !== null) clearTimeout(TT);
    TT = setTimeout(fn, time);
}

// 复制提醒
document.addEventListener("copy", function () {
    debounce(function () {
        new Vue({
            data: function () {
                this.$notify({
                    title: "复制成功🦋🦋",
                    message: "放弃也是需要勇气的😴😴",
                    position: 'top-left',
                    offset: 50,
                    showClose: true,
                    type: "success",
                    duration: 5000
                });
            }
        })
    }, 300);
})


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