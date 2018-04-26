/**
 * Copyright ©2018 DATAOJO. All Rights Reserved. 北京相数科技有限公司 版权所有
 * Created Date: 2018.01.08
 * Author: 付国强
 * instructions:左侧导航栏组件
 */
layui.link('./script/messageStatistics/messageStatistics.css')
layui.define(['layer', 'element', 'qRouter', 'table', 'laydate', 'form', 'config_constant'], function (exports) {
    var layer = layui.layer;
    var element = layui.element;
    var qRouter = layui.qRouter;
    var table = layui.table;
    var form = layui.form;
    var laydate = layui.laydate;
    var config_constant = layui.config_constant;
    var obj = {
        messageStatistics: function (componentName) {
            var getRoot = $("[id^='render-messageStatistics']");
            var nodeHtml = '';
            nodeHtml += ' <div class="messageStatistics_contain">';
            nodeHtml += '<form action="">';
            nodeHtml += '<div class="layui-tab layui-tab-brief" lay-filter="docDemoTabBrief">';
            nodeHtml += '<ul class="layui-tab-title">';
            nodeHtml += '<li class="layui-this">完成情况统计表</li>';
            nodeHtml += '<li>工效统计表</li>';
            nodeHtml += '<li>工时明细表</li>';
            nodeHtml += '<li>外包验收质量统计表</li>';
            nodeHtml += '<li>任务进度记录表</li>';
            nodeHtml += '</ul>';
            nodeHtml += '<div class="layui-tab-content">';
            // 完成情况统计表
            nodeHtml += '<div class="layui-tab-item layui-show">';
            nodeHtml += '<div class="messageStatistics_position">';
            nodeHtml += '<div class="messageStatistics_rigth">';
            nodeHtml += '<input type="text" onkeydown="if(event.keyCode==32) return false" name="date" placeholder="请选择开始时间" autocomplete="off" class="layui-input messageStatistics_input messageStatistics_margin" id="stateTime_completionStatisticalTables">';
            nodeHtml += '<input type="text" onkeydown="if(event.keyCode==32) return false" name="date" placeholder="请选择结束时间" autocomplete="off" class="layui-input messageStatistics_input messageStatistics_margin" id="endTime_completionStatisticalTables">';
            nodeHtml += '<div id="download_operation_completionStatisticalTables" class="messageStatistics_button messageStatistics_margin layui-btn layui-btn-normal">下载</div>';
            nodeHtml += '<div id="preview_operation_completionStatisticalTables" class="messageStatistics_button messageStatistics_margin layui-btn layui-btn-normal">预览</div>';
            nodeHtml += '</div>';
            nodeHtml += '</div>';
            nodeHtml += '<table id="messageStatistics_completionStatisticalTables" lay-filter="messageStatistics_completionStatisticalTables"></table>';
            nodeHtml += '</div>';
            // 工效统计表
            nodeHtml += '<div class="layui-tab-item">';
            nodeHtml += '<div class="messageStatistics_position">';
            nodeHtml += '<div class="messageStatistics_rigth">';
            nodeHtml += '<input type="text" onkeydown="if(event.keyCode==32) return false" name="date" placeholder="请选择开始时间" autocomplete="off" class="layui-input messageStatistics_input messageStatistics_margin" id="stateTime_statisticalTableWorkEffect">';
            nodeHtml += '<input type="text" onkeydown="if(event.keyCode==32) return false" name="date" placeholder="请选择结束时间" autocomplete="off" class="layui-input messageStatistics_input messageStatistics_margin" id="endTime_statisticalTableWorkEffect">';
            nodeHtml += '<div id="download_operation_statisticalTableWorkEffect" class="messageStatistics_button messageStatistics_margin layui-btn layui-btn-normal">下载</div>';
            nodeHtml += '<div id="preview_operation_statisticalTableWorkEffect" class="messageStatistics_button messageStatistics_margin layui-btn layui-btn-normal">预览</div>';
            nodeHtml += '</div>';
            nodeHtml += '</div>';
            nodeHtml += '<table id="messageStatistics_statisticalTableWorkEffect" lay-filter="messageStatistics_statisticalTableWorkEffect"></table>';
            nodeHtml += '</div>';
            // 工时细分表
            nodeHtml += '<div class="layui-tab-item">';
            nodeHtml += '<div class="messageStatistics_position">';
            nodeHtml += '<div class="messageStatistics_rigth">';
            nodeHtml += '<input type="text" onkeydown="if(event.keyCode==32) return false" name="date" placeholder="请选择开始时间" autocomplete="off" class="layui-input messageStatistics_input messageStatistics_margin" id="stateTime_timeBreakdownTable">';
            nodeHtml += '<input type="text" onkeydown="if(event.keyCode==32) return false" name="date" placeholder="请选择结束时间" autocomplete="off" class="layui-input messageStatistics_input messageStatistics_margin" id="endTime_timeBreakdownTable">';
            nodeHtml += '<div id="download_operation_timeBreakdownTable" class="messageStatistics_button messageStatistics_margin layui-btn layui-btn-normal">下载</div>';
            nodeHtml += '<div id="preview_operation_timeBreakdownTable" class="messageStatistics_button messageStatistics_margin layui-btn layui-btn-normal">预览</div>';
            nodeHtml += '</div>';
            nodeHtml += '</div>';
            nodeHtml += '<table id="messageStatistics_timeBreakdownTable" lay-filter="messageStatistics_timeBreakdownTable"></table>';
            nodeHtml += '</div>';
            // 外包验收质量统计表
            nodeHtml += '<div class="layui-tab-item">';
            nodeHtml += '<div class="messageStatistics_position">';
            nodeHtml += '<div class="messageStatistics_rigth">';
            nodeHtml += '<input type="text" onkeydown="if(event.keyCode==32) return false" name="date" placeholder="请选择开始时间" autocomplete="off" class="layui-input messageStatistics_input messageStatistics_margin" id="stateTime_statisticalTableOutsourcingAcceptanceQuality">';
            nodeHtml += '<input type="text" onkeydown="if(event.keyCode==32) return false" name="date" placeholder="请选择结束时间" autocomplete="off" class="layui-input messageStatistics_input messageStatistics_margin" id="endTime_statisticalTableOutsourcingAcceptanceQuality">';
            nodeHtml += '<div id="download_operation_statisticalTableOutsourcingAcceptanceQuality" class="messageStatistics_button messageStatistics_margin layui-btn layui-btn-normal">下载</div>';
            nodeHtml += '<div id="preview_operation_statisticalTableOutsourcingAcceptanceQuality" class="messageStatistics_button messageStatistics_margin layui-btn layui-btn-normal">预览</div>';
            nodeHtml += '</div>';
            nodeHtml += '</div>';
            nodeHtml += '<table id="messageStatistics_statisticalTableOutsourcingAcceptanceQuality" lay-filter="messageStatistics_statisticalTableOutsourcingAcceptanceQuality"></table>';
            nodeHtml += '</div>';
            // 任务进度记录表
            nodeHtml += '<div class="layui-tab-item">'
            nodeHtml += '<div class="messageStatistics_position">';
            nodeHtml += '<div class="messageStatistics_rigth">';
            nodeHtml += '<input type="text" onkeydown="if(event.keyCode==32) return false" name="date" placeholder="请选择开始时间" autocomplete="off" class="layui-input messageStatistics_input messageStatistics_margin" id="stateTime_totalTable">';
            nodeHtml += '<input type="text" onkeydown="if(event.keyCode==32) return false" name="date" placeholder="请选择结束时间" autocomplete="off" class="layui-input messageStatistics_input messageStatistics_margin" id="endTime_totalTable">';
            nodeHtml += '<div id="download_operation_totalTable" class="messageStatistics_button messageStatistics_margin layui-btn layui-btn-normal">下载</div>';
            nodeHtml += '<div id="preview_operation_totalTable" class="messageStatistics_button messageStatistics_margin layui-btn layui-btn-normal">预览</div>';
            nodeHtml += '</div>';
            nodeHtml += '</div>';
            nodeHtml += '<table id="messageStatistics_totalTable" lay-filter="messageStatistics_totalTable"></table>';
            nodeHtml += '</div>';

            nodeHtml += '</div>';
            nodeHtml += '</div> ';
            nodeHtml += '</form>';
            nodeHtml += '</div>';
            getRoot.append(nodeHtml);

            function initTime() {
                // 获取本地时间
                function locationTime() {
                    var date = new Date();
                    var year = date.getFullYear();
                    var month = date.getMonth() + 1;
                    var day = date.getDate();
                    var locationTime = year + '-' + month + '-' + day;
                    return locationTime
                }
                var locationTime = locationTime();

                function getPreMonth(date) {
                    var arr = date.split('-');
                    var year = arr[0]; //获取当前日期的年份  
                    var month = arr[1]; //获取当前日期的月份  
                    var day = arr[2]; //获取当前日期的日  
                    var days = new Date(year, month, 0);
                    days = days.getDate(); //获取当前日期中月的天数  
                    var year2 = year;
                    var month2 = parseInt(month) - 1;
                    if (month2 == 0) {
                        year2 = parseInt(year2) - 1;
                        month2 = 12;
                    }
                    var day2 = day;
                    var days2 = new Date(year2, month2, 0);
                    days2 = days2.getDate();
                    if (day2 > days2) {
                        day2 = days2;
                    }
                    if (month2 < 10) {
                        month2 = '0' + month2;
                    }
                    var t2 = year2 + '-' + month2 + '-' + day2;
                    return t2;
                }
                var getPreMonth = getPreMonth(locationTime);

                // 开始时间初始化
                // 完成情况统计表
                laydate.render({
                    elem: '#stateTime_completionStatisticalTables',
                    type: 'date',
                    value: getPreMonth
                });
                //工效统计表
                laydate.render({
                    elem: '#stateTime_statisticalTableWorkEffect',
                    type: 'date',
                    value: getPreMonth
                });
                //月结算表
                laydate.render({
                    elem: '#stateTime_monthlyStatements',
                    type: 'date',
                    value: getPreMonth
                });
                //任务细分表
                laydate.render({
                    elem: '#stateTime_timeBreakdownTable',
                    type: 'date',
                    value: getPreMonth
                });
                //外包验收质量统计表
                laydate.render({
                    elem: '#stateTime_statisticalTableOutsourcingAcceptanceQuality',
                    type: 'date',
                    value: getPreMonth
                });
                // 结算总表
                laydate.render({
                    elem: '#stateTime_totalTable',
                    type: 'date',
                    value: getPreMonth
                });
                //   结束时间初始化
                laydate.render({
                    elem: '#endTime_completionStatisticalTables',
                    type: 'date',
                    value: locationTime
                });
                laydate.render({
                    elem: '#endTime_statisticalTableWorkEffect',
                    type: 'date',
                    value: locationTime
                });
                laydate.render({
                    elem: '#endTime_monthlyStatements',
                    type: 'date',
                    value: locationTime
                });
                laydate.render({
                    elem: '#endTime_timeBreakdownTable',
                    type: 'date',
                    value: locationTime
                });
                laydate.render({
                    elem: '#endTime_statisticalTableOutsourcingAcceptanceQuality',
                    type: 'date',
                    value: locationTime
                });
                laydate.render({
                    elem: '#endTime_totalTable',
                    type: 'date',
                    value: locationTime
                });
            }


            function indexPage() {
                initTime();
                var stateTime_completionStatisticalTables = $("#stateTime_completionStatisticalTables");
                var endTime_completionStatisticalTables = $("#endTime_completionStatisticalTables");
                var newLoadIndex = layer.load(2, {
                    shade: [0.1, '#fff']
                });
                $.ajax({
                    type: 'post',
                    contentType: "application/json",
                    data: JSON.stringify({
                        startEndDate: stateTime_completionStatisticalTables.val(),
                        overEndDate: endTime_completionStatisticalTables.val() + " 23:59:59",
                    }),
                    url: config_constant.URL_HEADER + "/task/statistics/search_completion",
                    success: function (res) {
                        if (res.code == 0 || res.code == "0") {
                            layer.close(newLoadIndex);
                            var headData = res.data[0].head[0];
                            var bodyData = res.data[1].content;
                            var colsArr = [];
                            $.each(headData, function (headDataKey, headDataValue) {
                                var colsChild = {
                                    field: headDataKey,
                                    title: headDataValue,
                                    align: 'center',
                                    minWidth: 200
                                };
                                colsArr.push(colsChild);
                            })
                            table.render({
                                elem: '#messageStatistics_completionStatisticalTables',
                                method: 'post',
                                page: true,
                                limits: [10, 20, 30],
                                where: {
                                    startDate: null,
                                    endDate: null
                                },
                                cols: [
                                    colsArr
                                ],
                                data: bodyData,
                                done: function (res, curr, count) {

                                }
                            });

                        } else {
                            layer.close(newLoadIndex);
                            layer.alert("预览失败请重试")
                        }
                    },
                    error: function (e, m) {
                        layer.close(newLoadIndex);
                        layer.alert("预览失败请重试")
                    }
                });

            }
            indexPage();

            // 完成情况统计表
            var stateTime_completionStatisticalTables = $("#stateTime_completionStatisticalTables");
            var endTime_completionStatisticalTables = $("#endTime_completionStatisticalTables");
            $("#preview_operation_completionStatisticalTables").on('click', function () {
                if (stateTime_completionStatisticalTables.val() == "") {
                    layer.alert("请选择开始时间")
                } else if (endTime_completionStatisticalTables.val() == "") {
                    layer.alert("请选择结束时间")
                } else {
                    var newLoadIndex = layer.load(2, {
                        shade: [0.1, '#fff']
                    });
                    $.ajax({
                        type: 'post',
                        contentType: "application/json",
                        data: JSON.stringify({
                            startEndDate: stateTime_completionStatisticalTables.val(),
                            overEndDate: endTime_completionStatisticalTables.val() + " 23:59:59",
                        }),
                        url: config_constant.URL_HEADER + "/task/statistics/search_completion",
                        success: function (res) {
                            if (res.code == 0 || res.code == "0") {
                                layer.close(newLoadIndex);
                                var bodyData = res.data[1].content;
                                table.reload("messageStatistics_completionStatisticalTables", {
                                    data: bodyData,
                                });

                            } else {
                                layer.close(newLoadIndex);
                                layer.alert("预览失败请重试")
                            }
                        },
                        error: function (e, m) {
                            layer.close(newLoadIndex);
                            layer.alert("预览失败请重试")
                        }
                    });
                }

            });

            $("#download_operation_completionStatisticalTables").on('click', function () {
                if (stateTime_completionStatisticalTables.val() == "") {
                    layer.alert("请选择开始时间")
                } else if (endTime_completionStatisticalTables.val() == "") {
                    layer.alert("请选择结束时间")
                } else {
                    console.log(stateTime_completionStatisticalTables.val(), endTime_completionStatisticalTables.val(), "huhu")
                    var parameter = "?startEndDate=" + stateTime_completionStatisticalTables.val() + "&overEndDate=" + endTime_completionStatisticalTables.val() + " 23:59:59"
                    location.href = config_constant.URL_HEADER + "/task/statistics/export_completion" + parameter;
                    // var newLoadIndex = layer.load(2, {
                    //     shade: [0.1, '#fff']
                    // });
                    // $.ajax({
                    //     type: 'post',
                    //     data: JSON.stringify({
                    //         startEndDate: stateTime_completionStatisticalTables.val(),
                    //         overEndDate: endTime_completionStatisticalTables.val() + " 23:59:59"
                    //     }),
                    //     contentType: "application/json",
                    //     url: config_constant.URL_HEADER + "/task/statistics/export_completion",
                    //     success: function (res) {
                    //         if (res.code == 0 || res.code == "0") {
                    //             layer.close(newLoadIndex);
                    //             location.href = res.data;
                    //         } else {
                    //             layer.close(newLoadIndex);
                    //             layer.alert("下载失败请重试")
                    //         }
                    //     },
                    //     error: function (e, m) {
                    //         layer.close(newLoadIndex);
                    //         layer.alert("下载失败请重试")
                    //     }
                    // });
                }

            });

            // 工效统计表
            var stateTime_statisticalTableWorkEffect = $("#stateTime_statisticalTableWorkEffect");
            var endTime_statisticalTableWorkEffect = $("#endTime_statisticalTableWorkEffect");
            $("#preview_operation_statisticalTableWorkEffect").on('click', function () {
                if (stateTime_statisticalTableWorkEffect.val() == "") {
                    layer.alert("请选择开始时间")
                } else if (endTime_statisticalTableWorkEffect.val() == "") {
                    layer.alert("请选择结束时间")
                } else {
                    var newLoadIndex = layer.load(2, {
                        shade: [0.1, '#fff']
                    });
                    $.ajax({
                        type: 'post',
                        contentType: "application/json",
                        data: JSON.stringify({
                            startDate: stateTime_completionStatisticalTables.val(),
                            overDate: endTime_completionStatisticalTables.val() + " 23:59:59",
                            limit: 10,
                            page: 1
                        }),
                        url: config_constant.URL_HEADER + "/task/statistics/search_efficiency",
                        success: function (res) {
                            if (res.code == 0 || res.code == "0") {
                                layer.close(newLoadIndex);
                                var bodyData = res.data[2].content;
                                table.reload("messageStatistics_statisticalTableWorkEffect", {
                                    data: bodyData,
                                });
                            } else {
                                layer.close(newLoadIndex);
                                layer.alert("预览失败请重试")
                            }
                        },
                        error: function (e, m) {
                            layer.close(newLoadIndex);
                            layer.alert("预览失败请重试")
                        }
                    });
                }
            });

            $("#download_operation_statisticalTableWorkEffect").on('click', function () {
                if (stateTime_statisticalTableWorkEffect.val() == "") {
                    layer.alert("请选择开始时间")
                } else if (endTime_statisticalTableWorkEffect.val() == "") {
                    layer.alert("请选择结束时间")
                } else {
                    var parameter = "?startEndDate=" + stateTime_completionStatisticalTables.val() + "&overEndDate=" + endTime_completionStatisticalTables.val() + " 23:59:59"
                    location.href = config_constant.URL_HEADER + "/task/statistics/export_efficiency" + parameter;
                    // var newLoadIndex = layer.load(2, {
                    //     shade: [0.1, '#fff']
                    // });
                    // $.ajax({
                    //     type: 'post',
                    //     contentType: "application/json",
                    //     data: JSON.stringify({
                    //         startEndDate: stateTime_completionStatisticalTables.val(),
                    //         overEndDate: endTime_completionStatisticalTables.val() + " 23:59:59"
                    //     }),
                    //     url: config_constant.URL_HEADER + "/task/statistics/export_efficiency",
                    //     success: function (res) {
                    //         if (res.code == 0 || res.code == "0") {
                    //             layer.close(newLoadIndex);
                    //             location.href = res.data;
                    //         } else {
                    //             layer.close(newLoadIndex);
                    //             layer.alert("下载失败请重试")
                    //         }
                    //     },
                    //     error: function (e, m) {
                    //         layer.close(newLoadIndex);
                    //         layer.alert("下载失败请重试")
                    //     }
                    // });
                }
            });

            // 任务细分表
            var stateTime_timeBreakdownTable = $("#stateTime_timeBreakdownTable");
            var endTime_timeBreakdownTable = $("#endTime_timeBreakdownTable");
            $("#preview_operation_timeBreakdownTable").on('click', function () {
                if (stateTime_timeBreakdownTable.val() == "") {
                    layer.alert("请选择开始时间")
                } else if (endTime_timeBreakdownTable.val() == "") {
                    layer.alert("请选择结束时间")
                } else {
                    table.reload('messageStatistics_timeBreakdownTable', {
                        method: 'post',
                        url: config_constant.URL_HEADER + "/task/statistics/find",
                        where: {
                            startDate: stateTime_timeBreakdownTable.val(),
                            endDate: endTime_timeBreakdownTable.val() + " 23:59:59"
                        },
                    });
                }
            });

            $("#download_operation_timeBreakdownTable").on('click', function () {
                if (stateTime_timeBreakdownTable.val() == "") {
                    layer.alert("请选择开始时间")
                } else if (endTime_timeBreakdownTable.val() == "") {
                    layer.alert("请选择结束时间")
                } else {
                    var parameter = "?startEndDate=" + stateTime_completionStatisticalTables.val() + "&overEndDate=" + endTime_completionStatisticalTables.val() + " 23:59:59"
                    location.href = config_constant.URL_HEADER + "/task/statistics/export_workhours" + parameter;
                    // var newLoadIndex = layer.load(2, {
                    //     shade: [0.1, '#fff']
                    // });
                    // $.ajax({
                    //     type: 'post',
                    //     contentType: "application/json",
                    //     data: JSON.stringify({
                    //         startEndDate: stateTime_timeBreakdownTable.val(),
                    //         overEndDate: endTime_timeBreakdownTable.val() + " 23:59:59"
                    //     }),
                    //     url: config_constant.URL_HEADER + "/task/statistics/export_workhours",
                    //     success: function (res) {
                    //         if (res.code == 0 || res.code == "0") {
                    //             layer.close(newLoadIndex);
                    //             location.href = res.data;
                    //         } else {
                    //             layer.close(newLoadIndex);
                    //             layer.alert("下载失败请重试")
                    //         }
                    //     },
                    //     error: function (e, m) {
                    //         layer.close(newLoadIndex);
                    //         layer.alert("下载失败请重试")
                    //     }
                    // });
                }
            });

            // 外包验收质量统计表
            var stateTime_statisticalTableOutsourcingAcceptanceQuality = $("#stateTime_statisticalTableOutsourcingAcceptanceQuality");
            var endTime_statisticalTableOutsourcingAcceptanceQuality = $("#endTime_statisticalTableOutsourcingAcceptanceQuality");
            $("#preview_operation_statisticalTableOutsourcingAcceptanceQuality").on('click', function () {
                if (stateTime_statisticalTableOutsourcingAcceptanceQuality.val() == "") {
                    layer.alert("请选择开始时间")
                } else if (endTime_statisticalTableOutsourcingAcceptanceQuality.val() == "") {
                    layer.alert("请选择结束时间")
                } else {
                    var newLoadIndex = layer.load(2, {
                        shade: [0.1, '#fff']
                    });
                    $.ajax({
                        type: 'post',
                        contentType: "application/json",
                        data: JSON.stringify({
                            startEndDate: stateTime_statisticalTableOutsourcingAcceptanceQuality.val(),
                            overEndDate: endTime_statisticalTableOutsourcingAcceptanceQuality.val() + " 23:59:59",
                        }),
                        url: config_constant.URL_HEADER + "/task/statistics/search_out",
                        success: function (res) {
                            if (res.code == 0 || res.code == "0") {
                                layer.close(newLoadIndex);
                                var bodyData = res.data[1].content;
                                table.reload("messageStatistics_statisticalTableOutsourcingAcceptanceQuality", {
                                    data: bodyData,
                                });
                            } else {
                                layer.close(newLoadIndex);
                                layer.alert("预览失败请重试")
                            }
                        },
                        error: function (e, m) {
                            layer.close(newLoadIndex);
                            layer.alert("预览失败请重试")
                        }
                    });
                }
            });

            $("#download_operation_statisticalTableOutsourcingAcceptanceQuality").on('click', function () {
                if (stateTime_statisticalTableOutsourcingAcceptanceQuality.val() == "") {
                    layer.alert("请选择开始时间")
                } else if (endTime_statisticalTableOutsourcingAcceptanceQuality.val() == "") {
                    layer.alert("请选择结束时间")
                } else {
                    var parameter = "?startEndDate=" + stateTime_completionStatisticalTables.val() + "&overEndDate=" + endTime_completionStatisticalTables.val() + " 23:59:59"
                    location.href = config_constant.URL_HEADER + "/task/statistics/export_outsource" + parameter;
                    // var newLoadIndex = layer.load(2, {
                    //     shade: [0.1, '#fff']
                    // });
                    // $.ajax({
                    //     type: 'post',
                    //     contentType: "application/json",
                    //     data: JSON.stringify({
                    //         startEndDate: stateTime_statisticalTableOutsourcingAcceptanceQuality.val(),
                    //         overEndDate: endTime_statisticalTableOutsourcingAcceptanceQuality.val() + " 23:59:59"
                    //     }),
                    //     url: config_constant.URL_HEADER + "/task/statistics/export_outsource",
                    //     success: function (res) {
                    //         if (res.code == 0 || res.code == "0") {
                    //             layer.close(newLoadIndex);
                    //             location.href = res.data;
                    //         } else {
                    //             layer.close(newLoadIndex);
                    //             layer.alert("下载失败请重试")
                    //         }
                    //     },
                    //     error: function (e, m) {
                    //         layer.close(newLoadIndex);
                    //         layer.alert("下载失败请重试")
                    //     }
                    // });
                }
            });
            var stateTime_totalTable = $("#stateTime_totalTable");
            var endTime_totalTable = $("#endTime_totalTable");
            $("#preview_operation_totalTable").on('click', function () {
                if (stateTime_totalTable.val() == "") {
                    layer.alert("请选择开始时间")
                } else if (endTime_totalTable.val() == "") {
                    layer.alert("请选择结束时间")
                } else {
                    table.reload("messageStatistics_totalTable", {
                        page: {
                            curr: 1 //重新从第 1 页开始
                        },
                        where: {
                            startEndDate: stateTime_totalTable.val(),
                            overEndDate: endTime_totalTable.val() + " 23:59:59"
                        }
                    })
                }
            });

            $("#download_operation_totalTable").on('click', function () {
                if (stateTime_totalTable.val() == "") {
                    layer.alert("请选择开始时间")
                } else if (endTime_totalTable.val() == "") {
                    layer.alert("请选择结束时间")
                } else {
                    var parameter = "?startEndDate=" + stateTime_completionStatisticalTables.val() + "&overEndDate=" + endTime_completionStatisticalTables.val() + " 23:59:59"
                    location.href = config_constant.URL_HEADER + "/task/statistics/export_taskdetail" + parameter;
                    // var newLoadIndex = layer.load(2, {
                    //     shade: [0.1, '#fff']
                    // });
                    // $.ajax({
                    //     type: 'post',
                    //     contentType: "application/json",
                    //     data: JSON.stringify({
                    //         startEndDate: stateTime_totalTable.val(),
                    //         overEndDate: endTime_totalTable.val() + " 23:59:59"
                    //     }),
                    //     url: config_constant.URL_HEADER + "/task/statistics/export_taskdetail",
                    //     success: function (res) {
                    //         if (res.code == 0 || res.code == "0") {
                    //             layer.close(newLoadIndex);
                    //             location.href = res.data;
                    //         } else {
                    //             layer.close(newLoadIndex);
                    //             layer.alert("下载失败请重试")
                    //         }
                    //     },
                    //     error: function (e, m) {
                    //         layer.close(newLoadIndex);
                    //         layer.alert("下载失败请重试")
                    //     }
                    // });
                }
            })



            element.on('tab(docDemoTabBrief)', function (data) {
                if (data.index == 1) {
                    //工效统计表
                    var stateTime_statisticalTableWorkEffect = $("#stateTime_statisticalTableWorkEffect");
                    var endTime_statisticalTableWorkEffect = $("#endTime_statisticalTableWorkEffect");
                    var newLoadIndex = layer.load(2, {
                        shade: [0.1, '#fff']
                    });
                    $.ajax({
                        type: 'post',
                        contentType: "application/json",
                        data: JSON.stringify({
                            startEndDate: stateTime_statisticalTableWorkEffect.val(),
                            overEndDate: endTime_statisticalTableWorkEffect.val() + " 23:59:59",
                            limit: 10,
                            page: 1
                        }),
                        url: config_constant.URL_HEADER + "/task/statistics/search_efficiency",
                        success: function (res) {
                            if (res.code == 0 || res.code == "0") {
                                layer.close(newLoadIndex);
                                var headData = res.data[1].head[0];
                                var topData = res.data[1].top[0];
                                var colspan = res.data[0].num[0].number;
                                var bodyData = res.data[2].content;
                                var colsArr = [];
                                var colsArrTop = [];
                                $.each(headData, function (headDataKey, headDataValue) {
                                    var colsChild = {
                                        field: headDataKey,
                                        title: headDataValue,
                                        align: 'center',
                                        minWidth: 200
                                    };
                                    colsArr.push(colsChild);
                                })
                                $.each(topData, function (topDataKey, topDataValue) {
                                    if (topDataKey == 0) {
                                        var colsChild = {
                                            title: topDataValue,
                                            align: 'center',
                                            minWidth: 200,
                                            colspan: 2
                                        };
                                        colsArrTop.push(colsChild);
                                    } else {
                                        var colsChild = {
                                            field: topDataKey,
                                            title: topDataValue,
                                            align: 'center',
                                            minWidth: 200,
                                            colspan: colspan
                                        };
                                        colsArrTop.push(colsChild);
                                    }
                                })
                                table.render({
                                    elem: '#messageStatistics_statisticalTableWorkEffect',
                                    method: 'post',
                                    page: true,
                                    limits: [10, 20, 30],
                                    where: {
                                        startDate: null,
                                        endDate: null
                                    },
                                    cols: [
                                        colsArrTop,
                                        colsArr
                                    ],
                                    data: bodyData,
                                    done: function (res, curr, count) {

                                    }
                                });
                            } else {
                                layer.close(newLoadIndex);
                                layer.alert("预览失败请重试")
                            }
                        },
                        error: function (e, m) {
                            layer.close(newLoadIndex);
                            layer.alert("预览失败请重试")
                        }
                    });
                }
                if (data.index == 2) {
                    //任务细分表
                    initTime();
                    var stateTime_timeBreakdownTable = $("#stateTime_timeBreakdownTable");
                    var endTime_timeBreakdownTable = $("#endTime_timeBreakdownTable");
                    table.render({
                        elem: '#messageStatistics_timeBreakdownTable',
                        method: 'post',
                        url: config_constant.URL_HEADER + "/task/statistics/find",
                        page: true,
                        limits: [10, 20, 30],
                        where: {
                            startDate: stateTime_timeBreakdownTable.val(),
                            overDate: endTime_timeBreakdownTable.val() + " 23:59:59"
                        },
                        cols: [
                            [{
                                    field: 'department',
                                    title: '单位',
                                    sort: true,
                                    event: 'vehicleNumber',
                                    minWidth: 127,
                                    align: "center",
                                }, {
                                    field: 'step_value',
                                    title: '作业内容',
                                    sort: true,
                                    event: 'batch_id',
                                    minWidth: 127,
                                    align: "center",
                                }, {
                                    field: 'batch',
                                    title: '批次',
                                    sort: true,
                                    event: 'vehicleNumber',
                                    minWidth: 127,
                                    align: "center",
                                }, {
                                    field: 'projects',
                                    title: '制作项',
                                    sort: true,
                                    event: 'vehicleNumber',
                                    minWidth: 300,
                                    align: "center",
                                }, {
                                    field: 'accept_number',
                                    title: '验收次数',
                                    sort: true,
                                    event: 'vehicleNumber',
                                    minWidth: 127,
                                    align: "center",
                                }, {
                                    field: 'task_id',
                                    title: '任务编号',
                                    sort: true,
                                    event: 'vehicleNumber',
                                    minWidth: 160,
                                    align: "center",
                                }, {
                                    field: 'mileage',
                                    title: '里程',
                                    sort: true,
                                    event: 'vehicleNumber',
                                    minWidth: 127,
                                    align: "center",
                                }, {
                                    field: 'a_launch_date',
                                    title: '开始时间',
                                    sort: true,
                                    event: 'vehicleNumber',
                                    minWidth: 127,
                                    align: "center",
                                },
                                {
                                    field: 'end_date',
                                    title: '结束时间',
                                    sort: true,
                                    event: 'vehicleNumber',
                                    minWidth: 127,
                                    align: "center",
                                },
                                {
                                    field: 'a_finish_date',
                                    title: '完成时间',
                                    sort: true,
                                    event: 'vehicleNumber',
                                    minWidth: 127,
                                    align: "center",
                                }, {
                                    field: 'sum_pre_manday',
                                    title: '作业人天',
                                    sort: true,
                                    event: 'vehicleNumber',
                                    minWidth: 127,
                                    align: "center",
                                }, {
                                    field: 'finish_date',
                                    title: '结算日期',
                                    sort: true,
                                    event: 'vehicleNumber',
                                    minWidth: 127,
                                    align: "center",
                                },
                                {
                                    field: 'pre_manday',
                                    title: '付款比例',
                                    sort: true,
                                    event: 'vehicleNumber',
                                    minWidth: 127,
                                    align: "center",
                                },
                            ]
                        ],
                    });
                }
                if (data.index == 3) {
                    //外包验收质量统计表
                    var stateTime_statisticalTableOutsourcingAcceptanceQuality = $("#stateTime_statisticalTableOutsourcingAcceptanceQuality");
                    var endTime_statisticalTableOutsourcingAcceptanceQuality = $("#endTime_statisticalTableOutsourcingAcceptanceQuality");
                    var newLoadIndex = layer.load(2, {
                        shade: [0.1, '#fff']
                    });
                    $.ajax({
                        type: 'post',
                        contentType: "application/json",
                        data: JSON.stringify({
                            startEndDate: stateTime_statisticalTableOutsourcingAcceptanceQuality.val(),
                            overEndDate: endTime_statisticalTableOutsourcingAcceptanceQuality.val() + " 23:59:59",
                        }),
                        url: config_constant.URL_HEADER + "/task/statistics/search_out",
                        success: function (res) {
                            if (res.code == 0 || res.code == "0") {
                                layer.close(newLoadIndex);
                                var headData = res.data[0].head[0];
                                var topData = res.data[0].top[0];
                                var topDataLength = null;
                                var bodyData = res.data[1].content;
                                var colsArr = [];
                                $.each(headData, function (headDataKey, headDataValue) {
                                    var colsChild = {
                                        field: headDataKey,
                                        title: headDataValue,
                                        align: 'center',
                                        minWidth: 200
                                    };
                                    colsArr.push(colsChild);
                                    topDataLength = headDataKey;
                                })
                                table.render({
                                    elem: '#messageStatistics_statisticalTableOutsourcingAcceptanceQuality',
                                    method: 'post',
                                    page: true,
                                    limits: [10, 20, 30],
                                    where: {
                                        startDate: null,
                                        endDate: null
                                    },
                                    cols: [
                                        [{
                                            field: 'username',
                                            align: 'center',
                                            title: topData[0],
                                            colspan: topDataLength
                                        }],
                                        colsArr
                                    ],
                                    data: bodyData,
                                    done: function (res, curr, count) {

                                    }
                                });
                            } else {
                                layer.close(newLoadIndex);
                                layer.alert("预览失败请重试")
                            }
                        },
                        error: function (e, m) {
                            layer.close(newLoadIndex);
                            layer.alert("预览失败请重试")
                        }
                    });

                }
                if (data.index == 4) {
                    // 任务进度记录表
                    var stateTime_totalTable = $("#stateTime_totalTable");
                    var endTime_totalTable = $("#endTime_totalTable");

                    var totalTableList = table.render({
                        elem: '#messageStatistics_totalTable',
                        method: 'post',
                        url: config_constant.URL_HEADER + "/task/statistics/select_taskdetail",
                        page: true,
                        limits: [10, 20, 30],
                        where: {
                            startEndDate: stateTime_totalTable.val(),
                            overEndDate: endTime_totalTable.val() + " 23:59:59"
                        },
                        cols: [
                            [{
                                    field: 'index',
                                    title: '序号',
                                    event: 'vehicleNumber',
                                    align: "center",
                                    minWidth: 127,
                                    sort: true
                                }, {
                                    field: 'task_num',
                                    title: '任务号',
                                    event: 'batch_id',
                                    align: "center",
                                    minWidth: 160,
                                    sort: true
                                }, {
                                    field: 'mileage',
                                    title: '里程(km)',
                                    event: 'vehicleNumber',
                                    align: "center",
                                    minWidth: 127,
                                    sort: true
                                }, {
                                    field: 'trajectory',
                                    title: '轨迹后处理',
                                    event: 'vehicleNumber',
                                    align: "center",
                                    minWidth: 127,
                                }, {
                                    field: 'automatic',
                                    title: '自动批处理',
                                    event: 'vehicleNumber',
                                    align: "center",
                                    minWidth: 127,
                                }, {
                                    field: 'mark_start',
                                    title: '作业上线日期',
                                    event: 'vehicleNumber',
                                    align: "center",
                                    minWidth: 127,
                                    sort: true
                                }, {
                                    field: 'mark_end',
                                    title: '作业完成日期',
                                    sort: true,
                                    event: 'vehicleNumber',
                                    align: "center",
                                    minWidth: 127,
                                    sort: true
                                }, {
                                    field: 'quality_start',
                                    title: '质检上线日期',
                                    event: 'vehicleNumber',
                                    align: "center",
                                    minWidth: 127,
                                    sort: true
                                },
                                {
                                    field: 'quality_end',
                                    title: '质检完成日期',
                                    sort: true,
                                    event: 'vehicleNumber',
                                    align: "center",
                                    minWidth: 127,
                                },
                                {
                                    field: 'mark_workload',
                                    title: '预计制作(人天)',
                                    sort: true,
                                    event: 'vehicleNumber',
                                    align: "center",
                                    minWidth: 127,
                                }, {
                                    field: 'quality_workload',
                                    title: '预计质检(人天)',
                                    sort: true,
                                    event: 'vehicleNumber',
                                    align: "center",
                                    minWidth: 127,
                                }, {
                                    field: 'mark_supplier',
                                    title: '供应商(制作)',
                                    event: 'vehicleNumber',
                                    align: "center",
                                    minWidth: 127,
                                },
                                {
                                    field: 'quality_supplier',
                                    title: '供应商(质检)',
                                    event: 'vehicleNumber',
                                    align: "center",
                                    minWidth: 127,
                                }
                            ]
                        ],
                    });


                }
            });

            element.init();
            form.render();
        }
    }
    exports('messageStatistics', obj);
});