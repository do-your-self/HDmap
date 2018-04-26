/**
 * Copyright ©2018 DATAOJO. All Rights Reserved. 北京相数科技有限公司 版权所有
 * Created Date: 2018.01.08
 * Author: 付国强
 * instructions:高精度地图在线生产管理平台退出登录
 */
layui.define(['LogOut'],function (exports) {
    var obj = function (componentName) {
      layui.LogOut.LogOut(componentName);
    }
    exports('mpm_exit_logOut', obj);
  });