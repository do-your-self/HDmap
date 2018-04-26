/**
 * Copyright ©2018 DATAOJO. All Rights Reserved. 北京相数科技有限公司 版权所有
 * Created Date: 2018.01.08
 * Author: 付国强
 * instructions:高精度地图在线生产管理平台任务管理管理员任务管理页面配置文件
 */
layui.define(['header','nonavigationBody','panelCrumbs','balance','button'], function (exports) {
  var obj = function (componentName) {
    layui.header.header(componentName);
    layui.nonavigationBody.nonavigationBody(componentName);
    layui.panelCrumbs.panelCrumbs(componentName);
    layui.button.button(componentName);
    layui.balance.balance(componentName);
  }
    exports('mpm_task_administrator_balance', obj);
  });