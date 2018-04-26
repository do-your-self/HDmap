/**
 * Copyright ©2018 DATAOJO. All Rights Reserved. 北京相数科技有限公司 版权所有
 * Created Date: 2018.01.08
 * Author: 付国强
 * instructions:高精度地图在线生产管理平台登陆后跳转页面
 */
layui.define(['ptlogin2Validation'],function (exports) {
    var obj = function(str){
        var componentName="ptlogin2_page";
        layui.ptlogin2Validation.ptlogin2Validation(componentName);
    }
    exports('ptlogin2_page', obj);
});