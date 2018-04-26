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
                    title: '后处理轨迹管理',
                    name: 'CollectionAdministratorPostProcessingTrackManagement',
                    href: config_constant.HREF_HEADER + "PostProcessingManagementNav/CollectionAdministratorPostProcessingTrackManagement",
                    routesName: 'mpm_postProcessingManagementNav_collectionAdministratorPostProcessingTrackManagement',
                    body: [{
                        title: '后处理轨迹管理',
                        components: [{
                                name: 'button',
                                addButton: [{
                                    buttonName: '搜索',
                                    url: config_constant.URL_HEADER + '/taskstatus/find',
                                    type: 'SearchData',
                                    listConfig: [{
                                        title: "搜索",
                                        submitkey: "search",
                                        type: 'input'
                                    }]
                                }, ]
                            },
                            {
                                name: 'tableList',
                                tableConfig: {
                                    url: config_constant.URL_HEADER + '/task/b/search',
                                    method: "post",
                                    page: true,
                                    limits: [10, 20, 30],
                                    cols: [
                                        [ //表头
                                            {
                                                field: 'task_id',
                                                title: '采集城市',
                                                sort: true,
                                                event: 'task_id',
                                                minWidth: 110
                                            }, {
                                                field: 'sub_task_id',
                                                title: '采集日期',
                                                sort: true,
                                                event: 'sub_task_id',
                                                minWidth: 110
                                            }, {
                                                field: 'mileage',
                                                title: '文件标识',
                                                sort: true,
                                                event: 'mileage',
                                                minWidth: 110
                                            }, {
                                                field: 'step_value',
                                                title: '文件名',
                                                sort: true,
                                                event: 'step_value',
                                                minWidth: 160
                                            }, {
                                                field: 'status_value',
                                                title: '经度',
                                                sort: true,
                                                event: 'status_value',
                                                minWidth: 110
                                            }, {
                                                field: 'type_value',
                                                title: '经度误差',
                                                sort: true,
                                                event: 'type_value',
                                                minWidth: 110
                                            }, {
                                                field: 'projects_value',
                                                title: '纬度',
                                                sort: true,
                                                event: 'projects_value',
                                                minWidth: 110
                                            }, {
                                                field: 'launch_date',
                                                title: '纬度误差',
                                                sort: true,
                                                event: 'launch_date',
                                                minWidth: 110
                                            }, {
                                                field: 'finish_date',
                                                title: '高程',
                                                sort: true,
                                                event: 'finish_date',
                                                minWidth: 110
                                            },
                                            {
                                                field: 'finish_date',
                                                title: '高程误差',
                                                sort: true,
                                                event: 'finish_date',
                                                minWidth: 110
                                            },
                                            {
                                                field: 'finish_date',
                                                title: '基站质量',
                                                sort: true,
                                                event: 'finish_date',
                                                minWidth: 110
                                            }
                                        ]
                                    ],
                                },
                                submitUrl: config_constant.HREF_HEADER + 'char_main/chargingNodeList'
                            },
                        ]
                    }, ]
                },


            ]
        }, ]
    }

    exports('mpm_config_postProcessingManagementNav_collectionAdministratorPostProcessingTrackManagement', obj);
});