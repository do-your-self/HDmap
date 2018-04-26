/**
 * Copyright ©2018 DATAOJO. All Rights Reserved. 北京相数科技有限公司 版权所有
 * Created Date: 2018.01.08
 * Author: 付国强
 * instructions:采集管理员采集计划管理配置文件
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
                    title: '采集管理员采集计划管理',
                    name: 'AcquisitionProgramManagement',
                    href: config_constant.HREF_HEADER + "CollectionAndManagement/AcquisitionProgramManagement",
                    routesName: 'mpm_collectionAndManagement_acquisitionProgramManagement',
                    body: [{
                        title: '采集管理员采集计划管理',
                        components: [{
                            name: 'button',
                            addButton: [{
                                buttonName: '新增',
                                url: config_constant.URL_HEADER + '/sys/user/save_qq',
                                type: 'AddData',
                              //宽度400px和800px可选
                              area: ['800px', "570px"],
                                listConfig: [{
                                        title: "需求编号",
                                        placeholder: "请输入需求编号",
                                        submitkey: "qq",
                                        type: 'input',
                                        valueType: "string",
                                    },
                                    {
                                        title: "任务号",
                                        placeholder: "请输入任务号",
                                        submitkey: "name",
                                        type: 'input',
                                        valueType: "number"
                                    },
                                    {
                                        title: "省份",
                                        placeholder: "请输入省份",
                                        submitkey: "qq",
                                        type: 'input',
                                        valueType: "string",
                                    },
                                    {
                                        title: "城市",
                                        placeholder: "请输入城市",
                                        submitkey: "qq",
                                        type: 'input',
                                        valueType: "string",
                                    },
                                    {
                                        title: "采集日期",
                                        submitkey: "hireDate",
                                        placeholder: "请选择采集日期",
                                        type: 'timeSelect',
                                    },
                                    {
                                        title: "采集里程",
                                        submitkey: "name",
                                        type: 'input',
                                        valueType: "number"
                                    },
                                    {
                                        title: "任务类型",
                                        placeholder: "请选择任务类型",
                                        submitkey: "hireDate",
                                        type: 'formSelect',
                                        url: config_constant.URL_HEADER + '/sys/department/search',
                                    },
                                    {
                                        title: "采集车",
                                        placeholder: "请选择采集车",
                                        submitkey: "qq",
                                        type: 'input',
                                        valueType: "string",
                                    },
                                    {
                                        title: "采集人",
                                        placeholder: "请输入采集人",
                                        submitkey: "qq",
                                        type: 'input',
                                        valueType: "string",
                                    },
                                    {
                                        title: "数据可用性",
                                        placeholder: "请选择数据可用性",
                                        submitkey: "qq",
                                        type: 'input',
                                        valueType: "string",
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
                                buttonName: '修改',
                                url: config_constant.URL_HEADER + '/sys/user/update',
                                type: 'ModifyData',
                                //宽度400px和800px可选
                                area: ['800px', "570px"],
                                userIdParameter: [{
                                    sessionStorageParameter: 'id',
                                    submitKey: 'id',
                                    keyType: "number"
                                }, ],
                                listConfig: [{
                                        title: "需求编号",
                                        placeholder: "请输入需求编号",
                                        submitkey: "name",
                                        readDataKey: "name",
                                        type: 'input',
                                        valueType: "string"
                                    },
                                    {
                                        title: "任务号",
                                        placeholder: "请输入任务号",
                                        submitkey: "name",
                                        readDataKey: "name",
                                        type: 'input',
                                        valueType: "number"
                                    },
                                    {
                                        title: "省份",
                                        placeholder: "请输入省份",
                                        submitkey: "name",
                                        readDataKey: "name",
                                        type: 'input',
                                        valueType: "string"
                                    },
                                    {
                                        title: "城市",
                                        submitkey: "name",
                                        readDataKey: "name",
                                        type: 'input',
                                        valueType: "string"
                                    },
                                    {
                                        title: "采集日期",
                                        placeholder: "请选择采集日期",
                                        submitkey: "hireDate",
                                        readDataKey: "hire_date",
                                        type: 'timeSelect',
                                    },
                                    {
                                        title: "采集人",
                                        placeholder: "请输入采集人",
                                        submitkey: "name",
                                        readDataKey: "name",
                                        type: 'input',
                                        valueType: "string"
                                    },
                                    {
                                        title: "数据可用性",
                                        placeholder: "请选择数据可用性",
                                        submitkey: "name",
                                        readDataKey: "name",
                                        type: 'input',
                                        valueType: "string"
                                    },
                                    {
                                        title: "备注",
                                        placeholder: "请输入备注",
                                        submitkey: "name",
                                        readDataKey: "name",
                                        type: 'input',
                                        valueType: "string"
                                    }
                                ]
                            },
                            {
                                buttonName: '删除',
                                type: 'Delete',
                                url: config_constant.URL_HEADER + "/sys/user/delete_id"
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
                                            title: '需求编号',
                                            sort: true,
                                            event: 'task_id',
                                            minWidth:110
                                        }, {
                                            field: 'sub_task_id',
                                            title: '省份',
                                            sort: true,
                                            event: 'sub_task_id',
                                            minWidth:110
                                        }, {
                                            field: 'mileage',
                                            title: '城市',
                                            sort: true,
                                            event: 'mileage',
                                            minWidth:110
                                        }, {
                                            field: 'step_value',
                                            title: '采集日期',
                                            sort: true,
                                            event: 'step_value',
                                            minWidth:110
                                        }, {
                                            field: 'status_value',
                                            title: '任务号',
                                            sort: true,
                                            event: 'status_value',
                                            minWidth:160
                                        }, {
                                            field: 'type_value',
                                            title: '采集里程(KM)',
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
                                            title: '采集车',
                                            sort: true,
                                            event: 'launch_date',
                                            minWidth:110
                                        }, {
                                            field: 'finish_date',
                                            title: '采集人',
                                            sort: true,
                                            event: 'finish_date',
                                            minWidth:110
                                        },
                                        {
                                            field: 'finish_date',
                                            title: '数据可用性',
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

    exports('mpm_config_collectionAndManagement_acquisitionProgramManagement', obj);
});