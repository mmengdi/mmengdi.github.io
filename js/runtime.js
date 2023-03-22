var now = new Date();

function createtime() {
    // 当前时间
    now.setTime(now.getTime() + 1000);
    var start = new Date("08/01/2022 00:00:00"); // 旅行者1号开始计算的时间
    var dis = Math.trunc(23400000000 + ((now - start) / 1000) * 17); // 距离=秒数*速度 记住转换毫秒
    var unit = (dis / 149600000).toFixed(6); // 天文单位
    var grt = new Date("03/18/2023 00:00:00"); // 网站诞生时间
    var days = (now - grt) / 1e3 / 60 / 60 / 24,
        dnum = Math.floor(days),
        hours = (now - grt) / 1e3 / 60 / 60 - 24 * dnum,
        hnum = Math.floor(hours);
    1 == String(hnum).length && (hnum = "0" + hnum);
    var minutes = (now - grt) / 1e3 / 60 - 1440 * dnum - 60 * hnum,
        mnum = Math.floor(minutes);
    1 == String(mnum).length && (mnum = "0" + mnum);
    var seconds = (now - grt) / 1e3 - 86400 * dnum - 3600 * hnum - 60 * mnum,
        snum = Math.round(seconds);
    1 == String(snum).length && (snum = "0" + snum);
    let currentTimeHtml = "";
    (currentTimeHtml =
        hnum < 18 && hnum >= 9 ?
        `<img class='boardsign' src='https://s1.vika.cn/space/2023/03/22/1e71f8dd7e6d42dd826977a36bc12042' title='当困苦姗姗而来之时，超越它们会更有余味。' style="width: 25px; height: 25px;"><br> <div style="font-size:13px;font-weight:bold>本站居然运行了 ${dnum} 天 ${hnum} 小时 ${mnum} 分 ${snum} 秒 <i id="heartbeat" class='fas fa-heartbeat'></i> <br> mmengdi当前距离地球 ${dis} 千米，约为 ${unit} 个天文单位 🚀</div>`:
        `<img class='boardsign' src='https://s1.vika.cn/space/2023/03/22/61d5211ec5134693adadb1e3204b79e8' title='天空黑暗到一定程度，星辰就会熠熠生辉。' style="width: 25px; height: 25px;"><br> <div style="font-size:13px;font-weight:bold;">本站居然运行了 ${dnum} 天 ${hnum} 小时 ${mnum} 分 ${snum} 秒 <i id="heartbeat" class='fas fa-heartbeat'></i> <br> mmengdi当前距离地球 ${dis} 千米，约为 ${unit} 个天文单位 🚀</div>`),
    document.getElementById("workboard") &&
        (document.getElementById("workboard").innerHTML = currentTimeHtml);
}
// 设置重复执行函数，周期1000ms
setInterval(() => {
    createtime();
}, 1000);



