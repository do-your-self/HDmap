/**
 * Copyright ©2018 DATAOJO. All Rights Reserved. 北京相数科技有限公司 版权所有
 * Created Date: 2018.01.08
 * Author: 付国强
 * instructions:高精度地图在线生产管理平台任务管理管理员任务管理配置文件
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
                    title: '管理员任务管理',
                    name: 'AdministratorTaskManagement',
                    href: config_constant.HREF_HEADER + 'TaskManagementNav/AdministratorTaskManagement',
                    routesName: 'mpm_task_administrator_taskManagement',
                    body: [{
                        title: '管理员任务管理',
                        components: [{
                                name: 'button',
                                addButton: [{
                                        buttonName: '新增任务',
                                        type: 'PageJump',
                                        href: config_constant.HREF_HEADER + 'TaskManagementNav/AdministratorTaskManagement/NewTask',
                                    },
                                    {
                                        buttonName: '追加任务',
                                        type: 'AdditionalTasks',
                                        href: 'TaskManagementNav/AdministratorTaskManagement/AdditionalTasks',
                                    },
                                    {
                                        buttonName: '查看任务',
                                        type: 'ViewTask',
                                        href: 'TaskManagementNav/AdministratorTaskManagement/ViewTask',
                                    },
                                    {
                                        buttonName: '删除',
                                        type: 'Delete',
                                        url: config_constant.URL_HEADER + "/task/delete"
                                    },
                                    {
                                        buttonName: '搜索',
                                        url: config_constant.URL_HEADER + '/taskstatus/find',
                                        type: 'SearchData',
                                        listConfig: [
                                            {
                                                title: "搜索",
                                                submitkey: "search",
                                                type: 'input'
                                            }
                                        ]
                                    },
                                ]
                            },
                            {
                                name: 'tableList',
                                tableConfig: {
                                    url: config_constant.URL_HEADER + '/task/search',
                                    method: "post",
                                    page: true,
                                    limits: [10, 20, 30],
                                    cols: [
                                        [ //表头
                                            {
                                                field: 'id',
                                                title: '序号',
                                                sort: true,
                                                event: 'vehicleNumber',
                                                minWidth:127
                                            }, {
                                                field: 'task_id',
                                                title: '任务号',
                                                sort: true,
                                                event: 'vehicleNumber',
                                                minWidth:160
                                            }, {
                                                field: 'mileage',
                                                title: '里程（Km）',
                                                sort: true,
                                                event: 'vehicleNumber',
                                                minWidth:127
                                            }, {
                                                field: 'step_value',
                                                title: '任务环节',
                                                sort: true,
                                                event: 'vehicleNumber',
                                                minWidth:127
                                            }, {
                                                field: 'status_value',
                                                title: '任务状态',
                                                sort: true,
                                                event: 'vehicleNumber',
                                                minWidth:127
                                            }, {
                                                field: 'type_value',
                                                title: '任务类型',
                                                sort: true,
                                                event: 'vehicleNumber',
                                                minWidth:127
                                            }, 
                                            {
                                                field: 'accept_number',
                                                title: '次数',
                                                sort: true,
                                                event: 'vehicleNumber',
                                                minWidth:127
                                            },
                                            {
                                                field: 'production_projects',
                                                title: '制作项',
                                                sort: true,
                                                event: 'vehicleNumber',
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
                                                event: 'vehicleNumber',
                                                minWidth:127
                                            }, {
                                                field: 'accept_number',
                                                title: '验收次数',
                                                sort: true,
                                                event: 'vehicleNumber',
                                                minWidth:127
                                            }, {
                                                field: 'department_value',
                                                title: '单位',
                                                sort: true,
                                                event: 'vehicleNumber',
                                                minWidth:127
                                            }, 
                                            // {
                                            //     field: 'des',
                                            //     title: '备注',
                                            //     sort: true,
                                            //     event: 'vehicleNumber'
                                            // }

                                        ]
                                    ],
                                },
                                submitUrl: config_constant.HREF_HEADER + 'char_main/chargingNodeList'
                            },
                        ]
                    }, ],
                    children: [{
                        title: '新增任务',
                        name: 'chargingPointDetails',
                        href: config_constant.HREF_HEADER + 'TaskManagementNav/AdministratorTaskManagement/NewTask',
                        routesName: 'mpm_task_newTask',
                        body: [{
                                title: '任务基本信息',
                                components: [
                                {
                                    name: 'newTask_basicInformation',
                    
                                },

                            ]
                            },
                            {
                                title: '任务单(按环节新增任务)',
                                components: [
                                    {
                                        name: 'newTask_taskList',
                        
                                    },
                                ]
                            }
                        ],
                    }, 
                    {
                        title: '追加任务',
                        name: 'additionalTasks',
                        href: config_constant.HREF_HEADER + 'TaskManagementNav/AdministratorTaskManagement/AdditionalTasks',
                        routesName: 'mpm_task_administrator_additionalTasks',
                        body: [{
                                title: '任务基本信息',
                                components: [
                                    {
                                        name: 'newTask_basicInformation',
                        
                                    },
                                    // {
                                    //     name: 'basicInformation',
                                    //     userIdParameter: [{
                                    //         Parameter: 'id',
                                    //     },
                                    //     ],
                                    //     url: config_constant.URL_HEADER + '/task/search/by/id',
                                    //     formsContain: [
                                    //         {
                                    //             title: '任务号',
                                    //             type: 'text',
                                    //             submitkey: 'task_id'
                                    //         },
                                    //         {
                                    //             title: '里程(KM)',
                                    //             type: 'text',
                                    //             submitkey: 'mileage'
                                    //         },
        
                                    //         {
                                    //             title: '任务类型',
                                    //             type: 'text',
                                    //             submitkey: 'type_value'
                                    //         },
                                    //         {
                                    //             title: '备注',
                                    //             type: 'text',
                                    //             submitkey: 'des',
                                    //         },
                                    //     ]
                                    // },

                            ]
                            },
                            {
                                title: '任务单(按环节新增任务)',
                                components: [
                                    {
                                        name: 'newTask_taskList',
                        
                                    },
                                ]
                            }
                        ],
                    },
                    {
                        title: '查看任务',
                        name: 'viewTask',
                        href: config_constant.HREF_HEADER + 'TaskManagementNav/AdministratorTaskManagement/ViewTask',
                        routesName: 'mpm_task_administrator_viewTask',
                        body: [{
                                title: '任务基本信息',
                                components: [
                                    {
                                        name: 'basicInformation',
                                        userIdParameter: [{
                                            Parameter: 'id',
                                        },
                                        ],
                                        url: config_constant.URL_HEADER + '/task/search/by/id',
                                        formsContain: [
                                            {
                                                title: '任务号',
                                                type: 'text',
                                                submitkey: 'task_id'
                                            },
                                            {
                                                title: '里程(KM)',
                                                type: 'text',
                                                submitkey: 'mileage'
                                            },
        
                                            {
                                                title: '任务类型',
                                                type: 'text',
                                                submitkey: 'type_value'
                                            },
                                            {
                                                title: '备注',
                                                type: 'text',
                                                submitkey: 'des',
                                            },
                                        ]
                                    },
                            ]
                            },
                            {
                                title: '任务单(按环节新增任务)',
                                components: [
                                    {
                                        name: 'viewTask',
                        
                                    },
                                ]
                            }
                        ],
                    },
                    {
                        title: '质检任务详情',
                        name: 'qcTaskDetails',
                        href: config_constant.HREF_HEADER + 'TaskManagementNav/AdministratorTaskManagement/QualityInspectorTaskList',
                        routesName: 'mpm_task_qcLead_taskList',
                        body: [
                            {
                                title: '任务基本信息',
                                components: [
                                    {
                                        name: 'taskBasicInformation'                                                
                                    },                                   
                                ]
                            },
                            {
                                title: '任务单',
                                components: [                                                                             
                                    {
                                        name: 'qcTaskTableList',
                                    }, 
                                                                
                                ]
                            },
                            
                        ],
                    },
                    {
                        title: '非质检任务详情',
                        name: 'otherTaskDetails',
                        href: config_constant.HREF_HEADER + 'TaskManagementNav/AdministratorTaskManagement/OtherTaskList',
                        routesName: 'mpm_task_editingGroupLeader_taskList',
                        body: [
                            {
                                title: '任务基本信息',
                                components: [
                                    {
                                        name: 'taskBasicInformation'                                                
                                    },                                   
                                ]
                            },
                            {
                                title: '任务单',
                                components: [                                                                             
                                    {
                                        name: 'editorTaskTableList',
                                    }, 
                                                                
                                ]
                            },
                            
                        ],
                    },
                    {
                        title: '查看质检任务详情',
                        name: 'qcTaskTableListView',
                        href: config_constant.HREF_HEADER + 'TaskManagementNav/AdministratorTaskManagement/ViewQualityInspectorTaskList',
                        routesName: 'mpm_task_qcLead_viewTaskList',
                        body: [{
                                title: '任务基本信息',
                                components: [{
                                    name: 'taskBasicInformation'
                                }, ]
                            },
                            {
                                title: '任务单',
                                components: [{
                                        name: 'qcTaskTableListView',
                                    },

                                ]
                            },

                        ],
                    }, 
                    {
                        title: '查看非质检任务详情',
                        name: 'editorTaskTableListView',
                        href: config_constant.HREF_HEADER + 'TaskManagementNav/AdministratorTaskManagement/ViewOtherTaskList',
                        routesName: 'mpm_task_editingGroupLeader_viewTaskList',
                        body: [{
                                title: '任务基本信息',
                                components: [{
                                    name: 'taskBasicInformation'
                                }, ]
                            },
                            {
                                title: '任务单',
                                components: [{
                                        name: 'editorTaskTableListView',
                                    },

                                ]
                            },

                        ],
                    },
                ]
                },


            ]
        }, ]
    }

    exports('mpm_config_task_administrator_taskManagement', obj);
});