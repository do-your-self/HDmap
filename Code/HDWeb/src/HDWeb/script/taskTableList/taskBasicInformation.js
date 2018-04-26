/**
 * Copyright ©2018 DATAOJO. All Rights Reserved. 北京相数科技有限公司 版权所有
 * Created Date: 2018.01.08
 * Author: 付国强
 * instructions:任务管理任务基本信息组件
 */
layui.link('./script/taskTableList/taskTableList.css')
layui.define(['layer', 'element', 'form', 'qRouter', 'table', 'laytpl', 'config_constant'], function (exports) {
    var layer = layui.layer;
    var element = layui.element;
    var form = layui.form;
    var qRouter = layui.qRouter;
    var table = layui.table;
    var laytpl = layui.laytpl;
    var config_constant = layui.config_constant;
    var obj = {
        taskBasicInformation: function (componentName) {            
            var getRoot = $("[id^='render-taskBasicInformation']");
            var nodeHtml = '';
            getRoot.empty();        
            var taskBasicInformationobj = {
                id: JSON.parse($.localStorage.getItem('taskList_localStorageData')).id
            };
            $.ajax({
                type: 'post',
                data: JSON.stringify(taskBasicInformationobj),
                contentType: "application/json; charset=utf-8",
                url: config_constant.URL_HEADER + '/task/a/search',
                async: false,
                success: function(data){
                    nodeHtml += '<div class="layui-form">';
                    nodeHtml +=    '<table class="layui-table taskTableList_table">';
                    nodeHtml +=        '<thead>';
                    nodeHtml +=            '<tr>';
                    nodeHtml +=                '<th>批次</th>';
                    nodeHtml +=                '<th>任务号</th>';
                    nodeHtml +=                '<th>里程</th>';
                    nodeHtml +=                '<th>任务环节</th>';
                    nodeHtml +=                '<th>负责单位</th>';          
                    nodeHtml +=                '<th>组长</th>';          
                    nodeHtml +=                '<th>任务状态</th>';          
                    nodeHtml +=                '<th>任务类型</th>';   
                    nodeHtml +=                '<th>次数</th>';          
                    nodeHtml +=                '<th>制作项</th>';          
                    nodeHtml +=                '<th>作业上线日期</th>';          
                    nodeHtml +=                '<th>作业完成日期</th>';          
                    nodeHtml +=                '<th>备注</th>';          
                    nodeHtml +=            '</tr>';
                    nodeHtml +=        '</thead>';
                    nodeHtml +=        '<tbody>';
                    nodeHtml +=            '<tr>';data.data["0"].batch_id
                    nodeHtml +=                '<td>'+(data.data["0"].batch_id != undefined ? data.data["0"].batch_id : "")+'</td>';            
                    nodeHtml +=                '<td>'+(data.data["0"].task_id != undefined ? data.data["0"].task_id : "")+'</td>';            
                    nodeHtml +=                '<td>'+(data.data["0"].mileage != undefined ? data.data["0"].mileage : "")+'</td>';            
                    nodeHtml +=                '<td>'+(data.data["0"].step_value != undefined ? data.data["0"].step_value : "")+'</td>';            
                    nodeHtml +=                '<td>'+(data.data["0"].department_value != undefined ? data.data["0"].department_value : "")+'</td>';            
                    nodeHtml +=                '<td>'+(data.data["0"].name != undefined ? data.data["0"].name : "")+'</td>';            
                    nodeHtml +=                '<td>'+(data.data["0"].status_value != undefined ? data.data["0"].status_value : "")+'</td>';            
                    nodeHtml +=                '<td>'+(data.data["0"].type_value != undefined ? data.data["0"].type_value : "")+'</td>';    
                    nodeHtml +=                '<td>'+(data.data["0"].type_value != undefined ? data.data["0"].accept_number : "")+'</td>';        
                    nodeHtml +=                '<td>'+(data.data["0"].production_projects != undefined ? data.data["0"].production_projects : "")+'</td>';            
                    nodeHtml +=                '<td>'+(data.data["0"].launch_date != undefined ? data.data["0"].launch_date : "")+'</td>';            
                    nodeHtml +=                '<td>'+(data.data["0"].finish_date != undefined ? data.data["0"].finish_date : "")+'</td>';            
                    nodeHtml +=                '<td>'+(data.data["0"].des != undefined ? data.data["0"].des : "")+'</td>';            
                    nodeHtml +=            '</tr> ';                   
                    nodeHtml +=        '</tbody>';
                    nodeHtml +=    '</table>';
                    nodeHtml +='</div>';    
                    $.sessionStorage.setItem('status',data.data["0"].status);
                    getRoot.append(nodeHtml);
                }
            })    
            
                   

        },

    }

    

    exports('taskBasicInformation', obj);
});