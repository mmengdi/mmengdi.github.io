let newYearTimer = null;
var newYear = () => {
    clearTimeout(newYearTimer);
    if (!document.querySelector('#newYear')) return;
    // 新年时间戳 and 星期对象
    let newYear = new Date('2024-02-09 00:00:00').getTime() / 1000,
        week = {
            0: '周日',
            1: '周一',
            2: '周二',
            3: '周三',
            4: '周四',
            5: '周五',
            6: '周六'
        }

    time();

    // 补零函数
    function nol(h) {
        return h > 9 ? h : '0' + h;
    };

    function time() {
        // 现在 时间对象
        let now = new Date();

        // 右下角 今天
        document.querySelector('#newYear .today').innerHTML = now.getFullYear() + '-' + (now.getMonth() + 1) + '-' + now.getDate() + ' ' + week[now.getDay()]

        // 现在与新年相差秒数
        let second = newYear - Math.round(now.getTime() / 1000);

        // 小于0则表示已经过年
        if (second < 0) {
            document.querySelector('#newYear .title').innerHTML = 'Happy New Year!';
            document.querySelector('#newYear .newYear-time').innerHTML = '<span class="happyNewYear">新年快乐</p>';
        } else {
            // 大于0则还未过年
            document.querySelector('#newYear .title').innerHTML = '距离2024年春节：'

            // 大于一天则直接渲染天数
            if (second > 86400) {
                document.querySelector('#newYear .newYear-time').innerHTML = `<span class="day">${Math.ceil(second / 86400)}<span class="unit">天</span></span>`
            } else {
                // 小于一天则使用时分秒计时。
                let h = nol(parseInt(second / 3600));
                second %= 3600;
                let m = nol(parseInt(second / 60));
                second %= 60;
                let s = nol(second);
                document.querySelector('#newYear .newYear-time').innerHTML = `<span class="time">${h}:${m}:${s}</span></span>`;
                // 计时
                newYearTimer = setTimeout(time, 1000);
            }
        }
    }

    // 元宝飘落
    jQuery(document).ready(function ($) {
        $('#newYear').wpSuperSnow({
            flakes: ['https://tuchuang.voooe.cn/images/2023/01/02/yb1.webp', 'https://tuchuang.voooe.cn/images/2023/01/02/yb2.webp', 'https://tuchuang.voooe.cn/images/2023/01/02/yb3.webp'],
            totalFlakes: '100',
            zIndex: '999999',
            maxSize: '30',
            maxDuration: '20',
            useFlakeTrans: false
        });
    });
}
// Pjax适配：若没有开启Pjax这里直接是newYear()即可
// 开了Pjax的用以下两句
document.addEventListener('pjax:complete', newYear);
document.addEventListener('DOMContentLoaded', newYear);


new Vue({
    data: function () {
        this.$notify({
            title: "你已被发现😜",
            message: "小伙子，扒源记住要遵循GPL协议！",
            position: 'top-left',
            offset: 50,
            showClose: true,
            type: "warning",
            duration: 5000
        });
    }
})