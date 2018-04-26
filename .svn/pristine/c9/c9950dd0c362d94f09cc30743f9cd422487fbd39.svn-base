/**
 * Copyright ©2018 DATAOJO. All Rights Reserved. 北京相数科技有限公司 版权所有
 * Created Date: 2018.01.08
 * Author: 付国强
 * instructions:面包屑导航组件
 */
layui.define(['layer', 'element', 'form', 'table', 'config_constant', 'laydate', 'qRouter'], function (exports) {
    var layer = layui.layer;
    var element = layui.element;
    var form = layui.form;
    var table = layui.table;
    var laydate = layui.laydate;
    var config_constant = layui.config_constant;
    var qRouter = layui.qRouter;
    var obj = {
        viewTask: function (componentName) {

            var getRoot = $("[id^='render-viewTask']");
            getRoot.empty();
            $.each(getRoot, function (key, listId) {
                var nodeHtml = '';
                var getNodeHtml = $('#' + listId.id);
                nodeHtml += '<table id="add-viewTask" lay-filter="add-viewTask"></table>';
                getRoot.empty();
                getRoot.append(nodeHtml);
                element.init();
                form.render();
                var tabList_data = JSON.parse($.sessionStorage.getItem('tabList_data'));
                table.render({
                    elem: '#add-viewTask',
                    method: 'post',
                    page: true,
                    url: config_constant.URL_HEADER + '/task/a/search',
                    where: {
                        taskId: tabList_data.id
                    },
                    limits: [10, 20, 30],
                    cols: [
                        [{
                                field: 'batch_id',
                                title: '批次',
                                sort: true,
                                minWidth: 127
                            }, {
                                field: 'task_id',
                                title: '任务号',
                                sort: true,
                                minWidth: 160
                            }, {
                                field: 'mileage',
                                title: '里程',
                                sort: true,
                                minWidth: 127
                            }, {
                                field: 'step_value',
                                title: '任务环节',
                                sort: true,
                                minWidth: 127
                            }, {
                                field: 'department_value',
                                title: '负责单位',
                                sort: true,
                                minWidth: 127
                            }, {
                                field: 'department_value',
                                title: '组长',
                                sort: true,
                                minWidth: 127
                            }, {
                                field: 'status_value',
                                title: '任务状态',
                                sort: true,
                                minWidth: 127
                            }, {
                                field: 'type_value',
                                title: '任务类型',
                                sort: true,
                                minWidth: 127
                            }, {
                                field: 'production_projects',
                                title: '制作项',
                                sort: true,
                                minWidth: 300
                            }, {
                                field: 'launch_date',
                                title: '作业上线日期',
                                sort: true,
                                minWidth: 127
                            }, {
                                field: 'finish_date',
                                title: '制作完成日期',
                                sort: true,
                                minWidth: 127
                            },
                            {
                                field: 'pre_manday',
                                title: '预期人天',
                                sort: true,
                                minWidth: 127
                            },
                            {
                                field: 'des',
                                title: '备注',
                                sort: true,
                                minWidth: 127,
                                event: 'operation1',
                            },
                            {
                                field: 'operation',
                                title: '操作',
                                sort: true,
                                width: 127,
                                align: "center",
                                event: 'operation',
                                templet: '<div><a class="layui-table-link">任务详情</a></div>'
                            }
                        ]
                    ]
                });

                var filterId = 'add-viewTask';
                table.on('tool(' + filterId + ')', function (obj) {
                    tablistObj = obj;
                    var tableId = obj.data;
                    $.localStorage.setItem('taskList_localStorageData', JSON.stringify(tableId));
                    console.log(obj)
                    if (tableId.step_value == "质检") {
                        qRouter.go("TaskManagementNav/AdministratorTaskManagement/ViewQualityInspectorTaskList");
                    } else {
                        qRouter.go("TaskManagementNav/AdministratorTaskManagement/ViewOtherTaskList");
                    }
                });



            })
        }



    }

    exports('viewTask', obj);
});