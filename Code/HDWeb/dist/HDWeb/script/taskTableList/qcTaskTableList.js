layui.link("./script/taskTableList/taskTableList.css");layui.define(["layer","element","form","qRouter","table","laytpl","config_constant","taskBasicInformation"],function(a){var e=layui.layer;var t=layui.element;var s=layui.form;var i=layui.qRouter;var n=layui.table;var l=layui-l;var u=layui.config_constant;var o={qcTaskTableList:function(a){var i=$("[id^='render-qcTaskTableList']");var l=JSON.parse($.localStorage.getItem("taskList_localStorageData"));var r=l.production_projects.split("|");var d="";i.empty();var c="";$.ajax({type:"get",url:u.URL_HEADER+"/task/projects/search",async:false,success:function(a){c=a}});$.ajax({type:"get",data:{taskId:l.task_id,aTaskId:l.id},url:u.URL_HEADER+"/task/a/search/subtask",success:function(p){var _=[];var b=[];$.each(r,function(a,e){var t=0;var s=0;$.each(p.data,function(a,i){$.each(i.subTask,function(a,n){if(e==n.projects_value){if(n.pre_manday!=undefined&&n.pre_manday!=0&&n.pre_manday!="0"&&n.pre_manday!=""){t+=i.mileage/n.pre_manday}if(n.wrong_number!=undefined&&n.wrong_number!=""){s+=n.wrong_number}}})});_.push(t.toFixed(2));b.push(s)});var f=0;var m=0;$.each(_,function(a,e){if(e!=0&&e!="0"&&e!=undefined){f+=1/e}});$.each(b,function(a,e){m+=e});d+='<div class="layui-form taskTableList">';d+='<div class="taskTableList_button">';d+='<button class="layui-btn layui-btn-primary taskTableList_Issued '+($.sessionStorage.getItem("status")==6||$.sessionStorage.getItem("status")==7||$.sessionStorage.getItem("status")==8||$.sessionStorage.getItem("status")==11?"taskTableList_hide":"")+'">下发任务</button>';d+='<button class="layui-btn layui-btn-primary taskTableList_submit '+($.sessionStorage.getItem("status")==4||$.sessionStorage.getItem("status")==6||$.sessionStorage.getItem("status")==7||$.sessionStorage.getItem("status")==8||$.sessionStorage.getItem("status")==11?"taskTableList_hide":"")+'">任务提交</button>';d+="</div>";d+='<table class="layui-table taskTableList_table taskTableList_qc" id="taskTableList_table">';d+="<thead>";d+="<tr>";d+="<th>任务环节</th>";d+="<th>编号</th>";d+="<th>里程</th>";$.each(r,function(a,e){d+="<th>"+e+"</th>";d+="<th>"+e+"人天</th>";d+="<th>"+e+"错误量</th>"});d+="</tr>";d+="</thead>";d+="<tbody>";$.each(p.data,function(a,e){e.subTaskAll=[];d+="<tr>";d+="<td>"+l.step_value+"</td>";d+="<td>"+e.sub_task_id+"</td>";d+="<td>"+e.mileage+"</td>";if(e.subTask!=undefined){$.each(r,function(a,t){var s={projects_value:""};s.projects_value=t;$.each(e.subTask,function(a,e){if(t==e.projects_value){s=e}});e.subTaskAll.push(s)})}else{$.each(r,function(a,t){var s={projects_value:""};s.projects_value=t;e.subTaskAll.push(s)})}$.each(e.subTaskAll,function(a,e){d+='<td class="taskTableList_cell_value taskTableList_people_name">'+(e.name!=undefined?e.name:"")+"</td>";d+='<td class="taskTableList_cell_value">'+(e.pre_manday!=undefined?e.pre_manday:"")+"</td>";d+='<td class="taskTableList_cell_value">'+(e.wrong_number!=undefined?e.wrong_number:"")+'<span class="'+(e.wrong_number!=undefined?e.is_qualified==1?"taskTableList_qualified":e.is_qualified==0?"taskTableList_unqualified":"":"")+'"></span></td>'});d+="</tr> "});d+="</tbody>";d+="</table>";d+="</div>";d+='<div class="taskTableList_Statistics">';d+='<table class="layui-table taskTableList_Statistics_table">';d+="<thead>";d+="<tr>";d+="<th></th>";$.each(r,function(a,e){d+="<th>"+e+"效率总计</th>";d+="<th>"+e+"错误量总计</th>"});d+="</tr>";d+="</thead>";d+="<tbody>";d+="<tr>";d+="<td><span>综合效率："+f.toFixed(5)+"</span><span>总错误量："+m+"</span></td>";$.each(r,function(a,e){d+="<td>"+_[a]+"</td>";d+="<td>"+b[a]+"</td>"});d+="</tr> ";d+="</tbody>";d+="</table>";d+="</div>";i.append(d);var v="";$(".taskTableList_qc tbody tr").on("click",function(){$(".taskTableList_table tbody tr").not($("this")).removeClass("layui-table-click");$(this).addClass("layui-table-click");var a=$(this)["0"].children[1].innerText;$.each(p.data,function(e,t){if(a==t.sub_task_id){v=t}});if($.sessionStorage.getItem("status")==4||$.sessionStorage.getItem("status")==5){T()}});var k="";var y="";function T(){var a="";var i={a_task_id:Number(l.id),sub_task_id:Number(v.sub_id),subTask:[]};a+='<div class="taskTableList_pop">';$.each(v.subTaskAll,function(e,t){var s={pre_manday:null,user_id:null,wrong_number:null,projects_id:null,is_qualified:null,id:null};$.each(v.subTask,function(a,e){if(t.projects_value==e.projects_value){t=e;s.pre_manday=t.pre_manday!=undefined?Number(t.pre_manday).toFixed(2):null;s.user_id=t.user_id!=undefined?Number(t.user_id):null;s.wrong_number=t.wrong_number!=undefined?Number(t.wrong_number):null;s.projects_id=t.projects_id!=undefined?Number(t.projects_id):null;s.is_qualified=t.is_qualified!=undefined?Number(t.is_qualified):null;s.id=t.id!=undefined?Number(t.id):null}});i.subTask.push(s);a+='<div class="taskTableList_pop_item">';a+="<p><b>"+t.projects_value+'基本信息</b> <span class="taskTableList_pop_qualified '+(t.wrong_number!=undefined?t.is_qualified==1?"taskTableList_pop_green":"":"")+'">合格</span><span class="taskTableList_pop_unqualified '+(t.wrong_number!=undefined?t.is_qualified==0?"taskTableList_pop_red":"":"")+'">不合格</span></p>';a+='<div class="taskTableList_pop_itemName">';a+="<div>负责人</div>";a+="<div>任务量（人/天）</div>";a+="<div>错误量</div>";a+="</div>";a+='<div class="taskTableList_pop_itemName">';a+="<div>";a+='<div class="taskTableList_pop_person" data_projects_value = "'+t.projects_value+'">';a+='<span class="taskTableList_pop_name">'+(t.name!=undefined?t.name:"")+"</span>";a+='<i class="layui-icon" style="font-size: 15px; color: #cccccc;position:absolute;right:15px;">&#xe61a;</i>';a+="</div>";a+="</div>";a+="<div>";a+='<input class="task_volume" '+(t.name!=undefined?"":"disabled")+' type="number" placeholder="" value="'+(t.pre_manday!=undefined?t.pre_manday:"")+'">';a+="</div>";a+="<div>";a+='<input class="error_quantity" '+(t.name!=undefined?"":"disabled")+' type="number" placeholder="" value="'+(t.wrong_number!=undefined?t.wrong_number:"")+'">';a+="</div>";a+="</div>";a+="</div>"});a+='<div class="taskTableList_pop_button">';a+='<button class="layui-btn layui-btn-primary layui-btn-sm taskTableList_pop_cancel">取消</button>';a+='<button class="layui-btn layui-btn-normal layui-btn-sm taskTableList_pop_save">保存</button>';a+="</div>";a+="</div>";e.open({title:"信息修改",type:1,skin:"layui-layer-taskSkin",area:["412px","auto"],content:a,closeBtn:0,shadeClose:true,success:function(a,n){t.render();s.render();$(".taskTableList_pop_person").on("click",function(){$.each(i.subTask,function(a,e){var t=$(".taskTableList_pop_qualified")[a].classList[1];var s=$(".taskTableList_pop_unqualified")[a].classList[1];if(t==undefined&s==undefined){e.is_qualified=null}else if(t!=undefined&s==undefined){e.is_qualified=1}else{e.is_qualified=0}v.subTaskAll[a].pre_manday=$(".task_volume")[a].value!=""?Number($(".task_volume")[a].value):"";v.subTaskAll[a].wrong_number=$(".error_quantity")[a].value!=""?Number($(".error_quantity")[a].value):"";e.pre_manday=Number($(".task_volume")[a].value).toFixed(2);e.wrong_number=Number($(".error_quantity")[a].value)});y=$(this)["0"].attributes[1].value;h();e.close(n)});$(".taskTableList_pop_cancel").on("click",function(){e.closeAll()});$(".taskTableList_pop_qualified").on("click",function(){$(this).addClass("taskTableList_pop_green");$(this).next().removeClass("taskTableList_pop_red")});$(".taskTableList_pop_unqualified").on("click",function(){$(this).addClass("taskTableList_pop_red");$(this).prev().removeClass("taskTableList_pop_green")});$(".taskTableList_pop_save").on("click",function(){$.each(i.subTask,function(a,e){var t=$(".taskTableList_pop_qualified")[a].classList[1];var s=$(".taskTableList_pop_unqualified")[a].classList[1];if(t==undefined&s==undefined){e.is_qualified=null}else if(t!=undefined&s==undefined){e.is_qualified=1}else{e.is_qualified=0}e.pre_manday=$(".task_volume")[a].value!=""?Number($(".task_volume")[a].value).toFixed(2):null;e.wrong_number=$(".error_quantity")[a].value!=""?Number($(".error_quantity")[a].value):null});var a=e.load(2,{shade:[.1,"#fff"]});$.ajax({type:"post",data:JSON.stringify(i),contentType:"application/json; charset=utf-8",url:u.URL_HEADER+"/task/b/save",async:false,success:function(a){if(a.code==0){o.qcTaskTableList();e.closeAll();e.alert("保存成功")}else{e.closeAll();e.alert("保存失败")}},error:function(t){e.close(a);e.alert("保存失败")}})})}})}function h(){k="";var a="";a+='<div class="addinformation-container">';a+='<form class="layui-form" action="">';a+='<label class="addinformation-Layui-label">输入框</label>';a+='<div class="layui-input-inline addinformation-Layui-input">';a+='<input type="text" name="title" required  lay-verify="required" placeholder="搜索组员" autocomplete="off" class="layui-input searchValue">';a+="</div>";a+='<div class="layui-btn layui-btn-normal search" style="margin-left:10px;">搜索</div>';a+="</form>";a+='<table id="test" lay-filter="addTaskList"></table>';a+='<div class="layui-btn layui-btn-primary addinformation-moveBtn closeWindow">取消</div>';a+='<div class="layui-btn layui-btn-normal addMsg">添加</div>';a+="</div>";var t="";e.open({title:"负责人",type:1,skin:"layui-layer-taskSkin",area:["590px","500px"],content:a,closeBtn:0,shadeClose:true,success:function(a,s){t=s;n.render({elem:"#test",method:"post",url:u.URL_HEADER+"/sys/user/search/group_members",where:{stepId:Number(l.step_id),departmentId:Number($.localStorage.getItem("departmentId")),page:1,limit:10,search:""},cellMinWidth:100,height:322,page:true,limits:[10,20,30],cols:[[{field:"id",title:"ID",sort:true,align:"center",event:"addTaskId"},{field:"qq",title:"QQ号",sort:true,align:"center",event:"addTaskId"},{field:"name",title:"姓名",sort:true,align:"center",event:"addTaskId"}]]});n.on("tool(addTaskList)",function(a){var e=a.data,t=a.event;if(t==="addTaskId"){k=e}});$(".search").on("click",function(){var a=$(".searchValue").val();n.reload("test",{url:u.URL_HEADER+"/sys/user/search/group_members",method:"post",where:{search:a}})});$(".closeWindow").on("click",function(){e.close(t)});$(".addMsg").on("click",function(){if(k==""){e.alert("请选中要添加的行")}else{$.each(v.subTaskAll,function(a,e){if(y==e.projects_value){e.name=k.name;e.user_id=k.id;$.each(c.data,function(a,t){if(y==t.value){e.projects_id=t.id}})}else{if(e.name==undefined){e.name=k.name;e.user_id=k.id;$.each(c.data,function(a,t){if(e.projects_value==t.value){e.projects_id=t.id}})}}});v.subTask=v.subTaskAll;T();e.close(s)}})}})}$(".taskTableList_Issued").on("click",function(){var t=true;$.each($(".taskTableList_people_name"),function(a,e){if(e.innerText==""){t=false}});if(t==true){var s={id:Number(l.id),status:5};var i=e.load(2,{shade:[.1,"#fff"]});$.ajax({type:"post",data:JSON.stringify(s),contentType:"application/json; charset=utf-8",url:u.URL_HEADER+"/task/a/update_status",success:function(t){if(t.code==0){layui.taskBasicInformation.taskBasicInformation(a);o.qcTaskTableList();e.close(i);e.alert("下发成功")}else{e.close(i);e.alert("下发失败")}},error:function(a){e.close(i);e.alert("下发失败")}})}else{e.open({title:"温馨提示",skin:"layui-layer-taskSkin",content:"请填完所有人员信息"})}});function L(){var i="";var n="";$.ajax({type:"get",async:false,url:u.URL_HEADER+"/task/status/search?id=6,7,8",success:function(a){n=a;i+='<div class="taskTableList_submitPop">';i+='<div class="taskTableList_submitPop_contain">';i+="<p>任务环节结果</p>";i+='<form class="layui-form" action="">';i+='<div class="layui-input-block">';i+='<select name="city" lay-verify="required">';i+='<option value=""></option>';$.each(a.data,function(a,e){i+='<option value="0">'+e.value+"</option>"});i+="</select>";i+="</div>";i+="</form>";i+='<div class="taskTableList_submitPop_button">';i+='<button class="layui-btn layui-btn-primary layui-btn-sm taskTableList_pop_cancel">取消</button>';i+='<button class="layui-btn layui-btn-normal layui-btn-sm taskTableList_pop_submit">提交</button>';i+="</div>";i+="</div>";i+="</div>"}});e.open({title:"任务提交",type:1,skin:"layui-layer-taskSkin",area:["412px","auto"],content:i,closeBtn:0,shadeClose:true,success:function(i,r){t.render();s.render();$(".taskTableList_pop_cancel").on("click",function(){e.closeAll()});$(".taskTableList_pop_submit").on("click",function(){if($(".taskTableList_submitPop_contain input")["0"].value==""){e.open({title:"温馨提示",content:"请选择任务环节结果"})}else{$.each(n.data,function(t,s){if($(".taskTableList_submitPop_contain input")["0"].value==s.value){var i={id:Number(l.id),status:s.id};var n=e.load(2,{shade:[.1,"#fff"]});$.ajax({type:"post",data:JSON.stringify(i),contentType:"application/json; charset=utf-8",url:u.URL_HEADER+"/task/a/update_status",success:function(t){if(t.code==0){layui.taskBasicInformation.taskBasicInformation(a);o.qcTaskTableList();e.close(n);e.alert("提交成功")}else{e.close(n);e.alert("提交失败")}},error:function(a){e.close(n);e.alert("提交失败")}})}});e.closeAll()}})}})}$(".taskTableList_submit").on("click",function(){var a=$("#taskTableList_table tbody tr");var t=true;if($.sessionStorage.getItem("status")==5||$.sessionStorage.getItem("status")==10){$.each($(".taskTableList_cell_value"),function(a,s){if(s.innerText==""){e.open({title:"温馨提示",content:"提交失败，请完善表格数据"});t=false}});if(t==true){L()}}else{e.open({title:"温馨提示",content:"该任务已提交"})}})}})}};a("qcTaskTableList",o)});