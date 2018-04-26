/**
 * Copyright ©2018 DATAOJO. All Rights Reserved. 北京相数科技有限公司 版权所有
 * Created Date: 2018.01.08
 * Author: 付国强
 * instructions:内业管理员任务全流程状态管理配置文件
 */
layui.define(['config_constant'], function (exports) {
    var config_constant = layui.config_constant;
    var obj = {
        title: '任务管理',
        name: 'TaskManagementNav',
        containt: [{
            title: '任务管理',
            name: 'TaskManagementNav',
            href: 'javascript:void(0);',
            children: [{
                    title: '内业管理员任务全流程状态管理',
                    name: 'InternalManagerTaskCompleteProcessStateManagement',
                    href: config_constant.HREF_HEADER + "TaskManagementNav/InternalManagerTaskCompleteProcessStateManagement",
                    routesName: 'mpm_task_internalManagerTaskCompleteProcessStateManagement',
                    body: [{
                        title: '内业管理员任务全流程状态管理',
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
                                            title: '任务号',
                                            sort: true,
                                            event: 'mileage',
                                            minWidth:160
                                        }, {
                                            field: 'step_value',
                                            title: '采集',
                                            sort: true,
                                            event: 'step_value',
                                            minWidth:110
                                        }, {
                                            field: 'status_value',
                                            title: '轨迹后处理',
                                            sort: true,
                                            event: 'status_value',
                                            minWidth:110
                                        }, {
                                            field: 'type_value',
                                            title: '硬盘接收',
                                            sort: true,
                                            event: 'type_value',
                                            minWidth:110
                                        }, {
                                            field: 'projects_value',
                                            title: '数据上传',
                                            sort: true,
                                            event: 'projects_value',
                                            minWidth:110
                                        }, {
                                            field: 'launch_date',
                                            title: '后处理',
                                            sort: true,
                                            event: 'launch_date',
                                            minWidth:110
                                        }, {
                                            field: 'finish_date',
                                            title: '任务下发',
                                            sort: true,
                                            event: 'finish_date',
                                            minWidth:110
                                        },
                                        {
                                            field: 'finish_date',
                                            title: '任务制作',
                                            sort: true,
                                            event: 'finish_date',
                                            minWidth:110
                                        },
                                        {
                                            field: 'finish_date',
                                            title: '任务质检',
                                            sort: true,
                                            event: 'finish_date',
                                            minWidth:110
                                        },
                                        {
                                            field: 'finish_date',
                                            title: '任务合格',
                                            sort: true,
                                            event: 'finish_date',
                                            minWidth:110
                                        },
                                        {
                                            field: 'finish_date',
                                            title: '发布',
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

    exports('mpm_config_task_internalManagerTaskCompleteProcessStateManagement', obj);
});