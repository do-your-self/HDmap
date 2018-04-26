/**
 * Copyright ©2018 DATAOJO. All Rights Reserved. 北京相数科技有限公司 版权所有
 * Created Date: 2018.01.08
 * Author: 付国强
 * instructions:高精度地图在线生产管理平台任务管理管理员结算配置文件
 */
layui.define(['config_constant'],function (exports) {
    var config_constant=layui.config_constant;
    var obj = {
        title: '任务管理',
        name: 'TaskManagementNav',
        containt: [{
            title: '任务管理',
            name: 'TaskManagementNav',
            href: 'javascript:void(0);',
            children: [{
                    title: '管理员结算管理',
                    name: 'AdministratorBalance',
                    href: config_constant.HREF_HEADER + 'TaskManagementNav/AdministratorBalance',
                    routesName: 'mpm_task_administrator_balance',
                    body: [{
                        title: '管理员结算管理',
                        components: [
                            {
                                name: 'balance',
                            }
                        ]
                    }, ],
                    children: [
                    ]
                },


            ]
        }, ]
    }

    exports('mpm_config_task_administrator_balance', obj);
});