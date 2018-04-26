/**
 * Copyright ©2018 DATAOJO. All Rights Reserved. 北京相数科技有限公司 版权所有
 * Created Date: 2018.01.08
 * Author: 付国强
 * instructions:高精度地图在线生产管理平台任务管理质检员任务正在进行中配置文件
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
                    title: '质检员进行中任务列表',
                    name: 'InspectorTaskLoading',
                    href: config_constant.HREF_HEADER + 'TaskManagementNav/InspectorTaskLoading',
                    routesName: 'mpm_task_inspector_taskLoading',
                    body: [{
                        title: '质检员进行中任务列表',
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
                                userIdParameter: [{
                                    Parameter: 'userId',
                                    type: '用户权限',
                                    KeyValue: {
                                        status: "5"
                                    }
                                }],
                                tableTemplet: "InspectorTaskLoading",
                                tableConfig: {
                                    url: config_constant.URL_HEADER + '/task/b/search',
                                    method: "post",
                                    page: true,
                                    limits: [10, 20, 30],
                                    cols: [
                                        [ //表头
                                            {
                                                field: 'task_id',
                                                title: '任务号',
                                                sort: true,
                                                event: 'task_id',
                                                minWidth:160
                                            }, {
                                                field: 'sub_task_id',
                                                title: '编号',
                                                sort: true,
                                                event: 'sub_task_id',
                                                minWidth:127
                                            }, {
                                                field: 'mileage',
                                                title: '里程（Km）',
                                                sort: true,
                                                event: 'mileage',
                                                minWidth:127
                                            }, {
                                                field: 'step_value',
                                                title: '任务环节',
                                                sort: true,
                                                event: 'step_value',
                                                minWidth:127
                                            }, {
                                                field: 'status_value',
                                                title: '任务状态',
                                                sort: true,
                                                event: 'status_value',
                                                minWidth:127
                                            }, {
                                                field: 'type_value',
                                                title: '任务类型',
                                                sort: true,
                                                event: 'type_value',
                                                minWidth:127
                                            }, {
                                                field: 'projects_value',
                                                title: '制作项',
                                                sort: true,
                                                event: 'projects_value',
                                                minWidth:127
                                            }, {
                                                field: 'launch_date',
                                                title: '作业上线日期',
                                                sort: true,
                                                event: 'launch_date',
                                                minWidth:127
                                            }, {
                                                field: 'finish_date',
                                                title: '作业完成日期',
                                                sort: true,
                                                event: 'finish_date',
                                                minWidth:127
                                            }
                                            // , { field: 'des', title: '备注', sort: true, event: 'des'}
                                            , {
                                                title: '操作',
                                                sort: true,
                                                event: 'pageJump',
                                                width: '360',
                                                align: 'center',
                                                templet: '<div><div class="tableList_Inspector_addOperate"></div></div>'
                                            }


                                        ]
                                    ],
                                },
                                submitUrl: config_constant.HREF_HEADER + 'char_main/chargingNodeList'
                            },
                        ]
                    }, ],
                    children: [

                    ]
                },


            ]
        }, ]
    }

    exports('mpm_config_task_inspector_taskLoading', obj);
});