/**
 * Copyright ©2018 DATAOJO. All Rights Reserved. 北京相数科技有限公司 版权所有
 * Created Date: 2018.01.08
 * Author: 付国强
 * instructions:采集员采集需求管理配置文件
 */
layui.define(['config_constant'], function (exports) {
    var config_constant = layui.config_constant;
    var obj = {
        title: '采集管理',
        name: 'CollectionAndManagement',
        containt: [{
            title: '采集管理',
            name: 'CollectionAndManagement',
            href: 'javascript:void(0);',
            children: [{
                    title: '采集员采集需求管理',
                    name: 'TheCollectorCollectsDemandManagement',
                    href: config_constant.HREF_HEADER + "CollectionAndManagement/TheCollectorCollectsDemandManagement",
                    routesName: 'mpm_collectionAndManagement_theCollectorCollectsDemandManagement',
                    body: [{
                        title: '采集员采集需求管理',
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
                                            title: '需求编号',
                                            sort: true,
                                            event: 'task_id',
                                            minWidth:110
                                        }, {
                                            field: 'sub_task_id',
                                            title: '需求名称',
                                            sort: true,
                                            event: 'sub_task_id',
                                            minWidth:110
                                        }, {
                                            field: 'mileage',
                                            title: '城市代码',
                                            sort: true,
                                            event: 'mileage',
                                            minWidth:110
                                        }, {
                                            field: 'step_value',
                                            title: '省份',
                                            sort: true,
                                            event: 'step_value',
                                            minWidth:110
                                        }, {
                                            field: 'status_value',
                                            title: '城市',
                                            sort: true,
                                            event: 'status_value',
                                            minWidth:110
                                        }, {
                                            field: 'type_value',
                                            title: '需求里程(KM)',
                                            sort: true,
                                            event: 'type_value',
                                            minWidth:110
                                        }, {
                                            field: 'projects_value',
                                            title: '任务类型',
                                            sort: true,
                                            event: 'projects_value',
                                            minWidth:110
                                        }, {
                                            field: 'launch_date',
                                            title: '预计开始时间',
                                            sort: true,
                                            event: 'launch_date',
                                            minWidth:110
                                        }, {
                                            field: 'finish_date',
                                            title: '预计完成时间',
                                            sort: true,
                                            event: 'finish_date',
                                            minWidth:110
                                        },
                                        {
                                            field: 'finish_date',
                                            title: '采集负责人',
                                            sort: true,
                                            event: 'finish_date',
                                            minWidth:110
                                        },
                                        {
                                            field: 'finish_date',
                                            title: '已采集',
                                            sort: true,
                                            event: 'finish_date',
                                            minWidth:110
                                        },
                                        {
                                            field: 'finish_date',
                                            title: '未采集',
                                            sort: true,
                                            event: 'finish_date',
                                            minWidth:110
                                        },
                                        {
                                            field: 'finish_date',
                                            title: '备注',
                                            sort: true,
                                            event: 'finish_date',
                                            minWidth:110
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

    exports('mpm_config_collectionAndManagement_theCollectorCollectsDemandManagement', obj);
});