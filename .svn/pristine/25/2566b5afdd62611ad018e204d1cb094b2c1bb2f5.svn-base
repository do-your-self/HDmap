/**
 * Copyright ©2018 DATAOJO. All Rights Reserved. 北京相数科技有限公司 版权所有
 * Created Date: 2018.01.08
 * Author: 付国强
 * instructions:非内业管理员任务全流程状态管理配置文件
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
                    title: '非内业管理员问题记录与反馈',
                    name: 'NoInternalManagementProblemRecordAndFeedback',
                    href: config_constant.HREF_HEADER + "TaskManagementNav/NoInternalManagementProblemRecordAndFeedback",
                    routesName: 'mpm_task_noInternalManagementProblemRecordAndFeedback',
                    body: [{
                        title: '非内业管理员问题记录与反馈',
                        components: [{
                            name: 'button',
                            addButton: [{
                                buttonName: '提问',
                                url: config_constant.URL_HEADER + '/sys/user/save_qq',
                                type: 'AddData',
                                //宽度400px和800px可选
                                area: ['400px', "500px"],
                                listConfig: [{
                                        title: "任务号",
                                        placeholder: "请输入任务号",
                                        submitkey: "qq",
                                        type: 'input',
                                        valueType: "number",
                                    },
                                    {
                                        title: "问题环节",
                                        placeholder: "请选择问题环节",
                                        submitkey: "hireDate",
                                        type: 'formSelect',
                                        url: config_constant.URL_HEADER + '/sys/department/search',
                                    },
                                    {
                                        title: "备注",
                                        placeholder: "请输入备注",
                                        submitkey: "qq",
                                        type: 'input',
                                        valueType: "string",
                                    }
                                ]
                            },
                            {
                                buttonName: '搜索',
                                url: config_constant.URL_HEADER + '/taskstatus/find',
                                type: 'SearchData',
                                listConfig: [{
                                    title: "搜索",
                                    submitkey: "qq",
                                    type: 'input'
                                }]
                            },
                        ]
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
                                            title: '任务号',
                                            sort: true,
                                            event: 'task_id',
                                            minWidth:160
                                        }, {
                                            field: 'sub_task_id',
                                            title: '问题环节',
                                            sort: true,
                                            event: 'sub_task_id',
                                            minWidth:110
                                        }, {
                                            field: 'mileage',
                                            title: '问题记录',
                                            sort: true,
                                            event: 'mileage',
                                            minWidth:160
                                        }, {
                                            field: 'step_value',
                                            title: '问题提出日期',
                                            sort: true,
                                            event: 'step_value',
                                            minWidth:110
                                        }, {
                                            field: 'status_value',
                                            title: '问题提出人',
                                            sort: true,
                                            event: 'status_value',
                                            minWidth:110
                                        }, {
                                            field: 'type_value',
                                            title: '问题解决人',
                                            sort: true,
                                            event: 'type_value',
                                            minWidth:110
                                        }, {
                                            field: 'projects_value',
                                            title: '解决方案',
                                            sort: true,
                                            event: 'projects_value',
                                            minWidth:110
                                        }, {
                                            field: 'launch_date',
                                            title: '解决日期',
                                            sort: true,
                                            event: 'launch_date',
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

    exports('mpm_config_task_noInternalManagementProblemRecordAndFeedback', obj);
});