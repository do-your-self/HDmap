/**
 * Copyright ©2018 DATAOJO. All Rights Reserved. 北京相数科技有限公司 版权所有
 * Created Date: 2018.01.08
 * Author: 付国强
 * instructions:任务管理任务基本信息组件
 */
layui.link('./script/systemProcessSetting/systemProcessSetting.css')
layui.define(['layer', 'element', 'form', 'qRouter', 'table', 'laypage', 'laytpl', 'config_constant'], function (exports) {
    var layer = layui.layer;
    var element = layui.element;
    var form = layui.form;
    var qRouter = layui.qRouter;
    var table = layui.table;
    var laypage = layui.laypage;
    var laytpl = layui.laytpl;
    var config_constant = layui.config_constant;
    var systemProcessSetting_Obj = {
        "taskNumber": null,
        "page": 1,
        "length": 10
    }
    var obj = {
        systemProcess: function (componentName) {
            var pageCount = '';
            var getRoot = $("[id^='render-systemProcess']");
            var rootHtml = '';
            getRoot.empty();
            rootHtml += '<div class="systemProcessSetting">';
            rootHtml += '<div id="systemProcess_body"></div>';
            rootHtml += '<div id="demo7"></div>';
            rootHtml += '<fieldset class="layui-elem-field layui-field-title" style="margin-top: 30px;">';
            rootHtml += '</fieldset>'
            rootHtml += '</div>';
            getRoot.append(rootHtml);

            function getData() {
                var getNode = $("#systemProcess_body");
                var nodeHtml = '';
                getNode.empty();
                $.ajax({
                    type: 'post',
                    async: false,
                    data: JSON.stringify(systemProcessSetting_Obj),
                    contentType: "application/json; charset=utf-8",
                    url: config_constant.URL_HEADER + '/after-task/select',
                    success: function (data) {
                        pageCount = data.count;
                        nodeHtml += '<div class="systemProcess_btn">';
                        nodeHtml += '<a class="layui-btn layui-btn-normal systemProcessSetting_add">新增任务</a>';
                        nodeHtml += '<a class="layui-btn layui-btn-normal systemProcessSetting_delete">删除任务</a>';
                        nodeHtml += '<input id="systemProcessSetting_search" type="text" name="title" required  lay-verify="required" placeholder="请输入搜索内容" autocomplete="off" class="layui-input">';
                        nodeHtml += '<a class="layui-btn layui-btn-normal systemProcessSetting_search">搜索</a>';
                        nodeHtml += '</div>';
                        nodeHtml += '<div class="systemProcessSetting_contain systemProcess_contain">';
                        nodeHtml += '<ul>';
                        nodeHtml += '<li>';
                        nodeHtml += '<div>&nbsp;</div>';
                        nodeHtml += '<div>任务号</div>';
                        nodeHtml += '<div>流程</div>';
                        nodeHtml += '<div>执行状态</div>';
                        nodeHtml += '<div>执行时间</div>';
                        nodeHtml += '<div>备注</div>';
                        nodeHtml += '<div>操作</div>';
                        nodeHtml += '</li>';
                        $.each(data.data, function (processKey, processValue) {
                            nodeHtml += '<li class="systemProcessSetting_list" data_process="' + processValue.id + '">';
                            nodeHtml += '<div>' + (processKey + 1) + '</div>';
                            nodeHtml += '<div><i class="layui-icon" style="font-size: 16px; color: #7d7d85;">&#xe623;</i><i class="layui-icon layui_icon_second" style="font-size: 16px; color: #7d7d85;">&#xe622;</i><span class="systemProcess_preview">' + processValue.taskNumber + '</span></div>';
                            nodeHtml += '<div class="systemProcess_preview">' + (processValue.workflowName != null ? processValue.workflowName : "&nbsp;") + '</div>';
                            if (processValue.stepStatus == 0) {
                                nodeHtml += '<div class="systemProcess_preview">等待执行</div>';
                            }
                            if (processValue.stepStatus == 1) {
                                nodeHtml += '<div class="systemProcess_preview">正在执行</div>';
                            }
                            if (processValue.stepStatus == 2) {
                                nodeHtml += '<div class="systemProcess_preview">已完成</div>';
                            }
                            if (processValue.stepStatus == 5) {
                                nodeHtml += '<div class="systemProcess_preview">执行失败</div>';
                            }
                            let startTime = processValue.startTimeString ? processValue.startTimeString : "&nbsp;"
                            let endTime = processValue.endTimeString ? processValue.endTimeString : "&nbsp;"
                            nodeHtml += '<div class="systemProcess_preview">' + startTime + '  ' + endTime + '</div>';
                            nodeHtml += '<div class="systemProcess_preview">' + (processValue.taskComment != "" ? processValue.taskComment : "&nbsp;") + '</div>';
                            nodeHtml += '<div>';
                            if (processValue.stepStatus == 0) {
                                nodeHtml += '<a accessKey="1" id="' + processValue.id + '" class="layui-btn start_execution layui-btn-sm systemProcess_Start">开始执行</a>';
                            } else {
                                nodeHtml += '<a accessKey="1" id="' + processValue.id + '" class="layui-btn start_execution layui-btn-sm layui-btn-disabled systemProcess_Start">开始执行</a>';
                            }

                            nodeHtml += '<a  data-logpath="' + processValue.stepLogPath + '" data-id="' + processValue.id + '" class="layui-btn layui-btn-sm layui-btn-primary systemProcess_viewlog">查看日志</a>';
                            nodeHtml += '</div>';
                            nodeHtml += '<ul>';
                            $.each(processValue.afterTasks, function (linkKey, linkValue) {
                                nodeHtml += '<li class="systemProcessSetting_list_ul_li">';
                                nodeHtml += '<div>&nbsp;</div>';
                                nodeHtml += '<div><i class="layui-icon layui_icon_children" style="font-size: 16px; color: #7d7d85;">&#xe63c;</i><span class="systemProcess_preview">' + linkValue.stepName + '</span></div>';
                                nodeHtml += '<div class="systemProcess_preview">' + (linkValue.workflowName != null ? linkValue.workflowName : "&nbsp;") + '</div>';
                                if (linkValue.stepStatus == 0) {
                                    nodeHtml += '<div class="systemProcess_preview">等待执行</div>';
                                }
                                if (linkValue.stepStatus == 1) {
                                    nodeHtml += '<div class="systemProcess_preview">正在执行</div>';
                                }
                                if (linkValue.stepStatus == 2) {
                                    nodeHtml += '<div class="systemProcess_preview">已完成</div>';
                                }
                                if (linkValue.stepStatus == 5) {
                                    nodeHtml += '<div class="systemProcess_preview">执行失败</div>';
                                }
                                let startTime = linkValue.startTimeString ? linkValue.startTimeString : "&nbsp;"
                                let endTime = linkValue.endTimeString ? linkValue.endTimeString : "&nbsp;"
                                nodeHtml += '<div class="systemProcess_preview">' + startTime + '  ' + endTime + '</div>';
                                nodeHtml += '<div class="systemProcess_preview">' + (linkValue.taskComment != "" ? linkValue.taskComment : "&nbsp;") + '</div>';
                                nodeHtml += '<div class="systemProcess_action">';
                                if (processValue.stepStatus == 0) {
                                    nodeHtml += '<a accessKey="2" id="' + linkValue.id + '" class="systemProcess_actionStart layui-btn start_execution layui-btn-sm  systemProcess_Start">开始执行</a>';
                                } else {
                                    if (linkValue.stepStatus == 5) {
                                        nodeHtml += '<a accessKey="2" id="' + linkValue.id + '" class="systemProcess_actionStart layui-btn start_execution layui-btn-sm  systemProcess_Start">开始执行</a>';
                                    } else {
                                        nodeHtml += '<a  accessKey="2" id="' + linkValue.id + '" class="systemProcess_actionStart systemProcess_linkvaluestepstatus layui-btn-disabled layui-btn start_execution layui-btn-sm systemProcess_Start">开始执行</a>';
                                    }
                                }

                                nodeHtml += '<a data-logpath="' + linkValue.stepLogPath + '" data-id="' + linkValue.id + '" class="layui-btn layui-btn-primary layui-btn-sm systemProcess_viewlog">查看日志</a>';
                                nodeHtml += '</div>';
                                nodeHtml += '</li>';
                            });
                            nodeHtml += '</ul>';
                            nodeHtml += '</li>';
                        });
                        nodeHtml += '</ul>';
                        nodeHtml += '</div>';


                        getNode.append(nodeHtml);
                        $.each(data.data, function (processKey, processValue) {
                            $.each(processValue.afterTasks, function (linkKey, linkValue) {
                                $("#" + linkValue.id).data("taskPerform", linkValue.taskPerform);
                                if (processValue.taskPerform == false) {
                                    $("#" + linkValue.id).data("linkvaluestepstatus", linkValue.stepStatus);
                                }
                            });
                        });
                        // 当在非一键开启的情况下,对子列表的状态进行判断
                        var allNode = $(".systemProcessSetting_contain").children().children(".systemProcessSetting_list");
                        var systemProcess_linkvaluestepstatus = $(".systemProcess_linkvaluestepstatus");
                        $.each(systemProcess_linkvaluestepstatus, function (systemProcess_linkvaluestepstatusKey, systemProcess_linkvaluestepstatusValue) {
                            var linkvaluestepstatusNode = $(systemProcess_linkvaluestepstatusValue).data("linkvaluestepstatus");
                            if (linkvaluestepstatusNode == 1) {
                                $(systemProcess_linkvaluestepstatusValue).parent().parent().siblings().children(".systemProcess_action").children(".systemProcess_actionStart").addClass("layui-btn-disabled");
                                $(systemProcess_linkvaluestepstatusValue).addClass("layui-btn-disabled");
                            }
                            if (linkvaluestepstatusNode == 2) {
                                $(systemProcess_linkvaluestepstatusValue).parent().parent().next().children(".systemProcess_action").children(".systemProcess_actionStart").removeClass("layui-btn-disabled");
                                $(systemProcess_linkvaluestepstatusValue).parent().parent().next().siblings().children(".systemProcess_action").children(".systemProcess_actionStart").addClass("layui-btn-disabled");
                            }


                        })

                        var processData = '';
                        $('.systemProcessSetting_list .layui-icon:first-child').on('click', function () {
                            //调节箭头指向
                            $(this).toggleClass('systemProcessSetting_arrow');
                            // 调节隐藏与显示
                            $(this).parent().parent().children("ul").toggle();
                        });
                        $('.layui_icon_children').on('click', function () {
                            $(this).removeClass('systemProcessSetting_arrow');
                        });
                        $('.systemProcessSetting_list').on('click', function () {
                            $(this).parent().children(".systemProcessSetting_list").css("background", "#fff")
                            $(this).css("background", "#1e9fff")
                            var lidata = $(this).attr('data_process');
                            $.each(data.data, function (processKey, processValue) {
                                if (lidata == processValue.id) {
                                    processData = processValue;
                                }
                            })
                        });

                        // 组织二层表格冒泡
                        $('.systemProcessSetting_list ul').on('click', function (event) {
                            event.stopPropagation();
                        })

                        // 搜索框回车搜索
                        $('#systemProcessSetting_search').keypress(function (event) {
                            if (event.which == 13) {
                                searchProcess();
                            }
                        });

                        // 搜索按钮搜索
                        $('.systemProcessSetting_search').on('click', function () {
                            searchProcess();
                        })

                        // 搜索方法
                        function searchProcess() {
                            systemProcessSetting_Obj.taskNumber = $('#systemProcessSetting_search')["0"].value;
                            layui.systemProcess.systemProcess();
                        }

                        // 开始执行
                        var process_id = '';
                        var start_execution_obj = {
                            "id": "",
                            "taskNumber": "",
                            "taskPath": "",
                            "taskPerform": false,
                            "operateUser": $.localStorage.getItem('userId'),
                            "afterTasks": [{
                                "id": "",
                                "parentId": ""
                            }]
                        }
                        $('.start_execution').on('click', function () {
                            if ($(this).hasClass('layui-btn-disabled')) {
                                layer.alert("该任务已开启，请勿重复开启")
                            } else {
                                process_id = $(this)["0"].id;
                                if ($(this)["0"].accessKey == '1') {
                                    $.each(data.data, function (processKey, processValue) {
                                        if (process_id == processValue.id) {
                                            start_execution_obj.id = processValue.id;
                                            start_execution_obj.taskNumber = processValue.taskNumber;
                                            start_execution_obj.taskPath = processValue.taskPath;
                                            start_execution_obj.taskPerform = true;
                                            start_execution_obj.operateUser = $.localStorage.getItem('id');
                                            start_execution_obj.afterTasks[0].id = processValue.afterTasks[0].id;
                                            start_execution_obj.afterTasks[0].parentId = processValue.id;
                                        }
                                    })
                                } else {
                                    if ($(this).data("taskPerform") == true) {
                                        var taskPerform = $(this).data("taskPerform");
                                        $.each(data.data, function (processKey, processValue) {
                                            $.each(processValue.afterTasks, function (linkKey, linkValue) {
                                                if (process_id == linkValue.id) {
                                                    start_execution_obj.id = processValue.id;
                                                    start_execution_obj.taskNumber = processValue.taskNumber;
                                                    start_execution_obj.taskPath = processValue.taskPath;
                                                    start_execution_obj.taskPerform = taskPerform;
                                                    start_execution_obj.operateUser = $.localStorage.getItem('id');
                                                    start_execution_obj.afterTasks[0].id = linkValue.id;
                                                    start_execution_obj.afterTasks[0].parentId = processValue.id;
                                                }
                                            })
                                        })
                                    } else {
                                        $.each(data.data, function (processKey, processValue) {
                                            $.each(processValue.afterTasks, function (linkKey, linkValue) {
                                                if (process_id == linkValue.id) {
                                                    start_execution_obj.id = processValue.id;
                                                    start_execution_obj.taskNumber = processValue.taskNumber;
                                                    start_execution_obj.taskPath = processValue.taskPath;
                                                    start_execution_obj.taskPerform = false;
                                                    start_execution_obj.operateUser = $.localStorage.getItem('id');
                                                    start_execution_obj.afterTasks[0].id = linkValue.id;
                                                    start_execution_obj.afterTasks[0].parentId = processValue.id;
                                                }
                                            })
                                        })
                                    }

                                }
                                executionPop($(this));
                            }
                        })

                        // 开始执行确认弹窗
                        function executionPop(even) {
                            //询问框
                            layer.confirm('确认要执行该条任务吗?', {
                                btn: ['确定', '取消'] //按钮
                            }, function () {
                                $.ajax({
                                    type: 'post',
                                    data: JSON.stringify(start_execution_obj),
                                    contentType: "application/json; charset=utf-8",
                                    url: config_constant.URL_HEADER + '/after-task/execute',
                                    success: function (data) {
                                        if (data.code == 0) {
                                            layui.systemProcess.systemProcess();
                                            layer.alert("执行成功")
                                        } else {
                                            layer.alert("执行失败")
                                        }
                                    }
                                });

                            }, function () {
                                layer.closeAll();
                            });
                        }

                        var addPop = '';
                        var choose_progress = '';
                        var execution_path = '';
                        // 选择流程
                        $.ajax({
                            type: "get",
                            async: false,
                            url: config_constant.URL_HEADER + '/task-workflow/find',
                            success: function (data) {
                                choose_progress = data;
                            }
                        })
                        // 选择流程
                        $.ajax({
                            type: "get",
                            async: false,
                            url: config_constant.URL_HEADER + '/task-path/find',
                            success: function (data) {
                                execution_path = data;
                            }
                        })

                        function addPopDom() {
                            addPop = '';
                            addPop += '<div class="systemProcessSetting_pop systemProcess_pop">';
                            addPop += '<div class="systemProcessSetting_pop_contain">';
                            addPop += '<p>';
                            addPop += '<span>任&nbsp;&nbsp;务&nbsp;&nbsp;号：</span>';
                            addPop += '<input onkeydown="if(event.keyCode==32) return false" type="text" class="systemProcessSetting_name" type="text" name="title" lay-verify="title" autocomplete="off" placeholder="" class="layui-input">';
                            addPop += '</p>';
                            addPop += '<p class="layui-form">';
                            addPop += '<span>选择流程：</span>';
                            addPop += '<select name="city" lay-verify="required">';
                            addPop += '<option value=""></option>';
                            $.each(choose_progress.data, function (key, value) {
                                addPop += '<option value="' + value.id + '">' + value.workflow_name + '</option>';
                            });
                            addPop += '</select>';
                            addPop += '</p>';
                            addPop += '<p class="layui-form">';
                            addPop += '<span>执行路径：</span>';
                            addPop += '<select name="city" lay-verify="required">';
                            addPop += '<option value=""></option>';
                            $.each(execution_path.data, function (key, value) {
                                addPop += '<option title="' + value.id + '">' + value.taskPath + '</option>';
                            })
                            addPop += '</select>';
                            addPop += '</p>';
                            addPop += '<p>';
                            addPop += '<span class="systemProcessSetting_pop_contain">备&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;注：</span>';
                            addPop += '<input class="systemProcessSetting_Remarks" type="text" name="title" lay-verify="title" autocomplete="off" placeholder="" class="layui-input">';
                            addPop += '</p>';
                            addPop += '<div class="systemProcessSetting_pop_button systemProcess_pop_button">';
                            addPop += '<button class="layui-btn layui-btn-normal systemProcessSetting_pop_cancel">取消</button>';
                            addPop += '<button class="layui-btn layui-btn-normal layui-btn-normal systemProcessSetting_pop_save">保存</button>';
                            addPop += '</div>';
                            addPop += '</div>';
                            addPop += '</div>';
                        }

                        function addPopFun() {
                            addPopDom()
                            layer.open({
                                title: "新增任务",
                                type: 1,
                                //加上边框
                                skin: 'layui-layer-taskSkin',
                                //宽高
                                area: ['480px', '380px'],
                                content: addPop,
                                //不显示关闭按钮,
                                closeBtn: 0,
                                //开启遮罩关闭
                                shadeClose: true,
                                success: function (layero, index) {
                                    element.render();
                                    form.render();
                                    var choose_progress_id = '';
                                    var choose_progress_type = '';
                                    var execution_path_id = '';
                                    $('.layui-anim-upbit dd').on('click', function () {
                                        var clickBox = $(this).parents('.layui-form').children('span')["0"].innerText;
                                        if (clickBox == "选择流程：") {
                                            choose_progress_id = $(this).attr('lay-value');
                                            $.each(choose_progress.data, function (key, value) {
                                                if (choose_progress_id == value.id) {
                                                    choose_progress_id = value
                                                }
                                            });
                                        } else {
                                            execution_path_id = $(this)["0"].innerText;
                                        }
                                    })

                                    // 取消
                                    $('.systemProcessSetting_pop_cancel').on('click', function () {
                                        layer.closeAll();
                                    });

                                    // 保存
                                    $('.systemProcessSetting_pop_save').on('click', function () {
                                        if ($('.systemProcessSetting_name')["0"].value == '') {
                                            layer.open({
                                                title: '温馨提示',
                                                content: '请输入任务号'
                                            });
                                        } else if ($('.systemProcessSetting_name')["0"].value.length > 50) {
                                            layer.open({
                                                title: '温馨提示',
                                                content: '任务号的长度不可以大于50'
                                            });
                                        } else if (choose_progress_id == '') {
                                            layer.open({
                                                title: '温馨提示',
                                                content: '请选择流程'
                                            });
                                        } else if (execution_path_id == '') {
                                            layer.open({
                                                title: '温馨提示',
                                                content: '请选择执行路径'
                                            });
                                        } else if ($('.systemProcessSetting_Remarks')["0"].value.length > 60) {
                                            layer.open({
                                                title: '温馨提示',
                                                content: '备注的长度不可以大于60'
                                            });
                                        } else {
                                            var systemProcess_Obj = {
                                                "workflowId": choose_progress_id.id,
                                                "afterTask": {
                                                    "taskNumber": $('.systemProcessSetting_name')["0"].value,
                                                    "taskComment": $('.systemProcessSetting_Remarks')["0"].value,
                                                    "taskPath": execution_path_id,
                                                    "createUser": $.localStorage.getItem('userId'),
                                                    "modifyUser": $.localStorage.getItem('userId'),
                                                    "workflowName": choose_progress_id.workflow_name,
                                                    "workflowType": choose_progress_id.workflow_type
                                                }
                                            }
                                            var updateLoadIndex = layer.load(2, {
                                                shade: [0.1, '#fff']
                                            });
                                            $.ajax({
                                                type: 'post',
                                                data: JSON.stringify(systemProcess_Obj),
                                                contentType: "application/json; charset=utf-8",
                                                url: config_constant.URL_HEADER + '/after-task/add',
                                                success: function (data) {
                                                    if (data.code == 0) {
                                                        layer.close(updateLoadIndex);
                                                        layer.closeAll();
                                                        layer.alert("添加成功")
                                                        layui.systemProcess.systemProcess();
                                                    } else {
                                                        layer.close(updateLoadIndex);
                                                        layer.alert(data.message)
                                                    }
                                                },
                                                error: function (error) {
                                                    layer.close(updateLoadIndex);
                                                    layer.alert("添加失败")
                                                }

                                            });
                                            // layer.closeAll();
                                        }

                                    });
                                }
                            })
                        }

                        // 新增任务
                        $('.systemProcessSetting_add').on('click', function () {
                            addPopFun();
                        });

                        // 删除任务
                        $('.systemProcessSetting_delete').on('click', function () {
                            if (processData != '') {
                                deletePop();
                            } else {
                                layer.open({
                                    title: '删除提示',
                                    skin: 'layui-layer-taskSkin',
                                    content: '请选择要删除的任务'
                                });
                            }
                        });

                        // 删除任务确认弹窗
                        function deletePop() {
                            //询问框
                            layer.confirm('确定要删除这条数据吗?', {
                                btn: ['删除', '取消'] //按钮
                            }, function () {
                                var systemProcessSetting_del_Obj = [processData.id];
                                var updateLoadIndex = layer.load(2, {
                                    shade: [0.1, '#fff']
                                });
                                $.ajax({
                                    type: 'post',
                                    data: JSON.stringify(systemProcessSetting_del_Obj),
                                    contentType: "application/json; charset=utf-8",
                                    url: config_constant.URL_HEADER + '/after-task/delete',
                                    success: function (data) {
                                        if (data.code == 0) {
                                            layer.close(updateLoadIndex);
                                            layer.alert("删除成功")
                                            layui.systemProcess.systemProcess();
                                        } else {
                                            layer.close(updateLoadIndex);
                                            layer.alert("删除失败")
                                        }
                                    }
                                });
                            }, function () {
                                layer.closeAll();
                            });


                        }
                    }
                });
            }

            getData();
            //分页完整功能
            laypage.render({
                elem: 'demo7',
                count: pageCount,
                layout: ['count', 'prev', 'page', 'next', 'limit', 'skip'],
                limits: [10, 20, 30],
                jump: function (obj, first) {
                    if (!first) {

                        systemProcessSetting_Obj.page = obj.curr;
                        systemProcessSetting_Obj.length = obj.limit;
                        getData();
                    }
                }
            });
            //文字预览功能
            //一级点击事件
            var clickNum = 0;
            $(".systemProcess_preview").on("click", function () {
                clickNum++;
                setTimeout(function () {
                    clickNum=0;
                }, 300);
                console.log(clickNum)
                if (clickNum == 2) {
                    var textContain = $(this).text();
                    layer.confirm(textContain, {
                        btn: ['确定', '取消'] //按钮
                    }, function () {
                        clickNum = 0;
                        layer.closeAll();
                    }, function () {
                        clickNum = 0;
                        layer.closeAll();
                    });
                }

                console.log($(this));
            })
            $(".systemProcess_viewlog").on('click', function () {
                var stepLogPath = $(this).data("logpath");
                var id = $(this).data("id");
                var parameter = "?basePath=" + stepLogPath + "&id=" + id;
                location.href = config_constant.URL_HEADER + "/after-task/log" + parameter;
                // console.log(stepLogPath, id);
                // var ajaxData = {
                //     stepLogPath: stepLogPath,
                //     id: id
                // }
                // var newLoadIndex = layer.load(2, {
                //     shade: [0.1, '#fff']
                // });
                // $.ajax({
                //     type: "post",
                //     contentType: "application/json",
                //     url: config_constant.URL_HEADER + "/after-task/log",
                //     data: JSON.stringify(ajaxData),
                //     success: function (data) {
                //         if (data.code == 0) {
                //             var href = data.data;
                //             layer.close(newLoadIndex);
                //             window.open(href, "_blank")
                //         } else {
                //             layer.close(newLoadIndex);
                //             layer.alert("日志查看失败")
                //         }
                //     },
                //     error: function (error) {
                //         layer.close(newLoadIndex);
                //         layer.alert("日志查看失败")

                //     }
                // });
            })
        }


    }
    exports('systemProcess', obj);
});