/**
 * Copyright ©2018 DATAOJO. All Rights Reserved. 北京相数科技有限公司 版权所有
 * Created Date: 2018.01.08
 * Author: 付国强
 * instructions:内业管理员问题记录与反馈配置文件
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
                    title: '内业管理员问题记录与反馈',
                    name: 'InternalManagementProblemRecordAndFeedback',
                    href: config_constant.HREF_HEADER + "TaskManagementNav/InternalManagementProblemRecordAndFeedback",
                    routesName: 'mpm_task_internalManagementProblemRecordAndFeedback',
                    body: [{
                        title: '内业管理员问题记录与反馈',
                        components: [{
                            name: 'button',
                            addButton: [{
                                buttonName: '提问',
                                url: config_constant.URL_HEADER + '/problem_record/ask',
                                type: 'AddData',
                                //宽度400px和800px可选
                                area: ['400px', "350px"],
                                userIdParameter: [{
                                    localStorageParameter: 'id',
                                    submitKey: 'askUserId',
                                    keyType: "number"
                                }, ],
                                listConfig: [{
                                        title: "任务号",
                                        placeholder: "请输入任务号",
                                        submitkey: "taskNum",
                                        type: 'input',
                                        valueType: "string",
                                    },
                                    {
                                        title: "问题环节",
                                        placeholder: "请选择问题环节",
                                        submitkey: "part",
                                        selectKeyType:"true",
                                        type: 'formSelect',
                                        url: config_constant.URL_HEADER + '/problem_part/find',
                                    },
                                    {
                                        title: "备注",
                                        placeholder: "请输入备注",
                                        submitkey: "problem",
                                        type: 'input',
                                        valueType: "string",
                                    }
                                ]
                            },
                            {
                                buttonName: '问题反馈',
                                url: config_constant.URL_HEADER + '/sys/user/update',
                                type: 'ModifyData',
                                 //宽度400px和800px可选
                                 area: ['400px', "500px"],
                                userIdParameter: [{
                                    localStorageParameter: 'id',
                                    submitKey: 'solveUserId	',
                                    keyType: "number"
                                }, ],
                                listConfig: [{
                                        title: "任务号",
                                        placeholder: "请输入任务号",
                                        submitkey: "name",
                                        readDataKey: "name",
                                        type: 'input',
                                        valueType: "string"
                                    },
                                    {
                                        title: "问题环节",
                                        placeholder: "请输入问题环节",
                                        submitkey: "name",
                                        readDataKey: "name",
                                        type: 'input',
                                        valueType: "number"
                                    },
                                    {
                                        title: "问题记录",
                                        placeholder: "请输入问题记录",
                                        submitkey: "name",
                                        readDataKey: "name",
                                        type: 'input',
                                        valueType: "number"
                                    },
                                    {
                                        title: "问题提出日期",
                                        placeholder: "请输入问题提出日期",
                                        submitkey: "name",
                                        readDataKey: "name",
                                        type: 'input',
                                        valueType: "number"
                                    },
                                    {
                                        title: "问题提出人",
                                        placeholder: "请输入问题提出人",
                                        submitkey: "name",
                                        readDataKey: "name",
                                        type: 'input',
                                        valueType: "number"
                                    },
                                    {
                                        title: "解决方案",
                                        submitkey: "solution",
                                        readDataKey: "solution",
                                        type: 'input',
                                        valueType: "number"
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
                            userIdParameter: [{
                                Parameter: 'askUserId',
                                ParameterType: 'number',
                                type: '用户id',
                            }],
                            tableConfig: {
                                url: config_constant.URL_HEADER + '/problem_record/find',
                                method: "post",
                                page: true,
                                limits: [10, 20, 30],
                                cols: [
                                    [ //表头
                                        {
                                            field: 'task_num',
                                            title: '任务号',
                                            sort: true,
                                            event: 'task_num',
                                            minWidth:160
                                        }, {
                                            field: 'part_name',
                                            title: '问题环节',
                                            sort: true,
                                            event: 'part_name',
                                            minWidth:110
                                        }, {
                                            field: 'problem',
                                            title: '问题记录',
                                            sort: true,
                                            event: 'problem',
                                            minWidth:160
                                        }, {
                                            field: 'ask_date',
                                            title: '问题提出日期',
                                            sort: true,
                                            event: 'ask_date',
                                            minWidth:110
                                        }, {
                                            field: 'ask_user_name',
                                            title: '问题提出人',
                                            sort: true,
                                            event: 'ask_user_name',
                                            minWidth:110
                                        }, {
                                            field: 'solve_user_name',
                                            title: '问题解决人',
                                            sort: true,
                                            event: 'solve_user_name',
                                            minWidth:110
                                        }, {
                                            field: 'solution',
                                            title: '解决方案',
                                            sort: true,
                                            event: 'solution',
                                            minWidth:110
                                        }, {
                                            field: 'solve_date',
                                            title: '解决日期',
                                            sort: true,
                                            event: 'solve_date',
                                            minWidth:110
                                        }
                                    ]
                                ],
                            },
                        },
                    ]
                    }, ]
                },


            ]
        }, ]
    }

    exports('mpm_config_task_internalManagementProblemRecordAndFeedback', obj);
});