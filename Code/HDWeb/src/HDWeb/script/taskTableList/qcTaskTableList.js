/**
 * Copyright ©2018 DATAOJO. All Rights Reserved. 北京相数科技有限公司 版权所有
 * Created Date: 2018.01.08
 * Author: 付国强
 * instructions:任务管理质检组长任务单组件
 */
layui.link('./script/taskTableList/taskTableList.css')
layui.define(['layer', 'element', 'form', 'qRouter', 'table', 'laytpl', 'config_constant', 'taskBasicInformation'], function (exports) {
    var layer = layui.layer;
    var element = layui.element;
    var form = layui.form;
    var qRouter = layui.qRouter;
    var table = layui.table;
    var laytpl = layui - laytpl;
    var config_constant = layui.config_constant;
    var obj = {
        qcTaskTableList: function (componentName) {
            var getRoot = $("[id^='render-qcTaskTableList']");
            var taskList_localStorageData = JSON.parse($.localStorage.getItem('taskList_localStorageData'))
            var taskListItemName = taskList_localStorageData.production_projects.split('#');
            var nodeHtml = '';
            getRoot.empty();

            var makeDictionary = '';
            $.ajax({
                type: "get",
                url: config_constant.URL_HEADER + '/task/projects/search',
                async: false,
                success: function (data) {
                    makeDictionary = data;
                }
            })

            $.ajax({
                type: "get",
                data: {
                    taskId: taskList_localStorageData.task_id,
                    aTaskId: taskList_localStorageData.id,
                    status: taskList_localStorageData.status,
                    batchId: taskList_localStorageData.batch_id
                },
                url: config_constant.URL_HEADER + '/task/a/search/subtask',
                success: function (data) {
                    var statistics_pre_manday = [];
                    var statistics_wrong_number = [];

                    // 数据效率计算
                    $.each(taskListItemName, function (taskListItemNameKey, taskListItemNameValue) {
                        var innerText_pre_manday_Sum = 0;
                        var innerText_wrong_number_Sum = 0;
                        $.each(data.data, function (taskListItemkey, taskListItemValue) {
                            $.each(taskListItemValue.subTask, function (subTaskKey, subTaskValue) {
                                if (taskListItemNameValue == subTaskValue.projects_value) {
                                    if (subTaskValue.pre_manday != undefined && subTaskValue.pre_manday != 0 && subTaskValue.pre_manday != "0" && subTaskValue.pre_manday != "") {
                                        innerText_pre_manday_Sum += subTaskValue.pre_manday;
                                    }
                                    if (subTaskValue.wrong_number != undefined && subTaskValue.wrong_number != "") {
                                        innerText_wrong_number_Sum += subTaskValue.wrong_number;
                                    }
                                }
                            })
                        })
                        statistics_pre_manday.push((taskList_localStorageData.mileage/innerText_pre_manday_Sum).toFixed(2));
                        statistics_wrong_number.push(innerText_wrong_number_Sum);
                    })
                    var overall_efficiency = 0;
                    var error_efficiency = 0;
                    $.each(statistics_pre_manday, function (pre_mandayKey, pre_mandayValue) {
                        if (pre_mandayValue != 0 && pre_mandayValue != "0" && pre_mandayValue != undefined) {
                            overall_efficiency += 1 / pre_mandayValue;
                        }
                    });
                    $.each(statistics_wrong_number, function (wrong_numberKey, wrong_numberValue) {
                        error_efficiency += wrong_numberValue;
                    });

                    // 表格dom结构及数据处理
                    nodeHtml += '<div class="layui-form taskTableList">';
                    nodeHtml += '<div class="taskTableList_button">';
                    nodeHtml += '<button class="layui-btn layui-btn-primary taskTableList_Issued ' + (($.sessionStorage.getItem('status') == 6 || $.sessionStorage.getItem('status') == 7 || $.sessionStorage.getItem('status') == 8 || $.sessionStorage.getItem('status') == 11) ? "taskTableList_hide" : "") + '">下发任务</button>';
                    nodeHtml += '<button class="layui-btn layui-btn-primary taskTableList_submit ' + (($.sessionStorage.getItem('status') == 4 || $.sessionStorage.getItem('status') == 6 || $.sessionStorage.getItem('status') == 7 || $.sessionStorage.getItem('status') == 8 || $.sessionStorage.getItem('status') == 11) ? "taskTableList_hide" : "") + '">任务提交</button>';
                    nodeHtml += '</div>';
                    nodeHtml += '<table class="layui-table taskTableList_table taskTableList_qc" id="taskTableList_table">';
                    nodeHtml += '<thead>';
                    nodeHtml += '<tr>';
                    nodeHtml += '<th>任务环节</th>';
                    nodeHtml += '<th>编号</th>';
                    nodeHtml += '<th>里程</th>';
                    $.each(taskListItemName, function (taskListItemNameKey, taskListItemNameValue) {
                        nodeHtml += '<th>' + taskListItemNameValue + '</th>';
                        nodeHtml += '<th>' + taskListItemNameValue + '人天</th>';
                        nodeHtml += '<th>' + taskListItemNameValue + '错误量</th>';
                    })
                    nodeHtml += '</tr>';
                    nodeHtml += '</thead>';
                    nodeHtml += '<tbody>';
                    $.each(data.data, function (taskListItemkey, taskListItemValue) {
                        taskListItemValue.subTaskAll = [];
                        nodeHtml += '<tr>';
                        nodeHtml += '<td>' + taskList_localStorageData.step_value + '</td>';
                        nodeHtml += '<td>' + taskListItemValue.sub_task_id + '</td>';
                        nodeHtml += '<td>' + taskListItemValue.mileage + '</td>';

                        if (taskListItemValue.subTask != undefined) {
                            $.each(taskListItemName, function (taskListItemNameKey, taskListItemNameValue) {
                                var subTaskAllObj = {
                                    "projects_value": ""
                                };
                                subTaskAllObj.projects_value = taskListItemNameValue;
                                $.each(taskListItemValue.subTask, function (subTaskKey, subTaskValue) {
                                    if (taskListItemNameValue == subTaskValue.projects_value) {
                                        subTaskAllObj = subTaskValue
                                    }
                                });
                                taskListItemValue.subTaskAll.push(subTaskAllObj);
                            });
                        } else {
                            $.each(taskListItemName, function (taskListItemNameKey, taskListItemNameValue) {
                                var subTaskAllObj = {
                                    "projects_value": ""
                                };
                                subTaskAllObj.projects_value = taskListItemNameValue;
                                taskListItemValue.subTaskAll.push(subTaskAllObj);
                            });
                        }

                        $.each(taskListItemValue.subTaskAll, function (subTaskAllKey, subTaskAllValue) {
                            nodeHtml += '<td class="taskTableList_cell_value taskTableList_people_name">' + (subTaskAllValue.name != undefined ? subTaskAllValue.name : "") + '</td>';
                            nodeHtml += '<td class="taskTableList_cell_value">' + (subTaskAllValue.pre_manday != undefined ? subTaskAllValue.pre_manday : "") + '</td>';
                            nodeHtml += '<td class="taskTableList_cell_value">' + (subTaskAllValue.wrong_number != undefined ? subTaskAllValue.wrong_number : "") + '<span class="' + (subTaskAllValue.wrong_number != undefined ? (subTaskAllValue.is_qualified == 1 ? "taskTableList_qualified" : (subTaskAllValue.is_qualified == 0 ? "taskTableList_unqualified" : "")) : "") + '"></span></td>';
                        })
                        nodeHtml += '</tr> ';
                    });
                    nodeHtml += '</tbody>';
                    nodeHtml += '</table>';
                    nodeHtml += '</div>';

                    nodeHtml += '<div class="taskTableList_Statistics">';
                    nodeHtml += '<table class="layui-table taskTableList_Statistics_table">';
                    nodeHtml += '<thead>';
                    nodeHtml += '<tr>';
                    nodeHtml += '<th></th>';
                    $.each(taskListItemName, function (taskListItemNameKey, taskListItemNameValue) {
                        nodeHtml += '<th>' + taskListItemNameValue + '效率总计</th>';
                        nodeHtml += '<th>' + taskListItemNameValue + '错误量总计</th>';
                    })
                    nodeHtml += '</tr>';
                    nodeHtml += '</thead>';
                    nodeHtml += '<tbody>';
                    nodeHtml += '<tr>';
                    nodeHtml += '<td><span>综合效率：' + (String(overall_efficiency) == "NaN" || 1/overall_efficiency == Infinity ? "0.00" : (1/overall_efficiency).toFixed(2)) + '</span><span>总错误量：' + (String(error_efficiency) == "NaN" ? "0.00" : error_efficiency.toFixed(2)) + '</span></td>';
                    $.each(taskListItemName, function (taskListItemNameKey, taskListItemNameValue) {
                        nodeHtml += '<td>' + (String(statistics_pre_manday[taskListItemNameKey]) == "NaN" || statistics_pre_manday[taskListItemNameKey] == Infinity ? "0.00" : Number(statistics_pre_manday[taskListItemNameKey]).toFixed(2)) + '</td>';
                        nodeHtml += '<td>' + (String(statistics_wrong_number[taskListItemNameKey]) == "NaN" ? "0.00" : statistics_wrong_number[taskListItemNameKey].toFixed(2)) + '</td>';
                    })

                    nodeHtml += '</tr> ';
                    nodeHtml += '</tbody>';
                    nodeHtml += '</table>';
                    nodeHtml += '</div>';

                    getRoot.append(nodeHtml);

                    var taskListItemChooseMessage = '';
                    $('.taskTableList_qc tbody tr').on('click', function () {
                        $('.taskTableList_table tbody tr').not($('this')).removeClass('layui-table-click')
                        $(this).addClass('layui-table-click');
                        var taskIndex = $(this)["0"].children[1].innerText;
                        $.each(data.data, function (taskListItemkey, taskListItemValue) {
                            if (taskIndex == taskListItemValue.sub_task_id) {
                                taskListItemChooseMessage = taskListItemValue;
                            }
                        });
                        if ($.sessionStorage.getItem('status') == 4 || $.sessionStorage.getItem('status') == 5) {
                            openPop();
                        }
                    })

                    // 信息弹窗
                    var peopleMessage = '';
                    var taskTableList_pop_person_message = '';

                    function openPop() {
                        var popDom = ''
                        var saveData = {
                            "a_task_id": Number(taskList_localStorageData.id),
                            "sub_task_id": Number(taskListItemChooseMessage.sub_id),
                            "subTask": []
                        };
                        popDom += '<div class="taskTableList_pop">';
                        $.each(taskListItemChooseMessage.subTaskAll, function (subTaskAllKey, subTaskAllValue) {
                            var saveData_subTask = {
                                "pre_manday": null,
                                "user_id": null,
                                "wrong_number": null,
                                "projects_id": null,
                                "is_qualified": null,
                                "id": null
                            }
                            $.each(taskListItemChooseMessage.subTask, function (subTaskKey, subTaskValue) {
                                if (subTaskAllValue.projects_value == subTaskValue.projects_value) {
                                    subTaskAllValue = subTaskValue;
                                    saveData_subTask.pre_manday = subTaskAllValue.pre_manday != undefined ? Number(subTaskAllValue.pre_manday).toFixed(2) : null;
                                    saveData_subTask.user_id = subTaskAllValue.user_id != undefined ? Number(subTaskAllValue.user_id) : null;
                                    saveData_subTask.wrong_number = subTaskAllValue.wrong_number != undefined ? Number(subTaskAllValue.wrong_number) : null;
                                    saveData_subTask.projects_id = subTaskAllValue.projects_id != undefined ? Number(subTaskAllValue.projects_id) : null;
                                    saveData_subTask.is_qualified = subTaskAllValue.is_qualified != undefined ? Number(subTaskAllValue.is_qualified) : null;
                                    saveData_subTask.id = subTaskAllValue.id != undefined ? Number(subTaskAllValue.id) : null;
                                }
                            });
                            saveData.subTask.push(saveData_subTask);

                            popDom += '<div class="taskTableList_pop_item">';
                            popDom += '<p><b>' + subTaskAllValue.projects_value + '基本信息</b> <span class="taskTableList_pop_qualified ' + (subTaskAllValue.wrong_number != undefined ? (subTaskAllValue.is_qualified == 1 ? "taskTableList_pop_green" : "") : "") + '">合格</span><span class="taskTableList_pop_unqualified ' + (subTaskAllValue.wrong_number != undefined ? (subTaskAllValue.is_qualified == 0 ? "taskTableList_pop_red" : "") : "") + '">不合格</span></p>';
                            popDom += '<div class="taskTableList_pop_itemName">';
                            popDom += '<div>负责人</div>';
                            popDom += '<div>任务量（人/天）</div>';
                            popDom += '<div>错误量</div>';
                            popDom += '</div>';
                            popDom += '<div class="taskTableList_pop_itemName">';
                            popDom += '<div>';
                            popDom += '<div class="taskTableList_pop_person" data_projects_value = "' + subTaskAllValue.projects_value + '">';
                            popDom += '<span class="taskTableList_pop_name">' + (subTaskAllValue.name != undefined ? subTaskAllValue.name : "") + '</span>';
                            popDom += '<i class="layui-icon" style="font-size: 15px; color: #cccccc;position:absolute;right:15px;">&#xe61a;</i>'
                            popDom += '</div>';
                            popDom += '</div>';
                            popDom += '<div>';
                            popDom += '<input class="task_volume" ' + (subTaskAllValue.name != undefined ? "" : 'disabled') + ' type="number" placeholder="" value="' + (subTaskAllValue.pre_manday != undefined ? subTaskAllValue.pre_manday : "") + '">'
                            popDom += '</div>';
                            popDom += '<div>';
                            popDom += '<input class="error_quantity" ' + (subTaskAllValue.name != undefined ? "" : "disabled") + ' type="number" placeholder="" value="' + (subTaskAllValue.wrong_number != undefined ? subTaskAllValue.wrong_number : "") + '">'
                            popDom += '</div>';
                            popDom += '</div>';
                            popDom += '</div>';
                        });
                        popDom += '<div class="taskTableList_pop_button">';
                        popDom += '<button class="layui-btn layui-btn-primary layui-btn-sm taskTableList_pop_cancel">取消</button>';
                        popDom += '<button class="layui-btn layui-btn-normal layui-btn-sm taskTableList_pop_save">保存</button>';
                        popDom += '</div>';
                        popDom += '</div>';
                        layer.open({
                            title: '信息修改',
                            type: 1,
                            //加上边框
                            skin: 'layui-layer-taskSkin',
                            //宽高
                            area: ['412px', 'auto'],
                            content: popDom,
                            //不显示关闭按钮,
                            closeBtn: 0,
                            //开启遮罩关闭
                            shadeClose: true,
                            success: function (layero, index) {
                                element.render();
                                form.render();

                                $('input[type=number]').keypress(function(e) {
                                　　if (!String.fromCharCode(e.keyCode).match(/[0-9\.]/)) {
                                　　　　return false;
                                　　}
                                });

                                // 选择负责人
                                $('.taskTableList_pop_person').on('click', function () {
                                    $.each(saveData.subTask, function (saveDataKey, saveDataValue) {
                                        var qualified = $('.taskTableList_pop_qualified')[saveDataKey].classList[1];
                                        var unqualified = $('.taskTableList_pop_unqualified')[saveDataKey].classList[1];
                                        if (qualified == undefined & unqualified == undefined) {
                                            saveDataValue.is_qualified = null;
                                        } else if (qualified != undefined & unqualified == undefined) {
                                            saveDataValue.is_qualified = 1;
                                        } else {
                                            saveDataValue.is_qualified = 0;
                                        }
                                        taskListItemChooseMessage.subTaskAll[saveDataKey].pre_manday = $('.task_volume')[saveDataKey].value != '' ? Number($('.task_volume')[saveDataKey].value) : '';
                                        taskListItemChooseMessage.subTaskAll[saveDataKey].wrong_number = $('.error_quantity')[saveDataKey].value != '' ? Number($('.error_quantity')[saveDataKey].value) : '';

                                        saveDataValue.pre_manday = Number($('.task_volume')[saveDataKey].value).toFixed(2);
                                        saveDataValue.wrong_number = Number($('.error_quantity')[saveDataKey].value);
                                    });
                                    taskTableList_pop_person_message = $(this)["0"].attributes[1].value;
                                    choosePeople();
                                    layer.close(index);
                                });

                                // 取消按钮
                                $('.taskTableList_pop_cancel').on('click', function () {
                                    layer.closeAll();
                                });
                                // 合格按钮
                                $('.taskTableList_pop_qualified').on('click', function () {
                                    $(this).addClass('taskTableList_pop_green');
                                    $(this).next().removeClass('taskTableList_pop_red');
                                });
                                // 不合格按钮
                                $('.taskTableList_pop_unqualified').on('click', function () {
                                    $(this).addClass('taskTableList_pop_red');
                                    $(this).prev().removeClass('taskTableList_pop_green');
                                });

                                // 保存按钮
                                $('.taskTableList_pop_save').on('click', function () {
                                    var pre_mandayIsnegative = true;
                                    $.each(saveData.subTask, function (saveDataKey, saveDataValue) {
                                        var qualified = $('.taskTableList_pop_qualified')[saveDataKey].classList[1];
                                        var unqualified = $('.taskTableList_pop_unqualified')[saveDataKey].classList[1];
                                        if (qualified == undefined & unqualified == undefined) {
                                            saveDataValue.is_qualified = null;
                                        } else if (qualified != undefined & unqualified == undefined) {
                                            saveDataValue.is_qualified = 1;
                                        } else {
                                            saveDataValue.is_qualified = 0;
                                        }
                                        saveDataValue.pre_manday = $('.task_volume')[saveDataKey].value != '' ? Number($('.task_volume')[saveDataKey].value).toFixed(2) : null;
                                        saveDataValue.wrong_number = $('.error_quantity')[saveDataKey].value != '' ? Number($('.error_quantity')[saveDataKey].value) : null;
                                        if(saveDataValue.pre_manday < 0 || saveDataValue.wrong_number < 0){
                                            pre_mandayIsnegative = false;
                                        }
                                    });
                                    var delLoadIndex = layer.load(2, {
                                        shade: [0.1, '#fff']
                                    });
                                    if(pre_mandayIsnegative == true){
                                        $.ajax({
                                            type: "post",
                                            data: JSON.stringify(saveData),
                                            contentType: "application/json; charset=utf-8",
                                            url: config_constant.URL_HEADER + '/task/b/save',
                                            async: false,
                                            success: function (data) {
                                                if (data.code == 0) {
                                                    obj.qcTaskTableList();
                                                    layer.closeAll();
                                                    layer.alert("保存成功")
                                                } else {
                                                    layer.closeAll();
                                                    layer.alert("保存失败")
                                                }
                                            },
                                            error: function (error) {
                                                layer.close(delLoadIndex);
                                                layer.alert("保存失败")
                                            }
                                        })
                                    }else{
                                        layer.close(delLoadIndex);
                                        layer.alert("任务量和错误量不可以为负值");
                                    }
                                });
                            }
                        });
                    }

                    // 选择人员弹窗
                    function choosePeople() {
                        peopleMessage = '';
                        var addTaskContent = '';
                        addTaskContent += '<div class="addinformation-container">';
                        addTaskContent += '<form class="layui-form" action="">';
                        addTaskContent += '<label class="addinformation-Layui-label">输入框</label>';
                        addTaskContent += '<div class="layui-input-inline addinformation-Layui-input">';
                        addTaskContent += '<input type="text" name="title" required  lay-verify="required" placeholder="搜索组员" autocomplete="off" class="layui-input searchValue">';
                        addTaskContent += '</div>';
                        addTaskContent += '<div class="layui-btn layui-btn-normal search" style="margin-left:10px;">搜索</div>';
                        addTaskContent += '</form>';
                        addTaskContent += '<table id="test" lay-filter="addTaskList"></table>';
                        addTaskContent += '<div class="layui-btn layui-btn-primary addinformation-moveBtn closeWindow">取消</div>';
                        addTaskContent += '<div class="layui-btn layui-btn-normal addMsg">添加</div>';
                        addTaskContent += '</div>';
                        var indexPopue = "";
                        layer.open({
                            title: '负责人',
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
                                indexPopue = index;
                                table.render({
                                    elem: '#test',
                                    method: 'post',
                                    url: config_constant.URL_HEADER + '/sys/user/search/group_members',
                                    where: {
                                        "stepId": Number(taskList_localStorageData.step_id),
                                        "departmentId": Number($.localStorage.getItem('departmentId')),
                                        "search": ""
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

                                table.on('tool(addTaskList)', function (obj) {
                                    var data = obj.data,
                                        layEvent = obj.event;
                                    if (layEvent === 'addTaskId') {
                                        peopleMessage = data;
                                    }

                                });

                                $(".search").on('click', function () {
                                    var inputValue = $(".searchValue").val();
                                    table.reload('test', {
                                        url: config_constant.URL_HEADER + '/sys/user/search/group_members',
                                        method: 'post',
                                        where: {
                                            search: inputValue,
                                        }
                                    });
                                });

                                $(".closeWindow").on('click', function () {
                                    layer.close(indexPopue);
                                })

                                $(".addMsg").on('click', function () {
                                    if (peopleMessage == '') {
                                        layer.alert('请选中要添加的行');
                                    } else {
                                        $.each(taskListItemChooseMessage.subTaskAll, function (subTaskAllKey, subTaskAllValue) {
                                            if (taskTableList_pop_person_message == subTaskAllValue.projects_value) {
                                                subTaskAllValue.name = peopleMessage.name;
                                                subTaskAllValue.user_id = peopleMessage.id;
                                                $.each(makeDictionary.data, function (makeDictionaryKey, makeDictionaryValue) {
                                                    if (taskTableList_pop_person_message == makeDictionaryValue.value) {
                                                        subTaskAllValue.projects_id = makeDictionaryValue.id;
                                                    }
                                                });
                                            } else {
                                                if (subTaskAllValue.name == undefined) {
                                                    subTaskAllValue.name = peopleMessage.name;
                                                    subTaskAllValue.user_id = peopleMessage.id;
                                                    $.each(makeDictionary.data, function (makeDictionaryKey, makeDictionaryValue) {
                                                        if (subTaskAllValue.projects_value == makeDictionaryValue.value) {
                                                            subTaskAllValue.projects_id = makeDictionaryValue.id;
                                                        }
                                                    });
                                                }
                                            }
                                        });
                                        taskListItemChooseMessage.subTask = taskListItemChooseMessage.subTaskAll;
                                        openPop();
                                        layer.close(index);
                                    }
                                })
                            }
                        });
                    }

                    // 下发按钮
                    $('.taskTableList_Issued').on('click', function () {
                        var peopleNameIsNull = true;
                        $.each($('.taskTableList_people_name'), function (peoplenameKey, peopleNameValue) {
                            if (peopleNameValue.innerText == '') {
                                peopleNameIsNull = false;
                            }
                        })
                        if (peopleNameIsNull == true) {
                            var taskTableList_IssuedObj = {
                                id: Number(taskList_localStorageData.id),
                                status: 5
                            }
                            var delLoadIndex = layer.load(2, {
                                shade: [0.1, '#fff']
                            });
                            $.ajax({
                                type: 'post',
                                data: JSON.stringify(taskTableList_IssuedObj),
                                contentType: "application/json; charset=utf-8",
                                url: config_constant.URL_HEADER + '/task/a/update_status',
                                success: function (data) {
                                    if (data.code == 0) {
                                        layui.taskBasicInformation.taskBasicInformation(componentName);
                                        obj.qcTaskTableList();
                                        layer.close(delLoadIndex);
                                        layer.alert("下发成功")

                                    } else {
                                        layer.close(delLoadIndex);
                                        layer.alert("下发失败")
                                    }
                                },
                                error: function (error) {
                                    layer.close(delLoadIndex);
                                    layer.alert("下发失败")
                                }
                            });
                        } else {
                            layer.open({
                                title: '温馨提示',
                                skin: 'layui-layer-taskSkin',
                                content: '请填完所有人员信息'
                            });
                        }
                    });

                    // 提交弹窗
                    function submitPop() {
                        var submitPop = '';
                        var link_result = '';
                        $.ajax({
                            type: "get",
                            async: false,
                            url: config_constant.URL_HEADER + '/task/status/search?id=6,7,8',
                            success: function (data) {
                                link_result = data;
                                submitPop += '<div class="taskTableList_submitPop">';
                                submitPop += '<div class="taskTableList_submitPop_contain">';
                                submitPop += '<p>任务环节结果</p>';
                                submitPop += '<form class="layui-form" action="">';
                                submitPop += '<div class="layui-input-block">';
                                submitPop += '<select name="city" lay-verify="required">';
                                submitPop += '<option value=""></option>';
                                $.each(data.data, function (key, value) {
                                    submitPop += '<option value="0">' + value.value + '</option>';
                                })
                                submitPop += '</select>';
                                submitPop += '</div>';
                                submitPop += '</form>';
                                submitPop += '<div class="taskTableList_submitPop_button">';
                                submitPop += '<button class="layui-btn layui-btn-primary layui-btn-sm taskTableList_pop_cancel">取消</button>';
                                submitPop += '<button class="layui-btn layui-btn-normal layui-btn-sm taskTableList_pop_submit">提交</button>';
                                submitPop += '</div>';
                                submitPop += '</div>';
                                submitPop += '</div>';
                            }
                        })


                        layer.open({
                            title: '任务提交',
                            type: 1,
                            //加上边框
                            skin: 'layui-layer-taskSkin',
                            //宽高
                            area: ['412px', 'auto'],
                            content: submitPop,
                            //不显示关闭按钮,
                            closeBtn: 0,
                            //开启遮罩关闭
                            shadeClose: true,
                            success: function (layero, index) {
                                element.render();
                                form.render();
                                // 取消
                                $('.taskTableList_pop_cancel').on('click', function () {
                                    layer.closeAll();
                                })

                                // 提交
                                $('.taskTableList_pop_submit').on('click', function () {
                                    if ($('.taskTableList_submitPop_contain input')["0"].value == '') {
                                        layer.open({
                                            title: '温馨提示',
                                            content: '请选择任务环节结果'
                                        });
                                    } else {
                                        $.each(link_result.data, function (resultKey, resultValue) {
                                            if ($('.taskTableList_submitPop_contain input')["0"].value == resultValue.value) {
                                                var taskTableList_SubmitObj = {
                                                    id: Number(taskList_localStorageData.id),
                                                    status: resultValue.id
                                                }
                                                var delLoadIndex = layer.load(2, {
                                                    shade: [0.1, '#fff']
                                                });
                                                $.ajax({
                                                    type: 'post',
                                                    data: JSON.stringify(taskTableList_SubmitObj),
                                                    contentType: "application/json; charset=utf-8",
                                                    url: config_constant.URL_HEADER + '/task/a/update_submit',
                                                    success: function (data) {
                                                        if (data.code == 0) {
                                                            layui.taskBasicInformation.taskBasicInformation(componentName);
                                                            obj.qcTaskTableList();
                                                            layer.close(delLoadIndex);
                                                            layer.alert("提交成功")

                                                        } else {
                                                            layer.close(delLoadIndex);
                                                            layer.alert("提交失败")
                                                        }
                                                    },
                                                    error: function (error) {
                                                        layer.close(delLoadIndex);
                                                        layer.alert("提交失败")
                                                    }
                                                });
                                            }
                                        });
                                        layer.closeAll();
                                    }
                                });
                            }
                        })
                    }

                    // 提交按钮
                    $('.taskTableList_submit').on('click', function () {                                    
                        var taskTableList_table_rows = $("#taskTableList_table tbody tr");
                        var taskTableList_cell_value_type = true;
                        if ($.sessionStorage.getItem('status') == 5 || $.sessionStorage.getItem('status') == 10) {
                            var isNull = true;
                            $.each($('.taskTableList_cell_value'), function (cellKey, cellValue) {
                                if (cellValue.innerText == '') {
                                    isNull = false;
                                    taskTableList_cell_value_type = false;
                                }
                            });
                            if(isNull == false){
                                layer.alert("提交失败，请完善表格数据");
                            }
                            if (taskTableList_cell_value_type == true) {
                                submitPop();
                            }
                        } else {
                            layer.open({
                                title: '温馨提示',
                                content: '该任务已提交'
                            });
                        }
                    })
                }
            });
        },
    }
    exports('qcTaskTableList', obj);
});