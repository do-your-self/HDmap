/**
 * Copyright ©2018 DATAOJO. All Rights Reserved. 北京相数科技有限公司 版权所有
 * Created Date: 2018.01.08
 * Author: 付国强
 * instructions:面包屑导航组件
 */
layui.link('./script/newTask/newTask_taskList.css')
layui.define(['layer', 'element', 'form', 'table', 'config_interactivity', 'config_constant', 'laydate', 'qRouter','newTask_basicInformation'], function (exports) {
    var layer = layui.layer;
    var element = layui.element;
    var form = layui.form;
    var table = layui.table;
    var laydate = layui.laydate;
    var qRouter = layui.qRouter;
    var newTask_basicInformation = layui.newTask_basicInformation;
    var config_interactivity = layui.config_interactivity;
    var config_constant = layui.config_constant;
    var obj = {
        newTask_taskList: function (componentName) {
            var thisP = this;
            var taskLinkData = null;
            var chargeUunitData = null;
            var groupLeaderID = null;
            if (JSON.parse($.localStorage.getItem('newTaskLinkTable')) == undefined || JSON.parse($.localStorage.getItem('newTaskLinkTable')) == null || JSON.parse($.localStorage.getItem('newTaskLinkTable')) == "null") {
                $.localStorage.setItem('newTaskLinkTable', JSON.stringify([]));
            }
            var newTaskLinkPopue = null;
            var tablistObj = null;
            var ajaxData = {};

            var getRoot = $("[id^='render-newTask_taskList']");
            getRoot.empty();
            $.each(getRoot, function (key, listId) {
                var nodeHtml = '';
                var getNodeHtml = $('#' + listId.id);
                nodeHtml += '<div class="newTask_taskList_contain">';
                nodeHtml += '<form class="layui-form" action="">';


                nodeHtml += '<div class="newTask_taskList-buttonGroup">';
                nodeHtml += '<div class="layui-btn layui-btn-normal newTaskLink">新增任务环节</div>';
                nodeHtml += '<div class="layui-btn layui-btn-normal taskLinkChange">任务环节变更</div>';
                nodeHtml += '<div class="layui-btn layui-btn-normal taskDetails">任务详情</div>';
                nodeHtml += '<div class="layui-btn layui-btn-normal deleteTaskDetails">删除任务详情</div>';
                nodeHtml += '</div>';
                nodeHtml += '<div>';
                nodeHtml += '<table id="newTask_taskList_table" lay-filter="newTask_taskList_table"></table>';
                nodeHtml += '</div>';


                nodeHtml += '</form>';
                nodeHtml += '</div>';
                getRoot.empty();
                getRoot.append(nodeHtml);
                element.init();
                form.render();
                var routerLocation = window.location.hash;
                // var basicInformationStatue = $("[id^='render-basicInformation']");
                if (routerLocation.indexOf("AdditionalTasks") > 0) {
                    var tabList_data = JSON.parse($.sessionStorage.getItem('tabList_data'));
                    $.localStorage.setItem('AdmintaskLineID', tabList_data.id)
                    table.render({
                        elem: '#newTask_taskList_table',
                        method: 'post',
                        url: config_constant.URL_HEADER + '/task/a/search',
                        where: {
                            taskId: tabList_data.id
                        },
                        page: true,
                        limits: [10, 20, 30],
                        cols: [
                            [{
                                    field: 'batch_id',
                                    title: '批次',
                                    sort: true,
                                    event: 'vehicleNumber',
                                    minWidth:127
                                }, {
                                    field: 'task_id',
                                    title: '任务号',
                                    sort: true,
                                    event: 'batch_id',
                                    minWidth:160
                                }, {
                                    field: 'mileage',
                                    title: '里程',
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
                                    field: 'department_value',
                                    title: '负责单位',
                                    sort: true,
                                    event: 'vehicleNumber',
                                    minWidth:127
                                }, {
                                    field: 'name',
                                    title: '组长',
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
                                },
                                {
                                    field: 'pre_manday',
                                    title: '预期人天',
                                    sort: true,
                                    event: 'vehicleNumber',
                                    minWidth:127
                                },
                                {
                                    field: 'status_value',
                                    title: '操作',
                                    sort: true,
                                    event: 'task_operation',
                                    align: "center",
                                    minWidth:127,
                                    templet: function (d) {
                                        if (d.status == 1) {
                                            return '<div class="layui-btn layui-btn-primary layui-btn-xs task_operation_issuedTask">下发任务</div>'
                                        }
                                        if (d.status == 2 || d.status == 3 || d.status == 4 || d.status == 5 || d.status == 8 || d.status == 9 || d.status == 10) {
                                            return '<div class="layui-btn layui-btn-primary  layui-btn-xs">无操作</div>'
                                        }
                                        if (d.status == 6 || d.status == 7) {
                                            return '<div class="layui-btn layui-btn-primary  layui-btn-xs ' + (d.if_quality == 0 ? "task_operation_modifyTask" : "layui-btn-disabled") + '">修改任务</div>'
                                        }
                                        if (d.status == 11) {
                                            return '<div class="layui-btn layui-btn-primary  layui-btn-xs ' + (d.if_quality == 0 ? "task_operation_qualityInspectionTasks" : "layui-btn-disabled") + '">质检任务</div>'
                                        }
                                    }
                                },
                            ]
                        ],
                        done: function (res, curr, count) {
                            if (res.code == 0 && res.data.length > 0) {
                                $.localStorage.setItem('theTotalNumberOfTasks', JSON.stringify(res.data));
                            } else {
                                $.localStorage.setItem('theTotalNumberOfTasks', null);
                            }
                            newTask_basicInformation.newTask_basicInformation()
                        }
                    });
                } else {
                    table.render({
                        elem: '#newTask_taskList_table',
                        method: 'get',
                        page: true,
                        limits: [10, 20, 30],
                        cols: [
                            [{
                                    field: 'batch_id',
                                    title: '批次',
                                    sort: true,
                                    event: 'vehicleNumber',
                                    minWidth:127
                                }, {
                                    field: 'task_id',
                                    title: '任务号',
                                    sort: true,
                                    event: 'batch_id',
                                    minWidth:160
                                }, {
                                    field: 'mileage',
                                    title: '里程',
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
                                    field: 'department_value',
                                    title: '负责单位',
                                    sort: true,
                                    event: 'vehicleNumber',
                                    minWidth:127
                                }, {
                                    field: 'name',
                                    title: '组长',
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
                                },
                                {
                                    field: 'pre_manday',
                                    title: '预期人天',
                                    sort: true,
                                    event: 'vehicleNumber',
                                    minWidth:127
                                },
                                {
                                    field: 'status_value',
                                    title: '操作',
                                    sort: true,
                                    event: 'task_operation',
                                    align: "center",
                                    minWidth:127,
                                    templet: function (d) {
                                        if (d.status == 1) {
                                            return '<div class="layui-btn layui-btn-primary layui-btn-xs task_operation_issuedTask">下发任务</div>'
                                        }
                                        if (d.status == 2 || d.status == 3 || d.status == 4 || d.status == 5 || d.status == 8 || d.status == 9 || d.status == 10) {
                                            return '<div class="layui-btn layui-btn-primary  layui-btn-xs">无操作</div>'
                                        }
                                        if (d.status == 6 || d.status == 7) {
                                            return '<div class="layui-btn layui-btn-primary  layui-btn-xs ' + (d.if_quality == 0 ? "task_operation_modifyTask" : "layui-btn-disabled") + '">修改任务</div>'
                                        }
                                        if (d.status == 11) {
                                            return '<div class="layui-btn layui-btn-primary  layui-btn-xs ' + (d.if_quality == 0 ? "task_operation_qualityInspectionTasks" : "layui-btn-disabled") + '">质检任务</div>'
                                        }
                                    }
                                },
                            ]
                        ],
                        data: JSON.parse($.localStorage.getItem('newTaskLinkTable'))
                    });
                }

                //点击详细信息页面跳转传递参数到下一个页面
                var filterId = 'newTask_taskList_table';
                table.on('tool(' + filterId + ')', function (obj) {
                    tablistObj = obj;
                    var tableId = obj.data;
                    $.sessionStorage.setItem('newTask_taskList_data', JSON.stringify(tableId));
                    // 存储信息用于任务单
                    $.localStorage.setItem('taskList_localStorageData', JSON.stringify(tableId));
                    //任务操作
                    if (obj.event == "task_operation") {
                        var task_operation_tr = obj.tr;
                        //下发任务
                        if (task_operation_tr.find(".task_operation_issuedTask").length != 0) {
                            issuedTask()
                        }
                        //修改任务
                        if (task_operation_tr.find(".task_operation_modifyTask").length != 0) {
                            qualityInspectionAndModification("modifyTask")
                        }
                        //质检任务
                        if (task_operation_tr.find(".task_operation_qualityInspectionTasks").length != 0) {
                            qualityInspectionAndModification("qualityInspectionTasks")
                        }
                    }
                });
                //新增制作
                $(".newTask_taskList_contain .newTaskLink").on('click', function () {

                    if ($.localStorage.getItem('missionBasicInformation') == undefined || $.localStorage.getItem('missionBasicInformation') == null) {
                        layer.alert("请先填写基本信息")
                    } else {
                        var AddDataContent = '';
                        AddDataContent += '<div class="newTask_taskList-PopupContain">';
                        AddDataContent += '<form class="layui-form" action="" lay-filter="popue_tablist_form">';

                        // 任务环节
                        AddDataContent += '<div class="newTask_taskList-PopupGroup newTask_taskList-singleRow">';
                        AddDataContent += '<label class="newTask_taskList-PopupTitle">任务环节:</label>';
                        AddDataContent += '<div class="newTask_taskList-PopupInput" id="newTask_taskList_taskLink">';
                        AddDataContent += '<select name="city" disabled lay-verify="newTask_newProductionItems">'
                        AddDataContent += '<option value="制作" selected>制作</option>'
                        AddDataContent += '</select>'
                        AddDataContent += '</div>';
                        AddDataContent += '</div>';

                        // 制作项
                        AddDataContent += '<div class="newTask_taskList-PopupGroup newTask_taskList-PopupGroupCheckbox newTask_taskList-singleRow">';
                        AddDataContent += '<label class="newTask_taskList-PopupTitle">制作项:</label>';
                        AddDataContent += '<div class="newTask_taskList-PopupInput" id="newTask_taskList_makeProject">';
                        $.ajax({
                            type: 'get',
                            async: false,
                            url: config_constant.URL_HEADER + "/task/projects/search",
                            success: function (res) {
                                $.each(res.data, function (resKey, resValue) {
                                    AddDataContent += '<div class="newTask_taskList-PopupGroupCheckbox">';
                                    AddDataContent += '<input value="' + resValue.id + '" type="checkbox" lay-skin="primary" title="' + resValue.value + '">';
                                    AddDataContent += '</div>';
                                })
                            },
                            error: function (e, m) {

                            }
                        });
                        AddDataContent += '</div>';
                        AddDataContent += '</div>';

                        // 负责单位
                        AddDataContent += '<div class="newTask_taskList-PopupGroup newTask_taskList-doubleRow">';
                        AddDataContent += '<label class="newTask_taskList-PopupTitle">负责单位:</label>';
                        AddDataContent += '<div class="newTask_taskList-PopupInput" id="newTask_taskList_chargeUunit">';
                        AddDataContent += '<select>'
                        AddDataContent += '<option value="">请选择</option>'
                        $.ajax({
                            type: 'get',
                            async: false,
                            url: config_constant.URL_HEADER + "/sys/department/search",
                            success: function (res) {
                                chargeUunitData = res.data;
                                $.each(res.data, function (resKey, resValue) {
                                    AddDataContent += '<option value="' + resValue.id + '">' + resValue.value + '</option>';
                                })
                            },
                            error: function (e, m) {

                            }
                        });
                        AddDataContent += '</select>'
                        AddDataContent += '</div>';
                        AddDataContent += '</div>';

                        //组长
                        AddDataContent += '<div class="newTask_taskList-PopupGroup newTask_taskList-doubleRow">';
                        AddDataContent += '<label class="newTask_taskList-PopupTitle">组长:</label>';
                        AddDataContent += '<div class="newTask_taskList-PopupInput">';
                        AddDataContent += '<input autocomplete="off"  class="layui-input" id="newTask_taskList_PopupePopup" placeholder="请选择组长">';
                        AddDataContent += '</div>';
                        AddDataContent += '</div>';

                        //效率
                        AddDataContent += '<div class="newTask_taskList-PopupGroup newTask_taskList-doubleRow">';
                        AddDataContent += '<label class="newTask_taskList-PopupTitle">效率:</label>';
                        AddDataContent += '<div class="newTask_taskList-PopupInput">';
                        AddDataContent += '<input onkeydown="if(event.keyCode==32) return false" autocomplete="off"  class="layui-input" id="newTask_taskList_Popupefficiency" placeholder="请输入效率">';
                        AddDataContent += '</div>';
                        AddDataContent += '</div>';

                        //任务量
                        AddDataContent += '<div class="newTask_taskList-PopupGroup newTask_taskList-doubleRow">';
                        AddDataContent += '<label class="newTask_taskList-PopupTitle">任务量(里程/效率):</label>';
                        AddDataContent += '<div class="newTask_taskList-PopupInput">';
                        // AddDataContent += '<input autocomplete="off" disabled  class="layui-input" id="newTask_taskList_PopupegetMileage" placeholder="里程/效率">';
                        AddDataContent += '<input autocomplete="off"   class="layui-input" id="newTask_taskList_PopupegetMileage" placeholder="里程/效率">';
                        AddDataContent += '</div>';
                        AddDataContent += '</div>';

                        // 上线日期
                        AddDataContent += '<div class="newTask_taskList-PopupGroup newTask_taskList-doubleRow">';
                        AddDataContent += '<label class="newTask_taskList-PopupTitle">上线日期(计划):</label>';
                        AddDataContent += '<div class="newTask_taskList-PopupInput">';
                        AddDataContent += '<input  onkeydown="if(event.keyCode==32) return false" type="text"   placeholder="请选择上线日期(计划)" autocomplete="off" id="newTask_taskList_launchDate" class="layui-input">';
                        AddDataContent += '</div>';
                        AddDataContent += '</div>';

                        // 完成日期
                        AddDataContent += '<div class="newTask_taskList-PopupGroup newTask_taskList-doubleRow">';
                        AddDataContent += '<label class="newTask_taskList-PopupTitle">完成日期(计划):</label>';
                        AddDataContent += '<div class="newTask_taskList-PopupInput completionDate">';
                        AddDataContent += '<input  onkeydown="if(event.keyCode==32) return false" type="text"   placeholder="请选择完成日期(计划)" autocomplete="off" id="newTask_taskList_completionDate" class="layui-input">';
                        AddDataContent += '</div>';
                        AddDataContent += '</div>';

                        // 执行保存后,同步下发该任务
                        AddDataContent += '<div class="newTask_taskList-PopupGroup newTask_taskList-PopupGroupCheckbox newTask_taskList_ssuedTask">';
                        AddDataContent += '<div class="newTask_taskList-PopupGroupCheckbox newTask_taskList-singleRow" id="newTask_taskList_synchronizeTasks">';
                        AddDataContent += '<input  type="checkbox" lay-skin="primary" title="执行保存后,同步下发该任务">';
                        AddDataContent += '</div>';
                        AddDataContent += '</div>';
                        AddDataContent += '<div class="newTask_taskList-PopupGroupButton">';
                        AddDataContent += '<div class="newTask_taskList-buttonSubmit">'
                        AddDataContent += '<div class="layui-btn layui-btn-normal" id="buttonSubmit-cancel">取消</div>';
                        AddDataContent += '<div class="layui-btn lay-submit layui-btn-normal" id="buttonSubmit-submit" lay-filter="formDemo">提交</div>';
                        AddDataContent += '</div>';
                        AddDataContent += '</div>';
                        AddDataContent += '</form>';
                        layer.open({
                            title: '新增任务环节',
                            type: 1,
                            //加上边框
                            skin: 'layui-layer-taskSkin',
                            //宽高
                            area: ["500px", "580px"],
                            content: AddDataContent,
                            //不显示关闭按钮,
                            closeBtn: 0,
                            //开启遮罩关闭
                            shadeClose: true,
                            success: function (layero, index) {
                                newTaskLinkPopue = index;
                                element.render();
                                form.render(null, "popue_tablist_form");
                                //初始化上线时间组件
                                laydate.render({
                                    elem: "#newTask_taskList_launchDate",
                                    type: 'date',
                                    done: function (value, date, endDate) {}
                                });
                                //初始化完成时间组件
                                laydate.render({
                                    elem: "#newTask_taskList_completionDate",
                                    type: 'date',
                                    done: function (value, date, endDate) {}
                                });

                                //点击取消
                                $("#buttonSubmit-cancel").on('click', function () {
                                    layer.closeAll();
                                })
                                //组长弹窗
                                $("#newTask_taskList_PopupePopup").on('focus', function () {
                                    // 获取任务环节和负责单位
                                    var taskLink = 1;
                                    var chargeUunit = $("#newTask_taskList_chargeUunit input");
                                    if (taskLink = "") {
                                        layer.alert("请选择任务环节")
                                    } else if (chargeUunit.val() == "") {
                                        layer.alert("请选择负责单位")
                                    } else {
                                        var addTaskContent = '';
                                        addTaskContent += '<div class="selectGroupLeader_container">';
                                        addTaskContent += '<form class="layui-form" action="">';
                                        addTaskContent += '<label class="selectGroupLeader_label">输入框</label>';
                                        addTaskContent += '<div class="layui-input-inline selectGroupLeader_input">';
                                        addTaskContent += '<input type="text" name="title" required  lay-verify="required" placeholder="搜索组长" autocomplete="off" class="layui-input searchValue">';
                                        addTaskContent += '</div>';
                                        addTaskContent += '<div class="layui-btn layui-btn-normal search" style="margin-left:10px;">搜索</div>';
                                        addTaskContent += '</form>';
                                        addTaskContent += '<table id="selectGroupLeader_table" lay-filter="selectGroupLeader_table"></table>';
                                        addTaskContent += '<div class="layui-btn layui-btn-primary selectGroupLeader_moveBtn closeWindow">取消</div>';
                                        addTaskContent += '<div class="layui-btn layui-btn-normal addMsg">添加</div>';
                                        addTaskContent += '</div>';
                                        var indexPopue = "";
                                        layer.open({
                                            title: '添加已有任务号',
                                            type: 1, //加上边框
                                            skin: 'layui-layer-taskSkin',
                                            //宽高
                                            area: ['590px', '500px'],
                                            content: addTaskContent,
                                            //不显示关闭按钮,
                                            closeBtn: 0,
                                            //开启遮罩关闭
                                            shadeClose: true,
                                            success: function (layero, index) {

                                                // 任务环节
                                                var parameterTaskLink = 1;

                                                //负责单位
                                                var parameterChargeUunit = "";
                                                $.each(chargeUunitData, function (chargeUunitDataKey, chargeUunitDataValue) {
                                                    if (chargeUunitDataValue.value == chargeUunit.val()) {
                                                        parameterChargeUunit = chargeUunitDataValue.id;
                                                    }
                                                })
                                                table.render({
                                                    elem: '#selectGroupLeader_table',
                                                    method: 'post',
                                                    url: config_constant.URL_HEADER + '/sys/user/search/group_leader',
                                                    where: {
                                                        stepId: parameterTaskLink,
                                                        departmentId: parameterChargeUunit,
                                                    },
                                                    cellMinWidth: 100,
                                                    height: 322,
                                                    page: true,
                                                    limits: [10, 20, 30],
                                                    cols: [
                                                        [{
                                                                field: 'id',
                                                                title: 'ID',
                                                                sort: true,
                                                                align: 'center',
                                                                event: 'addTaskId'
                                                            },
                                                            {
                                                                field: 'qq',
                                                                title: 'QQ号',
                                                                sort: true,
                                                                align: 'center',
                                                                event: 'addTaskId'
                                                            },
                                                            {
                                                                field: 'name',
                                                                title: '姓名',
                                                                sort: true,
                                                                align: 'center',
                                                                event: 'addTaskId'
                                                            }
                                                        ]
                                                    ]
                                                });

                                                table.on('tool(selectGroupLeader_table)', function (obj) {
                                                    var data = obj.data,
                                                        layEvent = obj.event;
                                                    if (layEvent === 'addTaskId') {
                                                        $.sessionStorage.setItem('newTask_taskList_PopupePopup', JSON.stringify(data));
                                                    }
                                                });

                                                $(".search").on('click', function () {
                                                        var inputValue = $(".searchValue").val();
                                                        table.reload('selectGroupLeader_table', {
                                                            url: config_constant.URL_HEADER + '/sys/user/search/group_leader',
                                                            method: 'post',
                                                            where: {
                                                                search: inputValue,
                                                                stepId: parameterTaskLink,
                                                                departmentId: parameterChargeUunit,
                                                            }
                                                        });
                                                    }),
                                                    $(".closeWindow").on('click', function () {
                                                        layer.close(index);
                                                        var selectBox = $("#newTask_taskList_PopupePopup");
                                                        selectBox.val("");
                                                        $.sessionStorage.setItem('newTask_taskList_PopupePopup', null);
                                                    })
                                                $(".addMsg").on('click', function () {
                                                    var newTask_taskList_PopupePopup = JSON.parse($.sessionStorage.getItem('newTask_taskList_PopupePopup'));
                                                    if (newTask_taskList_PopupePopup != null && newTask_taskList_PopupePopup != undefined && newTask_taskList_PopupePopup != "null") {
                                                        var optionValue = newTask_taskList_PopupePopup.name;
                                                        groupLeaderID = newTask_taskList_PopupePopup.id;
                                                        var selectBox = $("#newTask_taskList_PopupePopup");
                                                        selectBox.val(optionValue);
                                                        layer.close(index);
                                                        $.sessionStorage.setItem('newTask_taskList_PopupePopup', null);
                                                    } else {
                                                        layer.alert('请选中要添加的行');
                                                    }
                                                })
                                            }
                                        });
                                    }
                                })
                                // 计算任务量
                                $("#newTask_taskList_Popupefficiency").on('keyup', function () {
                                    var mileage = JSON.parse($.localStorage.getItem('missionBasicInformation')).mileage;
                                    console.log(mileage)
                                    //计算效率
                                    var efficiency = parseFloat(mileage) / parseFloat($("#newTask_taskList_Popupefficiency").val());
                                    if ($("#newTask_taskList_Popupefficiency").val() == "") {
                                        $("#newTask_taskList_PopupegetMileage").val("里程/效率");
                                    } else if (Number($("#newTask_taskList_Popupefficiency").val()) == 0) {
                                        $("#newTask_taskList_PopupegetMileage").val("效率不能为0");
                                    } else if (isNaN(Number($("#newTask_taskList_Popupefficiency").val()))) {
                                        $("#newTask_taskList_PopupegetMileage").val("效率只能为数字");
                                    } else {
                                        $("#newTask_taskList_PopupegetMileage").val(efficiency.toFixed(5));
                                    }

                                })
                                $("#buttonSubmit-submit").on("click", function () {
                                    //获取每个input的值
                                    //获取任务环节
                                    var taskLink = 1;
                                    // 获取制作项
                                    var makeProjectCheckbox = [];
                                    var makeProjectChecked = $("#newTask_taskList_makeProject .newTask_taskList-PopupGroupCheckbox");
                                    $.each(makeProjectChecked, function (makeProjectCheckedKey, makeProjectCheckedValue) {
                                        if ($(makeProjectCheckedValue).find(".layui-form-checked").length > 0) {
                                            makeProjectCheckbox.push($(makeProjectCheckedValue).find("input")[0].title);
                                        }
                                    })
                                    // 获取负责单位的值
                                    var chargeUunit = $("#newTask_taskList_chargeUunit input")
                                    //获取组长的值
                                    var PopupePopup = $("#newTask_taskList_PopupePopup")
                                    // 获取效率的值
                                    var Popupefficiency = $("#newTask_taskList_Popupefficiency")
                                    // 获取任务量的值
                                    var PopupegetMileage = $("#newTask_taskList_PopupegetMileage")
                                    // 获取上线日期的的值
                                    var launchDate = $("#newTask_taskList_launchDate")
                                    // 获取完成日期的值
                                    var completionDate = $("#newTask_taskList_completionDate")
                                    // 获取同步下发该任务
                                    var synchronizeTasksCheckbox = ""
                                    var synchronizeTasks = $("#newTask_taskList_synchronizeTasks")
                                    if ($(synchronizeTasks).find(".layui-form-checked").length > 0) {
                                        synchronizeTasksCheckbox = true;
                                    } else {
                                        synchronizeTasksCheckbox = false;
                                    }
                                    if (taskLink == "") {
                                        layer.alert("请选择任务环节")
                                    } else if (makeProjectCheckbox.length == 0) {
                                        layer.alert("请选择制作项")
                                    } else if (chargeUunit.val() == "") {
                                        layer.alert("请选择单位")
                                    } else if (PopupePopup.val() == "") {
                                        layer.alert("请选择组长")
                                    } else if (Popupefficiency.val() == "") {
                                        layer.alert("效率不能为空")
                                    } else if (Number(Popupefficiency.val()) == 0) {
                                        layer.alert("效率不能为0")
                                    } else if (Number(Popupefficiency.val()) < 0) {
                                        layer.alert("效率不可以小于0")
                                    } else if (isNaN(Number(Popupefficiency.val()))) {
                                        layer.alert("效率只能为数字")
                                    } else if (PopupegetMileage.val() == "") {
                                        layer.alert("请检查效率或者里程是否输入正确")
                                    } else if (launchDate.val() == "") {
                                        layer.alert("请选择上线日期")
                                    } else if (completionDate.val() == "") {
                                        layer.alert("请选择完成日期")
                                    } else {
                                        // 处理数据
                                        // 任务环节汉字修改为Key
                                        ajaxData.stepId = 1;
                                        // 将制作项数组转化为字符串
                                        var makeProjectString = "";
                                        if (makeProjectCheckbox.length == 0) {
                                            makeProjectString = makeProjectCheckbox[0];
                                        } else {
                                            $.each(makeProjectCheckbox, function (makeProjectCheckboxKey, makeProjectCheckboxValue) {
                                                if (makeProjectCheckbox.length - 1 == makeProjectCheckboxKey) {
                                                    makeProjectString += (makeProjectCheckboxValue);
                                                } else {
                                                    makeProjectString += (makeProjectCheckboxValue + "#");
                                                }
                                            })
                                        }

                                        ajaxData.productionProjects = makeProjectString;
                                        // 将负责单位汉字转为Key
                                        $.each(chargeUunitData, function (chargeUunitDataKey, chargeUunitDataValue) {
                                            if (chargeUunitDataValue.value == chargeUunit.val()) {
                                                ajaxData.departmentId = chargeUunitDataValue.id;
                                            }
                                        })
                                        // 组长
                                        ajaxData.userId = groupLeaderID;
                                        //效率
                                        ajaxData.projectedWorkload = Number(Popupefficiency.val());
                                        // 任务量
                                        ajaxData.preManday = Number(PopupegetMileage.val());

                                        // 上线日期
                                        ajaxData.launchDate = launchDate.val();
                                        //完成日期
                                        ajaxData.finishDate = completionDate.val();
                                        // 是否执行保存后同步下发该任务
                                        ajaxData.flag = synchronizeTasksCheckbox;
                                        //基本信息返回的ID
                                        ajaxData.taskId = JSON.parse($.localStorage.getItem('missionBasicInformationCallData')).id;
                                        // 基本信息任务类型ID
                                        ajaxData.typeId = JSON.parse($.localStorage.getItem('missionBasicInformationCallData')).typeId
                                        var newLoadIndex = layer.load(2, {
                                            shade: [0.1, '#fff']
                                        });
                                        $.ajax({
                                            type: "post",
                                            contentType: "application/json",
                                            url: config_constant.URL_HEADER + "/task/a/save",
                                            data: JSON.stringify(ajaxData),
                                            success: function (data) {
                                                $.sessionStorage.setItem('newTask_taskList_data', null);
                                                if (data.code == 0) {
                                                    var routerLocation = window.location.hash;
                                                    // var basicInformationStatue = $("[id^='render-basicInformation']");
                                                    if (routerLocation.indexOf("AdditionalTasks") > 0) {
                                                        table.reload('newTask_taskList_table', {
                                                            method: 'post',
                                                            url: config_constant.URL_HEADER + '/task/a/search',
                                                            where: {
                                                                taskId: $.localStorage.getItem('AdmintaskLineID')
                                                            },
                                                        });
                                                    } else {
                                                        var newTaskLinkTable = JSON.parse($.localStorage.getItem('newTaskLinkTable'));
                                                        newTaskLinkTable.push(data.data);
                                                        $.localStorage.setItem('newTaskLinkTable', JSON.stringify(newTaskLinkTable));

                                                        table.reload('newTask_taskList_table', {
                                                            method: 'get',
                                                            data: JSON.parse($.localStorage.getItem('newTaskLinkTable'))
                                                        });
                                                        if (JSON.parse($.localStorage.getItem('newTaskLinkTable')).length == 0) {
                                                            $.sessionStorage.setItem('newTask_taskList_data', null);
                                                        }
                                                    }
                                                    layer.close(newTaskLinkPopue);
                                                    layer.alert("任务环节添加成功")
                                                    layer.close(newLoadIndex);
                                                } else {
                                                    layer.close(newLoadIndex);
                                                    layer.alert("任务环节添加失败")
                                                }
                                            },
                                            error: function (error) {
                                                layer.close(newLoadIndex);
                                                layer.alert("任务环节添加失败")

                                            }
                                        });
                                    }
                                })
                            }
                        });
                    }
                });

                //任务环节变更
                function taskLinkChange() {
                    var newTask_taskList_data = JSON.parse($.sessionStorage.getItem('newTask_taskList_data'));
                    var AddDataContent = '';
                    AddDataContent += '<div class="newTask_taskList-PopupContain">';
                    AddDataContent += '<form class="layui-form" action="" lay-filter="popue_tablist_form">';

                    // 任务环节变更
                    AddDataContent += '<div class="newTask_taskList-PopupGroup newTask_taskList-doubleRow">';
                    AddDataContent += '<label class="newTask_taskList-PopupTitle">任务环节:</label>';
                    AddDataContent += '<div class="newTask_taskList-PopupInput" id="newTask_taskList_taskLink">';
                    AddDataContent += '<select disabled lay-filter="newTask_taskList_taskLink_select">'
                    AddDataContent += '<option value="" selected></option>'
                    AddDataContent += '</select>'
                    AddDataContent += '</div>';
                    AddDataContent += '</div>';

                    //次数
                    AddDataContent += '<div class="newTask_taskList-PopupGroup newTask_taskList-doubleRow taskLink_number">';
                    AddDataContent += '<label class="newTask_taskList-PopupTitle">次数:</label>';
                    AddDataContent += '<div class="newTask_taskList-PopupInput">';
                    AddDataContent += '<input onkeydown="if(event.keyCode==32) return false" autocomplete="off"  class="layui-input" id="newTask_taskList_number" placeholder="请输入次数">';
                    AddDataContent += '</div>';
                    AddDataContent += '</div>';

                    // 制作项
                    AddDataContent += '<div class="newTask_taskList-PopupGroup newTask_taskList-PopupGroupCheckbox newTask_taskList-singleRow">';
                    AddDataContent += '<label class="newTask_taskList-PopupTitle">制作项:</label>';
                    AddDataContent += '<div class="newTask_taskList-PopupInput" id="newTask_taskList_makeProject">';
                    $.ajax({
                        type: 'get',
                        async: false,
                        url: config_constant.URL_HEADER + "/task/projects/search",
                        success: function (res) {
                            $.each(res.data, function (resKey, resValue) {
                                AddDataContent += '<div class="newTask_taskList-PopupGroupCheckbox">';
                                AddDataContent += '<input disabled value="' + resValue.id + '" type="checkbox" lay-skin="primary" title="' + resValue.value + '">';
                                AddDataContent += '</div>';
                            })
                        },
                        error: function (e, m) {

                        }
                    });
                    AddDataContent += '</div>';
                    AddDataContent += '</div>';

                    // 负责单位
                    AddDataContent += '<div class="newTask_taskList-PopupGroup newTask_taskList-doubleRow">';
                    AddDataContent += '<label class="newTask_taskList-PopupTitle">负责单位:</label>';
                    AddDataContent += '<div class="newTask_taskList-PopupInput" id="newTask_taskList_chargeUunit">';
                    AddDataContent += '<select>'
                    AddDataContent += '<option value="">请选择</option>'
                    $.ajax({
                        type: 'get',
                        async: false,
                        url: config_constant.URL_HEADER + "/sys/department/search",
                        success: function (res) {
                            chargeUunitData = res.data;
                            $.each(res.data, function (resKey, resValue) {
                                AddDataContent += '<option value="' + resValue.id + '">' + resValue.value + '</option>';
                            })
                        },
                        error: function (e, m) {

                        }
                    });
                    AddDataContent += '</select>'
                    AddDataContent += '</div>';
                    AddDataContent += '</div>';

                    //组长
                    AddDataContent += '<div class="newTask_taskList-PopupGroup newTask_taskList-doubleRow">';
                    AddDataContent += '<label class="newTask_taskList-PopupTitle">组长:</label>';
                    AddDataContent += '<div class="newTask_taskList-PopupInput">';
                    AddDataContent += '<input autocomplete="off"  class="layui-input" id="newTask_taskList_PopupePopup" placeholder="请选择组长">';
                    AddDataContent += '</div>';
                    AddDataContent += '</div>';

                    //效率
                    AddDataContent += '<div class="newTask_taskList-PopupGroup newTask_taskList-doubleRow">';
                    AddDataContent += '<label class="newTask_taskList-PopupTitle">效率:</label>';
                    AddDataContent += '<div class="newTask_taskList-PopupInput">';
                    AddDataContent += '<input onkeydown="if(event.keyCode==32) return false" autocomplete="off"  class="layui-input" id="newTask_taskList_Popupefficiency" placeholder="请输入效率">';
                    AddDataContent += '</div>';
                    AddDataContent += '</div>';

                    //任务量
                    AddDataContent += '<div class="newTask_taskList-PopupGroup newTask_taskList-doubleRow">';
                    AddDataContent += '<label class="newTask_taskList-PopupTitle">任务量(里程/效率):</label>';
                    AddDataContent += '<div class="newTask_taskList-PopupInput">';
                    AddDataContent += '<input autocomplete="off"   class="layui-input" id="newTask_taskList_PopupegetMileage" placeholder="里程/效率">';
                    AddDataContent += '</div>';
                    AddDataContent += '</div>';

                    // 上线日期
                    AddDataContent += '<div class="newTask_taskList-PopupGroup newTask_taskList-doubleRow">';
                    AddDataContent += '<label class="newTask_taskList-PopupTitle">上线日期(计划):</label>';
                    AddDataContent += '<div class="newTask_taskList-PopupInput">';
                    AddDataContent += '<input  onkeydown="if(event.keyCode==32) return false" type="text"   placeholder="请选择上线日期(计划)" autocomplete="off" id="newTask_taskList_launchDate" class="layui-input">';
                    AddDataContent += '</div>';
                    AddDataContent += '</div>';

                    // 完成日期
                    AddDataContent += '<div class="newTask_taskList-PopupGroup newTask_taskList-doubleRow">';
                    AddDataContent += '<label class="newTask_taskList-PopupTitle">完成日期(计划):</label>';
                    AddDataContent += '<div class="newTask_taskList-PopupInput completionDate">';
                    AddDataContent += '<input  onkeydown="if(event.keyCode==32) return false" type="text"   placeholder="请选择完成日期(计划)" autocomplete="off" id="newTask_taskList_completionDate" class="layui-input">';
                    AddDataContent += '</div>';
                    AddDataContent += '</div>';

                    // 任务状态
                    AddDataContent += '<div class="newTask_taskList-PopupGroup newTask_taskList-singleRowState">';
                    AddDataContent += '<label class="newTask_taskList-PopupTitle">任务状态:</label>';
                    AddDataContent += '<div class="newTask_taskList-PopupInput" id="newTask_taskList_taskState">';
                    AddDataContent += '<select disabled lay-filter="newTask_taskList_taskState_select">'
                    AddDataContent += '<option value="">请选择任务状态</option>'
                    AddDataContent += '</select>'
                    AddDataContent += '</div>';
                    AddDataContent += '</div>';

                    AddDataContent += '<div class="newTask_taskList-PopupGroupButton">';
                    AddDataContent += '<div class="newTask_taskList-buttonSubmit">'
                    AddDataContent += '<div class="layui-btn layui-btn-normal" id="buttonSubmit-cancel">取消</div>';
                    AddDataContent += '<div class="layui-btn lay-submit layui-btn-normal" id="buttonSubmit-submit" lay-filter="formDemo">提交</div>';
                    AddDataContent += '</div>';
                    AddDataContent += '</div>';
                    AddDataContent += '</form>';
                    layer.open({
                        title: '修改或质检任务',
                        type: 1,
                        //加上边框
                        skin: 'layui-layer-taskSkin',
                        //宽高
                        area: ["500px", "600px"],
                        content: AddDataContent,
                        //不显示关闭按钮,
                        closeBtn: 0,
                        //开启遮罩关闭
                        shadeClose: true,
                        success: function (layero, index) {
                            newTaskLinkPopue = index;
                            var newTask_taskList_data = JSON.parse($.sessionStorage.getItem('newTask_taskList_data'));
                            //将任务状态与任务环节进行关联
                            if (newTask_taskList_data.step_value == "质检") {
                                var taskStatueUrlParm = {
                                    id: '4,5,6,7,8'
                                }
                                $.ajax({
                                    type: 'get',
                                    async: false,
                                    url: config_constant.URL_HEADER + '/task/status/search',
                                    data: taskStatueUrlParm,
                                    success: function (res) {
                                        if (res.code == "0" || res.code == 0) {
                                            var newTask_taskList_taskState_html = "";
                                            newTask_taskList_taskState_html += '<select disabled>'
                                            newTask_taskList_taskState_html += '<option value="">请选择</option>'
                                            $.each(res.data, function (resKey, resValue) {
                                                newTask_taskList_taskState_html += '<option value="' + resValue.id + '">' + resValue.value + '</option>';
                                            })
                                            newTask_taskList_taskState_html += '</select>'
                                            $("#newTask_taskList_taskState").html(newTask_taskList_taskState_html)
                                            form.render('select')
                                        }
                                    },
                                    error: function (e, m) {}
                                });
                            }
                            if (newTask_taskList_data.step_value != "质检") {
                                var taskStatueUrlParm = {
                                    id: '2,3,9,10,11'
                                }
                                $.ajax({
                                    type: 'get',
                                    async: false,
                                    url: config_constant.URL_HEADER + '/task/status/search',
                                    data: taskStatueUrlParm,
                                    success: function (res) {
                                        if (res.code == "0" || res.code == 0) {
                                            var newTask_taskList_taskState_html = "";
                                            newTask_taskList_taskState_html += '<select disabled>'
                                            newTask_taskList_taskState_html += '<option value="">请选择</option>'
                                            $.each(res.data, function (resKey, resValue) {
                                                newTask_taskList_taskState_html += '<option value="' + resValue.id + '">' + resValue.value + '</option>';
                                            })
                                            newTask_taskList_taskState_html += '</select>'
                                            $("#newTask_taskList_taskState").html(newTask_taskList_taskState_html)
                                            form.render('select')
                                        }

                                    },
                                    error: function (e, m) {}
                                });
                            }

                            element.render();
                            form.render(null, "popue_tablist_form");
                            //初始化上线时间组件
                            laydate.render({
                                elem: "#newTask_taskList_launchDate",
                                type: 'date',
                                done: function (value, date, endDate) {}
                            });
                            //初始化完成时间组件
                            laydate.render({
                                elem: "#newTask_taskList_completionDate",
                                type: 'date',
                                done: function (value, date, endDate) {}
                            });
                            //对input进行赋值
                            //获取任务环节
                            $('#newTask_taskList_taskLink input').val(newTask_taskList_data.step_value);
                            //对次数进行赋值
                            $('#newTask_taskList_number').val(newTask_taskList_data.accept_number);
                            // 获取制作项
                            var makeProjectCheckbox = [];
                            var makeProjectChecked = $("#newTask_taskList_makeProject .newTask_taskList-PopupGroupCheckbox");
                            var production_projects = newTask_taskList_data.production_projects;
                            var production_projectsArr = production_projects.split('#');
                            $.each(makeProjectChecked, function (makeProjectCheckedKey, makeProjectCheckedValue) {
                                if (production_projectsArr.indexOf($(makeProjectCheckedValue).find("input")[0].title) >= 0) {
                                    $(makeProjectCheckedValue).find("div").addClass("layui-form-checked")
                                }
                            })
                            // 获取负责单位的值
                            $("#newTask_taskList_chargeUunit input").val(newTask_taskList_data.department_value)
                            //获取组长的值
                            $("#newTask_taskList_PopupePopup").val(newTask_taskList_data.name);
                            $("#newTask_taskList_PopupePopup").attr("title", newTask_taskList_data.user_id)
                            // 获取效率的值
                            // var mileageOld = Number(JSON.parse($.localStorage.getItem('missionBasicInformation')).mileage);
                            // var pre_manday = Number(newTask_taskList_data.pre_manday);
                            // $("#newTask_taskList_Popupefficiency").val((mileageOld / pre_manday).toFixed(5))
                            $("#newTask_taskList_Popupefficiency").val(newTask_taskList_data.projected_workload);
                            // 获取任务量的值
                            $("#newTask_taskList_PopupegetMileage").val(newTask_taskList_data.pre_manday)
                            // 获取上线日期的的值
                            $("#newTask_taskList_launchDate").val(newTask_taskList_data.launch_date)
                            // 获取完成日期的值
                            $("#newTask_taskList_completionDate").val(newTask_taskList_data.finish_date)
                            // 获取任务状态
                            $('#newTask_taskList_taskState input').val(newTask_taskList_data.status_value);

                            //点击取消
                            $("#buttonSubmit-cancel").on('click', function () {
                                layer.closeAll();
                            })
                            //组长弹窗
                            $("#newTask_taskList_PopupePopup").on('focus', function () {
                                $("#newTask_taskList_PopupePopup").attr("title", null)
                                // 获取任务环节和负责单位
                                var taskLink = $('#newTask_taskList_taskLink input');
                                var chargeUunit = $("#newTask_taskList_chargeUunit input");
                                if (taskLink.val() == "") {
                                    layer.alert("请选择任务环节")
                                } else if (chargeUunit.val() == "") {
                                    layer.alert("请选择负责单位")
                                } else {
                                    var addTaskContent = '';
                                    addTaskContent += '<div class="selectGroupLeader_container">';
                                    addTaskContent += '<form class="layui-form" action="">';
                                    addTaskContent += '<label class="selectGroupLeader_label">输入框</label>';
                                    addTaskContent += '<div class="layui-input-inline selectGroupLeader_input">';
                                    addTaskContent += '<input type="text" name="title" required  lay-verify="required" placeholder="搜索组长" autocomplete="off" class="layui-input searchValue">';
                                    addTaskContent += '</div>';
                                    addTaskContent += '<div class="layui-btn layui-btn-normal search" style="margin-left:10px;">搜索</div>';
                                    addTaskContent += '</form>';
                                    addTaskContent += '<table id="selectGroupLeader_table" lay-filter="selectGroupLeader_table"></table>';
                                    addTaskContent += '<div class="layui-btn layui-btn-primary selectGroupLeader_moveBtn closeWindow">取消</div>';
                                    addTaskContent += '<div class="layui-btn layui-btn-normal addMsg">添加</div>';
                                    addTaskContent += '</div>';
                                    var indexPopue = "";
                                    layer.open({
                                        title: '添加已有任务号',
                                        type: 1, //加上边框

                                        skin: 'layui-layer-taskSkin',
                                        //宽高
                                        area: ['590px', '500px'],
                                        content: addTaskContent,
                                        //不显示关闭按钮,
                                        closeBtn: 0,
                                        //开启遮罩关闭
                                        shadeClose: true,
                                        success: function (layero, index) {
                                            // 对字符串进行处理转化为key
                                            // 任务环节
                                            var parameterTaskLink = "";
                                            $.ajax({
                                                type: 'get',
                                                async: false,
                                                url: config_constant.URL_HEADER + '/task/step/search',
                                                success: function (res) {
                                                    var taskLinkData = res.data;
                                                    $.each(taskLinkData, function (taskLinkDataKey, taskLinkDataValue) {
                                                        if (taskLinkDataValue.value == taskLink.val()) {
                                                            parameterTaskLink = taskLinkDataValue.id;
                                                        }
                                                    })

                                                },
                                                error: function (e, m) {}
                                            });

                                            //负责单位
                                            var parameterChargeUunit = "";
                                            $.each(chargeUunitData, function (chargeUunitDataKey, chargeUunitDataValue) {
                                                if (chargeUunitDataValue.value == chargeUunit.val()) {
                                                    parameterChargeUunit = chargeUunitDataValue.id;
                                                }
                                            })
                                            table.render({
                                                elem: '#selectGroupLeader_table',
                                                method: 'post',
                                                url: config_constant.URL_HEADER + '/sys/user/search/group_leader',
                                                where: {
                                                    stepId: parameterTaskLink,
                                                    departmentId: parameterChargeUunit,
                                                },
                                                cellMinWidth: 100,
                                                height: 322,
                                                page: true,
                                                limits: [10, 20, 30],
                                                cols: [
                                                    [{
                                                            field: 'id',
                                                            title: 'ID',
                                                            sort: true,
                                                            align: 'center',
                                                            event: 'addTaskId'
                                                        },
                                                        {
                                                            field: 'qq',
                                                            title: 'QQ号',
                                                            sort: true,
                                                            align: 'center',
                                                            event: 'addTaskId'
                                                        },
                                                        {
                                                            field: 'name',
                                                            title: '姓名',
                                                            sort: true,
                                                            align: 'center',
                                                            event: 'addTaskId'
                                                        }
                                                    ]
                                                ]
                                            });
                                            table.on('tool(selectGroupLeader_table)', function (obj) {
                                                var data = obj.data,
                                                    layEvent = obj.event;
                                                if (layEvent === 'addTaskId') {
                                                    $.sessionStorage.setItem("selectGroupLeader_table_data", JSON.stringify(data));
                                                }

                                            });
                                            $(".search").on('click', function () {
                                                    var inputValue = $(".searchValue").val();
                                                    table.reload('selectGroupLeader_table', {
                                                        url: config_constant.URL_HEADER + '/sys/user/search/group_leader',
                                                        method: 'post',
                                                        where: {
                                                            search: inputValue,
                                                            stepId: parameterTaskLink,
                                                            departmentId: parameterChargeUunit,
                                                        }
                                                    });
                                                }),
                                                $(".closeWindow").on('click', function () {
                                                    layer.close(index);
                                                    var selectBox = $("#newTask_taskList_PopupePopup");
                                                    selectBox.val("");
                                                })
                                            $(".addMsg").on('click', function () {
                                                var selectGroupLeader_table_data = JSON.parse($.sessionStorage.getItem('selectGroupLeader_table_data'))
                                                var optionValue = selectGroupLeader_table_data.name;
                                                if (selectGroupLeader_table_data !== null && selectGroupLeader_table_data !== undefined) {
                                                    groupLeaderID = selectGroupLeader_table_data.id;
                                                    var selectBox = $("#newTask_taskList_PopupePopup");
                                                    selectBox.val(optionValue);
                                                    layer.close(index);
                                                } else {
                                                    layer.alert('请选中要添加的行');
                                                }
                                            })
                                        }
                                    });
                                }
                            })
                            // 计算任务量
                            $("#newTask_taskList_Popupefficiency").on('keyup', function () {
                                var mileage = JSON.parse($.localStorage.getItem('missionBasicInformation')).mileage;
                                //计算效率
                                var efficiency = parseFloat(mileage) / parseFloat($("#newTask_taskList_Popupefficiency").val());
                                if ($("#newTask_taskList_Popupefficiency").val() == "") {
                                    $("#newTask_taskList_PopupegetMileage").val("里程/效率");
                                } else if (Number($("#newTask_taskList_Popupefficiency").val()) == 0) {
                                    $("#newTask_taskList_PopupegetMileage").val("效率不能为0");
                                } else if (isNaN(Number($("#newTask_taskList_Popupefficiency").val()))) {
                                    $("#newTask_taskList_PopupegetMileage").val("效率只能为数字");
                                } else {
                                    $("#newTask_taskList_PopupegetMileage").val(efficiency.toFixed(5));
                                }

                            })
                            $("#buttonSubmit-submit").on("click", function () {
                                //获取每个input的值
                                //获取任务环节
                                var taskLink = $('#newTask_taskList_taskLink input');
                                // 获取制作项
                                var makeProjectCheckbox = [];
                                var makeProjectChecked = $("#newTask_taskList_makeProject .newTask_taskList-PopupGroupCheckbox");
                                $.each(makeProjectChecked, function (makeProjectCheckedKey, makeProjectCheckedValue) {
                                    if ($(makeProjectCheckedValue).find(".layui-form-checked").length > 0) {
                                        makeProjectCheckbox.push($(makeProjectCheckedValue).find("input")[0].title);
                                    }
                                })
                                //获取次数

                                var getTaskNumber = $("#newTask_taskList_number")
                                // 获取负责单位的值
                                var chargeUunit = $("#newTask_taskList_chargeUunit input")
                                //获取组长的值
                                var PopupePopup = $("#newTask_taskList_PopupePopup")
                                // 获取效率的值
                                var Popupefficiency = $("#newTask_taskList_Popupefficiency")
                                // 获取任务量的值
                                var PopupegetMileage = $("#newTask_taskList_PopupegetMileage")
                                // 获取上线日期的的值
                                var launchDate = $("#newTask_taskList_launchDate")
                                // 获取完成日期的值
                                var completionDate = $("#newTask_taskList_completionDate")
                                // 获取任务状态
                                var taskState = $('#newTask_taskList_taskState input');
                                if (taskLink.val() == "") {
                                    layer.alert("请选择任务环节")
                                } else if (getTaskNumber.val() == "") {
                                    layer.alert("次数不能为空")
                                } else if (isNaN(Number(getTaskNumber.val()))) {
                                    layer.alert("次数只能为数字")
                                } else if (makeProjectCheckbox.length == 0) {
                                    layer.alert("请选择制作项")
                                } else if (chargeUunit.val() == "") {
                                    layer.alert("请选择单位")
                                } else if (PopupePopup.val() == "") {
                                    layer.alert("请选择组长")
                                } else if (Popupefficiency.val() == "") {
                                    layer.alert("效率不能为空")
                                } else if (Number(Popupefficiency.val()) == 0) {
                                    layer.alert("效率不能为0")
                                } else if (Number(Popupefficiency.val()) < 0) {
                                    layer.alert("效率不可以小于0")
                                } else if (isNaN(Number(Popupefficiency.val()))) {
                                    layer.alert("效率只能为数字")
                                } else if (PopupegetMileage.val() == "") {
                                    layer.alert("请检查效率或者里程是否输入正确")
                                } else if (launchDate.val() == "") {
                                    layer.alert("请选择上线日期")
                                } else if (completionDate.val() == "") {
                                    layer.alert("请选择完成日期")
                                } else if (taskState.val() == "") {
                                    layer.alert("请选择任务状态")
                                } else {
                                    $.ajax({
                                        type: 'get',
                                        async: false,
                                        url: config_constant.URL_HEADER + '/task/step/search',
                                        success: function (res) {
                                            var taskLinkData = res.data;
                                            $.each(taskLinkData, function (taskLinkDataKey, taskLinkDataValue) {
                                                if (taskLinkDataValue.value == taskLink.val()) {
                                                    ajaxData.stepId = taskLinkDataValue.id;
                                                }
                                            })

                                        },
                                        error: function (e, m) {}
                                    });
                                    // 将制作项数组转化为字符串
                                    var makeProjectString = "";
                                    if (makeProjectCheckbox.length == 0) {
                                        makeProjectString = makeProjectCheckbox[0];
                                    } else {
                                        $.each(makeProjectCheckbox, function (makeProjectCheckboxKey, makeProjectCheckboxValue) {
                                            if (makeProjectCheckbox.length - 1 == makeProjectCheckboxKey) {
                                                makeProjectString += (makeProjectCheckboxValue);
                                            } else {
                                                makeProjectString += (makeProjectCheckboxValue + "#");
                                            }
                                        })
                                    }

                                    ajaxData.productionProjects = makeProjectString;
                                    // 将负责单位汉字转为Key
                                    $.each(chargeUunitData, function (chargeUunitDataKey, chargeUunitDataValue) {
                                        if (chargeUunitDataValue.value == chargeUunit.val()) {
                                            ajaxData.departmentId = chargeUunitDataValue.id;
                                        }
                                    })
                                    // 组长
                                    if ($("#newTask_taskList_PopupePopup").attr("title") == null) {
                                        ajaxData.userId = groupLeaderID;
                                    } else {
                                        ajaxData.userId = $("#newTask_taskList_PopupePopup").attr("title");
                                    }

                                    // 任务量
                                    ajaxData.preManday = Number(PopupegetMileage.val());
                                    // 次数
                                    ajaxData.acceptNumber = Number(getTaskNumber.val());

                                    // 上线日期
                                    ajaxData.launchDate = launchDate.val();
                                    //完成日期
                                    ajaxData.finishDate = completionDate.val();
                                    // 负责将任务状态转换为Key
                                    $.ajax({
                                        type: 'get',
                                        async: false,
                                        url: config_constant.URL_HEADER + '/task/status/search',
                                        success: function (res) {
                                            var taskLinkData = res.data;
                                            $.each(taskLinkData, function (taskLinkDataKey, taskLinkDataValue) {
                                                if (taskLinkDataValue.value == taskState.val()) {
                                                    ajaxData.status = taskLinkDataValue.id;
                                                }
                                            })

                                        },
                                        error: function (e, m) {}
                                    });

                                    //基本信息返回的ID
                                    ajaxData.taskId = JSON.parse($.localStorage.getItem('missionBasicInformationCallData')).id;
                                    // 基本信息任务类型ID
                                    ajaxData.typeId = JSON.parse($.localStorage.getItem('missionBasicInformationCallData')).typeId;
                                    // 行数据id
                                    var newTask_taskList_data = JSON.parse($.sessionStorage.getItem('newTask_taskList_data'));
                                    ajaxData.id = Number(newTask_taskList_data.id);
                                    var newLoadIndex = layer.load(2, {
                                        shade: [0.1, '#fff']
                                    });
                                    $.ajax({
                                        type: "post",
                                        contentType: "application/json",
                                        url: config_constant.URL_HEADER + "/task/a/update",
                                        data: JSON.stringify(ajaxData),
                                        success: function (data) {
                                            if (data.code == 0) {
                                                $.sessionStorage.setItem('newTask_taskList_data', null);
                                                var routerLocation = window.location.hash;
                                                // var basicInformationStatue = $("[id^='render-basicInformation']");
                                                if (routerLocation.indexOf("AdditionalTasks") > 0) {
                                                    table.reload('newTask_taskList_table', {
                                                        method: 'post',
                                                        url: config_constant.URL_HEADER + '/task/a/search',
                                                        where: {
                                                            taskId: $.localStorage.getItem('AdmintaskLineID')
                                                        },
                                                    });
                                                } else {
                                                    // 删除旧值,添加新值
                                                    var newTaskLinkTable = JSON.parse($.localStorage.getItem('newTaskLinkTable'));
                                                    $.each(newTaskLinkTable, function (newTaskLinkTableKey, newTaskLinkTableValue) {
                                                        if (data.data.id == newTaskLinkTableValue.id) {
                                                            newTaskLinkTable.splice(newTaskLinkTableKey, 1);
                                                            newTaskLinkTable.push(data.data);
                                                            $.localStorage.setItem('newTaskLinkTable', JSON.stringify(newTaskLinkTable));
                                                        }
                                                    })
                                                    table.reload('newTask_taskList_table', {
                                                        method: 'get',
                                                        data: JSON.parse($.localStorage.getItem('newTaskLinkTable'))
                                                    });
                                                    if (JSON.parse($.localStorage.getItem('newTaskLinkTable')).length == 0) {
                                                        $.sessionStorage.setItem('newTask_taskList_data', null);
                                                    }
                                                }
                                                layer.close(newTaskLinkPopue);
                                                layer.alert("任务环节更新成功")
                                                layer.close(newLoadIndex);
                                            } else {
                                                layer.close(newLoadIndex);
                                                layer.alert("任务环节更新失败")
                                            }
                                        },
                                        error: function (error) {
                                            layer.close(newLoadIndex);
                                            layer.alert("任务环节更新失败")
                                        }
                                    });
                                }
                            })
                        }
                    });
                }

                //任务环节质检或修改
                function qualityInspectionAndModification(changeType) {
                    var newTask_taskList_data = JSON.parse($.sessionStorage.getItem('newTask_taskList_data'));
                    var AddDataContent = '';
                    AddDataContent += '<div class="newTask_taskList-PopupContain">';
                    AddDataContent += '<form class="layui-form" action="" lay-filter="popue_tablist_form">';
                    if (changeType == "modifyTask") {
                        // 任务环节修改
                        AddDataContent += '<div class="newTask_taskList-PopupGroup newTask_taskList-singleRow">';
                        AddDataContent += '<label class="newTask_taskList-PopupTitle">任务环节:</label>';
                        AddDataContent += '<div class="newTask_taskList-PopupInput" id="newTask_taskList_taskLink">';
                        AddDataContent += '<select disabled lay-filter="newTask_taskList_taskLink_select">'
                        AddDataContent += '<option value="修改" selected>修改</option>'
                        AddDataContent += '</select>'
                        AddDataContent += '</div>';
                        AddDataContent += '</div>';
                    }
                    if (changeType == "qualityInspectionTasks") {
                        // 任务环节质检
                        AddDataContent += '<div class="newTask_taskList-PopupGroup newTask_taskList-singleRow">';
                        AddDataContent += '<label class="newTask_taskList-PopupTitle">任务环节:</label>';
                        AddDataContent += '<div class="newTask_taskList-PopupInput" id="newTask_taskList_taskLink">';
                        AddDataContent += '<select disabled lay-filter="newTask_taskList_taskLink_select">'
                        AddDataContent += '<option value="质检" selected>质检</option>'
                        AddDataContent += '</select>'
                        AddDataContent += '</div>';
                        AddDataContent += '</div>';
                    }

                    // 制作项
                    AddDataContent += '<div class="newTask_taskList-PopupGroup newTask_taskList-PopupGroupCheckbox newTask_taskList-singleRow">';
                    AddDataContent += '<label class="newTask_taskList-PopupTitle">制作:</label>';
                    AddDataContent += '<div class="newTask_taskList-PopupInput" id="newTask_taskList_makeProject">';
                    $.ajax({
                        type: 'get',
                        async: false,
                        url: config_constant.URL_HEADER + "/task/projects/search",
                        success: function (res) {
                            $.each(res.data, function (resKey, resValue) {
                                AddDataContent += '<div class="newTask_taskList-PopupGroupCheckbox">';
                                AddDataContent += '<input disabled value="' + resValue.id + '" type="checkbox" lay-skin="primary" title="' + resValue.value + '">';
                                AddDataContent += '</div>';
                            })
                        },
                        error: function (e, m) {

                        }
                    });
                    AddDataContent += '</div>';
                    AddDataContent += '</div>';

                    // 负责单位
                    AddDataContent += '<div class="newTask_taskList-PopupGroup newTask_taskList-doubleRow">';
                    AddDataContent += '<label class="newTask_taskList-PopupTitle">负责单位:</label>';
                    AddDataContent += '<div class="newTask_taskList-PopupInput" id="newTask_taskList_chargeUunit">';
                    AddDataContent += '<select>'
                    AddDataContent += '<option value="">请选择</option>'
                    $.ajax({
                        type: 'get',
                        async: false,
                        url: config_constant.URL_HEADER + "/sys/department/search",
                        success: function (res) {
                            chargeUunitData = res.data;
                            $.each(res.data, function (resKey, resValue) {
                                AddDataContent += '<option value="' + resValue.id + '">' + resValue.value + '</option>';
                            })
                        },
                        error: function (e, m) {

                        }
                    });
                    AddDataContent += '</select>'
                    AddDataContent += '</div>';
                    AddDataContent += '</div>';

                    //组长
                    AddDataContent += '<div class="newTask_taskList-PopupGroup newTask_taskList-doubleRow">';
                    AddDataContent += '<label class="newTask_taskList-PopupTitle">组长:</label>';
                    AddDataContent += '<div class="newTask_taskList-PopupInput">';
                    AddDataContent += '<input autocomplete="off"  class="layui-input" id="newTask_taskList_PopupePopup" placeholder="请选择组长">';
                    AddDataContent += '</div>';
                    AddDataContent += '</div>';

                    //效率
                    AddDataContent += '<div class="newTask_taskList-PopupGroup newTask_taskList-doubleRow">';
                    AddDataContent += '<label class="newTask_taskList-PopupTitle">效率:</label>';
                    AddDataContent += '<div class="newTask_taskList-PopupInput">';
                    AddDataContent += '<input onkeydown="if(event.keyCode==32) return false" autocomplete="off"  class="layui-input" id="newTask_taskList_Popupefficiency" placeholder="请输入效率">';
                    AddDataContent += '</div>';
                    AddDataContent += '</div>';

                    //任务量
                    AddDataContent += '<div class="newTask_taskList-PopupGroup newTask_taskList-doubleRow">';
                    AddDataContent += '<label class="newTask_taskList-PopupTitle">任务量(里程/效率):</label>';
                    AddDataContent += '<div class="newTask_taskList-PopupInput">';
                    // AddDataContent += '<input autocomplete="off" disabled  class="layui-input" id="newTask_taskList_PopupegetMileage" placeholder="里程/效率">';
                    AddDataContent += '<input autocomplete="off"  class="layui-input" id="newTask_taskList_PopupegetMileage" placeholder="里程/效率">';
                    AddDataContent += '</div>';
                    AddDataContent += '</div>';
                    // 上线日期
                    AddDataContent += '<div class="newTask_taskList-PopupGroup newTask_taskList-doubleRow">';
                    AddDataContent += '<label class="newTask_taskList-PopupTitle">上线日期(计划):</label>';
                    AddDataContent += '<div class="newTask_taskList-PopupInput">';
                    AddDataContent += '<input  onkeydown="if(event.keyCode==32) return false" type="text"   placeholder="请选择上线日期(计划)" autocomplete="off" id="newTask_taskList_launchDate" class="layui-input">';
                    AddDataContent += '</div>';
                    AddDataContent += '</div>';
                    // 完成日期
                    AddDataContent += '<div class="newTask_taskList-PopupGroup newTask_taskList-doubleRow">';
                    AddDataContent += '<label class="newTask_taskList-PopupTitle">完成日期(计划):</label>';
                    AddDataContent += '<div class="newTask_taskList-PopupInput completionDate">';
                    AddDataContent += '<input  onkeydown="if(event.keyCode==32) return false" type="text"   placeholder="请选择完成日期(计划)" autocomplete="off" id="newTask_taskList_completionDate" class="layui-input">';
                    AddDataContent += '</div>';
                    AddDataContent += '</div>';

                    // 执行保存后,同步下发该任务
                    AddDataContent += '<div class="newTask_taskList-PopupGroup newTask_taskList-PopupGroupCheckbox newTask_taskList_ssuedTask">';
                    AddDataContent += '<div class="newTask_taskList-PopupGroupCheckbox newTask_taskList-singleRow" id="newTask_taskList_synchronizeTasks">';
                    AddDataContent += '<input  type="checkbox" lay-skin="primary" title="执行保存后,同步下发该任务">';
                    AddDataContent += '</div>';
                    AddDataContent += '</div>';

                    AddDataContent += '<div class="newTask_taskList-PopupGroupButton">';
                    AddDataContent += '<div class="newTask_taskList-buttonSubmit">'
                    AddDataContent += '<div class="layui-btn layui-btn-normal" id="buttonSubmit-cancel">取消</div>';
                    AddDataContent += '<div class="layui-btn lay-submit layui-btn-normal" id="buttonSubmit-submit" lay-filter="formDemo">提交</div>';
                    AddDataContent += '</div>';
                    AddDataContent += '</div>';
                    AddDataContent += '</form>';
                    layer.open({
                        title: '修改或质检任务',
                        type: 1,
                        //加上边框
                        skin: 'layui-layer-taskSkin',
                        //宽高
                        area: ["500px", "600px"],
                        content: AddDataContent,
                        //不显示关闭按钮,
                        closeBtn: 0,
                        //开启遮罩关闭
                        shadeClose: true,
                        success: function (layero, index) {
                            newTaskLinkPopue = index;
                            var newTask_taskList_data = JSON.parse($.sessionStorage.getItem('newTask_taskList_data'));
                            element.render();
                            form.render(null, "popue_tablist_form");
                            //初始化上线时间组件
                            laydate.render({
                                elem: "#newTask_taskList_launchDate",
                                type: 'date',
                                done: function (value, date, endDate) {}
                            });
                            //初始化完成时间组件
                            laydate.render({
                                elem: "#newTask_taskList_completionDate",
                                type: 'date',
                                done: function (value, date, endDate) {}
                            });
                            //对input进行赋值
                            //对次数进行赋值
                            $('#newTask_taskList_number').val(newTask_taskList_data.accept_number);
                            // 获取制作项
                            var makeProjectCheckbox = [];
                            var makeProjectChecked = $("#newTask_taskList_makeProject .newTask_taskList-PopupGroupCheckbox");
                            var production_projects = newTask_taskList_data.production_projects;
                            var production_projectsArr = production_projects.split('#');
                            $.each(makeProjectChecked, function (makeProjectCheckedKey, makeProjectCheckedValue) {
                                if (production_projectsArr.indexOf($(makeProjectCheckedValue).find("input")[0].title) >= 0) {
                                    $(makeProjectCheckedValue).find("div").addClass("layui-form-checked")
                                }
                            })
                            // 获取负责单位的值
                            $("#newTask_taskList_chargeUunit input").val(newTask_taskList_data.department_value)
                            // 获取效率的值
                            // var mileageOld = Number(JSON.parse($.localStorage.getItem('missionBasicInformation')).mileage);
                            // var pre_manday = Number(newTask_taskList_data.pre_manday);
                            // $("#newTask_taskList_Popupefficiency").val((mileageOld / pre_manday).toFixed(5))
                            $("#newTask_taskList_Popupefficiency").val(newTask_taskList_data.projected_workload);
                            // 获取任务量的值
                            $("#newTask_taskList_PopupegetMileage").val(newTask_taskList_data.pre_manday)
                            // 获取上线日期的的值
                            $("#newTask_taskList_launchDate").val(newTask_taskList_data.launch_date)
                            // 获取完成日期的值
                            $("#newTask_taskList_completionDate").val(newTask_taskList_data.finish_date)

                            //点击取消
                            $("#buttonSubmit-cancel").on('click', function () {
                                layer.closeAll();
                            })
                            //组长弹窗
                            $("#newTask_taskList_PopupePopup").on('focus', function () {
                                $("#newTask_taskList_PopupePopup").attr("title", null)
                                // 获取任务环节和负责单位
                                var taskLink = $('#newTask_taskList_taskLink input');
                                var chargeUunit = $("#newTask_taskList_chargeUunit input");
                                if (taskLink.val() == "") {
                                    layer.alert("请选择任务环节")
                                } else if (chargeUunit.val() == "") {
                                    layer.alert("请选择负责单位")
                                } else {
                                    var addTaskContent = '';
                                    addTaskContent += '<div class="selectGroupLeader_container">';
                                    addTaskContent += '<form class="layui-form" action="">';
                                    addTaskContent += '<label class="selectGroupLeader_label">输入框</label>';
                                    addTaskContent += '<div class="layui-input-inline selectGroupLeader_input">';
                                    addTaskContent += '<input type="text" name="title" required  lay-verify="required" placeholder="搜索组长" autocomplete="off" class="layui-input searchValue">';
                                    addTaskContent += '</div>';
                                    addTaskContent += '<div class="layui-btn layui-btn-normal search" style="margin-left:10px;">搜索</div>';
                                    addTaskContent += '</form>';
                                    addTaskContent += '<table id="selectGroupLeader_table" lay-filter="selectGroupLeader_table"></table>';
                                    addTaskContent += '<div class="layui-btn layui-btn-primary selectGroupLeader_moveBtn closeWindow">取消</div>';
                                    addTaskContent += '<div class="layui-btn layui-btn-normal addMsg">添加</div>';
                                    addTaskContent += '</div>';
                                    var indexPopue = "";
                                    layer.open({
                                        title: '添加已有任务号',
                                        type: 1, //加上边框

                                        skin: 'layui-layer-taskSkin',
                                        //宽高
                                        area: ['590px', '500px'],
                                        content: addTaskContent,
                                        //不显示关闭按钮,
                                        closeBtn: 0,
                                        //开启遮罩关闭
                                        shadeClose: true,
                                        success: function (layero, index) {
                                            // 对字符串进行处理转化为key
                                            // 任务环节
                                            var parameterTaskLink = "";
                                            $.ajax({
                                                type: 'get',
                                                async: false,
                                                url: config_constant.URL_HEADER + '/task/step/search',
                                                success: function (res) {
                                                    taskLinkData = res.data;
                                                    $.each(taskLinkData, function (taskLinkDataKey, taskLinkDataValue) {
                                                        if (taskLinkDataValue.value == taskLink.val()) {
                                                            parameterTaskLink = taskLinkDataValue.id;
                                                        }
                                                    })
                                                },
                                                error: function (e, m) {}
                                            });

                                            //负责单位
                                            var parameterChargeUunit = "";
                                            $.each(chargeUunitData, function (chargeUunitDataKey, chargeUunitDataValue) {
                                                if (chargeUunitDataValue.value == chargeUunit.val()) {
                                                    parameterChargeUunit = chargeUunitDataValue.id;
                                                }
                                            })
                                            table.render({
                                                elem: '#selectGroupLeader_table',
                                                method: 'post',
                                                url: config_constant.URL_HEADER + '/sys/user/search/group_leader',
                                                where: {
                                                    stepId: parameterTaskLink,
                                                    departmentId: parameterChargeUunit,
                                                },
                                                cellMinWidth: 100,
                                                height: 322,
                                                page: true,
                                                limits: [10, 20, 30],
                                                cols: [
                                                    [{
                                                            field: 'id',
                                                            title: 'ID',
                                                            sort: true,
                                                            align: 'center',
                                                            event: 'addTaskId'
                                                        },
                                                        {
                                                            field: 'qq',
                                                            title: 'QQ号',
                                                            sort: true,
                                                            align: 'center',
                                                            event: 'addTaskId'
                                                        },
                                                        {
                                                            field: 'name',
                                                            title: '姓名',
                                                            sort: true,
                                                            align: 'center',
                                                            event: 'addTaskId'
                                                        }
                                                    ]
                                                ]
                                            });
                                            table.on('tool(selectGroupLeader_table)', function (obj) {
                                                var data = obj.data,
                                                    layEvent = obj.event;
                                                if (layEvent === 'addTaskId') {
                                                    $.sessionStorage.setItem("selectGroupLeader_table_data", JSON.stringify(data));
                                                }

                                            });
                                            $(".search").on('click', function () {
                                                    var inputValue = $(".searchValue").val();
                                                    table.reload('selectGroupLeader_table', {
                                                        url: config_constant.URL_HEADER + '/sys/user/search/group_leader',
                                                        method: 'post',
                                                        where: {
                                                            search: inputValue,
                                                            stepId: parameterTaskLink,
                                                            departmentId: parameterChargeUunit,
                                                        }
                                                    });
                                                }),
                                                $(".closeWindow").on('click', function () {
                                                    layer.close(index);
                                                    var selectBox = $("#newTask_taskList_PopupePopup");
                                                    selectBox.val("");
                                                })
                                            $(".addMsg").on('click', function () {
                                                var selectGroupLeader_table_data = JSON.parse($.sessionStorage.getItem('selectGroupLeader_table_data'))
                                                var optionValue = selectGroupLeader_table_data.name;
                                                if (selectGroupLeader_table_data !== null && selectGroupLeader_table_data !== undefined) {
                                                    groupLeaderID = selectGroupLeader_table_data.id;
                                                    var selectBox = $("#newTask_taskList_PopupePopup");
                                                    selectBox.val(optionValue);
                                                    layer.close(index);
                                                } else {
                                                    layer.alert('请选中要添加的行');
                                                }
                                            })
                                        }
                                    });
                                }
                            })
                            // 计算任务量
                            $("#newTask_taskList_Popupefficiency").on('keyup', function () {
                                var mileage = JSON.parse($.localStorage.getItem('missionBasicInformation')).mileage;
                                //计算效率
                                var efficiency = parseFloat(mileage) / parseFloat($("#newTask_taskList_Popupefficiency").val());
                                if ($("#newTask_taskList_Popupefficiency").val() == "") {
                                    $("#newTask_taskList_PopupegetMileage").val("里程/效率");
                                } else if (Number($("#newTask_taskList_Popupefficiency").val()) == 0) {
                                    $("#newTask_taskList_PopupegetMileage").val("效率不能为0");
                                } else if (isNaN(Number($("#newTask_taskList_Popupefficiency").val()))) {
                                    $("#newTask_taskList_PopupegetMileage").val("效率只能为数字");
                                } else {
                                    $("#newTask_taskList_PopupegetMileage").val(efficiency.toFixed(5));
                                }

                            })
                            $("#buttonSubmit-submit").on("click", function () {
                                //获取每个input的值
                                //获取任务环节
                                var taskLink = $('#newTask_taskList_taskLink input');
                                // 获取制作项
                                var makeProjectCheckbox = [];
                                var makeProjectChecked = $("#newTask_taskList_makeProject .newTask_taskList-PopupGroupCheckbox");
                                $.each(makeProjectChecked, function (makeProjectCheckedKey, makeProjectCheckedValue) {
                                    if ($(makeProjectCheckedValue).find(".layui-form-checked").length > 0) {
                                        makeProjectCheckbox.push($(makeProjectCheckedValue).find("input")[0].title);
                                    }
                                })
                                // 获取负责单位的值
                                var chargeUunit = $("#newTask_taskList_chargeUunit input")
                                //获取组长的值
                                var PopupePopup = $("#newTask_taskList_PopupePopup")
                                // 获取效率的值
                                var Popupefficiency = $("#newTask_taskList_Popupefficiency")
                                // 获取任务量的值
                                var PopupegetMileage = $("#newTask_taskList_PopupegetMileage")
                                // 获取上线日期的的值
                                var launchDate = $("#newTask_taskList_launchDate")
                                // 获取完成日期的值
                                var completionDate = $("#newTask_taskList_completionDate");
                                // 获取同步下发该任务
                                var synchronizeTasksCheckbox = ""
                                var synchronizeTasks = $("#newTask_taskList_synchronizeTasks")
                                if ($(synchronizeTasks).find(".layui-form-checked").length > 0) {
                                    synchronizeTasksCheckbox = true;
                                } else {
                                    synchronizeTasksCheckbox = false;
                                }
                                if (taskLink.val() == "") {
                                    layer.alert("请选择任务环节")
                                } else if (makeProjectCheckbox.length == 0) {
                                    layer.alert("请选择制作项")
                                } else if (chargeUunit.val() == "") {
                                    layer.alert("请选择单位")
                                } else if (PopupePopup.val() == "") {
                                    layer.alert("请选择组长")
                                } else if (Popupefficiency.val() == "") {
                                    layer.alert("效率不能为空")
                                } else if (Number(Popupefficiency.val()) == 0) {
                                    layer.alert("效率不能为0")
                                } else if (isNaN(Number(Popupefficiency.val()))) {
                                    layer.alert("效率只能为数字")
                                } else if (PopupegetMileage.val() == "") {
                                    layer.alert("请检查效率或者里程是否输入正确")
                                } else if (launchDate.val() == "") {
                                    layer.alert("请选择上线日期")
                                } else if (completionDate.val() == "") {
                                    layer.alert("请选择完成日期")
                                } else {
                                    // 处理数据
                                    // 任务环节汉字修改为Key
                                    $.each(taskLinkData, function (taskLinkDataKey, taskLinkDataValue) {
                                        if (taskLinkDataValue.value == taskLink.val()) {
                                            ajaxData.stepId = taskLinkDataValue.id;
                                        }
                                    })
                                    // 将制作项数组转化为字符串
                                    var makeProjectString = "";
                                    if (makeProjectCheckbox.length == 0) {
                                        makeProjectString = makeProjectCheckbox[0];
                                    } else {
                                        $.each(makeProjectCheckbox, function (makeProjectCheckboxKey, makeProjectCheckboxValue) {
                                            if (makeProjectCheckbox.length - 1 == makeProjectCheckboxKey) {
                                                makeProjectString += (makeProjectCheckboxValue);
                                            } else {
                                                makeProjectString += (makeProjectCheckboxValue + "#");
                                            }
                                        })
                                    }

                                    ajaxData.productionProjects = makeProjectString;
                                    // 将负责单位汉字转为Key
                                    $.each(chargeUunitData, function (chargeUunitDataKey, chargeUunitDataValue) {
                                        if (chargeUunitDataValue.value == chargeUunit.val()) {
                                            ajaxData.departmentId = chargeUunitDataValue.id;
                                        }
                                    })
                                    // 组长
                                    if ($("#newTask_taskList_PopupePopup").attr("title") == null) {
                                        ajaxData.userId = groupLeaderID;
                                    } else {
                                        ajaxData.userId = $("#newTask_taskList_PopupePopup").attr("title");
                                    }

                                    // 任务量
                                    ajaxData.preManday = Number(PopupegetMileage.val());

                                    // 上线日期
                                    ajaxData.launchDate = launchDate.val();
                                    //完成日期
                                    ajaxData.finishDate = completionDate.val();
                                    // 是否执行保存后同步下发该任务
                                    ajaxData.flag = synchronizeTasksCheckbox;
                                    //基本信息返回的ID
                                    ajaxData.taskId = JSON.parse($.localStorage.getItem('missionBasicInformationCallData')).id;
                                    // 基本信息任务类型ID
                                    ajaxData.typeId = JSON.parse($.localStorage.getItem('missionBasicInformationCallData')).typeId;
                                    // 行数据id
                                    var newTask_taskList_data = JSON.parse($.sessionStorage.getItem('newTask_taskList_data'));
                                    ajaxData.batchId = newTask_taskList_data.batch_id;
                                    var newLoadIndex = layer.load(2, {
                                        shade: [0.1, '#fff']
                                    });

                                    ajaxData.id = newTask_taskList_data.id;


                                    $.ajax({
                                        type: "post",
                                        contentType: "application/json",
                                        url: config_constant.URL_HEADER + "/task/a/save",
                                        data: JSON.stringify(ajaxData),
                                        success: function (data) {
                                            $.sessionStorage.setItem('newTask_taskList_data', null);
                                            if (data.code == 0) {
                                                var routerLocation = window.location.hash;
                                                // var basicInformationStatue = $("[id^='render-basicInformation']");
                                                if (routerLocation.indexOf("AdditionalTasks") > 0) {
                                                    table.reload('newTask_taskList_table', {
                                                        method: 'post',
                                                        url: config_constant.URL_HEADER + '/task/a/search',
                                                        where: {
                                                            taskId: $.localStorage.getItem('AdmintaskLineID')
                                                        },
                                                    });
                                                } else {
                                                    var newTaskLinkTable = JSON.parse($.localStorage.getItem('newTaskLinkTable'));
                                                    newTaskLinkTable.push(data.data);
                                                    $.localStorage.setItem('newTaskLinkTable', JSON.stringify(newTaskLinkTable));

                                                    table.reload('newTask_taskList_table', {
                                                        method: 'get',
                                                        data: JSON.parse($.localStorage.getItem('newTaskLinkTable'))
                                                    });
                                                    if (JSON.parse($.localStorage.getItem('newTaskLinkTable')).length == 0) {
                                                        $.sessionStorage.setItem('newTask_taskList_data', null);
                                                    }
                                                }
                                                layer.close(newTaskLinkPopue);
                                                layer.alert("任务环节添加成功")
                                                layer.close(newLoadIndex);
                                            } else {
                                                layer.close(newLoadIndex);
                                                layer.alert("任务环节添加失败")
                                            }
                                        },
                                        error: function (error) {
                                            layer.close(newLoadIndex);
                                            layer.alert("任务环节添加失败")

                                        }
                                    });
                                }
                            })
                        }
                    });
                }
                $(".newTask_taskList_contain .taskLinkChange").on('click', function () {
                    var tableSelectSatte = $("table tr").hasClass("layui-table-click");
                    if (tableSelectSatte == true) {
                        taskLinkChange();

                    } else {
                        layer.alert("请选择一行再进行操作")
                    }
                })
                //任务详情
                $(".newTask_taskList_contain .taskDetails").on('click', function () {
                    var newTask_taskList_data = JSON.parse($.sessionStorage.getItem('newTask_taskList_data'));
                    var tableSelectSatte = $("table tr").hasClass("layui-table-click");
                    if (tableSelectSatte == true) {
                        var newTask_taskList_data = JSON.parse($.sessionStorage.getItem('newTask_taskList_data'));
                        var step_value = newTask_taskList_data.step_value;
                        if (step_value == "质检") {
                            qRouter.go("TaskManagementNav/AdministratorTaskManagement/QualityInspectorTaskList");
                        } else {
                            qRouter.go("TaskManagementNav/AdministratorTaskManagement/OtherTaskList");
                        }

                    } else {
                        layer.alert("请选择一行,然后进行操作")
                    }
                })
                //删除任务详情
                $(".newTask_taskList_contain .deleteTaskDetails").on('click', function () {
                    var newTask_taskList_data = JSON.parse($.sessionStorage.getItem('newTask_taskList_data'));
                    var tableSelectSatte = $("table tr").hasClass("layui-table-click");
                    if (tableSelectSatte == true) {
                        var tablistId = newTask_taskList_data.id;
                        //询问框
                        layer.confirm('确定要删除这条数据吗?', {
                            btn: ['删除', '取消'] //按钮
                        }, function () {
                            $.ajax({
                                type: "post",
                                url: config_constant.URL_HEADER + "/task/a/delete" + "/" + tablistId,
                                data: {},
                                success: function (data) {
                                    if (data.code == 0) {
                                        var routerLocation = window.location.hash;
                                        // var basicInformationStatue = $("[id^='render-basicInformation']");
                                        if (routerLocation.indexOf("AdditionalTasks") > 0) {
                                            // tablistObj.del();
                                            table.reload('newTask_taskList_table', {
                                                method: 'post',
                                                url: config_constant.URL_HEADER + '/task/a/search',
                                                where: {
                                                    taskId: $.localStorage.getItem('AdmintaskLineID')
                                                },
                                            });
                                        } else {
                                            var delectTablistObj = [];
                                            var newTaskLinkTable = JSON.parse($.localStorage.getItem('newTaskLinkTable'));
                                            $.each(newTaskLinkTable, function (newTaskLinkTableKey, newTaskLinkTableValue) {
                                                if (newTaskLinkTableValue.id != tablistId) {
                                                    delectTablistObj.push(newTaskLinkTableValue);
                                                }
                                            })
                                            $.localStorage.setItem('newTaskLinkTable', JSON.stringify(delectTablistObj));
                                            table.reload('newTask_taskList_table', {
                                                method: 'get',
                                                data: JSON.parse($.localStorage.getItem('newTaskLinkTable'))
                                            });
                                        }
                                        layer.closeAll();
                                        layer.msg('删除成功', {
                                            //20s后自动关闭
                                            time: 1000,
                                        });
                                    } else {
                                        layer.alert("删除失败,请重新添加")
                                    }
                                },
                                error: function (error) {
                                    layer.alert("删除失败,请重新添加")
                                }
                            })
                        }, function () {
                            layer.closeAll();
                        });

                    } else {

                        layer.alert("请选择列表进行删除")
                    }
                })
                //下发任务
                function issuedTask() {
                    //询问框
                    layer.confirm('确定要下发这个任务吗?', {
                        btn: ['确定', '取消'] //按钮
                    }, function () {
                        var taskList_localStorageData = JSON.parse($.localStorage.getItem('taskList_localStorageData'));
                        var postData = {};
                        // 如果是制作
                        if (taskList_localStorageData.step_id == "1") {
                            postData = {
                                status: 2,
                                id: taskList_localStorageData.id
                            }
                        }
                        // 如果是质检
                        if (taskList_localStorageData.step_id == "2") {
                            postData = {
                                status: 4,
                                id: taskList_localStorageData.id
                            }
                        }
                        //如果是修改
                        if (taskList_localStorageData.step_id == "3") {
                            postData = {
                                status: 9,
                                id: taskList_localStorageData.id
                            }
                        }
                        var newLoadIndex = layer.load(2, {
                            shade: [0.1, '#fff']
                        });
                        $.ajax({
                            type: "post",
                            async: false,
                            data: JSON.stringify(postData),
                            contentType: "application/json; charset=utf-8",
                            url: config_constant.URL_HEADER + "/task/a/update_status",
                            success: function (data) {
                                if (data.code == 0) {
                                    var tsakListStatueData = null;
                                    //下拉任务状态
                                    $.ajax({
                                        type: 'get',
                                        async: false,
                                        url: config_constant.URL_HEADER + "/task/status/search",
                                        success: function (res) {
                                            tsakListStatueData = res.data
                                        },
                                        error: function (e, m) {

                                        }
                                    });
                                    $.sessionStorage.setItem('newTask_taskList_data', null);
                                    var routerLocation = window.location.hash;
                                    // var basicInformationStatue = $("[id^='render-basicInformation']");
                                    if (routerLocation.indexOf("AdditionalTasks") > 0) {
                                        table.reload('newTask_taskList_table', {
                                            method: 'post',
                                            url: config_constant.URL_HEADER + '/task/a/search',
                                            where: {
                                                taskId: $.localStorage.getItem('AdmintaskLineID')
                                            },
                                        });
                                    } else {
                                        // 删除旧值,添加新值
                                        var newTaskLinkTable = JSON.parse($.localStorage.getItem('newTaskLinkTable'));
                                        $.each(newTaskLinkTable, function (newTaskLinkTableKey, newTaskLinkTableValue) {
                                            if (taskList_localStorageData.id == newTaskLinkTableValue.id) {
                                                newTaskLinkTable.splice(newTaskLinkTableKey, 1);
                                                // 更改缓存的值再重新注入
                                                // 如果是制作
                                                if (taskList_localStorageData.step_id == "1") {
                                                    taskList_localStorageData.status = 2;
                                                    $.each(tsakListStatueData, function (tsakListStatueDataKey, tsakListStatueDataValue) {
                                                        if (tsakListStatueDataValue.id == 2) {
                                                            taskList_localStorageData.status = 2;
                                                            taskList_localStorageData.status_value = tsakListStatueDataValue.value;
                                                        }
                                                    })
                                                }
                                                // 如果是质检
                                                if (taskList_localStorageData.step_id == "2") {
                                                    taskList_localStorageData.status = 4;
                                                    $.each(tsakListStatueData, function (tsakListStatueDataKey, tsakListStatueDataValue) {
                                                        if (tsakListStatueDataValue.id == 4) {
                                                            taskList_localStorageData.status = 4;
                                                            taskList_localStorageData.status_value = tsakListStatueDataValue.value;
                                                        }
                                                    })
                                                }
                                                //如果是修改
                                                if (taskList_localStorageData.step_id == "3") {
                                                    taskList_localStorageData.status = 9;
                                                    $.each(tsakListStatueData, function (tsakListStatueDataKey, tsakListStatueDataValue) {
                                                        if (tsakListStatueDataValue.id == 9) {
                                                            taskList_localStorageData.status = 9;
                                                            taskList_localStorageData.status_value = tsakListStatueDataValue.value;
                                                        }
                                                    })
                                                }
                                                newTaskLinkTable.push(taskList_localStorageData);
                                                $.localStorage.setItem('newTaskLinkTable', JSON.stringify(newTaskLinkTable));
                                            }
                                        })
                                        table.reload('newTask_taskList_table', {
                                            method: 'get',
                                            data: JSON.parse($.localStorage.getItem('newTaskLinkTable'))
                                        });
                                        if (JSON.parse($.localStorage.getItem('newTaskLinkTable')).length == 0) {
                                            $.sessionStorage.setItem('newTask_taskList_data', null);
                                        }
                                    }
                                    layer.close(newLoadIndex);
                                    layer.alert("下发成功")
                                } else {
                                    layer.close(newLoadIndex);
                                    layer.alert("下发失败,请重新下发")
                                }
                            },
                            error: function (error) {
                                layer.close(newLoadIndex);
                                layer.alert("下发失败,请重新下发")
                            }
                        })

                    }, function () {
                        layer.closeAll();
                    });
                }
            })
        }
    }

    exports('newTask_taskList', obj);
});