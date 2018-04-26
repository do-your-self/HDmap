/**
 * Copyright ©2018 DATAOJO. All Rights Reserved. 北京相数科技有限公司 版权所有
 * Created Date: 2018.01.08
 * Author: 付国强
 * instructions:面包屑导航组件
 */
layui.link('./script/newTask/newTask_basicInformation.css')
layui.define(['layer', 'element', 'form', 'table', 'config_interactivity', 'config_constant'], function (exports) {
    var layer = layui.layer;
    var element = layui.element;
    var form = layui.form;
    var table = layui.table;
    var config_interactivity = layui.config_interactivity;
    var config_constant = layui.config_constant;
    var obj = {
        newTask_basicInformation: function (componentName) {
            var thisP = this;
            var missionBasicInformation = null;
            var getRoot = $("[id^='render-newTask_basicInformation']");
            getRoot.empty();
            $.each(getRoot, function (key, listId) {
                var taskNumData = null;
                var taskTypeData = null;
                var totalMileage = 0;
                var ajaxData = {};
                var nodeHtml = '';
                var getNodeHtml = $('#' + listId.id);
                var componentData = getNodeHtml.data('componentData');
                nodeHtml += '<div class="newTask_basicInformation-contain">';
                nodeHtml += '<form class="layui-form" action="">';

                nodeHtml += '<div class="newTask_basicInformation-selectGroup newTask_basicInformation-contain_taskNmber">';
                nodeHtml += '<label class="newTask_basicInformation-inline-block newTask_basicInformation-title">任务号:</label>';
                nodeHtml += '<div class="newTask_basicInformation-inline-block taskNum">';
                nodeHtml += '<input onkeydown="if(event.keyCode==32) return false" autocomplete="off" disabled class="layui-input" placeholder="请点击右侧按钮进行选择">';
                nodeHtml += '</div>';
                nodeHtml += '</div>';

                nodeHtml += '<div class="newTask_basicInformation-buttonGroup" id="newTask_basicInformation-addTask">';
                nodeHtml += '<div class="layui-btn layui-btn-normal" >添加任务号</div>';
                nodeHtml += '</div>';

                nodeHtml += '<div class="newTask_basicInformation-buttonGroup" id="newTask_basicInformation-viewTaskAndDelete">';
                nodeHtml += '<div class="layui-btn layui-btn-normal">查看子任务并删除</div>';
                nodeHtml += '</div>';

                nodeHtml += '<div class="newTask_basicInformation-inputGroup">';
                nodeHtml += '<label class="newTask_basicInformation-inline-block newTask_basicInformation-title">里程(KM)</label>';
                nodeHtml += '<div class="newTask_basicInformation-inline-block theMileage">';
                nodeHtml += '<input onkeydown="if(event.keyCode==32) return false" autocomplete="off" class="layui-input" placeholder="请输入里程:">';
                nodeHtml += '</div>';
                nodeHtml += '</div>';


                nodeHtml += '<div class="newTask_basicInformation-selectGroup">';
                nodeHtml += '<label class="newTask_basicInformation-inline-block newTask_basicInformation-title">任务类型:</label>';
                nodeHtml += '<div class="newTask_basicInformation-inline-block  taskType">';
                nodeHtml += '<select>';
                nodeHtml += '<option value="">请选择任务类型</option>';
                $.ajax({
                    type: 'get',
                    async: false,
                    url: config_constant.URL_HEADER + '/task/type/search',
                    success: function (res) {
                        taskTypeData = res.data;
                        $.each(res.data, function (resKey, resValue) {
                            nodeHtml += '<option value="' + resValue.value + '" title="' + resValue.id + '">' + resValue.value + '</option>';
                        })
                    },
                    error: function (e, m) {

                    }
                });
                nodeHtml += '</select>';
                nodeHtml += '</div>';
                nodeHtml += '</div>';




                nodeHtml += '<div class="newTask_basicInformation-noteGroup">';
                nodeHtml += '<label class="newTask_basicInformation-inline-block newTask_basicInformation-title">备注:</label>';
                nodeHtml += '<div class="newTask_basicInformation-inline-block noteData">';
                nodeHtml += '<input onkeydown="if(event.keyCode==32) return false" autocomplete="off" class="layui-input newTask_basicInformation-width" placeholder="请输入备注">';
                nodeHtml += '</div>';
                nodeHtml += '</div>';



                nodeHtml += '<div class="newTask_basicInformation-modifyGroup">';
                nodeHtml += '<div class="layui-btn layui-btn-normal Modify">修改</div>';
                nodeHtml += '<div class="layui-btn layui-btn-normal save">保存</div>';
                nodeHtml += '</div>';


                nodeHtml += '</form>';
                nodeHtml += '</div>';
                getRoot.empty();
                getRoot.append(nodeHtml);
                element.init();
                form.render();
                //回填数据
                var routerLocation = window.location.hash;
                if (routerLocation.indexOf("AdditionalTasks") > 0) {
                    // 禁用添加已有任务号
                    $("#newTask_basicInformation-addTask").off('click')
                    // 禁用查看子任务并删除
                    var taskStatusClick = JSON.parse($.localStorage.getItem('theTotalNumberOfTasks'));
                    if (taskStatusClick != null && taskStatusClick != "null" && taskStatusClick != undefined) {
                        var stateString = ""
                        $.each(taskStatusClick, function (taskStatusClickKey, taskStatusClickValue) {
                            stateString += taskStatusClickValue.status + "-";
                        })
                        console.log(stateString, stateString.indexOf("8"), stateString.indexOf("11"))
                        if (stateString.indexOf("8") >= 0 || stateString.indexOf("11") >= 0) {
                            console.log("禁用")
                            $("#newTask_basicInformation-viewTaskAndDelete").off('click')
                        } else {
                            $("#newTask_basicInformation-viewTaskAndDelete").off('click')
                            $("#newTask_basicInformation-viewTaskAndDelete").on('click', newTaskBbasicInformationViewTaskAndDelete)
                            console.log("开启")
                        }
                    }
                    $(".newTask_basicInformation-modifyGroup .Modify").show();
                    $(".newTask_basicInformation-modifyGroup .save").hide();
                    // 当在追加任务页面时回填页面
                    var tabList_data = JSON.parse($.sessionStorage.getItem('tabList_data'));
                    // 任务号
                    var task = tabList_data.task_id;
                    // 里程
                    var mileage = Number(tabList_data.mileage);
                    // 任务类型
                    var type = tabList_data.type_value;
                    var des = "暂无"
                    console.log(task, mileage, type)
                    // 获取任务号
                    $(".newTask_basicInformation-contain_taskNmber input").val(task);
                    // 里程赋值
                    $(".newTask_basicInformation-inputGroup .theMileage input").val(mileage);
                    // 任务类型赋值
                    // $(".newTask_basicInformation-selectGroup .taskType select").val(type);
                    $(".newTask_basicInformation-selectGroup option[value=" + type + "]").attr("selected", "selected");
                    var newTask_basicInformation_pageState = {};
                    newTask_basicInformation_pageState.taskId = task;
                    newTask_basicInformation_pageState.typeId = task;
                    newTask_basicInformation_pageState.mileage = mileage;
                    newTask_basicInformation_pageState.des = des;
                    var missionBasicInformation = {};
                    missionBasicInformation.mileage = mileage;
                    console.log(tabList_data)
                    var id = {
                        id: tabList_data.id
                    }
                    $.ajax({
                        type: "GET",
                        async: false,
                        url: config_constant.URL_HEADER + '/task/search/by/id',
                        data: id,
                        success: function (data) {
                            baseData = data.data;
                            console.log(baseData)
                            var missionBasicInformationCallData = {};
                            missionBasicInformationCallData.id = baseData.id;
                            missionBasicInformationCallData.typeId = baseData.type_id;
                            var missionBasicInformation = {};
                            missionBasicInformation.mileage = baseData.mileage;
                            $.localStorage.setItem('missionBasicInformationCallData', JSON.stringify(missionBasicInformationCallData));
                            $.localStorage.setItem('missionBasicInformation', JSON.stringify(missionBasicInformation));

                        },
                        error: function (error) {

                        }
                    });
                    form.render();
                    $.localStorage.setItem('newTask_basicInformation_pageState', JSON.stringify(newTask_basicInformation_pageState));

                }
                if (routerLocation.indexOf("NewTask") > 0) {
                    $.localStorage.setItem('theTotalNumberOfTasks', null);
                    $(".newTask_basicInformation-modifyGroup .Modify").hide();
                    $(".newTask_basicInformation-modifyGroup .save").show();
                }
                //隐藏修改按钮
                $(".newTask_basicInformation-modifyGroup .Modify").hide();


                function newTaskBbasicInformationAddTask() {
                    var addTaskContent = '';


                    addTaskContent += '<div class="layui-tab layui-tab-brief newTask_basicInformation_tabs">';
                    addTaskContent += '<ul class="layui-tab-title">';
                    addTaskContent += '<li class="layui-this">新增任务号</li>';
                    addTaskContent += '<li>已有任务号</li>';
                    addTaskContent += '</ul>';
                    addTaskContent += '<div class="layui-tab-content">';
                    addTaskContent += '<div class="layui-tab-item layui-show">'
                    //内容1

                    addTaskContent += '<div class="newTask_basicInformation-container">';
                    addTaskContent += '<form class="layui-form" action="">';
                    addTaskContent += '<label class="newTask_basicInformation-Layui-label">输入框</label>';
                    addTaskContent += '<div class="layui-input-inline newTask_basicInformation-Layui-input">';
                    addTaskContent += '<input type="text" name="title" required  lay-verify="required" placeholder="搜索任务号" autocomplete="off" class="layui-input addNewTaskSearchValue">';
                    addTaskContent += '</div>';
                    addTaskContent += '<div class="layui-btn layui-btn-normal addNewTaskSearch" style="margin-left:16px;">搜索</div>';
                    addTaskContent += '</form>';
                    addTaskContent += '<table id="newTask_basicInformation_table_addNewTask" lay-filter="addNewTaskList"></table>';

                    addTaskContent += '</div>';



                    addTaskContent += '</div>';
                    addTaskContent += '<div class="layui-tab-item">'
                    //内容2
                    addTaskContent += '<div class="newTask_basicInformation-container">';
                    addTaskContent += '<form class="layui-form" action="">';
                    addTaskContent += '<label class="newTask_basicInformation-Layui-label">输入框</label>';
                    addTaskContent += '<div class="layui-input-inline newTask_basicInformation-Layui-input">';
                    addTaskContent += '<input type="text" name="title" required  lay-verify="required" placeholder="搜索任务号" autocomplete="off" class="layui-input addTaskSearchValue">';
                    addTaskContent += '</div>';
                    addTaskContent += '<div class="layui-btn layui-btn-normal addTaskSearch" style="margin-left:16px;">搜索</div>';
                    addTaskContent += '</form>';
                    addTaskContent += '<table id="newTask_basicInformation_table_addTask" lay-filter="addTaskList"></table>';
                    addTaskContent += '</div>';


                    addTaskContent += '</div>';
                    addTaskContent += '</div>';
                    addTaskContent += '</div>';
                    addTaskContent += '<div class="newTask_basicInformation-moveBtn">';
                    addTaskContent += '<div class="layui-btn layui-btn-primary  closeWindow">取消</div>';
                    addTaskContent += '<div class="layui-btn layui-btn-normal addMsg">添加</div>';
                    addTaskContent += '</div>';




                    layer.open({
                        title: '添加任务号',
                        //加上边框
                        type: 1,
                        skin: 'layui-layer-taskSkin',
                        //宽高
                        area: ['590px', '540px'],
                        content: addTaskContent,
                        //不显示关闭按钮,
                        closeBtn: 0,
                        //开启遮罩关闭
                        shadeClose: true,
                        success: function () {
                            // 添加新任务
                            table.render({
                                elem: '#newTask_basicInformation_table_addNewTask',
                                url: config_constant.URL_HEADER + '/taskdata/search_id',
                                page: true,
                                limits: [10, 20, 30],
                                height: 300,
                                cols: [
                                    [{
                                        field: 'id',
                                        title: 'ID',
                                        sort: true,
                                        align: 'center',
                                        event: 'addNewTaskList'
                                    }]
                                ]
                            });
                            table.on('tool(addNewTaskList)', function (obj) {
                                var data = obj.data,
                                    layEvent = obj.event;
                                if (layEvent === 'addNewTaskList') {
                                    $.sessionStorage.setItem('newTask_basicInformation_addTaskId_data', JSON.stringify(data));
                                }

                            });
                            $(".addNewTaskSearch").on('click', function () {
                                    var inputValue = $(".addNewTaskSearchValue").val();
                                    table.reload('newTask_basicInformation_table_addNewTask', {
                                        url: config_constant.URL_HEADER + '/taskdata/search_id',
                                        where: {
                                            search: inputValue
                                        },
                                        done: function (res, curr, count) {
                                            $.sessionStorage.setItem('newTask_basicInformation_addTaskId_data', "null");
                                        }
                                    });
                                }),
                                // 添加已有任务
                                table.render({
                                    elem: '#newTask_basicInformation_table_addTask',
                                    url: config_constant.URL_HEADER + '/task/search_id',
                                    page: true,
                                    limits: [10, 20, 30],
                                    height: 300,
                                    cols: [
                                        [{
                                            field: 'task_id',
                                            title: 'ID',
                                            sort: true,
                                            align: 'center',
                                            event: 'addTaskId'
                                        }]
                                    ]
                                });
                            table.on('tool(addTaskList)', function (obj) {
                                var data = obj.data,
                                    layEvent = obj.event;
                                if (layEvent === 'addTaskId') {
                                    $.sessionStorage.setItem('newTask_basicInformation_addTaskId_data', JSON.stringify(data));
                                }

                            });
                            $(".addTaskSearch").on('click', function () {
                                    var inputValue = $(".addTaskSearchValue").val();
                                    table.reload('newTask_basicInformation_table_addTask', {
                                        url: config_constant.URL_HEADER + '/task/search_id',
                                        where: {
                                            search: inputValue
                                        },
                                        done: function (res, curr, count) {
                                            $.sessionStorage.setItem('newTask_basicInformation_addTaskId_data', "null");
                                        }
                                    });
                                }),
                                $(".closeWindow").on('click', function () {
                                    layer.closeAll();
                                    $.sessionStorage.setItem('newTask_basicInformation_addTaskId_data', "null");
                                })
                            $(".addMsg").on('click', function () {
                                isClick = true;
                                var newTask_basicInformation_addTaskId_data = JSON.parse($.sessionStorage.getItem('newTask_basicInformation_addTaskId_data'));
                                if (newTask_basicInformation_addTaskId_data != "null" && newTask_basicInformation_addTaskId_data != undefined && newTask_basicInformation_addTaskId_data != null) {
                                    var optionValue = "";
                                    $.each(newTask_basicInformation_addTaskId_data, function (newTask_basicInformation_addTaskId_dataKey, newTask_basicInformation_addTaskId_dataValue) {
                                        optionValue = newTask_basicInformation_addTaskId_dataValue;
                                    })

                                    if (isClick == true) {
                                        var selectBox = $('.newTask_basicInformation-contain_taskNmber input');
                                        selectBox.val(optionValue);
                                        layer.closeAll();
                                        $.sessionStorage.setItem('newTask_basicInformation_addTaskId_data', "null");
                                    }
                                } else {
                                    layer.alert('请选中要添加的行');
                                }
                            })
                        }
                    });
                }
                // 添加已有任务号
                $("#newTask_basicInformation-addTask").on('click', newTaskBbasicInformationAddTask)


                function newTaskBbasicInformationViewTaskAndDelete() {
                    var viewTaskAndDeleteContent = '';
                    viewTaskAndDeleteContent += '<div class="newTask_basicInformation_taskAndDeletecontainer">';
                    viewTaskAndDeleteContent += '<table id="newTask_basicInformation_table_viewTaskAndDelete" lay-filter="viewTaskList"></table>';
                    viewTaskAndDeleteContent += '<div class="newTask_basicInformation-delMoveBtn">';
                    viewTaskAndDeleteContent += '<div class="layui-btn layui-btn-primary closeWindow">取消</div>';
                    viewTaskAndDeleteContent += '<div class="layui-btn layui-btn-normal addMsg">添加</div>';
                    viewTaskAndDeleteContent += '<div class="layui-btn layui-btn-normal reviseMsg">修改</div>';
                    // viewTaskAndDeleteContent += '<div class="layui-btn layui-btn-normal mileageAnd">里程加和</div>';
                    viewTaskAndDeleteContent += '</div>';
                    viewTaskAndDeleteContent += '</div>';
                    var choseBox = $('.newTask_basicInformation-contain_taskNmber input');
                    var choseBoxValue = choseBox.val();
                    if (choseBoxValue.length == 0) {
                        layer.alert("请选择任务号")
                    } else {
                        layer.open({
                            title: '查看子任务',
                            type: 1,
                            //加上边框
                            skin: 'layui-layer-taskSkin',
                            //宽高
                            area: ['590px', '590px'],
                            content: viewTaskAndDeleteContent,
                            //不显示关闭按钮,
                            closeBtn: 0,
                            //开启遮罩关闭
                            shadeClose: true,
                            success: function () {
                                table.render({
                                    elem: '#newTask_basicInformation_table_viewTaskAndDelete',
                                    url: config_constant.URL_HEADER + '/task/subdata/search',
                                    where: {
                                        taskId: choseBoxValue
                                    },
                                    height: 450,
                                    page: false,
                                    cols: [
                                        [{
                                            field: 'subTaskId',
                                            title: '编号 ',
                                            sort: true,
                                            event: "select",
                                            align: 'center'
                                        }, {
                                            field: 'mileage',
                                            title: '里程',
                                            sort: true,
                                            event: "select",
                                            align: 'center'
                                        }, {
                                            field: 'operation',
                                            title: '操作',
                                            sort: true,
                                            event: "select",
                                            align: 'center',
                                            templet: '<div><a class="" lay-event="view">查看</a>&nbsp;<a class="" lay-event="del">删除</a></div>'
                                        }]
                                    ],
                                    done: function (res, curr, count) {
                                        totalMileage = 0;
                                        console.log(res);
                                        $.each(res.data, function (resKey, resValue) {
                                            totalMileage += Number(resValue.mileage);
                                        })
                                        console.log(totalMileage)
                                        $(".newTask_basicInformation-inputGroup .theMileage input").val(totalMileage);
                                    }
                                });
                                table.on('tool(viewTaskList)', function (obj) {
                                    var data = obj.data,
                                        layEvent = obj.event;
                                    console.log(layEvent)
                                    $.sessionStorage.setItem('newTask_basicInformation_viewTaskAndDelete_data', JSON.stringify(data));
                                    if (layEvent === 'del') {
                                        layer.confirm('确定要删除这条数据吗?', function (index) {
                                            $.ajax({
                                                type: "post",
                                                url: config_constant.URL_HEADER + '/task/subdata/delete' + "/" + data.id,
                                                data: JSON.stringify(),
                                                success: function (data) {
                                                    if (data.code == 0) {
                                                        layer.alert("删除成功")
                                                        table.reload('newTask_basicInformation_table_viewTaskAndDelete', {
                                                            url: config_constant.URL_HEADER + '/task/subdata/search',
                                                            method: 'get',
                                                            where: {
                                                                taskId: choseBoxValue
                                                            }
                                                        });
                                                    } else {
                                                        layer.alert("删除失败,请重新删除")
                                                    }

                                                },
                                                error: function (data) {

                                                }
                                            })
                                            obj.del();
                                            layer.close(index);
                                        });
                                    }
                                    if (layEvent === 'view') {
                                        var tabList_data = JSON.parse($.sessionStorage.getItem('tabList_data'));
                                        var newTask_basicInformation_viewTaskAndDelete_data = JSON.parse($.sessionStorage.getItem('newTask_basicInformation_viewTaskAndDelete_data'));
                                        var taskId = newTask_basicInformation_viewTaskAndDelete_data.taskId;
                                        var subTaskId = newTask_basicInformation_viewTaskAndDelete_data.subTaskId;
                                        var taskIdJson = taskId + '-' + subTaskId + '.json'
                                        // if (tabList_data.projects_value == "路牙") {
                                        //     taskIdJson = tabList_data.task_id + '-' + tabList_data.sub_task_id + '.curb'
                                        // }
                                        // if (tabList_data.projects_value == "车道线") {
                                        //     taskIdJson = tabList_data.task_id + '-' + tabList_data.sub_task_id + '.json'
                                        // }
                                        // if (tabList_data.projects_value == "栅栏") {
                                        //     taskIdJson = tabList_data.task_id + '-' + tabList_data.sub_task_id + '.barrier'
                                        // }
                                        // if (tabList_data.projects_value == "栅栏") {
                                        //     taskIdJson = tabList_data.task_id + '-' + tabList_data.sub_task_id + '.barrier'
                                        // }
                                        var versionId = null;
                                        // var filePath=tabList_data.task_id+'-'+tabList_data.sub_task_id;
                                        var href2D = config_constant.EDITING_PLATFORM_HREF + "/2deditor?task=" + taskId + "&file=" + taskIdJson + "&ver=" + versionId;
                                        // var href3D = config_constant.EDITING_PLATFORM_HREF + "/3deditor?task=" + taskId + "&file=" + taskIdJson + "&pcAddr=" + filePath;
                                        window.open(href2D, "_blank")
                                    }
                                });

                            },
                        });
                        //关闭窗口
                        $(".closeWindow").on('click', function () {
                            layer.closeAll();
                        })


                        //添加里程
                        var choseBox = $('.newTask_basicInformation-contain_taskNmber input');
                        var choseBoxValue = choseBox.val();

                        $(".addMsg").on('click', function () {
                            $.sessionStorage.setItem('newTask_basicInformation_viewTaskAndDelete_data', null);
                            var addSonTask = '';
                            addSonTask += '<div class="newTask_basicInformation-moveBtnPosition">';
                            addSonTask += '<label class="addinformation-Layui-label">编号:</label>';
                            addSonTask += '<div class="layui-input-inline addinformation-Layui-input">';
                            addSonTask += '<input onkeydown="if(event.keyCode==32) return false" type="text" name="title" required  lay-verify="required" placeholder="添加编号" autocomplete="off" class="layui-input taskIdData">';
                            addSonTask += '</div>';
                            addSonTask += '</div>';
                            addSonTask += '<div class="newTask_basicInformation-moveBtnPosition">';
                            addSonTask += '<label class="addinformation-Layui-label">里程:</label>';
                            addSonTask += '<div class="layui-input-inline addinformation-Layui-input">';
                            addSonTask += '<input onkeydown="if(event.keyCode==32) return false" type="text" name="title" required  lay-verify="required" placeholder="添加里程" autocomplete="off" class="layui-input mileageData">';
                            addSonTask += '</div>';
                            addSonTask += '</div>';
                            addSonTask += '<div class="newTask_basicInformation-moveBtnPosition">';
                            addSonTask += '<div class="layui-btn layui-btn-primary newTask_basicInformation-moveBtn cancelAddTask">取消</div>';
                            addSonTask += '<div class="layui-btn layui-btn-normal addMileageokAddTask">确定</div>';
                            addSonTask += '</div>';
                            layer.open({
                                title: '添加子任务',
                                type: 1,
                                //加上边框
                                skin: 'layui-layer-taskSkin',
                                //宽高
                                area: ['400px', '260px'],
                                content: addSonTask,
                                //不显示关闭按钮,
                                closeBtn: 0,
                                //开启遮罩关闭
                                shadeClose: true,
                                success: function (layero, index) {
                                    $('.addMileageokAddTask').on('click', function () {
                                        if ($(".mileageData").val() == "") {
                                            layer.alert("里程不能为空")
                                        } else if ($(".taskIdData").val() == "") {
                                            layer.alert("编号不能为空")
                                        } else {
                                            var mileageData = Number($(".mileageData").val());
                                            var taskIdData = Number($(".taskIdData").val());
                                            if (isNaN(mileageData)) {
                                                layer.alert("里程应为数字")
                                            } else if (isNaN(taskIdData)) {
                                                layer.alert("编号应为数字")
                                            } else {
                                                var newLoadIndex = layer.load(2, {
                                                    shade: [0.1, '#fff']
                                                });
                                                $.ajax({
                                                    type: "post",
                                                    contentType: "application/json",
                                                    url: config_constant.URL_HEADER + '/task/subdata/save',
                                                    data: JSON.stringify({
                                                        taskId: choseBoxValue,
                                                        subTaskId: taskIdData,
                                                        mileage: mileageData
                                                    }),
                                                    success: function (data) {
                                                        if (data.code == 0) {
                                                            layer.alert("添加成功");
                                                            layer.close(index);
                                                            layer.close(newLoadIndex);
                                                            table.reload('newTask_basicInformation_table_viewTaskAndDelete', {
                                                                url: config_constant.URL_HEADER + '/task/subdata/search',
                                                                method: 'get',
                                                                where: {
                                                                    taskId: choseBoxValue
                                                                }
                                                            });
                                                        } else {
                                                            layer.close(newLoadIndex);
                                                            layer.alert("添加失败")
                                                        }

                                                    },
                                                    error: function (data) {
                                                        layer.close(newLoadIndex);
                                                        layer.alert("添加失败")
                                                    }
                                                })
                                            }
                                        }

                                    })
                                    $('.cancelAddTask').on('click', function () {
                                        layer.close(index);
                                    })
                                }
                            })

                        })
                        //修改里程
                        $(".reviseMsg").on('click', function () {
                            var newTask_basicInformation_viewTaskAndDelete_data = JSON.parse($.sessionStorage.getItem('newTask_basicInformation_viewTaskAndDelete_data'));
                            if (newTask_basicInformation_viewTaskAndDelete_data != null && newTask_basicInformation_viewTaskAndDelete_data != undefined && newTask_basicInformation_viewTaskAndDelete_data != "null") {
                                var tableList = newTask_basicInformation_viewTaskAndDelete_data.id;
                                var reviseSonTask = '';
                                reviseSonTask += '<div class="newTask_basicInformation-moveBtnPosition">';
                                reviseSonTask += '<label class="newTask_basicInformation-Layui-label">里程:</label>';
                                reviseSonTask += '<div class="layui-input-inline newTask_basicInformation-Layui-input">';
                                reviseSonTask += '<input onkeydown="if(event.keyCode==32) return false" type="text" name="title" required  lay-verify="required" placeholder="添加里程" autocomplete="off" class="layui-input mileageData">';
                                reviseSonTask += '</div>';
                                reviseSonTask += '<div class="newTask_basicInformation-moveBtnPosition">';
                                reviseSonTask += '<div class="layui-btn layui-btn-primary newTask_basicInformation-moveBtn cancelAddTask">取消</div>';
                                reviseSonTask += '<div class="layui-btn layui-btn-normal okAddTask">确定</div>';
                                reviseSonTask += '</div>';
                                reviseSonTask += '</div>';
                                layer.open({
                                    title: '添加子任务',
                                    type: 1,
                                    //加上边框
                                    skin: 'layui-layer-taskSkin',
                                    //宽高
                                    area: ['400px', '180px'],
                                    content: reviseSonTask,
                                    //不显示关闭按钮,
                                    closeBtn: 0,
                                    //开启遮罩关闭
                                    shadeClose: true,
                                    success: function (layero, index) {
                                        var mileageData = newTask_basicInformation_viewTaskAndDelete_data.mileage;
                                        $(".mileageData").val(mileageData);
                                        $('.okAddTask').on('click', function () {
                                            if ($(".mileageData").val() == "") {
                                                layer.alert("里程不能为空");
                                            } else {
                                                var newInputMileage = Number($(".mileageData").val());
                                                if (!isNaN(newInputMileage)) {
                                                    var newLoadIndex = layer.load(2, {
                                                        shade: [0.1, '#fff']
                                                    });
                                                    $.ajax({
                                                        type: "post",
                                                        contentType: "application/json",
                                                        url: config_constant.URL_HEADER + '/task/subdata/update',
                                                        data: JSON.stringify({
                                                            id: tableList,
                                                            mileage: newInputMileage
                                                        }),
                                                        success: function (data) {
                                                            if (data.code == 0) {
                                                                layer.alert("修改成功");
                                                                layer.close(newLoadIndex);
                                                                $.sessionStorage.setItem('newTask_basicInformation_viewTaskAndDelete_data', null);
                                                                table.reload('newTask_basicInformation_table_viewTaskAndDelete', {
                                                                    url: config_constant.URL_HEADER + '/task/subdata/search',
                                                                    method: 'get',
                                                                    where: {
                                                                        taskId: choseBoxValue
                                                                    }
                                                                });
                                                            } else {
                                                                layer.close(newLoadIndex);
                                                                layer.alert("修改失败")
                                                            }

                                                        },
                                                        error: function (data) {
                                                            layer.close(newLoadIndex);
                                                            layer.alert("修改失败")
                                                        }
                                                    })
                                                    layer.close(index);
                                                } else {
                                                    layer.alert("请输入数字");
                                                }
                                            }

                                        })
                                        $('.cancelAddTask').on('click', function () {
                                            layer.close(index);
                                        })
                                    }
                                })

                            } else {
                                layer.alert("请选择行");
                            }
                        })

                        //计算里程
                        // $(".mileageAnd").on("click", function () {
                        //     $(".newTask_basicInformation-inputGroup .theMileage input").val(totalMileage);
                        //     layer.closeAll();
                        // })

                    }
                }
                //查看子任务并删除
                $("#newTask_basicInformation-viewTaskAndDelete").on('click', newTaskBbasicInformationViewTaskAndDelete)
                //保存
                function sava() {

                    // 获取任务号
                    var taskNum = $(".newTask_basicInformation-selectGroup .taskNum input");

                    // 获取里程
                    var theMileage = $(".newTask_basicInformation-inputGroup .theMileage input")

                    //获取任务类型
                    var taskType = $(".newTask_basicInformation-selectGroup .taskType input");

                    // 获取备注
                    var noteData = $(".newTask_basicInformation-noteGroup .noteData input")
                    if (taskNum.val() == "") {
                        layer.alert("任务号不能为空")
                    } else if (theMileage.val() == "") {
                        layer.alert("里程不能为空")
                    } else if (Number(theMileage.val()) == 0) {
                        layer.alert("里程不能为0")
                    } else if (isNaN(Number(theMileage.val()))) {
                        layer.alert("里程只能为数字")
                    } else if (Number(theMileage.val()) < 0) {
                        layer.alert("里程不可以为负值")
                    } else if (taskType.val() == "") {
                        layer.alert("任务类型不能为空")
                    } else if (noteData.val() == "") {
                        layer.alert("备注不能为空")
                    } else {
                        var taskIdData = Number(theMileage.val());
                        if (isNaN(taskIdData)) {
                            layer.alert("里程必须为数字")
                        } else {
                            var newTask_basicInformation_pageState = {};
                            // 任务号
                            ajaxData.taskId = taskNum.val();
                            newTask_basicInformation_pageState.taskId = taskNum.val();
                            // 任务类型
                            newTask_basicInformation_pageState.typeId = taskType.val();
                            // 任务类型汉字转key
                            $.each(taskTypeData, function (taskTypeDataKey, taskTypeDataValue) {
                                if (taskTypeDataValue.value == taskType.val()) {
                                    ajaxData.typeId = taskTypeDataValue.id;
                                }
                            })
                            ajaxData.mileage = taskIdData;
                            newTask_basicInformation_pageState.mileage = taskIdData;
                            ajaxData.des = noteData.val();
                            newTask_basicInformation_pageState.des = noteData.val();;
                            //传递userid
                            ajaxData.userId = Number($.localStorage.getItem('id'));
                            var newLoadIndex = layer.load(2, {
                                shade: [0.1, '#fff']
                            });
                            $.ajax({
                                type: "post",
                                url: config_constant.URL_HEADER + '/task/save',
                                data: JSON.stringify(ajaxData),
                                contentType: "application/json",
                                dataType: 'json',
                                success: function (data) {
                                    if (data.code == 0) {
                                        layer.alert("基本信息保存成功")
                                        layer.close(newLoadIndex);
                                        $.localStorage.setItem('missionBasicInformation', JSON.stringify(ajaxData))
                                        $.localStorage.setItem('missionBasicInformationCallData', JSON.stringify(data.data));

                                        $(".newTask_basicInformation-modifyGroup .Modify").show();
                                        $(".newTask_basicInformation-modifyGroup .save").hide();
                                        // 禁用添加已有任务号
                                        $("#newTask_basicInformation-addTask").off('click')
                                        // 禁用查看子任务并删除
                                        var taskStatusClick = JSON.parse($.localStorage.getItem('theTotalNumberOfTasks'));
                                        if (taskStatusClick != null && taskStatusClick != "null" && taskStatusClick != undefined) {
                                            var stateString = ""
                                            $.each(taskStatusClick, function (taskStatusClickKey, taskStatusClickValue) {
                                                stateString += taskStatusClickValue.status + "-";
                                            })
                                            console.log(stateString, stateString.indexOf("8"), stateString.indexOf("11"))
                                            if (stateString.indexOf("8") >= 0 || stateString.indexOf("11") >= 0) {
                                                console.log("禁用")
                                                $("#newTask_basicInformation-viewTaskAndDelete").off('click')
                                            } else {
                                                $("#newTask_basicInformation-viewTaskAndDelete").off('click')
                                                $("#newTask_basicInformation-viewTaskAndDelete").on('click', newTaskBbasicInformationViewTaskAndDelete)
                                                console.log("开启")
                                            }
                                        }
                                        // 将页面状态保存到localStorage
                                        $.localStorage.setItem('newTask_basicInformation_pageState', JSON.stringify(newTask_basicInformation_pageState));
                                        $.sessionStorage.setItem('tabList_data', JSON.stringify(data.data));
                                    } else {
                                        layer.close(newLoadIndex);
                                        layer.alert("基本信息保存失败")
                                    }
                                },
                                error: function (error) {
                                    layer.close(newLoadIndex);
                                    layer.alert("基本信息保存失败")
                                }
                            })
                        }
                    }


                }
                $(".newTask_basicInformation-modifyGroup .save").on('click', sava)
                // 修改
                function Modify() {
                    var tabList_data = JSON.parse($.sessionStorage.getItem('tabList_data'));
                    // 获取任务号
                    var taskNum = $(".newTask_basicInformation-selectGroup .taskNum input");

                    // 获取里程
                    var theMileage = $(".newTask_basicInformation-inputGroup .theMileage input")

                    //获取任务类型
                    var taskType = $(".newTask_basicInformation-selectGroup .taskType input");

                    // 获取备注
                    var noteData = $(".newTask_basicInformation-noteGroup .noteData input")
                    if (taskNum.val() == "") {
                        layer.alert("任务号不能为空")
                    } else if (theMileage.val() == "") {
                        layer.alert("里程不能为空")
                    } else if (Number(theMileage.val()) == 0) {
                        layer.alert("里程不能为0")
                    } else if (isNaN(Number(theMileage.val()))) {
                        layer.alert("里程只能为数字")
                    } else if (Number(theMileage.val()) < 0) {
                        layer.alert("里程不可以为负值")
                    } else if (taskType.val() == "") {
                        layer.alert("任务类型不能为空")
                    } else if (noteData.val() == "") {
                        layer.alert("备注不能为空")
                    } else {
                        var taskIdData = Number(theMileage.val());
                        if (isNaN(taskIdData)) {
                            layer.alert("里程必须为数字")
                        } else {
                            var newTask_basicInformation_pageState = {};
                            // 任务号
                            ajaxData.taskId = taskNum.val();
                            newTask_basicInformation_pageState.taskId = taskNum.val();
                            // 任务类型
                            newTask_basicInformation_pageState.typeId = taskType.val();
                            // 任务类型汉字转key
                            $.each(taskTypeData, function (taskTypeDataKey, taskTypeDataValue) {
                                if (taskTypeDataValue.value == taskType.val()) {
                                    ajaxData.typeId = taskTypeDataValue.id;
                                }
                            })
                            ajaxData.mileage = taskIdData;
                            newTask_basicInformation_pageState.mileage = taskIdData;
                            ajaxData.des = noteData.val();
                            ajaxData.id = tabList_data.id;
                            newTask_basicInformation_pageState.des = noteData.val();;
                            //传递userid
                            ajaxData.userId = Number($.localStorage.getItem('id'))
                            var newLoadIndex = layer.load(2, {
                                shade: [0.1, '#fff']
                            });
                            $.ajax({
                                type: "post",
                                url: config_constant.URL_HEADER + '/task/update',
                                data: JSON.stringify(ajaxData),
                                contentType: "application/json",
                                dataType: 'json',
                                success: function (data) {
                                    if (data.code == 0) {
                                        layer.alert("基本信息修改成功")
                                        layer.close(newLoadIndex);
                                        $.localStorage.setItem('missionBasicInformation', JSON.stringify(ajaxData))
                                        $.localStorage.setItem('missionBasicInformationCallData', JSON.stringify(data.data));
                                        // 将页面状态保存到localStorage
                                        $.localStorage.setItem('newTask_basicInformation_pageState', JSON.stringify(newTask_basicInformation_pageState));

                                    } else {
                                        layer.close(newLoadIndex);
                                        layer.alert("基本信息修改失败")
                                    }
                                },
                                error: function (error) {
                                    layer.close(newLoadIndex);
                                    layer.alert("基本信息修改失败")
                                }
                            })
                        }
                    }

                }
                $(".newTask_basicInformation-modifyGroup .Modify").on('click', Modify)
                //当路由跳转到下个页面时记录从location中存储状态恢复
                var newTask_basicInformation_pageState = JSON.parse($.localStorage.getItem('newTask_basicInformation_pageState'));
                console.log(newTask_basicInformation_pageState, "辉县")
                if (newTask_basicInformation_pageState != null && newTask_basicInformation_pageState != undefined && newTask_basicInformation_pageState != "null") {
                    // 刷新select后任务号是通过添加已有任务号选择的时候,任务号显示为空,所以重新赋值
                    // 对所有input进行赋值
                    // 任务号赋值
                    $(".newTask_basicInformation-contain_taskNmber input").val(newTask_basicInformation_pageState.taskId);
                    // 里程赋值
                    $(".newTask_basicInformation-inputGroup .theMileage input").val(newTask_basicInformation_pageState.mileage);
                    // 任务类型赋值
                    $(".newTask_basicInformation-selectGroup option[value=" + newTask_basicInformation_pageState.typeId + "]").attr("selected", "selected");
                    // 备注赋值
                    $(".newTask_basicInformation-noteGroup .noteData input").val(newTask_basicInformation_pageState.des);
                    $(".newTask_basicInformation-modifyGroup .Modify").show();
                    $(".newTask_basicInformation-modifyGroup .save").hide();
                    // 禁用添加已有任务号
                    $("#newTask_basicInformation-addTask").off('click')
                    // 禁用查看子任务并删除
                    var taskStatusClick = JSON.parse($.localStorage.getItem('theTotalNumberOfTasks'));
                    if (taskStatusClick != null && taskStatusClick != "null" && taskStatusClick != undefined) {
                        var stateString = ""
                        $.each(taskStatusClick, function (taskStatusClickKey, taskStatusClickValue) {
                            stateString += taskStatusClickValue.status + "-";
                        })
                        console.log(stateString, stateString.indexOf("8"), stateString.indexOf("11"))
                        if (stateString.indexOf("8") >= 0 || stateString.indexOf("11") >= 0) {
                            console.log("禁用")
                            $("#newTask_basicInformation-viewTaskAndDelete").off('click')
                        } else {
                            $("#newTask_basicInformation-viewTaskAndDelete").off('click')
                            $("#newTask_basicInformation-viewTaskAndDelete").on('click', newTaskBbasicInformationViewTaskAndDelete)
                            console.log("开启")
                        }
                    }
                    form.render('select');
                    element.init();


                }



            })

        }



    }

    exports('newTask_basicInformation', obj);
});