var gwidth = $(window).width();
function getRem(org_size, org_width) {
    if (!document.addEventListener) return;

    var docEle = document.documentElement;
    docEle.style.display = 'none';
    var recalc = function () {
        var clientWidth = docEle.clientWidth;
        //pc端大于等于1280时屏蔽，防止字体过大
        if (!clientWidth || clientWidth >= 1280) return;
        docEle.style.fontSize = org_size * (clientWidth / org_width) + 'px';
    };
    window.addEventListener('orientationchange' in window ? 'orientationchange' : 'resize', recalc, false);
    document.addEventListener('DOMContentLoaded', recalc, false);
    docEle.style.display = 'block';
}
getRem('30', '750');


function GoTo(url) {
    window.location.href = url;
}