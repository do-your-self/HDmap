/**
 * Copyright ©2018 DATAOJO. All Rights Reserved. 北京相数科技有限公司 版权所有
 * Created Date: 2018.01.08
 * Author: 付国强
 * instructions:高精度地图在线生产管理平台任务管理管理员表格统计你配置文件
 */
layui.define(['config_constant'],function (exports) {
    var config_constant=layui.config_constant;
    var obj = {
        title: '统计信息',
        name: 'TaskManagementNav',
        containt: [
            {
                title: '统计信息',
                name: 'TaskManagementNav',
                href: 'javascript:void(0);',
                children: [
                    {
                        title: '管理员统计信息',
                        name: 'AdministratorMessageStatistics',
                        href: config_constant.HREF_HEADER + 'TaskManagementNav/AdministratorMessageStatistics',
                        routesName: 'mpm_task_administrator_messageStatistics',
                        body: [
                            {
                                title: '管理员统计信息',
                                components: [
                                    {
                                        name: 'messageStatistics',
                                    }
                                ]
                            },
                        ],
                        children: [
                       
                        ]
                    },
                    

                ]
            },
    ]
    }

    exports('mpm_config_task_administrator_messageStatistics', obj);
});