/**
 * Copyright ©2018 DATAOJO. All Rights Reserved. 北京相数科技有限公司 版权所有
 * Created Date: 2018.01.08
 * Author: 付国强
 * instructions:按钮组件
 */
layui.link('./script/button/button.css')
layui.define(['layer', 'element', 'form', 'qRouter', 'addinformation', 'upload', 'laydate', 'tableList', 'config_interactivity', 'table', 'config_constant'], function (exports) {
    var layer = layui.layer;
    var element = layui.element;
    var form = layui.form;
    var qRouter = layui.qRouter;
    var upload = layui.upload;
    var laydate = layui.laydate;
    var table = layui.table;
    var config_interactivity = layui.config_interactivity;
    var config_constant = layui.config_constant;
    var obj = {
        button: function (componentName) {
            var thisP = this;
            var missionBasicInformation = null;
            var getRoot = $("[id^='render-button']");
            getRoot.empty();
            $.each(getRoot, function (key, listId) {
                var nodeHtml = '';
                var getNodeHtml = $('#' + listId.id);
                var componentData = getNodeHtml.data('componentData');
                nodeHtml += '<div class="button-contain">'
                nodeHtml += '<div class="button-flow">'
                if (componentData.addButton != undefined && componentData.addButton != null && componentData.addButton.length > 0) {
                    $.each(componentData.addButton, function (buttonKey, buttonData) {
                        if (buttonData.type == 'PageJump') {
                            nodeHtml += '<a id="button-PageJump"  href="' + buttonData.href + '" class="layui-btn layui-btn-normal">' + buttonData.buttonName + '</a>';
                        }
                        if (buttonData.type == 'AdditionalTasks') {
                            nodeHtml += '<a id="button_AdditionalTasks" data_href="' + buttonData.href + '" class="layui-btn layui-btn-normal">' + buttonData.buttonName + '</a>';
                        }
                        if (buttonData.type == 'ViewTask') {
                            nodeHtml += '<a id="button_ViewTask" data_href="' + buttonData.href + '" class="layui-btn layui-btn-normal">' + buttonData.buttonName + '</a>';
                        }
                        if (buttonData.type == 'Resetting') {
                            nodeHtml += '<a id="button-Resetting" class="layui-btn layui-btn-normal">' + buttonData.buttonName + '</a>';
                        }
                        if (buttonData.type == 'Determine') {
                            nodeHtml += '<a id="button-Determine" class="layui-btn layui-btn-normal">' + buttonData.buttonName + '</a>';
                        }
                        if (buttonData.type == 'Delete') {
                            nodeHtml += '<a  id="button-Delete" class="layui-btn layui-btn-normal">' + buttonData.buttonName + '</a>';
                        }
                        if (buttonData.type == 'UploadFile') {
                            nodeHtml += '<a id="button-UploadFile" class="layui-btn layui-btn-normal">' + buttonData.buttonName + '</a>';
                        }
                        if (buttonData.type == 'AddData') {
                            nodeHtml += '<a id="button-AddData" class="layui-btn layui-btn-normal">' + buttonData.buttonName + '</a>';
                        }
                        if (buttonData.type == 'ModifyData') {
                            nodeHtml += '<a id="button-ModifyData" class="layui-btn layui-btn-normal">' + buttonData.buttonName + '</a>';
                        }
                        if (buttonData.type == 'FormSubmission') {
                            nodeHtml += '<a id="button-FormSubmission" class="layui-btn layui-btn-normal">' + buttonData.buttonName + '</a>';
                        }
                        if (buttonData.type == 'SearchData') {
                            nodeHtml += '<div class="layui-input-inline button-SearchData">';
                            nodeHtml += '<form class="layui-form">';
                            if (buttonData.listConfig != undefined && buttonData.listConfig != null) {
                                $.each(buttonData.listConfig, function (listConfigKey, listConfigValue) {
                                    if (listConfigValue.type == 'formSelect') {
                                        nodeHtml += '<div class="layui-input-inline">';
                                        nodeHtml += '<div class="layui-input-inline">请选择</div>';
                                        nodeHtml += '<div class="layui-input-inline button-SearchData" id="button-SearchSelect">';
                                        nodeHtml += '<div class="layui-input-inline">';
                                        nodeHtml += '<select>';
                                        nodeHtml += '<option value="">任务状态</option>';
                                        $.ajax({
                                            type: 'get',
                                            async: false,
                                            url: listConfigValue.url,
                                            success: function (res) {
                                                $.each(res.data, function (resKey, resValue) {
                                                    nodeHtml += '<option value="' + resValue.id + '">' + resValue.value + '</option>';
                                                })
                                            },
                                            error: function (e, m) {

                                            }
                                        });
                                        nodeHtml += '</select>';

                                        nodeHtml += '</div>';
                                        nodeHtml += '</div>';
                                        nodeHtml += '</div>';
                                    }
                                    if (listConfigValue.type == 'input') {
                                        nodeHtml += '<div class="layui-input-inline sss">';
                                        nodeHtml += '<div class="layui-input-inline button-SearchData">';
                                        nodeHtml += '<input id="button-SearchInput" placeholder="请输入搜索内容" onkeydown="if(event.keyCode==32) return false" type="text"  autocomplete="off" class="layui-input">';
                                        nodeHtml += '</div>';
                                        nodeHtml += '<div class="layui-input-inline button-SearchData">';
                                        nodeHtml += '<div class="layui-btn layui-btn-normal" id="button-SearchData">搜索</div>';
                                        nodeHtml += '</div>';
                                        nodeHtml += '</div>';
                                    }
                                })
                            }
                            nodeHtml += '</form>';
                            nodeHtml += '</div>';
                        }
                    })

                }
                nodeHtml += '</div>'
                nodeHtml += '</div>'
                getNodeHtml.append(nodeHtml);
                element.init();
            })
            //初始化组件
            $.each(getRoot, function (key, listId) {
                var nodeHtml = '';
                var getNodeHtml = $('#' + listId.id);
                var componentData = getNodeHtml.data('componentData');
                if (componentData.addButton != undefined && componentData.addButton != null && componentData.addButton.length > 0) {
                    $.each(componentData.addButton, function (buttonKey, buttonData) {
                        if (buttonData.type == 'PageJump') {
                            $.localStorage.setItem('newTaskLinkTable', null)
                            $.localStorage.setItem('newTask_basicInformation_pageState', null)
                        }
                        if (buttonData.type == 'AdditionalTasks') {
                            $('#button_AdditionalTasks').data('href', buttonData.href)
                        }
                        if (buttonData.type == 'ViewTask') {
                            $('#button_ViewTask').data('href', buttonData.href)
                        }
                        if (buttonData.type == 'Resetting') {

                        }
                        if (buttonData.type == 'Determine') {

                        }
                        if (buttonData.type == 'Delete') {
                            $('#button-Delete').data('buttonDelete', buttonData.url)
                        }
                        if (buttonData.type == 'UploadFile') {
                            $('#button-UploadFile').data('buttonUploadFile', buttonData.url)
                        }
                        if (buttonData.type == 'AddData') {
                            $('#button-AddData').data('buttonAddData', buttonData)
                        }
                        if (buttonData.type == 'ModifyData') {
                            $('#button-ModifyData').data('buttonModifyData', buttonData)
                        }
                        if (buttonData.type == 'FormSubmission') {
                            console.log(buttonData, "配置文件")
                            $('#button-FormSubmission').data('buttonFormSubmissionData', buttonData)
                        }
                        if (buttonData.type == 'SearchData') {
                            if (buttonData.listConfig != undefined && buttonData.listConfig != null) {
                                $.each(buttonData.listConfig, function (listConfigKey, listConfigValue) {
                                    if (listConfigValue.type == 'formSelect') {
                                        $('#button-SearchSelect').data('buttonSearchSelectKey', listConfigValue.submitkey)
                                    }
                                    if (listConfigValue.type == 'input') {
                                        $('#button-SearchInput').data('buttonSearchInputKey', listConfigValue.submitkey)
                                    }
                                })
                            }
                        }
                    })

                }
            })
            //给按钮绑定事件
            // 带有编辑功能的表格
            var getFormSubmission = $('#button-FormSubmission');
            var FormSubmissionTableDataAll = null;
            var FormSubmissionUpdateData = null;
            getFormSubmission.on('click', function () {
                var buttonFormSubmissionData = getFormSubmission.data('buttonFormSubmissionData');
                var FormSubmissionDataContent = '';
                FormSubmissionDataContent += '<div class="button-PopupContain">';
                FormSubmissionDataContent += '<form class="layui-form" action="">';
                FormSubmissionDataContent += '<div class="button-buttonFormSubmissionData">';
                FormSubmissionDataContent += '<div class="button-buttonFormSubmissionDataContain">';
                FormSubmissionDataContent += '<table id="button-FormSubmission-Table" lay-filter="filter-button-FormSubmission-Table"></table>';
                FormSubmissionDataContent += '</div>';
                FormSubmissionDataContent += '</div>';
                FormSubmissionDataContent += '<div class="button-PopupButtonGroup">';
                FormSubmissionDataContent += '<div class="button-buttonSubmit">'
                FormSubmissionDataContent += '<div class="layui-btn layui-btn-normal" id="buttonSubmit-cancel">取消</div>';
                FormSubmissionDataContent += '<div class="layui-btn lay-submit layui-btn-normal" id="buttonSubmit-submit">提交</div>';
                FormSubmissionDataContent += '</div>'
                FormSubmissionDataContent += '</div>';
                FormSubmissionDataContent += '</form>';
                layer.open({
                    title: '新增信息',
                    type: 1,
                    //加上边框
                    skin: 'layui-layer-taskSkin',
                    //宽高
                    area: buttonFormSubmissionData.area,
                    content: FormSubmissionDataContent,
                    //不显示关闭按钮,
                    closeBtn: 0,
                    //开启遮罩关闭
                    shadeClose: true,
                    success: function (layero, index) {
                        var tableConfig = buttonFormSubmissionData.tableConfig;
                        element.render();
                        table.render({
                            elem: "#button-FormSubmission-Table",
                            method: tableConfig.method,
                            //数据接口
                            url: tableConfig.url,
                            //开启分页
                            page: tableConfig.page,
                            limits: tableConfig.limits,
                            cols: tableConfig.cols,
                            done: function (res, curr, count) {
                                console.log(res);
                                if (res.code == "0" || res.code == 0) {
                                    FormSubmissionTableDataAll = res.data;
                                }
                            }
                        });
                        //监听单元格编辑
                        table.on('edit(filter-button-FormSubmission-Table)', function (obj) {
                            console.log(obj)
                            var value = obj.value; //得到修改后的值
                            var data = obj.data; //得到所在行所有键值
                            var field = obj.field; //得到字段
                            layer.msg('将ID为' + data.id + '的效率值更改为：' + value);
                            FormSubmissionUpdateData = data;
                        });
                    }
                });
                $("#buttonSubmit-cancel").on('click', function () {
                    layer.closeAll();
                })
                $("#buttonSubmit-submit").on('click', function () {
                    if (FormSubmissionTableDataAll != null) {
                        if (FormSubmissionUpdateData == null) {
                            layer.closeAll();
                        } else {
                            var endData = [];
                            $.each(FormSubmissionTableDataAll, function (FormSubmissionTableDataAllKey, FormSubmissionTableDataAllValue) {
                                console.log(FormSubmissionTableDataAllValue)
                                if (FormSubmissionTableDataAllValue.id != FormSubmissionUpdateData.id) {
                                    endData.push(FormSubmissionTableDataAllValue)
                                }
                            })
                            endData.push(FormSubmissionUpdateData);
                            console.log(endData)
                            var newLoadIndex = layer.load(2, {
                                shade: [0.1, '#fff']
                            });
                            $.ajax({
                                type: "post",
                                url: buttonFormSubmissionData.url,
                                data: JSON.stringify(endData),
                                contentType: "application/json",
                                dataType: 'json',
                                success: function (data) {
                                    if (data.code == 0) {
                                        layer.closeAll();
                                        layer.msg('修改成功', {
                                            time: 1000, //20s后自动关闭
                                        });
                                    } else {
                                        layer.close(newLoadIndex);
                                        layer.alert(data.message);
                                    }
                                },
                                error: function (error) {
                                    layer.close(newLoadIndex);
                                    layer.alert("修改失败")
                                }
                            })
                        }
                    }




                })

            })
            // 追加任务
            var getAdditionalTasks = $('#button_AdditionalTasks');
            getAdditionalTasks.on('click', function () {
                var tableSelectSatte = $("table tr").hasClass("layui-table-click");
                if (tableSelectSatte == false) {
                    layer.alert("请选择一行,然后进行操作")
                } else {
                    var href = getAdditionalTasks.data("href")
                    qRouter.go(href);
                }
            })
            // 查看任务
            var getViewTask = $('#button_ViewTask');
            getViewTask.on('click', function () {
                var tableSelectSatte = $("table tr").hasClass("layui-table-click");
                if (tableSelectSatte == false) {
                    layer.alert("请选择一行,然后进行操作")
                } else {
                    var href = getViewTask.data("href")
                    qRouter.go(href);
                }
            })
            //搜索
            var getSearchData = $('#button-SearchData');
            getSearchData.on('click', function (even) {
                var buttonSearchSelectNode = $('#button-SearchSelect');
                var buttonSearchInputNode = $('#button-SearchInput');
                var SearchObj = {};
                if (buttonSearchSelectNode.length != 0) {
                    SearchObj[buttonSearchSelectNode.data('buttonSearchSelectKey')] = $('#button-SearchSelect input').val();
                }
                if (buttonSearchInputNode.length != 0) {
                    SearchObj[buttonSearchInputNode.data('buttonSearchInputKey')] = buttonSearchInputNode.val();
                }
                var parameterObj = SearchObj;
                var ChangeObj = null;
                if (config_interactivity != undefined && config_interactivity != null && config_interactivity.length > 0) {
                    $.each(config_interactivity, function (interactivityConfigKey, interactivityConfigValue) {
                        if (interactivityConfigValue.routesName == componentName) {
                            var interactivity = interactivityConfigValue.interactivity;
                            $.each(interactivity, function (interactivityKey, interactivityValue) {
                                if (interactivityValue.controller == 'button') {
                                    $.each(interactivityValue.controlled, function (controlledKey, controlledValue) {
                                        // 加载需要交互的组件

                                        if (controlledValue.name == 'tableList') {
                                            layui.tableList.changeData(controlledValue.index, parameterObj, ChangeObj);
                                        }


                                    })
                                }
                            })
                        }
                    })
                }
            })
            // 页面跳转
            //重置按钮
            var getresetting = $('#button-Resetting');
            getresetting.on('click', function (even) {
                layui.addinformation.addinformation(componentName);
            })
            //确定按钮
            var getdetermine = $('#button-Determine');
            getdetermine.on('click', function (even) {
                var inputValueGroupArr = [];
                //取input的值
                var getInput = $("[id^='addinformation-input']");
                $.each(getInput, function (getInputKey, getInputValue) {
                    var inputObj = {};
                    var inputId = "#" + getInputValue.id;
                    var inputValue = $(inputId).val();
                    var inputKey = $(inputId).data('submitkey');
                    var inputTitle = $(inputId).data('inputvalue');
                    inputObj[inputKey] = inputValue;
                    inputObj["title"] = inputTitle;
                    inputValueGroupArr.push(inputObj);

                })
                //取realTimeInput的值
                var getRealTimeInput = $("[id^='addinformation-realTimeInput']");
                $.each(getRealTimeInput, function (getRealTimeInputKey, getRealTimeInputValue) {
                    var inputObj = {};
                    var inputId = "#" + getRealTimeInputValue.id;
                    var inputValue = $(inputId).val();
                    var inputKey = $(inputId).data('submitkey');
                    var inputTitle = $(inputId).data('inputvalue');
                    inputObj[inputKey] = inputValue;
                    inputObj["title"] = inputTitle;
                    inputValueGroupArr.push(inputObj);

                })
                //取timeSelect的值
                var getTimeSelect = $("[id^='addinformation-timeSelect']");
                $.each(getTimeSelect, function (getTimeSelectKey, getTimeSelectValue) {
                    var inputObj = {};
                    var timeSelectId = "#" + getTimeSelectValue.id;
                    var timeSelectValue = $(timeSelectId).data('addinformationelEmTime');
                    var timeSelectKey = $(timeSelectId).data('submitkey');
                    var inputTitle = $(timeSelectId).data('inputvalue');
                    inputObj[timeSelectKey] = timeSelectValue;
                    inputObj["title"] = inputTitle;
                    inputValueGroupArr.push(inputObj);

                })
                //取formSelect的值
                var getFormSelect = $("[id^='addinformation-formSelect']");
                $.each(getFormSelect, function (getFormSelectKey, getFormSelectValue) {
                    var inputObj = {};
                    var formSelectId = "#" + getFormSelectValue.id;
                    var formSelectValue = $(formSelectId + ' ' + 'input').val();
                    var formSelectKey = $(formSelectId).data('submitkey');
                    var inputTitle = $(formSelectId).data('inputvalue');
                    inputObj[formSelectKey] = formSelectValue;
                    inputObj["title"] = inputTitle;
                    inputValueGroupArr.push(inputObj);

                })
                //取citySelect的值
                var getCitySelect = $("[id^='addinformation-citySelect']");
                $.each(getCitySelect, function (getCitySelectKey, getCitySelectValue) {
                    var inputObj = {};
                    var citySelectId = "#" + getCitySelectValue.id;
                    var citySelectValue = $(citySelectId).data('citypicker').getCode();
                    var citySelectKey = $(citySelectId).data('submitkey');
                    var inputTitle = $(citySelectId).data('inputvalue');
                    var cityCode = citySelectValue.split('/');
                    inputObj[citySelectKey] = cityCode[cityCode.length - 1];
                    inputObj["title"] = inputTitle;
                    inputValueGroupArr.push(inputObj);

                })
                //取imgUpload的值
                var getimgUpload = $("[id^='addinformation-imgUpload']");
                $.each(getimgUpload, function (getimgUploadKey, getimgUploadValue) {
                    var inputObj = {};
                    var imgUploadId = "#" + getimgUploadValue.id;
                    var imgUploadValue = $(imgUploadId).data('addinformationFile');
                    var imgUploadKey = $(imgUploadId).data('submitkey');
                    var inputTitle = $(imgUploadId).data('inputvalue');
                    inputObj[imgUploadKey] = imgUploadValue;
                    inputObj["title"] = inputTitle;
                    inputValueGroupArr.push(inputObj);

                })
                //取textArea的值
                var getTextArea = $("[id^='addinformation-textArea']");
                $.each(getTextArea, function (getTextAreaKey, getTextAreaValue) {
                    var inputObj = {};
                    var textAreaId = "#" + getTextAreaValue.id;
                    var textAreaValue = $(textAreaId).val();
                    var textAreaKey = $(textAreaId).data('submitkey');
                    var inputTitle = $(textAreaId).data('inputvalue');
                    inputObj[textAreaKey] = textAreaValue;
                    inputObj["title"] = inputTitle;
                    inputValueGroupArr.push(inputObj);

                })
                // 数据处理和弹窗提醒
                var inputValueGroupArrNum = 0;
                var textInfo = ''
                $.each(inputValueGroupArr, function (inputValueGroupArrKey, inputValueGroupArrValue) {
                    $.each(inputValueGroupArrValue, function (inputValueGroupArrValueKey, inputValueGroupArrValueValue) {
                        if (inputValueGroupArrValueValue == "") {
                            textInfo += "请输入" + inputValueGroupArrValue.title + "<br>"

                        } else {
                            inputValueGroupArrNum++;
                        }
                    })
                })
                if (inputValueGroupArrNum == inputValueGroupArr.length * 2) {
                    var ajaxObjData = {};
                    for (i in inputValueGroupArr) {
                        for (j in inputValueGroupArr[i]) {
                            if (j != "title") {
                                ajaxObjData[j] = inputValueGroupArr[i][j];
                            }
                        }
                    }
                    //获取userId,并传值
                    ajaxObjData["userId"] = $.localStorage.getItem('id')
                    return ajaxObjData
                } else {
                    layer.alert(textInfo)
                    return null
                }
                $.ajax({
                    type: "post",
                    contentType: "application/json",
                    url: config_constant.URL_HEADER + "/task/save",
                    data: JSON.stringify(getAddinformation),
                    success: function (data) {
                        missionBasicInformation = data.data.id;
                    },
                    error: function (error) {}
                });
            })
            //删除按钮
            var getDelete = $('#button-Delete');
            getDelete.on('click', function (even) {
                var tableSelectSatte = $("table tr").hasClass("layui-table-click");
                var tabList_data = JSON.parse($.sessionStorage.getItem('tabList_data'));
                if (tableSelectSatte == false) {
                    layer.alert("请选择列表进行删除")
                } else {
                    var tablistId = tabList_data.id;
                    //询问框
                    layer.confirm('确定要删除这条数据吗?', {
                        btn: ['删除', '取消'] //按钮
                    }, function () {
                        var url = getDelete.data('buttonDelete');
                        var delLoadIndex = layer.load(2, {
                            shade: [0.1, '#fff']
                        });
                        $.ajax({
                            type: "post",
                            url: url + "/" + tablistId,
                            data: {},
                            success: function (data) {
                                if (data.code == 0) {
                                    $.sessionStorage.setItem('tabList_data', null)
                                    layer.closeAll();
                                    layer.msg('删除成功', {
                                        //20s后自动关闭
                                        time: 1000,
                                    });
                                    layui.tableList.tableList();
                                } else {
                                    layer.close(delLoadIndex);
                                    layer.alert(data.message);
                                }
                            },
                            error: function (error) {
                                layer.close(delLoadIndex);
                                layer.alert("删除失败,请重新删除")

                            }
                        })
                    }, function () {
                        layer.closeAll();
                    });

                }

            })
            //上传文件按钮
            //    初始化上传文件按钮
            var getUploadFile = $('#button-UploadFile');
            getUploadFile.on('click', function (even) {
                var url = getUploadFile.data('buttonUploadFile');
                var UploadFileContent = '';
                UploadFileContent += '<div class="button-PopupContain">';
                UploadFileContent += '<div class="layui-upload">';
                UploadFileContent += '<button type="button" class="layui-btn layui-btn-normal" id="testList">选择多文件</button>';
                UploadFileContent += '<div class="layui-upload-list">';
                UploadFileContent += '<table class="layui-table">';
                UploadFileContent += '<thead>';
                UploadFileContent += '<tr><th>文件名</th>';
                UploadFileContent += '<th>大小</th>';
                UploadFileContent += '<th>状态</th>';
                UploadFileContent += '<th>操作</th>';
                UploadFileContent += '</tr></thead>';
                UploadFileContent += '<tbody id="demoList"></tbody>';
                UploadFileContent += '</table>';
                UploadFileContent += '</div>';
                UploadFileContent += '<button type="button" class="layui-btn" id="testListAction">开始上传</button>';
                UploadFileContent += '</div> ';
                UploadFileContent += '</div>';




                layer.open({
                    title: '上传文件',
                    type: 1,
                    //加上边框
                    skin: 'layui-layer-taskSkin',
                    //宽高
                    area: ['900px', '300px'],
                    content: UploadFileContent,
                    //不显示关闭按钮,
                    closeBtn: 0,
                    //开启遮罩关闭
                    shadeClose: true,
                    success: function (layero, index) {
                        //多文件列表示例
                        var demoListView = $('#demoList')
                        var uploadListIns = upload.render({
                            elem: '#testList',
                            url: url,
                            accept: 'file',
                            multiple: true,
                            auto: false,
                            bindAction: '#testListAction',
                            choose: function (obj) {
                                //将每次选择的文件追加到文件队列
                                var files = this.files = obj.pushFile();
                                //读取本地文件
                                obj.preview(function (index, file, result) {
                                    var tr = $(['<tr id="upload-' + index + '">', '<td>' + file.name + '</td>', '<td>' + (file.size / 1014).toFixed(1) + 'kb</td>', '<td>等待上传</td>', '<td>', '<button class="layui-btn layui-btn-mini demo-reload layui-hide">重传</button>', '<button class="layui-btn layui-btn-mini layui-btn-danger demo-delete">删除</button>', '</td>', '</tr>'].join(''));

                                    //单个重传
                                    tr.find('.demo-reload').on('click', function () {
                                        obj.upload(index, file);
                                    });

                                    //删除
                                    tr.find('.demo-delete').on('click', function () {
                                        delete files[index]; //删除对应的文件
                                        tr.remove();
                                        uploadListIns.config.elem.next()[0].value = ''; //清空 input file 值，以免删除后出现同名文件不可选
                                    });

                                    demoListView.append(tr);
                                });
                            },
                            done: function (res, index, upload) {
                                //上传成功
                                if (res.code == 0) {
                                    var tr = demoListView.find('tr#upload-' + index),
                                        tds = tr.children();
                                    tds.eq(2).html('<span style="color: #5FB878;">上传成功</span>');
                                    //清空操作
                                    tds.eq(3).html('');
                                    //删除文件队列已经上传成功的文件
                                    return delete this.files[index];
                                } else {
                                    var tr = demoListView.find('tr#upload-' + index),
                                        tds = tr.children();
                                    tds.eq(2).html("<span style='color: #FF5722;'>" + res.message + "</span>");
                                    //显示重传
                                    tds.eq(3).find('.demo-reload').removeClass('layui-hide');
                                }
                                this.error(index, upload);
                            },
                            error: function (index, upload) {
                                // var tr = demoListView.find('tr#upload-' + index),
                                //     tds = tr.children();
                                // tds.eq(2).html('<span style="color: #FF5722;">上传失败</span>');
                                // //显示重传
                                // tds.eq(3).find('.demo-reload').removeClass('layui-hide');
                            }
                        });
                    }
                });
                $("#buttonSubmit-cancel").on('click', function () {
                    layer.closeAll();
                })
            })

            //修改文件
            var getModifyData = $('#button-ModifyData');
            getModifyData.on('click', function (even) {
                var tabList_data = JSON.parse($.sessionStorage.getItem('tabList_data'));
                var tableSelectSatte = $("table tr").hasClass("layui-table-click");
                if (tableSelectSatte == true) {
                    var buttonAddData = getModifyData.data('buttonModifyData');
                    var url = buttonAddData.url;
                    var DataContent = '';
                    DataContent += '<div class="button-PopupContain">';
                    DataContent += '<form class="layui-form" action="">';
                    $.each(buttonAddData.listConfig, function (listConfigKey, listConfigValue) {
                        if (listConfigValue.type == "input") {
                            DataContent += '<div class="button-PopupGroup" data-valuetype="' + listConfigValue.valueType + '" data-inputtype="input" data-buttonsubmitkey="' + listConfigValue.submitkey + '" data-inputtype="input" data-readdatakey="' + listConfigValue.readDataKey + '">';
                            DataContent += '<label class="button-PopupTitle">' + listConfigValue.title + '</label>';
                            DataContent += '<div class="button-PopupInput">';
                            if (listConfigValue.inputDisable == "true") {
                                DataContent += '<input  disabled="disabled" onkeydown="if(event.keyCode==32) return false" autocomplete="off"  class="layui-input" placeholder="' + listConfigValue.placeholder + '">';
                            } else {
                                DataContent += '<input  onkeydown="if(event.keyCode==32) return false" autocomplete="off"  class="layui-input" placeholder="' + listConfigValue.placeholder + '">';
                            }
                            DataContent += '</div>';
                            DataContent += '</div>';
                        }
                        if (listConfigValue.type == "timeSelect") {
                            DataContent += '<div class="button-PopupGroup" data-inputtype="timeSelect" data-buttonsubmitkey="' + listConfigValue.submitkey + '" data-inputtype="input" data-readdatakey="' + listConfigValue.readDataKey + '">';
                            DataContent += '<label class="button-PopupTitle">' + listConfigValue.title + '</label>';
                            DataContent += '<div class="button-PopupInput">';
                            DataContent += '<input  onkeydown="if(event.keyCode==32) return false" type="text"  placeholder="' + listConfigValue.placeholder + '" autocomplete="off" class="layui-input" id="button-PopupTimeSelect' + listConfigKey + '">';
                            DataContent += '</div>';
                            DataContent += '</div>';

                        }
                        if (listConfigValue.type == "formSelect") {
                            DataContent += '<div class="button-PopupGroup" data-inputtype="formSelect" data-buttonsubmitkey="' + listConfigValue.submitkey + '" data-inputtype="input" data-readdatakey="' + listConfigValue.readDataKey + '">';
                            DataContent += '<label class="button-PopupTitle">' + listConfigValue.title + '</label>';
                            DataContent += '<div class="button-PopupInput">';
                            DataContent += '<select>'
                            DataContent += '<option value="">' + listConfigValue.placeholder + '</option>'
                            $.ajax({
                                type: 'get',
                                async: false,
                                url: listConfigValue.url,
                                success: function (res) {
                                    $.each(res.data, function (resKey, resValue) {
                                        DataContent += '<option value="' + resValue.id + '">' + resValue.value + '</option>';
                                    })
                                },
                                error: function (e, m) {

                                }
                            });
                            DataContent += '</select>'
                            DataContent += '</div>';
                            DataContent += '</div>';
                        }

                    })
                    DataContent += '<div class="button-PopupButtonGroup">';
                    DataContent += '<div class="button-buttonSubmit">'
                    DataContent += '<div class="layui-btn layui-btn-normal" id="buttonSubmit-cancel">取消</div>';
                    DataContent += '<div class="layui-btn lay-submit layui-btn-normal" id="buttonSubmit-submit">提交</div>';
                    DataContent += '</div>'
                    DataContent += '</div>';
                    DataContent += '</form>';
                    layer.open({
                        title: '修改信息',
                        type: 1,
                        //加上边框
                        skin: 'layui-layer-taskSkin',
                        //宽高
                        area: buttonAddData.area,
                        content: DataContent,
                        //不显示关闭按钮,
                        closeBtn: 0,
                        //开启遮罩关闭
                        shadeClose: true,
                        success: function (layero, index) {
                            element.render();
                            form.render();
                            //初始化时间组件
                            var getTimeSelect = $("[id^='button-PopupTimeSelect']");
                            $.each(getTimeSelect, function (getTimeSelectKey, getTimeSelectValue) {
                                var getTimeSelectNode = '#' + getTimeSelectValue.id;
                                laydate.render({
                                    elem: getTimeSelectNode,
                                    type: 'date',
                                });
                            })
                            //给select赋值
                            var inputValueGroup = $(".button-PopupGroup");
                            $.each(inputValueGroup, function (inputValueGroupKey, inputValueGroupValue) {
                                var readdatakey = $(inputValueGroupValue)[0].dataset.readdatakey;
                                var readdatakey = tabList_data[readdatakey];
                                if (readdatakey == null || readdatakey == "null") {
                                    $(inputValueGroupValue).find("input").val("")
                                } else {
                                    $(inputValueGroupValue).find("input").val(readdatakey)
                                }
                            })
                        }
                    });
                    $("#buttonSubmit-cancel").on('click', function () {
                        layer.closeAll();
                    })
                    $("#buttonSubmit-submit").on('click', function () {
                        var inputValueGroup = $(".button-PopupGroup");
                        var inputValueGroupArr = {};
                        var inputNum = 0;
                        $.each(inputValueGroup, function (inputValueGroupKey, inputValueGroupValue) {
                            var buttonsubmitkey = inputValueGroupValue.dataset.buttonsubmitkey;
                            if (inputValueGroupValue.dataset.inputtype == "input" && inputValueGroupValue.dataset.valuetype == "string") {
                                if (inputValueGroupKey == inputNum) {
                                    if ($(inputValueGroupValue).find("input").val() == "") {
                                        layer.alert($(inputValueGroupValue).find("input")[0].placeholder)
                                    } else {
                                        inputNum++;
                                        inputValueGroupArr[buttonsubmitkey] = $(inputValueGroupValue).find("input").val();
                                    }
                                }
                            } else if (inputValueGroupValue.dataset.inputtype == "input" && inputValueGroupValue.dataset.valuetype == "chinese") {
                                if (inputValueGroupKey == inputNum) {
                                    var reg = /^[^\u4e00-\u9fa5]{0,}$/;
                                    if ($(inputValueGroupValue).find("input").val() == "") {
                                        layer.alert($(inputValueGroupValue).find("label")[0].innerText + "不能为空")
                                    } else if (!reg.test($(inputValueGroupValue).find("input").val())) {
                                        layer.alert($(inputValueGroupValue).find("input")[0].placeholder)
                                    } else {
                                        inputNum++;
                                        inputValueGroupArr[buttonsubmitkey] = $(inputValueGroupValue).find("input").val();
                                    }
                                }
                            } else if (inputValueGroupValue.dataset.inputtype == "input" && inputValueGroupValue.dataset.valuetype == "number") {
                                if (inputValueGroupKey == inputNum) {
                                    if ($(inputValueGroupValue).find("input").val() == "") {
                                        layer.alert($(inputValueGroupValue).find("label")[0].innerText + "不能为空")
                                    } else if (isNaN(Number($(inputValueGroupValue).find("input").val()))) {
                                        layer.alert($(inputValueGroupValue).find("label")[0].innerText + "只能为数字")
                                    } else {
                                        inputNum++;
                                        inputValueGroupArr[buttonsubmitkey] = $(inputValueGroupValue).find("input").val();
                                    }
                                }
                            } else if (inputValueGroupValue.dataset.inputtype == "timeSelect") {
                                if (inputValueGroupKey == inputNum) {
                                    if ($(inputValueGroupValue).find("input").val() == "") {
                                        layer.alert($(inputValueGroupValue).find("input")[0].placeholder)
                                    } else {
                                        inputNum++;
                                        inputValueGroupArr[buttonsubmitkey] = $(inputValueGroupValue).find("input").val();
                                    }
                                }
                            } else if (inputValueGroupValue.dataset.inputtype == "formSelect") {
                                if (inputValueGroupKey == inputNum) {
                                    if ($(inputValueGroupValue).find("input").val() == "") {
                                        layer.alert($(inputValueGroupValue).find("input")[0].placeholder)
                                    } else {
                                        inputNum++;
                                        inputValueGroupArr[buttonsubmitkey] = $(inputValueGroupValue).find("input").val();
                                    }
                                }
                            } else {


                            }
                            if (inputValueGroup.length == inputNum) {
                                //添加id给请求
                                if (buttonAddData.userIdParameter != undefined) {
                                    var userIdParameter = buttonAddData.userIdParameter;
                                    $.each(userIdParameter, function (userIdParameterKey, userIdParameterValue) {
                                        if (userIdParameterValue.keyType == "string") {
                                            inputValueGroupArr[userIdParameterValue.submitKey] = tabList_data[userIdParameterValue.sessionStorageParameter];
                                        }
                                        if (userIdParameterValue.keyType == "number") {
                                            inputValueGroupArr[userIdParameterValue.submitKey] = Number(tabList_data[userIdParameterValue.sessionStorageParameter])
                                        }


                                    })
                                }
                                //如果值为null或underfind则不传
                                var endInputValueGroupArr = {};
                                $.each(inputValueGroupArr, function (inputValueGroupArrKey, inputValueGroupArrValue) {
                                    if (inputValueGroupArrKey != null && inputValueGroupArrKey != "null") {
                                        console.log(inputValueGroupArrKey)
                                        endInputValueGroupArr[inputValueGroupArrKey] = inputValueGroupArrValue;
                                    }
                                })
                                var updateLoadIndex = layer.load(2, {
                                    shade: [0.1, '#fff']
                                });
                                $.ajax({
                                    type: "post",
                                    url: url,
                                    data: JSON.stringify(endInputValueGroupArr),
                                    contentType: "application/json",
                                    dataType: 'json',
                                    success: function (data) {
                                        if (data.code == 0) {
                                            layer.closeAll();
                                            layer.msg('修改成功', {
                                                time: 1000, //20s后自动关闭
                                            });
                                            layui.tableList.tableList();
                                        } else {
                                            layer.close(updateLoadIndex);
                                            layer.alert(data.message);
                                        }
                                    },
                                    error: function (error) {
                                        layer.close(updateLoadIndex);
                                        layer.alert("修改失败")
                                    }
                                })
                            }


                        })


                    })
                } else {
                    layer.alert("请选择一行进行修改")
                }


            })
            //新建
            var getAddData = $('#button-AddData');
            getAddData.on('click', function (even) {
                var buttonAddData = getAddData.data('buttonAddData');
                var url = buttonAddData.url;
                var DataContent = '';
                DataContent += '<div class="button-PopupContain">';
                DataContent += '<form class="layui-form" action="">';
                $.each(buttonAddData.listConfig, function (listConfigKey, listConfigValue) {
                    if (listConfigValue.type == "input") {
                        DataContent += '<div class="button-PopupGroup" data-valuetype="' + listConfigValue.valueType + '" data-inputtype="input" data-buttonsubmitkey="' + listConfigValue.submitkey + '">';
                        DataContent += '<label class="button-PopupTitle">' + listConfigValue.title + '</label>';
                        DataContent += '<div class="button-PopupInput">';
                        if (listConfigValue.inputDisable == "true") {
                            DataContent += '<input  disabled="disabled" onkeydown="if(event.keyCode==32) return false" autocomplete="off"   class="layui-input" placeholder="' + listConfigValue.placeholder + '">';
                        } else {
                            DataContent += '<input  onkeydown="if(event.keyCode==32) return false" autocomplete="off"   class="layui-input" placeholder="' + listConfigValue.placeholder + '">';
                        }

                        DataContent += '</div>';
                        DataContent += '</div>';
                    }
                    if (listConfigValue.type == "timeSelect") {
                        DataContent += '<div class="button-PopupGroup" data-inputtype="timeSelect" data-buttonsubmitkey="' + listConfigValue.submitkey + '">';
                        DataContent += '<label class="button-PopupTitle">' + listConfigValue.title + '</label>';
                        DataContent += '<div class="button-PopupInput">';
                        DataContent += '<input  onkeydown="if(event.keyCode==32) return false" type="text"   placeholder="' + listConfigValue.placeholder + '" autocomplete="off" class="layui-input" id="button-PopupTimeSelect' + listConfigKey + '">';
                        DataContent += '</div>';
                        DataContent += '</div>';

                    }
                    if (listConfigValue.type == "formSelect") {
                        DataContent += '<div class="button-PopupGroup" id="formSelect_select_' + listConfigKey + '" data-selectkeytype="' + listConfigValue.selectKeyType + '" data-inputtype="formSelect" data-buttonsubmitkey="' + listConfigValue.submitkey + '">';
                        DataContent += '<label class="button-PopupTitle">' + listConfigValue.title + '</label>';
                        DataContent += '<div class="button-PopupInput">';
                        DataContent += '<select lay-filter="formSelect_select_' + listConfigKey + '">'
                        DataContent += '<option value="">' + listConfigValue.placeholder + '</option>'
                        $.ajax({
                            type: 'get',
                            async: false,
                            url: listConfigValue.url,
                            success: function (res) {
                                $.each(res.data, function (resKey, resValue) {
                                    DataContent += '<option value="' + resValue.id + '">' + resValue.value + '</option>';
                                })
                            },
                            error: function (e, m) {

                            }
                        });
                        DataContent += '</select>'
                        DataContent += '</div>';
                        DataContent += '</div>';
                    }

                })
                DataContent += '<div class="button-PopupButtonGroup">';
                DataContent += '<div class="button-buttonSubmit">'
                DataContent += '<div class="layui-btn layui-btn-normal" id="buttonSubmit-cancel">取消</div>';
                DataContent += '<div class="layui-btn lay-submit layui-btn-normal" id="buttonSubmit-submit">提交</div>';
                DataContent += '</div>'
                DataContent += '</div>';
                DataContent += '</form>';
                layer.open({
                    title: '新增信息',
                    type: 1,
                    //加上边框
                    skin: 'layui-layer-taskSkin',
                    //宽高
                    area: buttonAddData.area,
                    content: DataContent,
                    //不显示关闭按钮,
                    closeBtn: 0,
                    //开启遮罩关闭
                    shadeClose: true,
                    success: function (layero, index) {
                        element.render();
                        form.render();
                        // select取值
                        var inputValueGroup = $(".button-PopupGroup");
                        $.each(inputValueGroup, function (inputValueGroupKey, inputValueGroupValue) {
                            var id = inputValueGroupValue.id;
                            form.on('select(' + id + ')', function (data) {
                                console.log(data.elem); //得到select原始DOM对象
                                console.log(data.value); //得到被选中的值
                                console.log(data.othis); //得到美化后的DOM对象
                                $(inputValueGroup).data("selectkey", data.value)
                            });
                        })

                        //初始化时间组件
                        var getTimeSelect = $("[id^='button-PopupTimeSelect']");
                        $.each(getTimeSelect, function (getTimeSelectKey, getTimeSelectValue) {
                            var getTimeSelectNode = '#' + getTimeSelectValue.id;
                            laydate.render({
                                elem: getTimeSelectNode,
                                type: 'date',
                            });
                        })
                    }
                });
                $("#buttonSubmit-cancel").on('click', function () {
                    layer.closeAll();
                })
                $("#buttonSubmit-submit").on('click', function () {
                    var inputValueGroup = $(".button-PopupGroup");
                    var inputValueGroupArr = {};
                    var inputNum = 0;
                    $.each(inputValueGroup, function (inputValueGroupKey, inputValueGroupValue) {
                        var buttonsubmitkey = inputValueGroupValue.dataset.buttonsubmitkey;
                        if (inputValueGroupValue.dataset.inputtype == "input" && inputValueGroupValue.dataset.valuetype == "string") {
                            if (inputValueGroupKey == inputNum) {
                                if ($(inputValueGroupValue).find("input").val() == "") {
                                    layer.alert($(inputValueGroupValue).find("input")[0].placeholder)
                                } else {
                                    inputNum++;
                                    inputValueGroupArr[buttonsubmitkey] = $(inputValueGroupValue).find("input").val();
                                }
                            }
                        } else if (inputValueGroupValue.dataset.inputtype == "input" && inputValueGroupValue.dataset.valuetype == "number") {
                            if (inputValueGroupKey == inputNum) {
                                if ($(inputValueGroupValue).find("input").val() == "") {
                                    layer.alert($(inputValueGroupValue).find("label")[0].innerText + "不能为空")
                                } else if (isNaN(Number($(inputValueGroupValue).find("input").val()))) {
                                    layer.alert($(inputValueGroupValue).find("label")[0].innerText + "只能为数字")
                                } else {
                                    inputNum++;
                                    inputValueGroupArr[buttonsubmitkey] = $(inputValueGroupValue).find("input").val();
                                }
                            }
                        } else if (inputValueGroupValue.dataset.inputtype == "timeSelect") {
                            if (inputValueGroupKey == inputNum) {
                                if ($(inputValueGroupValue).find("input").val() == "") {
                                    layer.alert($(inputValueGroupValue).find("input")[0].placeholder)
                                } else {
                                    inputNum++;
                                    inputValueGroupArr[buttonsubmitkey] = $(inputValueGroupValue).find("input").val();
                                }
                            }
                        } else if (inputValueGroupValue.dataset.inputtype == "formSelect") {
                            if (inputValueGroupKey == inputNum) {
                                if ($(inputValueGroupValue).find("input").val() == "") {
                                    layer.alert($(inputValueGroupValue).find("input")[0].placeholder)
                                } else {
                                    inputNum++;
                                    var selectKeyType = $(inputValueGroupValue).data("selectkeytype")
                                    if (selectKeyType == "true"||selectKeyType == true) {
                                        inputValueGroupArr[buttonsubmitkey] = $(inputValueGroupValue).data("selectkey");
                                    } else {
                                        inputValueGroupArr[buttonsubmitkey] = $(inputValueGroupValue).find("input").val();
                                    }


                                }
                            }
                        } else {


                        }
                        if (inputValueGroup.length == inputNum) {
                            if (buttonAddData.userIdParameter != undefined) {
                                var userIdParameter = buttonAddData.userIdParameter;
                                $.each(userIdParameter, function (userIdParameterKey, userIdParameterValue) {
                                    if (userIdParameterValue.localStorageParameter != undefined) {
                                        if (userIdParameterValue.keyType == "string") {
                                            inputValueGroupArr[userIdParameterValue.submitKey] = $.localStorage.getItem(userIdParameterValue.localStorageParameter)
                                        }
                                        if (userIdParameterValue.keyType == "number") {
                                            inputValueGroupArr[userIdParameterValue.submitKey] = Number($.localStorage.getItem(userIdParameterValue.localStorageParameter))
                                        }
                                    }
                                    if (userIdParameterValue.sessionStorageParameter != undefined) {
                                        if (userIdParameterValue.keyType == "string") {
                                            inputValueGroupArr[userIdParameterValue.submitKey] = $.sessionStorage.getItem(userIdParameterValue.sessionStorageParameter)
                                        }
                                        if (userIdParameterValue.keyType == "number") {
                                            inputValueGroupArr[userIdParameterValue.submitKey] = Number($.sessionStorage.getItem(userIdParameterValue.sessionStorageParameter))
                                        }
                                    }



                                })
                            }
                            var endInputValueGroupArr = {};
                            $.each(inputValueGroupArr, function (inputValueGroupArrKey, inputValueGroupArrValue) {
                                if (inputValueGroupArrKey != null && inputValueGroupArrKey != "null") {
                                    console.log(inputValueGroupArrKey)
                                    endInputValueGroupArr[inputValueGroupArrKey] = inputValueGroupArrValue;
                                }
                            })
                            var newLoadIndex = layer.load(2, {
                                shade: [0.1, '#fff']
                            });
                            $.ajax({
                                type: "post",
                                url: url,
                                data: JSON.stringify(endInputValueGroupArr),
                                contentType: "application/json",
                                dataType: 'json',
                                success: function (data) {

                                    if (data.code == 0) {
                                        layer.closeAll();
                                        layer.msg('添加成功', {
                                            time: 1000, //20s后自动关闭
                                        });
                                        layui.tableList.tableList();
                                    } else {
                                        layer.close(newLoadIndex);
                                        layer.alert(data.message);
                                    }
                                },
                                error: function (error) {
                                    layer.close(newLoadIndex);
                                    layer.alert("添加失败")
                                }
                            })
                        }


                    })


                })
            })

        }
    }

    exports('button', obj);
});