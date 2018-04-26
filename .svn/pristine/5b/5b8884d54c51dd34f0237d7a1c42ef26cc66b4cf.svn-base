/**
 * Copyright ©2018 DATAOJO. All Rights Reserved. 北京相数科技有限公司 版权所有
 * Created Date: 2018.01.08
 * Author: 付国强
 * instructions:结算组件
 */
layui.link('./script/balance/balance.css')
layui.define(['layer', 'laypage', 'element', 'qRouter', 'table', 'laydate', 'form', 'config_constant'], function (exports) {
    var layer = layui.layer;
    var laypage = layui.laypage;
    var element = layui.element;
    var qRouter = layui.qRouter;
    var table = layui.table;
    var form = layui.form;
    var laydate = layui.laydate;
    var config_constant = layui.config_constant;
    var obj = {
        balance: function (componentName) {
            var getRoot = $("[id^='render-balance']");
            var nodeHtml = '';
            var cycleData = '';
            var keyWord = '';
            var minYear = '',
                maxYear = '',
                conutYear = '',
                conntMonth = '';
            var onceSearchType = 'thisMonth',
                secondSearchType = 'thisMonth',
                oncecheckStatus = '',
                twocheckStatus = '',
                oncecheckStatusLength = '',
                twocheckStatusLength = '';
            var setStateTime = '',
                setEndTime = '',
                screenStartTime = '',
                screenEndTime = '',
                secondPayDate = '';
            // 请求期号及默认展示日期
            $.ajax({
                type: 'get',
                url: config_constant.URL_HEADER + "/pay/find_time",
                async: false,
                success: function (res) {
                    cycleData = res.data;
                    setStateTime = cycleData.aheadTime;
                    setEndTime = cycleData.behindTime;
                    conutYear = cycleData.yearMonthIdentifying.split('年')[0] + '年';
                    conntMonth = cycleData.yearMonthIdentifying.split('年')[1];
                }
            });

            // 请求页面加载年
            $.ajax({
                type: 'get',
                url: config_constant.URL_HEADER + "/pay/find_year",
                async: false,
                success: function (res) {
                    res.data;
                    minYear = res.data.minYear;
                    maxYear = res.data.maxYear;
                }
            });

            nodeHtml += '<div class="balance_contain">';
            nodeHtml += '<div class="balance_currentCycle ">';
            nodeHtml += '当前设置的周期为：<span class="balance_startTime">' + cycleData.aheadTime + '</span>——<span class="balance_endTime">' + cycleData.behindTime + '</span><button class="layui-btn layui-btn-primary balance_setcycle">设置本月周期</button>'
            nodeHtml += '</div>';
            nodeHtml += '<form  class="layui-form" lay-filter="test2" action="">';
            nodeHtml += '<div class="layui-tab layui-tab-brief" lay-filter="docDemoTabBrief">';
            nodeHtml += '<ul class="layui-tab-title balance_tab">';
            nodeHtml += '<li class="layui-this">一次结算</li>';
            nodeHtml += '<li>二次结算</li>';
            nodeHtml += '<li>结算统计表</li>';
            nodeHtml += '<li>结算明细表</li>';
            nodeHtml += '</ul>';
            nodeHtml += '<div class="layui-tab-content">';
            // 一次结算
            nodeHtml += '<div class="layui-tab-item layui-show">';
            nodeHtml += '<div class="balance_screen">';
            nodeHtml += '<div class="balance_isAlLData">';
            nodeHtml += '<select name="oncescreenSelect" lay-filter="oncescreenSelect">';
            nodeHtml += '<option value="thisMonth" selected>待结算（本月）</option>';
            nodeHtml += '<option value="all">待结算（全部）</option>';
            nodeHtml += '</select>';
            nodeHtml += '</div>';
            nodeHtml += '<div class="balance_screenSet">';
            nodeHtml += '<div class="layui-btn layui-btn-primary onceBalanceChange">修改结算参数</div>';
            nodeHtml += '<div class="layui-btn layui-btn-primary onceBalanceSave">结算并保存</div>';
            nodeHtml += '<input type="text" placeholder="请输入搜索关键字" autocomplete="off" class="layui-input once_balanceSearchInput">';
            nodeHtml += '<div class="layui-btn layui-btn-normal once_balanceSearch">搜索</div>';
            nodeHtml += '</div>';
            nodeHtml += '</div>';
            nodeHtml += '<table id="balance_OnceTables" lay-filter="balance_OnceTables"></table>';
            nodeHtml += '</div>';
            // 二次结算
            nodeHtml += '<div class="layui-tab-item">';
            nodeHtml += '<div class="balance_screen">';
            nodeHtml += '<div class="balance_isAlLData balance_twoisAlLData">';
            nodeHtml += '<select name="twoscreenSelect" lay-filter="twoscreenSelect">';
            nodeHtml += '<option value="thisMonth" selected>待结算（本月）</option>';
            nodeHtml += '<option value="all">待结算（全部）</option>';
            nodeHtml += '<option value="month">按时间范围搜索待结算的记录</option>';
            nodeHtml += '</select>';
            nodeHtml += '</div>';
            nodeHtml += '<div class="balance_screenSet">';
            nodeHtml += '<span class="balance_SearchByDate">';
            nodeHtml += '按完成日期搜索：';
            nodeHtml += '<input type="text" onkeydown="if(event.keyCode==32) return false" name="date" placeholder="请选择开始时间" autocomplete="off" class="layui-input messageStatistics_input messageStatistics_margin" id="stateTime_search">';
            nodeHtml += '<input type="text" onkeydown="if(event.keyCode==32) return false" name="date" placeholder="请选择结束时间" autocomplete="off" class="layui-input messageStatistics_input messageStatistics_margin" id="endTime_search">';
            nodeHtml += '</span>';
            nodeHtml += '<div class="layui-btn layui-btn-primary twoBalanceChange">修改结算参数</div>';
            nodeHtml += '<div class="layui-btn layui-btn-primary twoBalanceSave">结算并保存</div>';
            nodeHtml += '<input type="text" placeholder="请输入搜索关键字" autocomplete="off" class="layui-input two_balanceSearchInput">';
            nodeHtml += '<div class="layui-btn layui-btn-normal two_balanceSearch">搜索</div>';
            nodeHtml += '</div>';
            nodeHtml += '</div>';
            nodeHtml += '<table id="balance_TwoTables" lay-filter="balance_TwoTables"></table>';
            nodeHtml += '</div>';
            // 结算统计表
            nodeHtml += '<div class="layui-tab-item balance_StatisticsTables">';
            nodeHtml += '<div class="balance_screen">';
            nodeHtml += '<span class="choose_issue">选择报表期号：</span><div class="balance_year">';
            nodeHtml += '<select name="countscreenYear" lay-filter="countscreenYear">';
            for (var i = minYear; i <= maxYear; i++) {
                nodeHtml += '<option value="' + i + '年" ' + ((cycleData.yearMonthIdentifying.split('年')[0] + "年") == (i + "年") ? "selected" : "") + '>' + i + '年</option>';
            }
            nodeHtml += '</select>';
            nodeHtml += '</div>';
            nodeHtml += '<div class="balance_month">';
            nodeHtml += '<select name="countscreenSelect" lay-filter="countscreenMonth">';
            for (var i = 1; i <= 12; i++) {
                nodeHtml += '<option value="' + i + '月" ' + (cycleData.yearMonthIdentifying.split('年')[1] == (i + "月") ? "selected" : "") + '>' + i + '月</option>';
            }
            nodeHtml += '</select>';
            nodeHtml += '</div>';
            nodeHtml += '<div class="balance_search">';
            nodeHtml += '<a href="javascript:void(0);" class="layui-btn layui-btn-primary export_count">导出报表</a>';
            nodeHtml += '</div>';
            nodeHtml += '</div>';
            nodeHtml += '<table id="balance_StatisticsTables" lay-filter=""></table>';
            nodeHtml += '</div>';
            // 结算明细表
            nodeHtml += '<div class="layui-tab-item">';
            nodeHtml += '<div class="balance_screen">';
            nodeHtml += '<span class="choose_issue">选择报表期号：</span><div class="balance_year">';
            nodeHtml += '<select name="detailscreenYear" lay-filter="detailscreenYear">';
            for (var i = minYear; i <= maxYear; i++) {
                nodeHtml += '<option value="' + i + '年" ' + ((cycleData.yearMonthIdentifying.split('年')[0] + "年") == (i + "年") ? "selected" : "") + '>' + i + '年</option>';
            }
            nodeHtml += '</select>';
            nodeHtml += '</div>';
            nodeHtml += '<div class="balance_month">';
            nodeHtml += '<select name="detailscreenMonth" lay-filter="detailscreenMonth">';
            nodeHtml += '<option value="">请选择月份</option>';
            for (var i = 1; i <= 12; i++) {
                nodeHtml += '<option value="' + i + '月" ' + (cycleData.yearMonthIdentifying.split('年')[1] == (i + "月") ? "selected" : "") + '>' + i + '月</option>';
            }
            nodeHtml += '</select>';
            nodeHtml += '</div>';
            nodeHtml += '<div class="layui-btn layui-btn-normal withdraw_balance">撤回</div>';
            nodeHtml += '<div class="balance_search">';
            nodeHtml += '<a href="javascript:void(0);" class="layui-btn layui-btn-primary export_detail">导出报表</a>';
            nodeHtml += '<input type="text" placeholder="请输入搜索关键字" autocomplete="off" class="layui-input detail_balanceSearchInput">';
            nodeHtml += '<div class="layui-btn layui-btn-normal datail_balanceSearch">搜索</div>';
            nodeHtml += '</div>';
            nodeHtml += '</div>';
            nodeHtml += '<table id="balance_detailedTables" lay-filter="balance_detailedTables"></table>';
            nodeHtml += '</div>';
            nodeHtml += '</div>';
            nodeHtml += '</div> ';
            nodeHtml += '</form>';
            nodeHtml += '</div>';
            getRoot.append(nodeHtml);
            element.init();
            form.render();

            // 结算开始时间组件初始化
            laydate.render({
                elem: '#stateTime_search',
                type: 'date',
                value: screenStartTime,
                done: function (value, date, endDate) {
                    screenStartTime = value;
                }
            });

            // 结算结束时间组件初始化
            laydate.render({
                elem: '#endTime_search',
                type: 'date',
                value: screenEndTime,
                done: function (value, date, endDate) {
                    screenEndTime = value;
                }
            });

            // 一次结算
            var onceTableList = table.render({
                elem: '#balance_OnceTables',
                method: 'post',
                url: config_constant.URL_HEADER + "/pay/search_first",
                page: true,
                limits: [10, 20, 30],
                where: {
                    startEndDate: cycleData.aheadTime,
                    overEndDate: cycleData.behindTime,
                    search: $('.once_balanceSearchInput')["0"].value
                },
                cols: [
                    [{
                            type: 'checkbox'
                        }, {
                            field: 'department',
                            title: '供应商',
                            event: 'vehicleNumber',
                            align: "center",
                            width: "106"
                        }, {
                            field: 'task_id',
                            title: '任务编号',
                            event: 'batch_id',
                            align: "center",
                            width: "155"
                        }, {
                            field: 'batch_id',
                            title: '批次号',
                            event: 'vehicleNumber',
                            align: "center",
                            width: "80"
                        }, {
                            field: 'accept_number',
                            title: '质检次数',
                            event: 'vehicleNumber',
                            align: "center",
                            width: "88"
                        }, {
                            field: 'step_value',
                            title: '任务环节',
                            event: 'vehicleNumber',
                            align: "center",
                            width: "88"
                        }, {
                            field: 'production_projects',
                            title: '制作项',
                            event: 'vehicleNumber',
                            align: "center",
                            width: "200"
                        }, {
                            field: 'mileage',
                            title: '里程',
                            sort: true,
                            event: 'vehicleNumber',
                            align: "center",
                            width: "80"
                        }, {
                            field: 'type_value',
                            title: '任务类型',
                            event: 'vehicleNumber',
                            align: "center",
                            width: "88"
                        },
                        {
                            field: 'launch_date',
                            title: '开始时间',
                            sort: true,
                            event: 'vehicleNumber',
                            align: "center",
                            width: "160"
                        },
                        {
                            field: 'end_date',
                            title: '结束时间',
                            sort: true,
                            event: 'vehicleNumber',
                            align: "center",
                            width: "160"
                        }, {
                            field: 'sum_manday',
                            title: '作业人天',
                            sort: true,
                            event: 'vehicleNumber',
                            align: "center",
                            width: "100"
                        }, {
                            field: 'sum_quota',
                            title: '结算任务量',
                            sort: true,
                            event: 'vehicleNumber',
                            align: "center",
                            width: "110"
                        },
                        {
                            field: 'pay_status',
                            title: '结算状态',
                            event: 'vehicleNumber',
                            align: "center",
                            width: "100"
                        },
                        {
                            field: 'first_pay_ratio_view',
                            title: '第一次付款比例',
                            sort: true,
                            event: 'vehicleNumber',
                            align: "center",
                            width: "140"
                        },
                        {
                            field: 'second_pay_date',
                            title: '预设二次结算日期',
                            sort: true,
                            event: 'vehicleNumber',
                            align: "center",
                            width: "200"
                        },
                    ]
                ],
            });

            // 二次结算
            var twoTableList = table.render({
                elem: '#balance_TwoTables',
                method: 'post',
                url: config_constant.URL_HEADER + "/pay/search_second",
                page: true,
                limits: [10, 20, 30],
                where: {
                    startSecondDate: cycleData.aheadTime,
                    overSecondDate: cycleData.behindTime,
                    search: $('.two_balanceSearchInput')["0"].value
                },
                cols: [
                    [{
                            type: 'checkbox'
                        }, {
                            field: 'department',
                            title: '供应商',
                            event: 'vehicleNumber',
                            align: "center",
                            width: "106"
                        }, {
                            field: 'task_id',
                            title: '任务编号',
                            event: 'batch_id',
                            align: "center",
                            width: "155"
                        }, {
                            field: 'batch_id',
                            title: '批次号',
                            event: 'vehicleNumber',
                            align: "center",
                            width: "80"
                        }, {
                            field: 'accept_number',
                            title: '质检次数',
                            event: 'vehicleNumber',
                            align: "center",
                            width: "88"
                        }, {
                            field: 'step_value',
                            title: '任务环节',
                            event: 'vehicleNumber',
                            align: "center",
                            width: "88"
                        }, {
                            field: 'production_projects',
                            title: '制作项',
                            event: 'vehicleNumber',
                            align: "center",
                            width: "200"
                        }, {
                            field: 'mileage',
                            title: '里程',
                            sort: true,
                            event: 'vehicleNumber',
                            align: "center",
                            width: "80"
                        }, {
                            field: 'type_value',
                            title: '任务类型',
                            event: 'vehicleNumber',
                            align: "center",
                            width: "88"
                        },
                        {
                            field: 'launch_date',
                            title: '开始时间',
                            sort: true,
                            event: 'vehicleNumber',
                            align: "center",
                            width: "160"
                        },
                        {
                            field: 'end_date',
                            title: '结束时间',
                            sort: true,
                            event: 'vehicleNumber',
                            align: "center",
                            width: "160"
                        }, {
                            field: 'sum_manday',
                            title: '作业人天',
                            sort: true,
                            event: 'vehicleNumber',
                            align: "center",
                            width: "100"
                        }, {
                            field: 'sum_quota',
                            title: '结算任务量',
                            sort: true,
                            event: 'vehicleNumber',
                            align: "center",
                            width: "110"
                        },
                        {
                            field: 'pay_status',
                            title: '结算状态',
                            event: 'vehicleNumber',
                            align: "center",
                            width: "100"
                        },
                        {
                            field: 'first_pay_ratio_view',
                            title: '第一次付款比例',
                            sort: true,
                            event: 'vehicleNumber',
                            align: "center",
                            width: "140"
                        },
                        {
                            field: 'deduct_ratio_view',
                            title: '扣款比例',
                            sort: true,
                            event: 'vehicleNumber',
                            align: "center",
                            width: "100"
                        },
                        {
                            field: 'first_pay_date',
                            title: '一次结算日期',
                            sort: true,
                            event: 'vehicleNumber',
                            align: "center",
                            width: "100"
                        },
                        {
                            field: 'second_pay_date',
                            title: '二次结算日期',
                            sort: true,
                            event: 'vehicleNumber',
                            align: "center",
                            width: "150"
                        },
                        {
                            field: 'second_pay_ratio_view',
                            title: '第二次付款比例',
                            sort: true,
                            event: 'vehicleNumber',
                            align: "center",
                            width: "200"
                        },
                    ]
                ],
            });

            // 结算统计表
            function statisticsList() {
                $.ajax({
                    type: 'post',
                    data: JSON.stringify({
                        year: conutYear,
                        month: conntMonth,
                    }),
                    contentType: "application/json",
                    url: config_constant.URL_HEADER + "/task/statistics/search_monthly",
                    success: function (data) {
                        var bodyData = data.data.slice(1);

                        table.render({
                            elem: '#balance_StatisticsTables',
                            page: false,
                            limit: bodyData.length,
                            cols: [
                                [{
                                        field: "one",
                                        title: data.data[0].one,
                                        align: 'center'
                                    },
                                    {
                                        field: "two",
                                        title: data.data[0].two,
                                        align: 'center'
                                    },
                                    {
                                        field: "three",
                                        title: data.data[0].three,
                                        align: 'center'
                                    },
                                    {
                                        field: "four",
                                        title: data.data[0].four,
                                        align: 'center'
                                    },
                                    {
                                        field: "five",
                                        title: data.data[0].five,
                                        align: 'center'
                                    },
                                    {
                                        field: "six",
                                        title: data.data[0].six,
                                        align: 'center'
                                    },
                                    {
                                        field: "seven",
                                        title: data.data[0].seven,
                                        align: 'center'
                                    }
                                ]
                            ],
                            data: bodyData
                        });

                    }
                })

            }
            statisticsList();

            // 结算明细表
            var detailedList = table.render({
                elem: '#balance_detailedTables',
                method: 'post',
                url: config_constant.URL_HEADER + "/pay/search_history",
                page: true,
                limits: [10, 20, 30],
                where: {
                    year: cycleData.yearMonthIdentifying.split('年')[0] + '年',
                    month: cycleData.yearMonthIdentifying.split('年')[1],
                    search: $('.detail_balanceSearchInput')["0"].value
                },
                cols: [
                    [{
                            type: 'checkbox'
                        }, {
                            field: 'department_value',
                            title: '供应商',
                            event: 'vehicleNumber',
                            align: "center",
                            width: "106"
                        }, {
                            field: 'task_id',
                            title: '任务编号',
                            event: 'batch_id',
                            align: "center",
                            width: "155"
                        }, {
                            field: 'batch_id',
                            title: '批次号',
                            event: 'vehicleNumber',
                            align: "center",
                            width: "80"
                        }, {
                            field: 'accept_number',
                            title: '质检次数',
                            event: 'vehicleNumber',
                            align: "center",
                            width: "88"
                        }, {
                            field: 'step_value',
                            title: '任务环节',
                            event: 'vehicleNumber',
                            align: "center",
                            width: "88"
                        }, {
                            field: 'production_projects',
                            title: '制作项',
                            event: 'vehicleNumber',
                            align: "center",
                            width: "200"
                        }, {
                            field: 'mileage',
                            title: '里程',
                            sort: true,
                            event: 'vehicleNumber',
                            align: "center",
                            width: "80"
                        }, {
                            field: 'type_value',
                            title: '任务类型',
                            event: 'vehicleNumber',
                            align: "center",
                            width: "88"
                        },
                        {
                            field: 'launch_date',
                            title: '开始时间',
                            sort: true,
                            event: 'vehicleNumber',
                            align: "center",
                            width: "160"
                        },
                        {
                            field: 'end_date',
                            title: '结束时间',
                            sort: true,
                            event: 'vehicleNumber',
                            align: "center",
                            width: "160"
                        }, {
                            field: 'sum_manday',
                            title: '作业人天',
                            sort: true,
                            event: 'vehicleNumber',
                            align: "center",
                            width: "100"
                        }, {
                            field: 'sum_quota',
                            title: '结算任务量',
                            sort: true,
                            event: 'vehicleNumber',
                            align: "center",
                            width: "110"
                        },
                        {
                            field: 'status_value',
                            title: '结算状态',
                            event: 'vehicleNumber',
                            align: "center",
                            width: "100"
                        },
                        {
                            field: 'first_pay_ratio_view',
                            title: '第一次付款比例',
                            sort: true,
                            event: 'vehicleNumber',
                            align: "center",
                            width: "140"
                        },
                        {
                            field: 'deduct_ratio_view',
                            title: '扣款比例',
                            sort: true,
                            event: 'vehicleNumber',
                            align: "center",
                            width: "100"
                        },
                        {
                            field: 'first_pay_date',
                            title: '一次结算日期',
                            sort: true,
                            event: 'vehicleNumber',
                            align: "center",
                            width: "150"
                        },
                        {
                            field: 'second_pay_date',
                            title: '二次结算日期',
                            sort: true,
                            event: 'vehicleNumber',
                            align: "center",
                            width: "150"
                        },
                        {
                            field: 'second_pay_ratio_view',
                            title: '第二次付款比例',
                            sort: true,
                            event: 'vehicleNumber',
                            align: "center",
                            width: "200"
                        },
                    ]
                ],
            });

            // 一次结算修改结算参数后列表数据更新请求
            function onceChangeUpdata() {
                if (onceSearchType == "thisMonth") {
                    onceTableList.reload({
                        where: {
                            startEndDate: cycleData.aheadTime,
                            overEndDate: cycleData.behindTime,
                            search: $('.once_balanceSearchInput')["0"].value
                        }
                    });
                } else {
                    onceTableList.reload({
                        where: {
                            search: $('.once_balanceSearchInput')["0"].value
                        }
                    });
                }
            }

            // 二次结算修改结算参数后列表数据更新请求
            function twoChangeUpdata() {
                if (secondSearchType == "thisMonth") {
                    twoTableList.reload({
                        where: {
                            startSecondDate: cycleData.aheadTime,
                            overSecondDate: cycleData.behindTime,
                            search: $('.two_balanceSearchInput')["0"].value
                        }
                    });
                } else if (secondSearchType == "all") {
                    twoTableList.reload({
                        where: {
                            search: $('.two_balanceSearchInput')["0"].value
                        }
                    });
                } else {
                    twoTableList.reload({
                        where: {
                            startEndDate: screenStartTime,
                            overEndDate: screenEndTime,
                            search: $('.two_balanceSearchInput')["0"].value
                        }
                    });
                }
            }

            // 一次结算修改结算参数
            $('.onceBalanceChange').on('click', function () {
                oncecheckStatus = table.checkStatus('balance_OnceTables');
                oncecheckStatusLength = oncecheckStatus.data.length;
                secondPayDate = '';

                if (oncecheckStatusLength == 0) {
                    layer.alert('请选择要修改的内容')
                } else if (oncecheckStatusLength == 1) {
                    var changecycleDom = '';
                    changecycleDom += '<div class="setcyclePop">';
                    changecycleDom += '<p>结算任务量：<input type="number" placeholder="请输入结算任务量" value="' + oncecheckStatus.data[0].sum_quota + '" class="layui-input" id="balance_task"></p>';
                    changecycleDom += '<p>一次付款比例（%）：<input type="number" placeholder="请输入一次付款比例" value="' + Number(oncecheckStatus.data[0].first_pay_ratio_view.slice(0, oncecheckStatus.data[0].first_pay_ratio_view.length - 1)) + '" class="layui-input" id="oncePay_balance"></p>';
                    changecycleDom += '<p>二次结算日期：<input type="text" placeholder="请选择二次结算日期" autocomplete="off" class="layui-input" id="endTime_balance"></p>';
                    changecycleDom += '<div class="setcyclePop_btn">';
                    changecycleDom += '<button class="layui-btn layui-btn-normal setcycleSubmit">确认</button>'
                    changecycleDom += '</div>';
                    changecycleDom += '</div>';

                    layer.open({
                        title: '修改结算参数',
                        type: 1, //加上边框
                        skin: 'layui-layer-taskSkin',
                        area: ['400px', '450px'],
                        content: changecycleDom,
                        //不显示关闭按钮,
                        //开启遮罩关闭
                        shadeClose: true,
                        success: function (layero, index) {
                            laydate.render({
                                elem: '#endTime_balance',
                                type: 'date',
                                value: '',
                                done: function (value, date, endDate) {
                                    secondPayDate = value;
                                }
                            });

                            $('input[type=number]').keypress(function (e) {　　
                                if (!String.fromCharCode(e.keyCode).match(/[0-9\.]/)) {　　　　
                                    return false;　　
                                }
                            });

                            // 确认按钮
                            $('.setcycleSubmit').on('click', function () {
                                if ($('#balance_task')["0"].value == '') {
                                    layer.alert("请输入结算任务量");
                                } else if ($('#balance_task')["0"].value < 0) {
                                    layer.alert("结算任务量不可以为负值");
                                } else if ($('#oncePay_balance')["0"].value == '') {
                                    layer.alert("请输入一次付款比例");
                                } else if ($('#oncePay_balance')["0"].value < 0) {
                                    layer.alert("一次付款比例不可以为负值");
                                } else if ($('#oncePay_balance')["0"].value > 100) {
                                    layer.alert("一次付款比例不可以大于100%");
                                } else {
                                    layer.closeAll();
                                    $.ajax({
                                        type: 'post',
                                        data: JSON.stringify({
                                            id: oncecheckStatus.data[0].id,
                                            sumQuota: $('#balance_task')["0"].value,
                                            firstPayRatio: $('#oncePay_balance')["0"].value + '%',
                                            secondPayDate: secondPayDate
                                        }),
                                        contentType: "application/json",
                                        url: config_constant.URL_HEADER + "/pay/update_one",
                                        success: function (res) {
                                            if (res.code == 0 || res.code == "0") {
                                                layer.alert("修改成功")
                                                onceChangeUpdata();
                                                twoChangeUpdata();
                                                statisticsList();
                                                detailUpdata();
                                            } else {
                                                layer.alert("修改失败")
                                            }
                                        }
                                    })
                                }
                            });
                        }
                    });
                } else {
                    var res = [],
                        ids = [];

                    for (var i in oncecheckStatus.data) {
                        var item = oncecheckStatus.data[i].first_pay_ratio_view;
                        ids.push(oncecheckStatus.data[i].id);
                        (res.indexOf(item) === -1) && res.push(item);
                    }

                    function changeMoreOnce() {
                        var changecycleDom = '';
                        changecycleDom += '<div class="setcyclePop">';
                        changecycleDom += '<p>一次付款比例（%）：<input type="number" placeholder="请输入一次付款比例" value="' + Number(res[0].slice(0, res[0].length - 1)) + '" class="layui-input" id="oncePay_balance"></p>';
                        changecycleDom += '<p>二次结算日期：<input type="text" placeholder="请选择二次结算日期" autocomplete="off" class="layui-input" id="endTime_balance"></p>';
                        changecycleDom += '<div class="setcyclePop_btn">';
                        changecycleDom += '<button class="layui-btn layui-btn-normal setcycleSubmit">确认</button>'
                        changecycleDom += '</div>';
                        changecycleDom += '</div>';

                        layer.open({
                            title: '修改结算参数',
                            type: 1, //加上边框
                            skin: 'layui-layer-taskSkin',
                            area: ['400px', '400px'],
                            content: changecycleDom,
                            //不显示关闭按钮,
                            //开启遮罩关闭
                            shadeClose: true,
                            success: function (layero, index) {
                                laydate.render({
                                    elem: '#endTime_balance',
                                    type: 'date',
                                    value: '',
                                    done: function (value, date, endDate) {
                                        secondPayDate = value;
                                    }
                                });

                                $('input[type=number]').keypress(function (e) {　　
                                    if (!String.fromCharCode(e.keyCode).match(/[0-9\.]/)) {　　　　
                                        return false;　　
                                    }
                                });

                                // 确认按钮
                                $('.setcycleSubmit').on('click', function () {
                                    if ($('#oncePay_balance')["0"].value == '') {
                                        layer.alert("请输入一次付款比例");
                                    } else if ($('#oncePay_balance')["0"].value < 0) {
                                        layer.alert("一次付款比例不可以为负值");
                                    } else if ($('#oncePay_balance')["0"].value > 100) {
                                        layer.alert("一次付款比例不可以大于100%");
                                    } else {
                                        layer.closeAll();
                                        $.ajax({
                                            type: 'post',
                                            data: JSON.stringify({
                                                ids: ids,
                                                firstPayRatio: $('#oncePay_balance')["0"].value + '%',
                                                secondPayDate: secondPayDate
                                            }),
                                            contentType: "application/json",
                                            url: config_constant.URL_HEADER + "/pay/update_batch",
                                            success: function (res) {
                                                if (res.code == 0 || res.code == "0") {
                                                    layer.close(index);
                                                    layer.alert("修改成功")
                                                    onceChangeUpdata();
                                                    twoChangeUpdata();
                                                    statisticsList();
                                                    detailUpdata();
                                                } else {
                                                    layer.close(index);
                                                    layer.alert("修改失败")
                                                }
                                            }
                                        });
                                    }
                                });
                            }
                        });
                    }

                    if (res.length > 1) {
                        var changecycleDom = '';
                        changecycleDom += '<div class="setcyclePop">';
                        changecycleDom += '<p>一次付款比例不一致，确认要修改吗？</p>';
                        changecycleDom += '<div class="setcyclePop_btn">';
                        changecycleDom += '<button class="layui-btn layui-btn-danger setcycleSubmit">确认</button>'
                        changecycleDom += '</div>';
                        changecycleDom += '</div>';

                        layer.open({
                            title: '修改结算参数',
                            type: 1, //加上边框
                            skin: 'layui-layer-taskSkin',
                            area: ['400px', '230px'],
                            content: changecycleDom,
                            shadeClose: true,
                            success: function (layero, index) {
                                // 确认按钮
                                $('.setcycleSubmit').on('click', function () {
                                    layer.close(index);
                                    changeMoreOnce();
                                    onceChangeUpdata();
                                    twoChangeUpdata();
                                    statisticsList();
                                    detailUpdata();
                                });
                            }
                        });
                    } else {
                        changeMoreOnce();
                    }
                }

            });

            // 二次结算修改结算参数
            $('.twoBalanceChange').on('click', function () {
                var twocheckStatus = table.checkStatus('balance_TwoTables');
                twocheckStatusLength = twocheckStatus.data.length;
                secondPayDate = '';

                if (twocheckStatusLength == 0) {
                    layer.alert('请选择要修改的内容')
                } else if (twocheckStatusLength == 1) {
                    var changecycleDom = '';
                    changecycleDom += '<div class="setcyclePop">';
                    changecycleDom += '<p>结算任务量：<input type="number" placeholder="请输入结算任务量" value="' + twocheckStatus.data[0].sum_quota + '" class="layui-input" id="balance_task"></p>';
                    changecycleDom += '<p>扣款比例（%）：<input type="number" placeholder="请输入扣款比例" value="' + (twocheckStatus.data[0].deduct_ratio_view == undefined ? "" : Number(twocheckStatus.data[0].deduct_ratio_view.slice(0, twocheckStatus.data[0].deduct_ratio_view.length - 1))) + '" class="layui-input" id="oncePay_balance"></p>';
                    changecycleDom += '<p>二次付款比例（%）：<input type="number" placeholder="请输入二次付款比例" value="' + (twocheckStatus.data[0].second_pay_ratio_view == undefined ? "" : Number(twocheckStatus.data[0].second_pay_ratio_view.slice(0, twocheckStatus.data[0].second_pay_ratio_view.length - 1))) + '" class="layui-input" id="twoPay_balance"></p>';
                    changecycleDom += '<div class="setcyclePop_btn">';
                    changecycleDom += '<button class="layui-btn layui-btn-normal setcycleSubmit">确认</button>'
                    changecycleDom += '</div>';
                    changecycleDom += '</div>';

                    layer.open({
                        title: '修改结算参数',
                        type: 1, //加上边框
                        skin: 'layui-layer-taskSkin',
                        area: ['400px', '450px'],
                        content: changecycleDom,
                        //不显示关闭按钮,
                        //开启遮罩关闭
                        shadeClose: true,
                        success: function (layero, index) {
                            $('input[type=number]').keypress(function (e) {　　
                                if (!String.fromCharCode(e.keyCode).match(/[0-9\.]/)) {　　　　
                                    return false;　　
                                }
                            });

                            $('#oncePay_balance').bind('input propertychange',  function ()  {  
                                $('#twoPay_balance')["0"].value = 100 - $('#oncePay_balance')["0"].value - Number(twocheckStatus.data[0].first_pay_ratio_view.slice(0, twocheckStatus.data[0].first_pay_ratio_view.length - 1));
                            });  

                            $('#twoPay_balance').bind('input propertychange',  function ()  {  
                                $('#oncePay_balance')["0"].value = 100 - $('#twoPay_balance')["0"].value - Number(twocheckStatus.data[0].first_pay_ratio_view.slice(0, twocheckStatus.data[0].first_pay_ratio_view.length - 1));
                            });  

                            // 确认按钮
                            $('.setcycleSubmit').on('click', function () {
                                if ($('#balance_task')["0"].value == '') {
                                    layer.alert("请输入结算任务量");
                                } else if ($('#balance_task')["0"].value < 0) {
                                    layer.alert("结算任务量不可以为负值");
                                } else if ($('#oncePay_balance')["0"].value == '') {
                                    layer.alert("扣款比例不可以为空");
                                } else if ($('#oncePay_balance')["0"].value < 0) {
                                    layer.alert("扣款比例不可以为负值");
                                } else if ($('#twoPay_balance')["0"].value == '') {
                                    layer.alert("二次付款比例不可以为空");
                                } else if ($('#twoPay_balance')["0"].value < 0) {
                                    layer.alert("二次付款比例不可以为负值");
                                } else {
                                    layer.closeAll();
                                    $.ajax({
                                        type: 'post',
                                        data: JSON.stringify({
                                            id: twocheckStatus.data[0].id,
                                            sumQuota: $('#balance_task')["0"].value,
                                            deductRatio: $('#oncePay_balance')["0"].value + '%',
                                            secondPayRatio: $('#twoPay_balance')["0"].value + '%'
                                        }),
                                        contentType: "application/json",
                                        url: config_constant.URL_HEADER + "/pay/update_one",
                                        success: function (res) {
                                            if (res.code == 0 || res.code == "0") {
                                                layer.alert("修改成功")
                                                onceChangeUpdata();
                                                twoChangeUpdata();
                                                statisticsList();
                                                detailUpdata();
                                            } else {
                                                layer.alert("修改失败")
                                            }
                                        }
                                    })
                                }
                            });
                        }
                    });
                } else {
                    var res = [],
                        ids = [];

                    for (var i in twocheckStatus.data) {
                        var item = twocheckStatus.data[i].second_pay_ratio_view;
                        ids.push(twocheckStatus.data[i].id);
                        (res.indexOf(item) === -1) && res.push(item);
                    }

                    function changeMoreTwo() {
                        var changecycleDom = '';
                        changecycleDom += '<div class="setcyclePop">';
                        changecycleDom += '<p>扣款比例（%）：<input type="number" placeholder="请输入扣款比例" value="' + (twocheckStatus.data[0].deduct_ratio_view == undefined ? "" : Number(twocheckStatus.data[0].deduct_ratio_view.slice(0, twocheckStatus.data[0].deduct_ratio_view.length - 1))) + '" class="layui-input" id="oncePay_balance"></p>';
                        changecycleDom += '<p>二次付款比例（%）：<input type="number" placeholder="请输入二次付款比例" value="' + (twocheckStatus.data[0].second_pay_ratio_view == undefined ? "" : Number(twocheckStatus.data[0].second_pay_ratio_view.slice(0, twocheckStatus.data[0].second_pay_ratio_view.length - 1))) + '" class="layui-input" id="twoPay_balance"></p>';
                        changecycleDom += '<div class="setcyclePop_btn">';
                        changecycleDom += '<button class="layui-btn layui-btn-normal setcycleSubmit">确认</button>'
                        changecycleDom += '</div>';
                        changecycleDom += '</div>';

                        layer.open({
                            title: '修改结算参数',
                            type: 1, //加上边框
                            skin: 'layui-layer-taskSkin',
                            area: ['400px', '400px'],
                            content: changecycleDom,
                            //不显示关闭按钮,
                            //开启遮罩关闭
                            shadeClose: true,
                            success: function (layero, index) {
                                $('input[type=number]').keypress(function (e) {　　
                                    if (!String.fromCharCode(e.keyCode).match(/[0-9\.]/)) {　　　　
                                        return false;　　
                                    }
                                });

                                $('#oncePay_balance').bind('input propertychange',  function ()  {  
                                    $('#twoPay_balance')["0"].value = 100 - $('#oncePay_balance')["0"].value - Number(twocheckStatus.data[0].first_pay_ratio_view.slice(0, twocheckStatus.data[0].first_pay_ratio_view.length - 1));
                                });  

                                $('#twoPay_balance').bind('input propertychange',  function ()  {  
                                    $('#oncePay_balance')["0"].value = 100 - $('#twoPay_balance')["0"].value - Number(twocheckStatus.data[0].first_pay_ratio_view.slice(0, twocheckStatus.data[0].first_pay_ratio_view.length - 1));
                                });  

                                // 确认按钮
                                $('.setcycleSubmit').on('click', function () {
                                    if ($('#oncePay_balance')["0"].value == '') {
                                        layer.alert("扣款比例不可以为空");
                                    } else if ($('#oncePay_balance')["0"].value < 0) {
                                        layer.alert("扣款比例不可以为负值");
                                    } else if ($('#twoPay_balance')["0"].value == '') {
                                        layer.alert("二次付款比例不可以为空");
                                    } else if ($('#twoPay_balance')["0"].value < 0) {
                                        layer.alert("二次付款比例不可以为负值");
                                    } else {
                                        layer.closeAll();
                                        $.ajax({
                                            type: 'post',
                                            data: JSON.stringify({
                                                ids: ids,
                                                deductRatio: $('#oncePay_balance')["0"].value + '%',
                                                secondPayRatio: $('#twoPay_balance')["0"].value + '%'
                                            }),
                                            contentType: "application/json",
                                            url: config_constant.URL_HEADER + "/pay/update_batch",
                                            success: function (res) {
                                                if (res.code == 0 || res.code == "0") {
                                                    twoChangeUpdata();
                                                    layer.alert("修改成功");
                                                } else {
                                                    layer.alert("修改失败");
                                                }
                                            }
                                        })
                                    }
                                });
                            }
                        });
                    }

                    if (res.length > 1) {
                        layer.alert('二次付款比例不一致，请选择一致的付款比例')
                    } else {
                        changeMoreTwo();
                    }
                }

            });

            // 一次结算 结算并保存
            $('.onceBalanceSave').on('click', function () {
                oncecheckStatus = table.checkStatus('balance_OnceTables');
                var ids = [];

                for (var i in oncecheckStatus.data) {
                    ids.push(oncecheckStatus.data[i].id);
                }

                if (ids.length > 0) {
                    var changecycleDom = '';
                    changecycleDom += '<div class="setcyclePop">';
                    changecycleDom += '<p>一次结算日期：<input type="text" placeholder="请选择一次结算日期" autocomplete="off" class="layui-input" id="endTime_balance"></p>';
                    changecycleDom += '<div class="setcyclePop_btn">';
                    changecycleDom += '<button class="layui-btn layui-btn-normal setcycleSubmit">确认</button>'
                    changecycleDom += '</div>';
                    changecycleDom += '</div>';

                    var saveOnceDate = setEndTime;

                    layer.open({
                        title: '进行本月结算',
                        type: 1, //加上边框
                        skin: 'layui-layer-taskSkin',
                        area: ['400px', '280px'],
                        content: changecycleDom,
                        //不显示关闭按钮,
                        //开启遮罩关闭
                        shadeClose: true,
                        success: function (layero, index) {
                            laydate.render({
                                elem: '#endTime_balance',
                                type: 'date',
                                value: setEndTime,
                                done: function (value, date, endDate) {
                                    saveOnceDate = value;
                                }
                            });

                            // 确认按钮
                            $('.setcycleSubmit').on('click', function () {
                                if (saveOnceDate == '') {
                                    layer.alert("请选择一次结算日期");
                                } else {
                                    layer.closeAll();
                                    $.ajax({
                                        type: 'post',
                                        data: JSON.stringify({
                                            ids: ids,
                                            firstPayDate: saveOnceDate
                                        }),
                                        contentType: "application/json",
                                        url: config_constant.URL_HEADER + "/pay/pay_first",
                                        success: function (res) {
                                            if (res.code == 0 || res.code == "0") {
                                                onceChangeUpdata();
                                                twoSearch();
                                                statisticsList();
                                                detailUpdata();
                                                layer.alert("结算并保存成功");
                                            } else {
                                                layer.alert("结算并保存失败");
                                            }
                                        }
                                    })
                                }
                            });
                        }
                    });
                } else {
                    layer.alert('请选择要保存的内容');
                }
            });

            // 二次结算 结算并保存
            $('.twoBalanceSave').on('click', function () {
                var twocheckStatus = table.checkStatus('balance_TwoTables');
                var ids = [];

                for (var i in twocheckStatus.data) {
                    ids.push(twocheckStatus.data[i].id);
                }

                if (ids.length > 0) {
                    var changecycleDom = '';
                    changecycleDom += '<div class="setcyclePop">';
                    changecycleDom += '<p>二次结算日期：<input type="text" placeholder="请选择一次结算日期" autocomplete="off" class="layui-input" id="endTime_balance"></p>';
                    changecycleDom += '<div class="setcyclePop_btn">';
                    changecycleDom += '<button class="layui-btn layui-btn-normal setcycleSubmit">确认</button>'
                    changecycleDom += '</div>';
                    changecycleDom += '</div>';

                    var saveTwoDate = setEndTime;

                    layer.open({
                        title: '进行本月结算',
                        type: 1, //加上边框
                        skin: 'layui-layer-taskSkin',
                        area: ['400px', '280px'],
                        content: changecycleDom,
                        //不显示关闭按钮,
                        //开启遮罩关闭
                        shadeClose: true,
                        success: function (layero, index) {
                            laydate.render({
                                elem: '#endTime_balance',
                                type: 'date',
                                value: setEndTime,
                                done: function (value, date, endDate) {
                                    saveTwoDate = value;
                                }
                            });

                            // 确认按钮
                            $('.setcycleSubmit').on('click', function () {
                                if (saveTwoDate == '') {
                                    layer.alert("请选择一次结算日期");
                                } else {
                                    layer.closeAll();
                                    $.ajax({
                                        type: 'post',
                                        data: JSON.stringify({
                                            ids: ids,
                                            secondPayDate: saveTwoDate
                                        }),
                                        contentType: "application/json",
                                        url: config_constant.URL_HEADER + "/pay/pay_second",
                                        success: function (res) {
                                            if (res.code == 0 || res.code == "0") {
                                                layer.alert("结算并保存成功");
                                                onceSearch();
                                                twoChangeUpdata();
                                                statisticsList();
                                                detailUpdata();
                                            } else {
                                                layer.alert("结算并保存失败");
                                            }
                                        }
                                    })
                                }
                            });
                        }
                    });
                } else {
                    layer.alert('请选择要保存的内容');
                }
            });

            // 一次结算 搜索方法
            function onceSearch() {
                if (onceSearchType == "thisMonth") {
                    onceTableList.reload({
                        page: {
                            curr: 1 //重新从第 1 页开始
                        },
                        where: {
                            startEndDate: cycleData.aheadTime,
                            overEndDate: cycleData.behindTime,
                            search: $('.once_balanceSearchInput')["0"].value
                        }
                    });
                } else {
                    onceTableList.reload({
                        page: {
                            curr: 1 //重新从第 1 页开始
                        },
                        where: {
                            search: $('.once_balanceSearchInput')["0"].value
                        }
                    });
                }
            }
            $('.once_balanceSearchInput').keypress(function (e) {
                var key = e.which;
                if (key == 13) {
                    onceSearch();
                }
            });
            $('.once_balanceSearch').on('click', function () {
                onceSearch();
            });

            // 二次结算 搜索方法
            function twoSearch() {
                if (secondSearchType == "thisMonth") {
                    $('.balance_SearchByDate').hide();
                    twoTableList.reload({
                        page: {
                            curr: 1 //重新从第 1 页开始
                        },
                        where: {
                            startSecondDate: cycleData.aheadTime,
                            overSecondDate: cycleData.behindTime,
                            search: $('.two_balanceSearchInput')["0"].value
                        }
                    })
                } else if (secondSearchType == "all") {
                    $('.balance_SearchByDate').hide();
                    twoTableList.reload({
                        page: {
                            curr: 1 //重新从第 1 页开始
                        },
                        where: {
                            search: $('.two_balanceSearchInput')["0"].value
                        }
                    })
                } else {
                    $('.balance_SearchByDate').show();
                    twoTableList.reload({
                        page: {
                            curr: 1 //重新从第 1 页开始
                        },
                        where: {
                            startEndDate: screenStartTime,
                            overEndDate: screenEndTime,
                            search: $('.two_balanceSearchInput')["0"].value
                        }
                    });
                }
            }
            $('.two_balanceSearchInput').keypress(function (e) {
                var key = e.which;
                if (key == 13) {
                    twoSearch();
                }
            });
            $('.two_balanceSearch').on('click', function () {
                twoSearch();
            });

            // 设置本月周期
            $('.balance_setcycle').on('click', function () {
                var setcycleDom = '';
                setcycleDom += '<div class="setcyclePop">';
                setcycleDom += '<p>开始结算日期：</p>';
                setcycleDom += '<input type="text" onkeydown="if(event.keyCode==32) return false" name="date" placeholder="请选择开始时间" autocomplete="off" class="layui-input" id="stateTime_balance">';
                setcycleDom += '<p>结束结算日期：</p>';
                setcycleDom += '<input type="text" onkeydown="if(event.keyCode==32) return false" name="date" placeholder="请选择结束时间" autocomplete="off" class="layui-input" id="endTime_balance">';
                setcycleDom += '<p>报表期号：' + cycleData.yearMonthIdentifying + '</p>';
                setcycleDom += '<div class="setcyclePop_btn">';
                setcycleDom += '<button class="layui-btn layui-btn-normal setcycleSubmit">确认</button>'
                setcycleDom += '</div>';
                setcycleDom += '</div>';

                layer.open({
                    title: '设置本月结算周期',
                    type: 1, //加上边框
                    skin: 'layui-layer-taskSkin',
                    area: ['400px', '400px'],
                    content: setcycleDom,
                    shadeClose: true,
                    success: function (layero, index) {

                        laydate.render({
                            elem: '#stateTime_balance',
                            type: 'date',
                            value: setStateTime,
                            done: function (value, date, endDate) {
                                cycleData.aheadTime = value;
                            }
                        });

                        laydate.render({
                            elem: '#endTime_balance',
                            type: 'date',
                            value: setEndTime,
                            done: function (value, date, endDate) {
                                cycleData.behindTime = value;
                            }
                        });

                        // 确认按钮
                        $('.setcycleSubmit').on('click', function () {
                            if (cycleData.aheadTime == '') {
                                layer.alert("请选择开始结算日期");
                            } else if (cycleData.behindTime == '') {
                                layer.alert("请选择结束结算日期");
                            } else {
                                layer.closeAll();
                                setStateTime = cycleData.aheadTime;
                                setEndTime = cycleData.behindTime;
                                $('.balance_startTime')["0"].innerText = cycleData.aheadTime;
                                $('.balance_endTime')["0"].innerText = cycleData.behindTime;

                                // form表单切换默认值
                                $('.balance_isAlLData')["0"].childNodes["0"][0].selected = true;
                                $('.balance_isAlLData')["0"].childNodes["0"][1].selected = false;
                                $('.balance_isAlLData')["1"].childNodes["0"][0].selected = true;
                                $('.balance_isAlLData')["1"].childNodes["0"][1].selected = false;
                                $('.balance_isAlLData')["1"].childNodes["0"][2].selected = false;
                                $('.balance_SearchByDate').hide();
                                form.render('select', 'test2');

                                onceSearchType = "thisMonth";
                                secondSearchType = "thisMonth";

                                onceSearch();
                                twoSearch();

                            }
                        });
                    }
                });
            });

            // 一次结算选择本月或者全部
            form.on('select(oncescreenSelect)', function (data) {
                onceSearchType = data.value;
                onceSearch();
            });

            // 二次结算选择本月、全部或按时间查询
            form.on('select(twoscreenSelect)', function (data) {
                secondSearchType = data.value;
                twoSearch();
            });

            // 导出统计表
            $('.export_count').on('click', function () {
                var parameter = "?year=" + $('.balance_year input')["0"].value + "&month=" + $('.balance_month input')["0"].value;
                location.href = config_constant.URL_HEADER + "/task/statistics/export_monthly" + parameter;
                // $.ajax({
                //     type: 'post',
                //     async: false,
                //     data: JSON.stringify({
                //         year: $('.balance_year input')["0"].value,
                //         month: $('.balance_month input')["0"].value
                //     }),
                //     contentType: "application/json",
                //     url: config_constant.URL_HEADER + "/task/statistics/export_monthly",
                //     success: function (res) {
                //         if (res.code == 0 || res.code == "0") {
                //             $('.export_count')["0"].href = res.data;
                //         } else {
                //             layer.alert("导出失败");
                //         }
                //     }
                // });
            });

            // 导出明细表
            $('.export_detail').on('click', function () {
                var parameter = "?year=" + $('.balance_year input')["1"].value + "&month=" + $('.balance_month input')["1"].value;
                location.href = config_constant.URL_HEADER + "/task/statistics/export_close" + parameter;
                // $.ajax({
                //     type: 'post',
                //     async: false,
                //     data: JSON.stringify({
                //         year: $('.balance_year input')["1"].value,
                //         month: $('.balance_month input')["1"].value
                //     }),
                //     contentType: "application/json",
                //     url: config_constant.URL_HEADER + "/task/statistics/export_close",
                //     success: function (res) {
                //         if (res.code == 0 || res.code == "0") {
                //             $('.export_detail')["0"].href = res.data;
                //         } else {
                //             layer.alert("导出失败");
                //         }
                //     }
                // });
            });

            // 结算统计表选择年
            form.on('select(countscreenYear)', function (data) {
                conutYear = data.value;
                conntMonth = $('.balance_month input')["0"].value;
                statisticsList()
            });

            // 结算统计表选择月
            form.on('select(countscreenMonth)', function (data) {
                conntMonth = data.value;
                conutYear = $('.balance_year input')["0"].value;
                statisticsList()
            });

            // 结算明细表选择年
            form.on('select(detailscreenYear)', function (data) {
                detailedList.reload({
                    page: {
                        curr: 1 //重新从第 1 页开始
                    },
                    where: {
                        year: data.value,
                        month: $('.balance_month input')["1"].value,
                        search: $('.detail_balanceSearchInput')["0"].value
                    }
                });
            });

            // 结算明细表选择月
            form.on('select(detailscreenMonth)', function (data) {
                detailedList.reload({
                    page: {
                        curr: 1 //重新从第 1 页开始
                    },
                    where: {
                        year: $('.balance_year input')["1"].value,
                        month: data.value,
                        search: $('.detail_balanceSearchInput')["0"].value
                    }
                });
            });

            // 结算明细表搜索
            function detailSearch() {
                detailedList.reload({
                    page: {
                        curr: 1 //重新从第 1 页开始
                    },
                    where: {
                        year: $('.balance_year input')["1"].value,
                        month: $('.balance_month input')["1"].value,
                        search: $('.detail_balanceSearchInput')["0"].value
                    }
                });
            }
            $('.detail_balanceSearchInput').keypress(function (e) {
                var key = e.which;
                if (key == 13) {
                    detailSearch();
                }
            });
            $('.datail_balanceSearch').on('click', function () {
                detailSearch();
            });

            // 刷新当前结算详情表
            function detailUpdata() {
                detailedList.reload({
                    where: {
                        year: $('.balance_year input')["1"].value,
                        month: $('.balance_month input')["1"].value,
                        search: $('.detail_balanceSearchInput')["0"].value
                    }
                });
            }

            // 结算明细表撤回
            $(".withdraw_balance").on('click', function () {
                var detailcheckStatus = table.checkStatus('balance_detailedTables');
                var detailcheckStatusLength = detailcheckStatus.data.length;
                if (detailcheckStatusLength == 0) {
                    layer.alert('请选择要撤回的内容');
                } else {
                    var ids = [];
                    for (var i in detailcheckStatus.data) {
                        ids.push(detailcheckStatus.data[i].id);
                    }
                    $.ajax({
                        type: 'post',
                        data: JSON.stringify({
                            ids: ids,
                            year: $('.balance_year input')["1"].value,
                            month: $('.balance_month input')["1"].value
                        }),
                        contentType: "application/json",
                        url: config_constant.URL_HEADER + "/pay/recall_history",
                        success: function (res) {
                            if (res.code == 0 || res.code == "0") {
                                layer.alert("撤回成功")
                                onceSearch();
                                twoSearch();
                                statisticsList();
                                detailUpdata();
                            } else {
                                layer.alert("撤回失败")
                            }
                        }
                    });
                }
            })
        }
    }
    exports('balance', obj);
});