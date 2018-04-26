/**
 * Copyright ©2018 DATAOJO. All Rights Reserved. 北京相数科技有限公司 版权所有
 * Created Date: 2018.01.08
 * Author: 付国强
 * instructions:添加信息组件
 */
layui.link('./script/addinformation/addinformation.css')
layui.define(['layer', 'element', 'qRouter', 'form', 'laydate', 'upload', 'table', 'config_constant'], function (exports) {
    var layer = layui.layer;
    var element = layui.element;
    var qRouter = layui.qRouter;
    var form = layui.form;
    var laydate = layui.laydate;
    var upload = layui.upload;
    var table = layui.table;
    var config_constant = layui.config_constant;
    var obj = {
        addinformation: function (componentName) {
            var isClick = false;
            var getRoot = $("[id^='render-addinformation']");
            $.each(getRoot, function (key, listId) {
                var nodeHtml = '';
                var getNodeHtml = $('#' + listId.id);
                var componentData = getNodeHtml.data('componentData');
                nodeHtml += '<div class="layui-show">';
                nodeHtml += '<form class="layui-form" id="form" action="">';
                nodeHtml += '<div class="layui-fluid">';
                nodeHtml += '<div class="layui-row">';
                $.each(componentData.formsContain, function (dataKey, dataValue) {
                    if (dataValue.type == 'input') {
                        nodeHtml += '<div class="layui-col-md3 addinformation-list">';
                        nodeHtml += '<div class="layui-col-md3">' + dataValue.title + ':</div>';
                        nodeHtml += '<div class="layui-col-md9 addinformation-list-content">';
                        nodeHtml += '<input data-submitkey="' + dataValue.submitkey + '"  data-inputvalue="' + dataValue.title + '" autocomplete="off" class="layui-input" id="addinformation-input-' + dataKey + '">';
                        nodeHtml += '</div>';
                        nodeHtml += '</div>';
                    }
                    if (dataValue.type == 'realTimeInput') {
                        nodeHtml += '<div class="layui-col-md3 addinformation-list">';
                        nodeHtml += '<div class="layui-col-md3">' + dataValue.title + ':</div>';
                        nodeHtml += '<div class="layui-col-md9 addinformation-list-content">';
                        nodeHtml += '<input type="number" data-submitkey="' + dataValue.submitkey + '" data-inputvalue="' + dataValue.title + '"  autocomplete="off" class="layui-input" id="addinformation-realTimeInput-' + dataKey + '">';
                        nodeHtml += '</div>';
                        nodeHtml += '</div>';
                    }
                    if (dataValue.type == 'timeSelect') {
                        nodeHtml += '<div class="layui-col-md3 addinformation-list">';
                        nodeHtml += '<div class="layui-col-md3">' + dataValue.title + ':</div>';
                        nodeHtml += '<div class="layui-col-md9 addinformation-list-content">';
                        nodeHtml += '<input data-submitkey="' + dataValue.submitkey + '" type="text" data-inputvalue="' + dataValue.title + '"  required lay-verify="required" placeholder="请选择时间" autocomplete="off" class="layui-input" id="addinformation-timeSelect-' + dataKey + '">';
                        nodeHtml += '</div>';
                        nodeHtml += '</div>';
                    }

                    if (dataValue.type == 'formSelect') {
                        nodeHtml += '<div class="layui-col-md3 addinformation-list" data-inputvalue="' + dataValue.title + '" id="addinformation-formSelect-' + dataKey + '" data-submitkey="' + dataValue.submitkey + '">';
                        nodeHtml += '<div class="layui-col-md3">' + dataValue.title + ':</div>';
                        nodeHtml += '<div class="layui-col-md9 addinformation-list-content">';
                        nodeHtml += '<select class=".taskIdSelet">';
                        if (dataValue.url != undefined && dataValue.url != null) {
                            $.ajax({
                                type: "GET",
                                url: dataValue.url,
                                async: false,
                                success: function (dataSelect) {
                                    $.each(dataSelect.data, function (dataSelectKey, dataSelectValue) {
                                        if (dataSelectValue.value == undefined) {
                                            nodeHtml += '<option value=""></option>';
                                            nodeHtml += '<option value="0" class="taskIdOption">' + dataSelectValue[dataValue.requestValues] + '</option>';
                                        } else {
                                            nodeHtml += '<option value=""></option>';
                                            nodeHtml += '<option value="0">' + dataSelectValue[dataValue.requestValues] + '</option>';
                                        }
                                        return nodeHtml
                                    });
                                },
                                error: function (error) {}
                            })
                        }
                        nodeHtml += '</select>';
                        nodeHtml += '</div>';
                        nodeHtml += '</div>';
                    }

                    if (dataValue.type == 'citySelect') {
                        nodeHtml += '<div class="layui-col-md3 addinformation-list">';
                        nodeHtml += '<div class="layui-col-md3">' + dataValue.title + ':</div>';
                        nodeHtml += '<div class="layui-col-md9 addinformation-list-content" width="270px;">';
                        nodeHtml += '<input data-inputvalue="' + dataValue.title + '" data-submitkey="' + dataValue.submitkey + '" readonly data-responsive="true"  type="text" autocomplete="off" class="layui-input" id="addinformation-citySelect-' + dataKey + '">';
                        nodeHtml += '</div>';
                        nodeHtml += '</div>';
                    }
                    if (dataValue.type == 'imgUpload') {
                        nodeHtml += '<div data-inputvalue="' + dataValue.title + '" data-submitkey="' + dataValue.submitkey + '" class="layui-col-md12 addinformation-list" id="addinformation-imgUpload-' + dataKey + '">';
                        nodeHtml += '<div class="layui-col-md12">' + dataValue.title + ':</div>';
                        nodeHtml += '<div class="layui-col-md12 ">';
                        nodeHtml += '<div class="layui-upload addinformation-photo">';
                        nodeHtml += '<button type="button" class="layui-btn layui-btn-normal">选择多文件</button>';
                        nodeHtml += '<div class="layui-upload-list">';
                        nodeHtml += '<table class="layui-table">';
                        nodeHtml += '<thead>';
                        nodeHtml += '<tr><th>文件名</th>';
                        nodeHtml += '<th>大小</th>';
                        nodeHtml += '<th>状态</th>';
                        nodeHtml += '<th>图片</th>';
                        nodeHtml += '<th>操作</th>';
                        nodeHtml += '</tr></thead>';
                        nodeHtml += '<tbody></tbody>';
                        nodeHtml += '</table>';
                        nodeHtml += '</div>';
                        nodeHtml += '</div>';
                        nodeHtml += '</div>';
                        nodeHtml += '</div>';
                    }
                    if (dataValue.type == 'textArea') {
                        nodeHtml += '<div class="layui-col-md12 addinformation-list">';
                        nodeHtml += '<div class="layui-col-md12">' + dataValue.title + ':</div>';
                        nodeHtml += '</div>';
                        nodeHtml += '<div class="layui-col-md12 ">';
                        nodeHtml += '<textarea data-inputvalue="' + dataValue.title + '" data-submitkey="' + dataValue.submitkey + '" placeholder="请输入内容" class="layui-textarea" id="addinformation-textArea-"' + dataKey + '></textarea>';
                        nodeHtml += '</div>';
                    }
                    if (dataValue.type == 'viewSubtasks') {
                        nodeHtml += '<div class="layui-col-md3 addinformation-list">';
                        nodeHtml += '<div class="layui-btn layui-btn-sm layui-btn-normal addinformation-addTask">添加已有任务</div>';
                        nodeHtml += '<div class="layui-btn layui-btn-sm layui-btn-normal addinformation-viewTaskAndDelete">查看子任务并删除</div>';
                        nodeHtml += '</div>';
                    }
                })
                nodeHtml += '</div>';
                nodeHtml += '</div>';
                nodeHtml += '</form>';
                nodeHtml += '</div>';
                getRoot.empty();
                getNodeHtml.append(nodeHtml);
                element.init();
                form.render();
                //初始化组件
                // 初始化时间选择空间
                var timeSelect = $("[id^='addinformation-timeSelect']");
                $.each(timeSelect, function (timeSelectKey, timeSelectValue) {
                    var elemTimeSelect = '#' + timeSelectValue.id;
                    laydate.render({
                        elem: elemTimeSelect,
                        type: 'date',
                        done: function (value, date, endDate) {
                            $(elemTimeSelect).data('addinformationelEmTime', value);
                        }
                    });
                })
                //初始化城市选择控件
                var timeSelect = $("[id^='addinformation-citySelect']");
                $.each(timeSelect, function (timeSelectKey, timeSelectValue) {
                    var elemTimeSelect = '#' + timeSelectValue.id;
                    $(elemTimeSelect).citypicker({
                        placeholder: '请输入省/市/区'
                    });
                })

                //初始化图片上传控件
                var imgUpload = $("[id^='addinformation-imgUpload']");
                $.each(imgUpload, function (timeSelectKey, timeSelectValue) {
                    var elemimgUpload = '#' + timeSelectValue.id;
                    var demoListView = $(elemimgUpload + ' ' + 'tbody');
                    var addinformationImgArr = [];
                    var uploadListIns = upload.render({
                        elem: elemimgUpload + ' ' + 'button',
                        accept: 'file',
                        //多文件上传
                        multiple: true,
                        auto: false,
                        choose: function (obj) {
                            //将每次选择的文件追加到文件队列
                            var files = this.files = obj.pushFile();
                            //读取本地文件
                            obj.preview(function (index, file, result) {
                                var tr = $(['<tr id="upload-' + index + '">', '<td>' + file.name + '</td>', '<td>' + (file.size / 1014).toFixed(1) + 'kb</td>', '<td>等待上传</td>', '<td><img class="addinformation-preview"  src=' + result + ' ></td>', '<td>', '<button class="layui-btn layui-btn-mini layui-btn-danger addinformation-delete">删除</button>', '</td>', '</tr>'].join(''));

                                //单个重传
                                tr.find('.addinformation-reload').on('click', function () {
                                    obj.upload(index, file);
                                });

                                //删除
                                tr.find('.addinformation-delete').on('click', function () {
                                    //删除对应的文件
                                    delete files[index];
                                    tr.remove();
                                    //清空 input file 值，以免删除后出现同名文件不可选
                                    uploadListIns.config.elem.next()[0].value = '';
                                    $.each(addinformationImgArr, function (addinformationImgArrKey, addinformationImgArrValue) {
                                        var attIndex = addinformationImgArrValue.index;
                                        if (index == attIndex) {
                                            addinformationImgArr.splice(addinformationImgArrKey, 1)
                                            $(elemimgUpload).data('addinformationFile', addinformationImgArr)
                                        }
                                    })

                                });
                                //点击图片预览
                                tr.find('.addinformation-preview').on('click', function () {
                                    let imgSrc = event.target.currentSrc
                                    var width = event.target.naturalWidth + 'px';
                                    var height = event.target.naturalHeight + 'px';
                                    layer.open({
                                        type: 1,
                                        skin: 'layui-layer-molv',
                                        title: false,
                                        closeBtn: 0,
                                        area: [width, height],
                                        shadeClose: true,
                                        content: '<img class="addinformation-preview-content"  src=' + imgSrc + '>',
                                        success: function (layero, index) {
                                            //当图片弹出预览层时,可以点击图片关闭预览层,防止图片过大没法点击遮罩关闭
                                            $('.addinformation-preview-content').on('click', function () {
                                                layer.close(index)
                                            });
                                        }
                                    });
                                });
                                demoListView.append(tr);
                                var imgObj = {
                                    index: index,
                                    time: file.lastModified,
                                    base64: result,
                                    name: file.name,
                                    type: file.type
                                }
                                addinformationImgArr.push(imgObj)
                                $(elemimgUpload).data('addinformationFile', addinformationImgArr)
                            });
                        }
                    });


                })
            })

        }

    }
    exports('addinformation', obj);
});