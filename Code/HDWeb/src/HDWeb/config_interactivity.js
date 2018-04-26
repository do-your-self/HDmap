/**
 * Copyright ©2018 DATAOJO. All Rights Reserved. 北京相数科技有限公司 版权所有
 * Created Date: 2018.01.08
 * Author: 付国强
 * instructions:高精度地图在线生产管理平台组件交互事件配置文件
 */
layui.define(function (exports) {
    var obj = [
        {
            routesName: 'mpm_system_system_userManagement',
            interactivity: [
                {
                    controller: 'button',
                    controlled: [
                        {
                            name: 'tableList',
                            index:0
                        },
                    ]
                }
            ]
        },
        {
            routesName: 'mpm_task_administrator_taskManagement',
            interactivity: [
                {
                    controller: 'button',
                    controlled: [
                        {
                            name: 'tableList',
                            index:0
                        },
                    ]
                }
            ]
        },
        {
            routesName: 'mpm_task_editingGroupLeader_taskCompleted',
            interactivity: [
                {
                    controller: 'button',
                    controlled: [
                        {
                            name: 'tableList',
                            index:0
                        },
                    ]
                }
            ]
        },
        {
            routesName: 'mpm_task_editingGroupLeader_taskList',
            interactivity: [
                {
                    controller: 'button',
                    controlled: [
                        {
                            name: 'tableList',
                            index:0
                        },
                    ]
                }
            ]
        },
        {
            routesName: 'mpm_task_editingGroupLeader_taskLoading',
            interactivity: [
                {
                    controller: 'button',
                    controlled: [
                        {
                            name: 'tableList',
                            index:0
                        },
                    ]
                }
            ]
        },
        {
            routesName: 'mpm_task_editor_taskCompleted',
            interactivity: [
                {
                    controller: 'button',
                    controlled: [
                        {
                            name: 'tableList',
                            index:0
                        },
                    ]
                }
            ]
        },
        {
            routesName: 'mpm_task_editor_taskLoading',
            interactivity: [
                {
                    controller: 'button',
                    controlled: [
                        {
                            name: 'tableList',
                            index:0
                        },
                    ]
                }
            ]
        },
        {
            routesName: 'mpm_task_inspector_taskCompleted',
            interactivity: [
                {
                    controller: 'button',
                    controlled: [
                        {
                            name: 'tableList',
                            index:0
                        },
                    ]
                }
            ]
        },
        {
            routesName: 'mpm_task_inspector_taskLoading',
            interactivity: [
                {
                    controller: 'button',
                    controlled: [
                        {
                            name: 'tableList',
                            index:0
                        },
                    ]
                }
            ]
        },
        {
            routesName: 'mpm_task_newTask',
            interactivity: [
                {
                    controller: 'button',
                    controlled: [
                        {
                            name: 'tableList',
                            index:0
                        },
                    ]
                }
            ]
        },
        {
            routesName: 'mpm_system_system_linkSet',
            interactivity: [
                {
                    controller: 'button',
                    controlled: [
                        {
                            name: 'tableList',
                            index:0
                        },
                    ]
                }
            ]
        },
        {
            routesName: 'mpm_system_system_pathSettings',
            interactivity: [
                {
                    controller: 'button',
                    controlled: [
                        {
                            name: 'tableList',
                            index:0
                        },
                    ]
                }
            ]
        },
        {
            routesName: 'mpm_task_qcLead_taskLoading',
            interactivity: [
                {
                    controller: 'button',
                    controlled: [
                        {
                            name: 'tableList',
                            index:0
                        },
                    ]
                }
            ]
        },
        {
            routesName: 'mpm_task_qcLead_taskCompleted',
            interactivity: [
                {
                    controller: 'button',
                    controlled: [
                        {
                            name: 'tableList',
                            index:0
                        },
                    ]
                }
            ]
        },







    ]
    exports('config_interactivity', obj);
})