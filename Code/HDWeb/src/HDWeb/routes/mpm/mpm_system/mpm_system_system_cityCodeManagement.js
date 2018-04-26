/**
 * Copyright ©2018 DATAOJO. All Rights Reserved. 北京相数科技有限公司 版权所有
 * Created Date: 2018.01.08
 * Author: 付国强
 * instructions:车牌号管理
 */
layui.define(['header','navigation','body','tableList','panelCrumbs','button'], function (exports) {
    var obj = function (componentName) {
      layui.header.header(componentName);
      layui.body.body(componentName);
      layui.navigation.navigation(componentName);
      layui.panelCrumbs.panelCrumbs(componentName);
      layui.button.button(componentName);
      layui.tableList.tableList(componentName);
    }
    exports('mpm_system_system_cityCodeManagement', obj);
  });