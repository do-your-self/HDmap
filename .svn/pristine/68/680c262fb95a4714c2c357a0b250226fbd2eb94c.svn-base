/**
 * Copyright ©2018 DATAOJO. All Rights Reserved. 北京相数科技有限公司 版权所有
 * Created Date: 2018.01.08
 * Author: 付国强
 * instructions:高精度地图在线生产管理平台任务管理编辑组长任务正在进行中配置文件
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
                    title: '编辑组长进行中任务列表',
                    name: 'EditingGroupLeaderTaskLoading',
                    href: config_constant.HREF_HEADER + 'TaskManagementNav/EditingGroupLeaderTaskLoading',
                    routesName: 'mpm_task_editingGroupLeader_taskLoading',
                    body: [{
                        title: '编辑组长进行中任务列表',
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
                                        status: "2,9,3,10"
                                    }
                                }],
                                tableConfig: {
                                    url: config_constant.URL_HEADER + '/task/a/search',
                                    method: "post",
                                    page: true,
                                    limits: [10, 20, 30],
                                    cols: [
                                        [ //表头
                                            {
                                                field: 'batch_id',
                                                title: '批次号',
                                                sort: true,
                                                event: 'batch_id',
                                                minWidth:127
                                            }, {
                                                field: 'task_id',
                                                title: '任务号',
                                                sort: true,
                                                event: 'task_id',
                                                minWidth:160
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
                                                field: 'department_value',
                                                title: '负责单位',
                                                sort: true,
                                                event: 'department_value',
                                                minWidth:127
                                            }, {
                                                field: 'name',
                                                title: '组长',
                                                sort: true,
                                                event: 'name',
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
                                                field: 'accept_number',
                                                title: '次数',
                                                sort: true,
                                                event: 'accept_number',
                                                minWidth:127
                                            }, {
                                                field: 'production_projects',
                                                title: '制作项',
                                                sort: true,
                                                event: 'production_projects',
                                                minWidth:300
                                            }, {
                                                field: 'launch_date',
                                                title: '作业上线日期',
                                                sort: true,
                                                event: 'vehicleNumber',
                                                minWidth:127
                                            }, {
                                                field: 'finish_date',
                                                title: '制作完成日期',
                                                sort: true,
                                                event: 'finish_date',
                                                minWidth:127
                                            }, {
                                                field: 'pre_manday',
                                                title: '预期人天',
                                                sort: true,
                                                event: 'pre_manday',
                                                minWidth:127
                                            }
                                            // , { field: 'des', title: '备注', sort: true, event: 'des' }
                                            , {
                                                title: '操作',
                                                sort: true,
                                                event: 'pageJump',
                                                width: '180',
                                                align: 'center',
                                                templet: '<div>' +
                                                    '<a class="layui-btn layui-btn-primary tableList_btnsize tableList_Tasklist" href="' + config_constant.HREF_HEADER + 'TaskManagementNav/EditingGroupLeaderTaskLoading/EditingGroupLeaderTaskList">任务单</a>' +
                                                    // '<a class="layui-btn layui-btn-primary tableList_btnsize tableList_Viewtask" href="">查看任务</a>'+
                                                    '</div>'
                                            }
                                        ]
                                    ],
                                },
                                submitUrl: config_constant.HREF_HEADER + 'char_main/chargingNodeList'
                            },
                        ]
                    }, ],
                    children: [{
                        title: '任务单',
                        name: 'EditingGroupLeaderTaskList',
                        href: config_constant.HREF_HEADER + 'TaskManagementNav/EditingGroupLeaderTaskLoading/EditingGroupLeaderTaskList',
                        routesName: 'mpm_task_editingGroupLeader_taskList',
                        body: [{
                                title: '任务基本信息',
                                components: [{
                                    name: 'taskBasicInformation'
                                }, ]
                            },
                            {
                                title: '任务单',
                                components: [{
                                        name: 'editorTaskTableList',
                                    },

                                ]
                            },

                        ],
                    }, ]
                },


            ]
        }, ]
    }

    exports('mpm_config_task_editingGroupLeader_taskLoading', obj);
});