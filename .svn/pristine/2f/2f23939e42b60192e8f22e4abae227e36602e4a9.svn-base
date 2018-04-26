/**
 * Copyright ©2018 DATAOJO. All Rights Reserved. 北京相数科技有限公司 版权所有
 * Created Date: 2018.01.08
 * Author: 付国强
 * instructions:采集管理员采集需求管理配置文件
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
                    title: '采集管理员采集需求管理',
                    name: 'CollectionManagerCollectionRequirementsManagement',
                    href: config_constant.HREF_HEADER + "CollectionAndManagement/CollectionManagerCollectionRequirementsManagement",
                    routesName: 'mpm_collectionAndManagement_collectionManagerCollectionRequirementsManagement',
                    body: [{
                        title: '采集管理员采集需求管理',
                        components: [{
                                name: 'button',
                                addButton: [{
                                        buttonName: '新增',
                                        url: config_constant.URL_HEADER + '/sys/user/save_qq',
                                        type: 'AddData',
                                        //宽度400px和800px可选
                                        area: ['800px', "500px"],
                                        listConfig: [{
                                                title: "需求名称",
                                                placeholder: "请输入需求名称",
                                                submitkey: "qq",
                                                type: 'input',
                                                valueType: "string",
                                            },
                                            {
                                                title: "城市代码",
                                                placeholder: "请输入城市代码",
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
                                                placeholder: "请选择城市",
                                                submitkey: "qq",
                                                type: 'input',
                                                valueType: "string",
                                            },
                                            {
                                                title: "需求里程(KM)",
                                                placeholder: "请输入需求里程(KM)",
                                                submitkey: "qq",
                                                type: 'input',
                                                valueType: "string",
                                            },
                                            {
                                                title: "任务类型",
                                                placeholder: "请输入任务类型",
                                                submitkey: "hireDate",
                                                type: 'formSelect',
                                                url: config_constant.URL_HEADER + '/sys/department/search',
                                            },
                                            {
                                                title: "预计开始时间",
                                                submitkey: "hireDate",
                                                placeholder: "请选择预计开始时间",
                                                type: 'timeSelect',
                                            },
                                            {
                                                title: "预计完成时间",
                                                submitkey: "hireDate",
                                                placeholder: "请选择预计完成时间",
                                                type: 'timeSelect',
                                            },
                                            {
                                                title: "采集负责人",
                                                placeholder: "请选择采集负责人",
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
                                         area: ['800px', "500px"],
                                        userIdParameter: [{
                                            sessionStorageParameter: 'id',
                                            submitKey: 'id',
                                            keyType: "number"
                                        }, ],
                                        listConfig: [{
                                                title: "需求名称",
                                                placeholder: "请输入需求名称",
                                                submitkey: "name",
                                                readDataKey: "name",
                                                type: 'input',
                                                valueType: "string"
                                            },
                                            {
                                                title: "城市代码",
                                                placeholder: "请输入城市代码",
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
                                                placeholder: "请输入城市",
                                                submitkey: "name",
                                                readDataKey: "name",
                                                type: 'input',
                                                valueType: "string"
                                            },
                                            {
                                                title: "需求里程(KM)",
                                                placeholder: "请输入需求里程",
                                                submitkey: "name",
                                                readDataKey: "name",
                                                type: 'input',
                                                valueType: "string"
                                            },
                                            {
                                                title: "任务类型",
                                                placeholder: "请选择任务类型",
                                                submitkey: "role",
                                                readDataKey: "role_value",
                                                type: 'formSelect',
                                                url: config_constant.URL_HEADER + '/sys/role/search',
                                            },
                                            {
                                                title: "预计开始时间",
                                                placeholder: "请选择预计开始时间",
                                                submitkey: "hireDate",
                                                readDataKey: "hire_date",
                                                type: 'timeSelect',
                                            },
                                            {
                                                title: "预计完成时间",
                                                placeholder: "请选择预计完成时间",
                                                submitkey: "hireDate",
                                                readDataKey: "hire_date",
                                                type: 'timeSelect',
                                            },
                                            {
                                                title: "采集负责人",
                                                placeholder: "请选择采集负责人",
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
                                        buttonName: 'Excel导入',
                                        url: config_constant.URL_HEADER + '/sys/user/save',
                                        type: 'UploadFile'
                                    },
                                    {
                                        buttonName: 'Excel导出',
                                        type: 'PageJump',
                                        href: config_constant.HREF_HEADER + 'TaskManagementNav/AdministratorTaskManagement/NewTask',
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
                                                minWidth: 110
                                            }, {
                                                field: 'sub_task_id',
                                                title: '需求名称',
                                                sort: true,
                                                event: 'sub_task_id',
                                                minWidth: 110
                                            }, {
                                                field: 'mileage',
                                                title: '城市代码',
                                                sort: true,
                                                event: 'mileage',
                                                minWidth: 110
                                            }, {
                                                field: 'step_value',
                                                title: '省份',
                                                sort: true,
                                                event: 'step_value',
                                                minWidth: 110
                                            }, {
                                                field: 'status_value',
                                                title: '城市',
                                                sort: true,
                                                event: 'status_value',
                                                minWidth: 110
                                            }, {
                                                field: 'type_value',
                                                title: '需求里程(KM)',
                                                sort: true,
                                                event: 'type_value',
                                                minWidth: 110
                                            }, {
                                                field: 'projects_value',
                                                title: '任务类型',
                                                sort: true,
                                                event: 'projects_value',
                                                minWidth: 110
                                            }, {
                                                field: 'launch_date',
                                                title: '预计开始时间',
                                                sort: true,
                                                event: 'launch_date',
                                                minWidth: 110
                                            }, {
                                                field: 'finish_date',
                                                title: '预计完成时间',
                                                sort: true,
                                                event: 'finish_date',
                                                minWidth: 110
                                            },
                                            {
                                                field: 'finish_date',
                                                title: '采集负责人',
                                                sort: true,
                                                event: 'finish_date',
                                                minWidth: 110
                                            },
                                            {
                                                field: 'finish_date',
                                                title: '已采集',
                                                sort: true,
                                                event: 'finish_date',
                                                minWidth: 110
                                            },
                                            {
                                                field: 'finish_date',
                                                title: '未采集',
                                                sort: true,
                                                event: 'finish_date',
                                                minWidth: 110
                                            },
                                            {
                                                field: 'finish_date',
                                                title: '备注',
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

    exports('mpm_config_collectionAndManagement_collectionManagerCollectionRequirementsManagement', obj);
});