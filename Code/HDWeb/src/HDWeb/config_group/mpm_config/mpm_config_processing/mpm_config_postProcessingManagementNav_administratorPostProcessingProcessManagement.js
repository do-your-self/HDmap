/**
 * Copyright ©2018 DATAOJO. All Rights Reserved. 北京相数科技有限公司 版权所有
 * Created Date: 2018.01.08
 * Author: 付国强
 * instructions:高精度地图在线生产管理平台后处理管理配置文件
 */
layui.define(['config_constant'], function (exports) {
  var config_constant = layui.config_constant;
  var obj = {
      title: '后处理管理',
      name: 'PostProcessingManagementNav',
      containt: [{
          title: '后处理管理',
          name: 'PostProcessingManagementNav',
          href: 'javascript:void(0);',
          children: [{
                  title: '后处理流程管理',
                  name: 'AdministratorPostProcessingProcessManagement',
                  href: config_constant.HREF_HEADER + "PostProcessingManagementNav/AdministratorPostProcessingProcessManagement",
                  routesName: 'mpm_postProcessingManagementNav_administratorPostProcessingProcessManagement',
                  body: [{
                      title: '后处理流程管理',
                      components: [
                          {
                              name: 'systemProcess'
                          },
                      ]
                  }, ]
              },


          ]
      }, ]
  }

  exports('mpm_config_postProcessingManagementNav_administratorPostProcessingProcessManagement', obj);
});