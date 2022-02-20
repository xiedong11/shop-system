/**
 * 解析window.location.serch
 * @name 地址栏参数
 */
const getSearchByName = function (name) {
    var reg = new RegExp("[?|&]" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.href.match(reg);
    if (r != null) return (r[1].split('#')[0]);
    return null;
}



export  {
    getSearchByName,
}


