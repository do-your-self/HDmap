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
        "workflowName": null,
        "page": 1,
        "length": 10
    }
    var obj = {
        systemProcessSetting: function (componentName) {
            var getRoot = $("[id^='render-systemProcessSetting']");
            getRoot.empty();
            var rootHtml = '';
            rootHtml += '<div class="systemProcessSetting">';
            rootHtml += '<div id="systemProcessSetting_body"></div>';
            rootHtml += '<div id="demo7"></div>';
            rootHtml += '<fieldset class="layui-elem-field layui-field-title" style="margin-top: 30px;">';
            rootHtml += '</fieldset>'
            rootHtml += '</div>';
            getRoot.append(rootHtml);
            var pageCount = '';

            function getData() {
                var getNode = $("#systemProcessSetting_body");
                var nodeHtml = '';
                getNode.empty();
                $.ajax({
                    type: 'post',
                    async: false,
                    data: JSON.stringify(systemProcessSetting_Obj),
                    contentType: "application/json; charset=utf-8",
                    url: config_constant.URL_HEADER + '/task-workflow/select',
                    success: function (data) {
                        pageCount = data.count;
                        nodeHtml += '<div class="systemProcessSetting_btn">';
                        nodeHtml += '<a class="layui-btn layui-btn-normal systemProcessSetting_add">新增</a>';
                        nodeHtml += '<a class="layui-btn layui-btn-normal systemProcessSetting_change" style="display:none;">修改</a>';
                        nodeHtml += '<a class="layui-btn layui-btn-normal systemProcessSetting_delete">删除</a>';
                        nodeHtml += '<input id="systemProcessSetting_search" type="text" name="title" required  lay-verify="required" placeholder="请输入搜索内容" autocomplete="off" class="layui-input">';
                        nodeHtml += '<a class="layui-btn layui-btn-normal systemProcessSetting_search">搜索</a>';
                        nodeHtml += '</div>';
                        nodeHtml += '<div class="systemProcessSetting_contain">';
                        nodeHtml += '<ul>';
                        nodeHtml += '<li>';
                        nodeHtml += '<div>序号</div>';
                        nodeHtml += '<div>流程名称</div>';
                        nodeHtml += '<div>流程类型</div>';
                        nodeHtml += '<div>创建时间</div>';
                        nodeHtml += '<div>创建人</div>';
                        nodeHtml += '<div>备注</div>';
                        nodeHtml += '</li>';
                        $.each(data.data, function (processKey, processValue) {
                            nodeHtml += '<li class="systemProcessSetting_list" data_process="' + processValue.id + '">';
                            nodeHtml += '<div>' + (processKey + 1) + '</div>';
                            nodeHtml += '<div><i class="layui-icon" style="font-size: 16px; color: #7d7d85;">&#xe623;</i><i class="layui-icon layui_icon_second" style="font-size: 16px; color: #7d7d85;">&#xe622;</i><span class="systemProcess_preview">' + processValue.workflow_name + '</span></div>';
                            nodeHtml += '<div class="systemProcess_preview">' + processValue.workflow_type + '<p>' + processValue.workflow_type + '</p></div>';
                            nodeHtml += '<div class="systemProcess_preview">' + processValue.create_time + '</div>';
                            nodeHtml += '<div class="systemProcess_preview">' + processValue.user_name + '<p>' + processValue.user_name + '</p></div>';
                            nodeHtml += '<div class="systemProcess_preview systemProcess_note">' + (processValue.workflow_comment != "" ? processValue.workflow_comment : "&nbsp;") + '</div>';
                            nodeHtml += '<ul>';
                            $.each(processValue.afterSteps, function (linkKey, linkValue) {
                                nodeHtml += '<li class="systemProcessSetting_list_ul_li">';
                                nodeHtml += '<div>&nbsp;</div>';
                                nodeHtml += '<div><i class="layui-icon layui_icon_children" style="font-size: 16px; color: #7d7d85;">&#xe63c;</i><span class="systemProcess_preview">' + (linkValue.step_name != null || linkValue.step_name != "" ? linkValue.step_name : "&nbsp;") + '</span></div>';
                                nodeHtml += '<div class="systemProcess_preview">' + (linkValue.step_type != null || linkValue.step_type != "" ? linkValue.step_type : "&nbsp;") + '</div>';
                                nodeHtml += '<div class="systemProcess_preview">' + (linkValue.create_time != null || linkValue.create_time != "" ? linkValue.create_time : "&nbsp;") + '</div>';
                                nodeHtml += '<div class="systemProcess_preview">' + (linkValue.user_name != "" ? linkValue.user_name : "&nbsp;") + '</div>';
                                nodeHtml += '<div class="systemProcess_preview">' + (linkValue.step_comment != "" ? linkValue.step_comment : "&nbsp;") + '</div>';
                                nodeHtml += '</li>';
                            });
                            nodeHtml += '</ul>';
                            nodeHtml += '</li>';
                        });
                        nodeHtml += '</ul>';
                        nodeHtml += '</div>';


                        getNode.append(nodeHtml);

                        var processData = '';
                        var title = '';
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
                            $(this).parent().children("li").css("background", "#fff")
                            $(this).css("background", "#1e9fff")
                            var lidata = $(this).attr('data_process');
                            $.each(data.data, function (processKey, processValue) {
                                if (lidata == processValue.id) {
                                    processData = processValue;
                                }
                            })
                        });
                        // 阻止二级表格冒泡
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
                            systemProcessSetting_Obj.workflowName = $('#systemProcessSetting_search')["0"].value;
                            obj.systemProcessSetting();
                        }

                        var addPop = '';
                        var link_result = '';
                        var link_result_add = [];
                        $.ajax({
                            type: "get",
                            async: false,
                            url: config_constant.URL_HEADER + '/task-step/find',
                            success: function (data) {
                                link_result = data;
                            }
                        })

                        function addPopDom() {
                            addPop = '';
                            addPop += '<div class="systemProcessSetting_pop">';
                            addPop += '<div class="systemProcessSetting_pop_contain">';
                            addPop += '<p>';
                            addPop += '<span class="systemProcessSetting_pop_contain">流程名称：</span>';
                            addPop += '<input onkeydown="if(event.keyCode==32) return false" type="text" class="systemProcessSetting_name" type="text" name="title" lay-verify="title" autocomplete="off" placeholder="" class="layui-input">';
                            addPop += '</p>';
                            addPop += '<p>';
                            addPop += '<span class="systemProcessSetting_pop_contain">流程类型：</span>';
                            addPop += '<input onkeydown="if(event.keyCode==32) return false" type="text" class="systemProcessSetting_type" type="text" name="title" lay-verify="title" autocomplete="off" placeholder="" class="layui-input">';
                            addPop += '</p>';
                            addPop += '<p>';
                            addPop += '<span class="systemProcessSetting_pop_contain">备&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;注：</span>';
                            addPop += '<input class="systemProcessSetting_Remarks" type="text" name="title" lay-verify="title" autocomplete="off" placeholder="" class="layui-input">';
                            addPop += '</p>';
                            addPop += '<div class="choose_link">';
                            addPop += '<p>选择环节：<i class="layui-icon systemProcessSetting_pop_del" style="font-size: 30px; color: #666666;">&#xe640;</i>  </p>';
                            addPop += '<div class="choose_link_left">';
                            $.each(link_result.data, function (linkKey, linkValue) {
                                addPop += '<p><input type="checkbox" name="' + linkValue.id + '" value="' + linkValue.stepName + '" lay-skin="primary">' + linkValue.stepName + '</p>';
                            })
                            addPop += '</div>';
                            addPop += '<div class="choose_link_center">';
                            addPop += '<button class="layui-btn layui-btn-normal layui-btn-sm systemProcessSetting_pop_add">添加环节</button>';
                            addPop += '</div>';
                            addPop += '<div class="choose_link_right">';
                            addPop += '</div>';
                            addPop += '</div>';
                            addPop += '<div class="systemProcessSetting_pop_button">';
                            addPop += '<button class="layui-btn layui-btn-primary layui-btn-sm systemProcessSetting_pop_cancel">取消</button>';
                            addPop += '<button class="layui-btn layui-btn-normal layui-btn-sm systemProcessSetting_pop_save">保存</button>';
                            addPop += '</div>';
                            addPop += '</div>';
                            addPop += '</div>';
                        }

                        function addPopFun() {

                            addPopDom()


                            layer.open({
                                title: title,
                                type: 1,
                                //加上边框
                                skin: 'layui-layer-taskSkin',
                                //宽高
                                area: ['530px', 'auto'],
                                content: addPop,
                                //不显示关闭按钮,
                                closeBtn: 0,
                                //开启遮罩关闭
                                shadeClose: true,
                                success: function (layero, index) {
                                    element.render();
                                    form.render();

                                    // 拖拽排序
                                    var dragsort = $('.choose_link_right').dad();
                                    dragsort.addDropzone('.systemProcessSetting_pop_del', function (e) {
                                        e.remove();
                                    });

                                    // 新增环节
                                    $('.systemProcessSetting_pop_add').on('click', function () {
                                        if ($('.choose_link_left input:checkbox:checked').length > 0) {
                                            link_result_add = [];
                                            $.each(($('.dad-draggable-area')), function (key, value) {
                                                var link_result_addObj = {}
                                                link_result_addObj.stepId = value.title;
                                                link_result_addObj.value = value.innerText;
                                                link_result_add.push(link_result_addObj);
                                            });

                                            $.each($('.choose_link_left input:checkbox:checked'), function (linkcheckedKey, linkcheckedValue) {
                                                var link_result_addObj = {}
                                                link_result_addObj.stepId = linkcheckedValue.name;
                                                link_result_addObj.value = linkcheckedValue.value;
                                                link_result_add.push(link_result_addObj);
                                            })
                                            var link_result_addDom = ''
                                            $.each(link_result_add, function (linkKey, linkValue) {
                                                link_result_addDom += '<div title="' + linkValue.stepId + '"><span>' + linkValue.value + '</span></div>';
                                            })
                                            $('.choose_link_right').html(link_result_addDom);

                                            // 拖拽排序
                                            var dragsort = $('.choose_link_right').dad();
                                            dragsort.addDropzone('.systemProcessSetting_pop_del', function (e) {
                                                e.remove();
                                            });

                                        } else {
                                            layer.open({
                                                title: '温馨提示',
                                                content: '请选择环节'
                                            });
                                        }
                                    });

                                    // 取消
                                    $('.systemProcessSetting_pop_cancel').on('click', function () {
                                        link_result_add = [];
                                        layer.closeAll();
                                    });

                                    // 保存
                                    $('.systemProcessSetting_pop_save').on('click', function () {
                                        if ($('.systemProcessSetting_name')["0"].value == '') {
                                            layer.open({
                                                title: '温馨提示',
                                                content: '请输入流程名称'
                                            });
                                        } else if ($('.systemProcessSetting_name')["0"].value.length > 50) {
                                            layer.open({
                                                title: '温馨提示',
                                                content: '流程名称长度不可以超过50字'
                                            });
                                        } else if ($('.systemProcessSetting_type')["0"].value == '') {
                                            layer.open({
                                                title: '温馨提示',
                                                content: '请输入流程类型'
                                            });
                                        } else if ($('.systemProcessSetting_type')["0"].value.length > 30) {
                                            layer.open({
                                                title: '温馨提示',
                                                content: '流程类型长度不可以超过30字'
                                            });
                                        } else if ($('.systemProcessSetting_Remarks')["0"].value.length > 60) {
                                            layer.open({
                                                title: '温馨提示',
                                                content: '备注长度不可以超过30字'
                                            });
                                        } else if ($('.choose_link_right')["0"].children.length <= 0) {
                                            layer.open({
                                                title: '温馨提示',
                                                content: '请添加环节'
                                            });
                                        } else {
                                            var systemProcessSetting_Obj = {
                                                "afterTaskWorkflow": {
                                                    "id": null,
                                                    "workflowType": $('.systemProcessSetting_type')["0"].value,
                                                    "workflowName": $('.systemProcessSetting_name')["0"].value,
                                                    "workflowComment": $('.systemProcessSetting_Remarks')["0"].value,
                                                    "createUser": $.localStorage.getItem('userId'),
                                                    "createTime": null,
                                                    "modifyUser": $.localStorage.getItem('userId'),
                                                    "modifyTime": null
                                                },
                                                "stepWorkflows": []
                                            }

                                            $.each($('.choose_link_right')["0"].children, function (link_resultKey, link_resultValue) {
                                                var stepWorkflowsObj = {
                                                    "workflowId": null,
                                                    "stepId": link_resultValue.title,
                                                    "stepSequence": (link_resultKey + 1),
                                                    "createUser": null,
                                                    "createTime": null,
                                                    "modifyUser": null,
                                                    "modifyTime": null
                                                }
                                                systemProcessSetting_Obj.stepWorkflows.push(stepWorkflowsObj);
                                            });

                                            var updateLoadIndex = layer.load(2, {
                                                shade: [0.1, '#fff']
                                            });
                                            $.ajax({
                                                type: 'post',
                                                data: JSON.stringify(systemProcessSetting_Obj),
                                                contentType: "application/json; charset=utf-8",
                                                url: config_constant.URL_HEADER + '/task-workflow/save',
                                                success: function (data) {
                                                    if (data.code == 0) {
                                                        layer.alert("添加成功")
                                                        layer.closeAll();
                                                        layer.close(updateLoadIndex);
                                                        obj.systemProcessSetting();
                                                    } else {
                                                        layer.close(updateLoadIndex);
                                                        layer.alert(data.message)
                                                    }
                                                    link_result_add = [];
                                                },
                                                error: function (error) {
                                                    layer.close(updateLoadIndex);
                                                    layer.alert("添加失败")
                                                }
                                            });
                                        }

                                    });
                                }
                            })
                        }

                        // 新增
                        $('.systemProcessSetting_add').on('click', function () {
                            link_result_add = [];
                            title = '新增流程';
                            addPopFun();
                        });

                        // 修改
                        $('.systemProcessSetting_change').on('click', function () {
                            if (processData != '') {
                                title = '修改流程';
                                addPopFun();
                            } else {
                                layer.open({
                                    title: '温馨提示',
                                    skin: 'layui-layer-taskSkin',
                                    content: '请选择要修改环节的流程'
                                });
                            }
                        });

                        // 删除
                        $('.systemProcessSetting_delete').on('click', function () {
                            if (processData != '') {
                                //询问框
                                layer.confirm('确定要删除这条数据吗?', {
                                    btn: ['删除', '取消'] //按钮
                                }, function () {
                                    var systemProcessSetting_del_Obj = [processData.id];
                                    var delLoadIndex = layer.load(2, {
                                        shade: [0.1, '#fff']
                                    });
                                    $.ajax({
                                        type: 'post',
                                        data: JSON.stringify(systemProcessSetting_del_Obj),
                                        contentType: "application/json; charset=utf-8",
                                        url: config_constant.URL_HEADER + '/task-workflow/delete',
                                        success: function (data) {
                                            if (data.code == 0) {
                                                layer.close(delLoadIndex);
                                                layer.alert("删除成功")
                                                obj.systemProcessSetting();
                                            } else {
                                                layer.close(delLoadIndex);
                                                layer.alert("删除失败,请重新删除")
                                            }
                                        },
                                        error: function (error) {
                                            layer.close(delLoadIndex);
                                            layer.alert("删除失败,请重新删除")

                                        }
                                    });
                                }, function () {
                                    layer.closeAll();
                                });


                            } else {
                                layer.open({
                                    title: '删除提示',
                                    skin: 'layui-layer-taskSkin',
                                    content: '请选择要删除的流程'
                                });
                            }

                        });
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
                    clickNum = 0;
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
        }
    }
    exports('systemProcessSetting', obj);
});